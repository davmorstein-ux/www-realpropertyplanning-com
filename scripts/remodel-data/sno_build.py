"""Snohomish County model and per-ZIP home files for What's My Remodel Worth? (Oct 15, 2026).

usage: sno_build.py RAW_DIR OUT_DIR
RAW_DIR holds the Snohomish County Assessor open-data downloads:
  sales.csv     Recent Property Sales (GIS Open Data; valid market sales, current + 2 prior years)
  impr.csv      Improvement Records (the Excel file saved as CSV)
  MainData.csv  from the Assessor Roll CSV collection
Writes OUT_DIR/model-sno.json and OUT_DIR/zip-sno/<zip>.bin (gzip JSON, same columns as King County).
Owner names (NameAddr.csv) are never read.

Differences from King County, handled here so the page's math is unchanged:
  - quality is a word scale; mapped to 3..13 (SubStd..Exceptional), labels shipped in the model;
  - condition is relative to age (VP..EX); mapped to 1..7, labels shipped; condAvg = the most
    common rating ("above normal for age"), condNew = what new houses get;
  - no renovation year, view or waterfront fields: those coefficients are 0;
  - no assessor neighborhood: location = ZIP (area) + tax code area within the ZIP (sub-area).
"""
import duckdb, sys, json, os, gzip, numpy as np, pandas as pd
R, OUT = sys.argv[1:3]
c = duckdb.connect(); c.execute("SET enable_progress_bar=false")
QUAL = {'SubStd': 3, 'Low': 4, 'Fair': 5, 'Avg-': 6, 'Avg': 7, 'Avg+': 8, 'Good': 9, 'VGd': 10, 'Exc': 11, 'Superior': 12, 'Exceptional': 13}
QUAL_LABEL = {3: 'Substandard', 4: 'Low', 5: 'Fair', 6: 'Average minus', 7: 'Average', 8: 'Average plus', 9: 'Good', 10: 'Very good', 11: 'Excellent', 12: 'Superior', 13: 'Exceptional'}
COND = {'VP': 1, 'P': 2, 'F': 3, 'AV': 4, 'G': 5, 'VG': 6, 'EX': 7}
COND_LABEL = {1: 'Very poor for its age', 2: 'Poor for its age', 3: 'Below normal for its age', 4: 'Normal for its age', 5: 'Above normal for its age', 6: 'Very good for its age', 7: 'Excellent'}
qcase = "case " + " ".join(f"when trim(i.UF18)='{k}' then {v}" for k, v in QUAL.items()) + " end"
ccase = "case " + " ".join(f"when trim(i.CondCode)='{k}' then {v}" for k, v in COND.items()) + " end"
c.execute(f"""create table homes as
 with d as (select *, count(*) over (partition by PIN) nd from read_csv('{R}/impr.csv', all_varchar=true, header=true) where ImprType='DWELLING' and trim(UseCode)='1'),
 m as (select lpad(trim(parcel_number),14,'0') parcel_number, try_cast(SIZE as double)*43560 lot, trim(TCAnumber) tca, substr(trim(SitusZip),1,5) zip,
   trim(regexp_replace(SitusLine1, '\\s+(BLDG|UNIT)\\s+\\S+$', '')) addr, UseCode from read_csv('{R}/MainData.csv', all_varchar=true, header=true))
 select i.PIN pin, m.addr, m.zip, m.tca, m.lot,
  try_cast(i.FinSize as int) above, coalesce(try_cast(i.BsmtFin as int),0)+coalesce(try_cast(i.LowerFin as int),0) finb,
  greatest(coalesce(try_cast(i.BsmtArea as int),0)-coalesce(try_cast(i.BsmtFin as int),0),0)+greatest(coalesce(try_cast(i.LowerArea as int),0)-coalesce(try_cast(i.LowerFin as int),0),0) unfinb,
  try_cast(i.NumBedRms as int) beds,
  coalesce(try_cast(i.Num4FixtBaths as int),0)+coalesce(try_cast(i.Num5FixtBaths as int),0)+0.75*coalesce(try_cast(i.Num3FixtBaths as int),0)+0.5*coalesce(try_cast(i.Num2FixtBaths as int),0) baths,
  case when trim(i.MasonFP)='Y' then 1 else 0 end fp,
  case when coalesce(try_cast(i.AttGarSF as int),0)+coalesce(try_cast(i.DetGarSF as int),0)+coalesce(try_cast(i.BGarCars as int),0)>0 then 1 else 0 end gar,
  try_cast(i.YrBuilt as int) yb, {qcase} grade, {ccase} cond
 from d i join m on m.parcel_number=i.PIN where i.nd=1 and m.UseCode like '111%'""")
