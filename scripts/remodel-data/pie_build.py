"""Pierce County model and per-ZIP home files for What's My Remodel Worth? (Oct 15, 2026).

usage: pie_build.py RAW_DIR OUT_DIR
RAW_DIR holds the Pierce County Assessor-Treasurer datamart downloads (pipe-delimited, no header;
https://www.piercecountywa.gov/736/Data-Downloads), unzipped:
  sale.txt, improvement.txt, improvement_builtas.txt, appraisal_account.txt, tax_account.txt
Writes OUT_DIR/model-pie.json and OUT_DIR/zip-pie/<zip>.bin (gzip JSON, same columns as King County).
Grantor/grantee names in sale.txt are never read past the CSV parser; nothing with a name is written.

Pierce specifics:
  - quality is a word scale (Low .. Excellent) mapped to 3..13; labels shipped in the model;
  - condition is nearly always "Average", mapped to 1..4 with Average = 4 (condAvg = condNew = 4);
  - "Year Remodeled" is not used (see FEATS below); the page hides that field for Pierce;
  - view (View Lim- .. View V-Good+) and waterfront (salt, lake, river) come from appraisal_account;
  - location = assessor neighborhood (sub-area) within the first four digits of its code (area);
  - the county publishes no ZIP code, so each house is placed in the ZIP whose centroid is nearest
    (pip package `zipcodes`), and also in the second-nearest when it is almost as close, so a
    visitor typing either ZIP near a boundary still finds it.
"""
import duckdb, sys, json, os, gzip, numpy as np, pandas as pd
R, OUT = sys.argv[1:3]
c = duckdb.connect(); c.execute("SET enable_progress_bar=false")
def t(name, cols):
    c.execute(f"create table {name} as select * from read_csv('{R}/{name}.txt', delim='|', header=false, all_varchar=true, quote='', names={cols}, null_padding=true, ignore_errors=true)")
t('sale', ['etn','pcount','parcel','sdate','price','deed','g1','g2','valid','confirmed','excl','impvac','acct'])
t('improvement', ['parcel','bldg','ptype','nbhd','nbhdx','sqft','netsqft','pct','cond','qual','occ','occdesc','mhser','mhlen','mhmake','attic','bsmt','bsmtfin','carport','balcony','porch','attgar','detgar','fp','bgd'])
t('improvement_builtas', ['parcel','bldg','ba','baid','badesc','basqft','hvac','hvacdesc','ext','int','stories','storyh','spr','roof','beds','baths','units','cls','clsdesc','yb','yrem','adjyb','page','len','wid','model'])
t('appraisal_account', ['parcel','type','biz','va','lea','nb','grp','gacres','nacres','gsqft','nsqft','front','w','d','sub','adate','wf','view','pe','ps','pw','st','lat','lon'])

QUAL = {'Low': 3, 'Low Plus': 4, 'Fair': 5, 'Fair Plus': 6, 'Average': 7, 'Average Plus': 8, 'Good': 9, 'Good Plus': 10, 'Very Good': 11, 'Very Good Plus': 12, 'Excellent': 13}
COND = {'Uninhabitable': 1, 'Extra Poor': 1, 'Very Poor': 1, 'Poor': 2, 'Fair': 3, 'Average': 4}
VIEW = {'View Lim -': 1, 'View Lim': 1, 'View Lim +': 2, 'View Avg': 3, 'View Avg +': 3, 'View Good': 4, 'View Good +': 5, 'View V-Good': 6, 'View V-Good +': 7}
qcase = "case " + " ".join(f"when trim(i.qual)='{k}' then {v}" for k, v in QUAL.items()) + " end"
ccase = "case " + " ".join(f"when trim(i.cond)='{k}' then {v}" for k, v in COND.items()) + " end"
vcase = "case " + " ".join(f"when trim(a.view)='{k}' then {v}" for k, v in VIEW.items()) + " else 0 end"
c.execute(f"""create table homes as
 with i0 as (select *, count(*) over (partition by parcel) nb_on_parcel from improvement),
 i as (select * from i0 where nb_on_parcel=1 and trim(occdesc)='Single Family Residential' and trim(ptype)='Residential'),
 b as (select * from improvement_builtas where ba='1')
 select i.parcel, trim(i.nbhd) nbhd,
  coalesce(try_cast(i.sqft as double),0) + coalesce(try_cast(i.attic as double),0) above,
  coalesce(try_cast(i.bsmtfin as double),0) finb,
  greatest(coalesce(try_cast(i.bsmt as double),0) - coalesce(try_cast(i.bsmtfin as double),0), 0) unfinb,
  try_cast(b.beds as int) beds, try_cast(b.baths as double) baths, coalesce(try_cast(i.fp as int),0) fp,
  case when coalesce(try_cast(i.attgar as double),0)+coalesce(try_cast(i.detgar as double),0)>0 or coalesce(i.bgd,'')<>'' then 1 else 0 end gar,
  try_cast(b.yb as int) yb, coalesce(try_cast(b.yrem as int),0) yr, {ccase} cond, {qcase} grade,
  try_cast(a.nsqft as double) lot, {vcase} vw,
  case when trim(a.wf) in ('WF Salt','WF Lake','WF River') then 1 else 0 end wf,
  try_cast(a.lat as double) lat, try_cast(a.lon as double) lon
 from i join b on b.parcel=i.parcel and b.bldg=i.bldg join appraisal_account a on a.parcel=i.parcel""")