c.execute(f"""create table j as select h.*, strptime(s.TRNSF_DATE,'%b-%Y') d, try_cast(replace(s.SALE_PRICE,',','') as bigint) p
 from read_csv('{R}/sales.csv', all_varchar=true, header=true) s join homes h on h.pin=s.PARCEL_ID
 where s.PROP_CLASS='111' and s.IMPRV_TYPE='DWELL'""")
df = c.sql("select * from j where p > 150000 and above >= 400 and grade is not null and cond is not null and lot > 0 and yb > 1850").df()
df = df[df.zip.fillna('').str.match(r'^98\d{3}$')].copy(); df['tca'] = df.tca.fillna('0')
df['area'] = 'S' + df.zip; df['sk'] = 'S' + df.zip + '-' + df.tca
df['liv'] = df.above + df.finb
print("sales", len(df), df.d.min(), df.d.max(), "median", df.p.median())
print("condition of houses built 2022+:", df[df.yb >= 2022].cond.value_counts().to_dict())

FEATS = ['lliv','finshare','grade','llot','age','age2','cond','gar','fp','baths','beds']
def feats(d):
    age = (2026 - d.yb).clip(0, 120)
    return pd.DataFrame({'lliv': np.log(d.liv), 'finshare': (d.finb / d.liv).clip(0, 1), 'grade': d.grade.astype(float),
        'llot': np.log(d.lot.clip(1000, 200000)), 'age': age, 'age2': age**2/100, 'cond': d.cond.astype(float),
        'gar': d.gar.astype(float), 'fp': d.fp.astype(float), 'baths': d.baths.clip(0, 8), 'beds': d.beds.fillna(3).clip(0, 8)})
quarter = pd.to_datetime(df.d).dt.to_period('Q').astype(str)
LATEST_Q = sorted(quarter.unique())[-1]
Q = pd.get_dummies(quarter, prefix='q').astype(float).drop(columns=['q_' + LATEST_Q])
X = pd.concat([feats(df).reset_index(drop=True), Q.reset_index(drop=True)], axis=1); QF = list(Q.columns)
y = np.log(df.p.values)
def fit(idx):
    A = pd.get_dummies(df.area[idx].astype(str), prefix='a').astype(float)
    M = pd.concat([X[idx].reset_index(drop=True), A.reset_index(drop=True)], axis=1)
    b, *_ = np.linalg.lstsq(M.values, y[idx], rcond=None); co = dict(zip(M.columns, b))
    base = X[idx][FEATS + QF].values @ np.array([co[f] for f in FEATS + QF])
    resid = y[idx] - base - np.array([co.get('a_' + a, 0) for a in df.area[idx]])
    g = pd.DataFrame({'sk': df.sk[idx].values, 'r': resid}).groupby('sk').r.agg(['sum', 'count'])
    return co, (g['sum'] / (g['count'] + 3)).to_dict()
def predict(co, sub, d, Xd):
    return Xd[FEATS + QF].values @ np.array([co[f] for f in FEATS + QF]) + np.array([co.get('a_' + a, 0) for a in d.area]) + np.array([sub.get(s, 0) for s in d.sk])