c.execute("""create table j as select h.*, strptime(s.sdate,'%m/%d/%Y') d, try_cast(s.price as double) p
 from sale s join homes h on h.parcel=s.parcel
 where s.valid='1' and s.pcount='1' and s.impvac='1' and s.acct='Residential'
   and s.deed in ('Statutory Warranty Deed','Bargain & Sale Deed')
   and strptime(s.sdate,'%m/%d/%Y') >= date '2024-10-01'""")
df = c.sql("select * from j where p > 150000 and above >= 400 and grade is not null and cond is not null and lot > 0 and yb > 1850 and yr >= 0").df()
df['area'] = 'P' + df.nbhd.str[:4]; df['sk'] = 'P' + df.nbhd
df['liv'] = df.above + df.finb
print("sales", len(df), df.d.min(), df.d.max(), "median", df.p.median())

# No renovation terms: Pierce's "year remodeled" is an assessor-weighted year (it moves for additions and
# partial work and is later than year built on about 8 in 10 houses), not a dated renovation. Fitted with
# it, a "renovated" flag earned about 0, so the page hides the field as it does for Snohomish.
FEATS = ['lliv','finshare','grade','llot','age','age2','cond','vw','wfb','gar','fp','baths','beds']
def feats(d):
    age = (2026 - d.yb).clip(0, 120)
    return pd.DataFrame({'lliv': np.log(d.liv), 'finshare': (d.finb / d.liv).clip(0, 1), 'grade': d.grade.astype(float),
        'llot': np.log(d.lot.clip(1000, 200000)), 'age': age, 'age2': age**2/100,
        'cond': d.cond.astype(float), 'vw': d.vw.clip(0, 12).astype(float), 'wfb': d.wf.astype(float),
        'gar': d.gar.astype(float), 'fp': d.fp.clip(0, 3).astype(float), 'baths': d.baths.fillna(2).clip(0, 8), 'beds': d.beds.fillna(3).clip(0, 8)})
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
    a = s[:5]
    subs[s] = {'e': round(areas[a]['e'] + sub.get(s, 0), 4), 'g90': int(np.quantile(g.grade, .9)) if len(g) >= 10 else areas[a]['g90'], 'n': len(g), 'city': '', 'med': int(round(g.p.median(), -3))}
for s, v in subs.items():
    if v['n'] < 15: v['med'] = int(round(df[df.area == s[:5]].p.median(), -3))

# ---- homes for the address lookup ----
import zipcodes
zips = [z for z in zipcodes.filter_by(state='WA') if z['zip_code_type'] == 'STANDARD' and z['county'] in ('Pierce County', 'King County', 'Thurston County', 'Kitsap County', 'Lewis County')]
zc = np.array([[float(z['lat']), float(z['long'])] for z in zips]); zn = [z['zip_code'] for z in zips]
h = c.sql("select * from homes where above >= 300 and grade is not null and cond is not null and lat is not null").df()
h['sk'] = 'P' + h.nbhd; h['area'] = 'P' + h.nbhd.str[:4]
h = h[h.area.isin(areas.keys())]
tax = f"{R}/tax_account.txt"
if os.path.exists(tax):
    c.execute(f"create table ta as select * from read_csv('{tax}', delim='|', header=false, all_varchar=true, quote='', null_padding=true, ignore_errors=true)")
    addr = c.sql("select column00 parcel, trim(column03) addr from ta").df()
    h = h.merge(addr, on='parcel', how='left')
else:
    h['addr'] = None
if os.environ.get('PIE_TEST_ADDR'):  # local testing only, never published: parcel number as the "address"
    h['addr'] = h.addr.fillna('TEST ' + h.parcel)
h = h[h.addr.notna() & (h.addr.str.len() > 3) & ~h.addr.str.contains('XXX', na=False)]
h['addr'] = h.addr.str.upper().str.replace(r'\s+', ' ', regex=True).str.strip()
lat = np.radians(h.lat.values)[:, None]; dlat = h.lat.values[:, None] - zc[None, :, 0]
dlon = (h.lon.values[:, None] - zc[None, :, 1]) * np.cos(lat)
dist = np.sqrt(dlat**2 + dlon**2); order = np.argsort(dist, axis=1)
first = order[:, 0]; second = order[:, 1]
d1 = dist[np.arange(len(h)), first]; d2 = dist[np.arange(len(h)), second]
h['zip1'] = [zn[i] for i in first]; h['zip2'] = [zn[i] if r < 1.25 else None for i, r in zip(second, d2 / np.maximum(d1, 1e-9))]
h = h.astype({'beds': 'float', 'baths': 'float', 'fp': 'float', 'lot': 'float', 'yb': 'float'})
h['beds'] = h.beds.fillna(3); h['baths'] = h.baths.fillna(2); h['fp'] = h.fp.fillna(0); h['lot'] = h.lot.fillna(7000); h['yb'] = h.yb.fillna(1980)
print("homes", len(h))
os.makedirs(f"{OUT}/zip-pie", exist_ok=True)
for f in os.listdir(f"{OUT}/zip-pie"): os.remove(f"{OUT}/zip-pie/{f}")
long = pd.concat([h.assign(zip=h.zip1), h[h.zip2.notna()].assign(zip=h.zip2)])
long = long.drop_duplicates(['zip', 'addr'], keep=False)
zipdefault = {}
for z, g in long.groupby('zip'):
    keys = sorted(g.sk.unique()); rows = []
    for r in g.sort_values('addr').itertuples():
        rows.append([r.addr, keys.index(r.sk), int(r.above), int(r.finb), int(r.unfinb), int(r.beds if r.beds == r.beds else 3), float(r.baths if r.baths == r.baths else 2), int(r.fp),
                     int(r.gar), int(r.lot if r.lot == r.lot else 7000), int(r.yb if r.yb == r.yb else 1980), 0, int(r.cond), int(r.grade), int(r.vw), int(r.wf)])
    body = json.dumps({'keys': keys, 'cols': ['addr','k','above','finBsmt','unfinBsmt','beds','baths','fp','garage','lot','yrBuilt','yrRenovated','cond','grade','views','waterfront'], 'homes': rows}, separators=(',', ':'))
    with open(f"{OUT}/zip-pie/{z}.bin", 'wb') as fh: fh.write(gzip.compress(body.encode(), 9, mtime=0))
    zipdefault[z] = g.sk.mode()[0]
model = {
  'county': 'Pierce',
  'asOf': {'salesThrough': str(df.d.max())[:10], 'salesFrom': str(df.d.min())[:10], 'nSales': int(len(df)), 'built': '2026-10-15'},
  'coef': {**{f: round(co[f], 5) for f in FEATS}, 'ren10': 0.0, 'ren_old': 0.0, 'mo': 0.0},
  'moNow': 0, 'marketQuarter': LATEST_Q, 'band': BAND, 'subs': subs, 'areas': areas, 'zipDefault': zipdefault,
  'gradeLabels': {'3': 'Low', '4': 'Low plus', '5': 'Fair', '6': 'Fair plus', '7': 'Average', '8': 'Average plus', '9': 'Good', '10': 'Good plus', '11': 'Very good', '12': 'Very good plus', '13': 'Excellent'},
  'condLabels': {'1': 'Very poor', '2': 'Poor', '3': 'Fair', '4': 'Average'},
  'condAvg': 4, 'condNew': 4, 'noRenovationYear': True,
}
json.dump(model, open(f"{OUT}/model-pie.json", 'w'), separators=(',', ':'))
print("model-pie.json", os.path.getsize(f"{OUT}/model-pie.json"), "zips", len(zipdefault), "zip total", sum(os.path.getsize(f"{OUT}/zip-pie/{f}") for f in os.listdir(f"{OUT}/zip-pie")))