rng = np.random.default_rng(7); te = rng.random(len(y)) < 0.2
co, sub = fit(~te)
resid = y[te] - predict(co, sub, df[te], X[te]); e = np.abs(np.exp(-resid) - 1)
BAND = [round(float(np.exp(np.quantile(resid, .2))), 3), round(float(np.exp(np.quantile(resid, .8))), 3)]
print("holdout n=%d median err %.1f%% | within10 %.0f%% | within20 %.0f%% | band %s" % (te.sum(), 100*np.median(e), 100*(e<.1).mean(), 100*(e<.2).mean(), BAND))
co, sub = fit(np.ones(len(y), bool))
for f in FEATS + QF: print(f"  {f:9s} {co[f]:+.4f}")
areas = {a: {'e': round(co.get('a_' + a, 0), 4), 'g90': int(np.quantile(g.grade, .9)), 'n': len(g)} for a, g in df.groupby('area')}
subs = {}
for s, g in df.groupby('sk'):
    a = s.split('-')[0]
    subs[s] = {'e': round(areas[a]['e'] + sub.get(s, 0), 4), 'g90': int(np.quantile(g.grade, .9)) if len(g) >= 10 else areas[a]['g90'], 'n': len(g),
               'city': '', 'med': int(round(g.p.median(), -3))}
# neighborhood median for cost/ceiling scaling: use the ZIP's median when the sub-area is small
for s, v in subs.items():
    if v['n'] < 15: v['med'] = int(round(df[df.area == s.split('-')[0]].p.median(), -3))

h = c.sql("select * from homes where above >= 300 and grade is not null and cond is not null and addr is not null and length(addr) > 3").df()
h = h[h.zip.str.match(r'^98\d{3}$', na=False)]
h['tca'] = h.tca.fillna('0'); h['area'] = 'S' + h.zip; h['sk'] = 'S' + h.zip + '-' + h.tca
h['addr'] = h.addr.str.upper().str.replace(r'\s+', ' ', regex=True).str.strip()
h = h.drop_duplicates(['zip', 'addr'], keep=False)
h = h[h.area.isin(areas.keys())]
print("homes", len(h), "zips", h.zip.nunique())
os.makedirs(f"{OUT}/zip-sno", exist_ok=True)
for f in os.listdir(f"{OUT}/zip-sno"): os.remove(f"{OUT}/zip-sno/{f}")
zipdefault = {}
for z, g in h.groupby('zip'):
    keys = sorted(g.sk.unique()); rows = []
    for r in g.sort_values('addr').itertuples():
        rows.append([r.addr, keys.index(r.sk), int(r.above), int(r.finb), int(r.unfinb), int(r.beds if r.beds == r.beds else 3), float(r.baths), int(r.fp),
                     int(r.gar), int(r.lot if r.lot == r.lot else 7000), int(r.yb if r.yb == r.yb else 1980), 0, int(r.cond), int(r.grade), 0, 0])
    body = json.dumps({'keys': keys, 'cols': ['addr','k','above','finBsmt','unfinBsmt','beds','baths','fp','garage','lot','yrBuilt','yrRenovated','cond','grade','views','waterfront'], 'homes': rows}, separators=(',', ':'))
    with open(f"{OUT}/zip-sno/{z}.bin", 'wb') as fh: fh.write(gzip.compress(body.encode(), 9, mtime=0))
    zipdefault[z] = g.sk.mode()[0]
newc = df[df.yb >= 2022].cond
model = {
  'county': 'Snohomish',
  'asOf': {'salesThrough': str(df.d.max())[:10], 'salesFrom': str(df.d.min())[:10], 'nSales': int(len(df)), 'built': '2026-10-15'},
  'coef': {**{f: round(co[f], 5) for f in FEATS}, 'ren10': 0.0, 'ren_old': 0.0, 'vw': 0.0, 'wfb': 0.0, 'mo': 0.0},
  'moNow': 0, 'marketQuarter': LATEST_Q, 'band': BAND, 'subs': subs, 'areas': areas, 'zipDefault': zipdefault,
  'gradeLabels': {str(k): v for k, v in QUAL_LABEL.items()}, 'condLabels': {str(k): v for k, v in COND_LABEL.items()},
  'condAvg': int(df.cond.mode()[0]), 'condNew': int(newc.mode()[0]) if len(newc) else 5,
  'noViews': True, 'noRenovationYear': True,
}
json.dump(model, open(f"{OUT}/model-sno.json", 'w'), separators=(',', ':'))
print("model-sno.json", os.path.getsize(f"{OUT}/model-sno.json"), "zip total", sum(os.path.getsize(f"{OUT}/zip-sno/{f}") for f in os.listdir(f"{OUT}/zip-sno")),
      "condAvg", model['condAvg'], "condNew", model['condNew'])
