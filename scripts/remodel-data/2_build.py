"""Fit the remodel-value model and export model.json + per-ZIP home files.
usage: build.py RAW_DIR DUCKDB OUT_DIR"""
import duckdb, sys, json, os, gzip, numpy as np, pandas as pd
R, DB, OUT = sys.argv[1:4]
c = duckdb.connect(DB)
df = c.sql("select * from j where liv>=500 and grade between 4 and 13 and lot>0 and cond between 1 and 5").df()
df['sk'] = df.area.astype(str).str.strip() + '-' + df['sub'].astype(str).str.strip()

def feats(d, mo):
    age = (2026 - d.yb).clip(0, 120)
    return pd.DataFrame({
        'lliv': np.log(d.liv), 'finshare': (d.finb / d.liv).clip(0, 1), 'grade': d.grade,
        'llot': np.log(d.lot.clip(1000, 200000)), 'age': age, 'age2': age**2/100,
        'ren10': ((d.yr > 0) & (d.yr >= 2016)).astype(int), 'ren_old': ((d.yr > 0) & (d.yr < 2016)).astype(int),
        'cond': d.cond, 'vw': d.vw.clip(0, 12), 'wfb': (d.wf.fillna('0').astype(str).str.strip() != '0').astype(int),
        'gar': (d.gar > 0).astype(int), 'fp': d.fp.clip(0, 3), 'baths': d.baths.clip(0, 8), 'beds': d.beds.clip(0, 8)})
FEATS = ['lliv','finshare','grade','llot','age','age2','ren10','ren_old','cond','vw','wfb','gar','fp','baths','beds']
# TODAY'S MARKET (Oct 14, 2026): one effect per quarter of sale instead of a straight-line
# trend. The most recent quarter is the baseline (no dummy), so the area effects price a
# house at the level of the last three months of sales: that level already reflects
# current mortgage rates and the season. A straight line missed the summer 2026 dip.
quarter = pd.to_datetime(df.d).dt.to_period('Q').astype(str)
LATEST_Q = sorted(quarter.unique())[-1]
Q = pd.get_dummies(quarter, prefix='q').astype(float).drop(columns=['q_' + LATEST_Q])
X = pd.concat([feats(df, None).reset_index(drop=True), Q.reset_index(drop=True)], axis=1)
QFEATS = list(Q.columns)
y = np.log(df.p.values)

def fit(idx):
    A = pd.get_dummies(df.area[idx].astype(str), prefix='a').astype(float)
    M = pd.concat([X[idx].reset_index(drop=True), A.reset_index(drop=True)], axis=1)
    b, *_ = np.linalg.lstsq(M.values, y[idx], rcond=None)
    coef = dict(zip(M.columns, b))
    base = X[idx][FEATS + QFEATS].values @ np.array([coef[f] for f in FEATS + QFEATS])
    area_eff = np.array([coef.get('a_'+str(a), 0) for a in df.area[idx]])
    resid = y[idx] - base - area_eff
    t = pd.DataFrame({'sk': df.sk[idx].values, 'r': resid})
    g = t.groupby('sk').r.agg(['sum', 'count'])
    sub_adj = (g['sum'] / (g['count'] + 3)).to_dict()   # shrink toward the area
    return coef, sub_adj

def predict(coef, sub_adj, d, Xd):
    lp = Xd[FEATS + QFEATS].values @ np.array([coef[f] for f in FEATS + QFEATS])
    lp += np.array([coef.get('a_'+str(a), 0) for a in d.area]) + np.array([sub_adj.get(s, 0) for s in d.sk])
    return lp

rng = np.random.default_rng(7); te = rng.random(len(y)) < 0.2
coef, sub_adj = fit(~te)
e = np.abs(np.exp(predict(coef, sub_adj, df[te], X[te]) - y[te]) - 1)
print("holdout n=%d median err %.1f%% | within10 %.0f%% | within20 %.0f%% | p80 err %.1f%%" % (te.sum(), 100*np.median(e), 100*(e<.1).mean(), 100*(e<.2).mean(), 100*np.quantile(e, .8)))
coef, sub_adj = fit(np.ones(len(y), bool))
for f in FEATS + QFEATS: print(f"  {f:9s} {coef[f]:+.4f}")
print("baseline (today's market) =", LATEST_Q)

# per-subarea: total location effect, grade p90, n, median price; area fallback
areas = {}
for a, g in df.groupby('area'):
    areas[str(a).strip()] = {'e': round(coef.get('a_'+str(a), 0), 4), 'g90': int(np.quantile(g.grade, .9)), 'n': len(g)}
subs = {}
for s, g in df.groupby('sk'):
    a = s.split('-')[0]
    subs[s] = {'e': round(areas[a]['e'] + sub_adj.get(s, 0), 4), 'g90': int(np.quantile(g.grade, .9)) if len(g) >= 10 else areas[a]['g90'], 'n': len(g), 'city': g.city.mode()[0].title(), 'med': int(round(g.p.median(), -3))}
c.register('subs_df', pd.DataFrame([{'sk': k, **v} for k, v in subs.items()]))

# every single-family home with one residential building
homes = c.sql("""select trim(b.Address) addr, trim(b.ZipCode) zip, p.area, p.sub, p.lot, p.wf, p.vw,
  try_cast(b.BldgGrade as int) grade, try_cast(b.SqFtTotLiving as int) liv, try_cast(b.SqFtFinBasement as int) finb,
  try_cast(b.SqFtTotBasement as int) bsmt, try_cast(b.Bedrooms as int) beds,
  try_cast(b.BathFullCount as int)+0.75*try_cast(b.Bath3qtrCount as int)+0.5*try_cast(b.BathHalfCount as int) baths,
  try_cast(b.FpSingleStory as int)+try_cast(b.FpMultiStory as int)+try_cast(b.FpFreestanding as int)+try_cast(b.FpAdditional as int) fp,
  try_cast(b.SqFtGarageAttached as int)+try_cast(b.SqFtGarageBasement as int) gar, try_cast(b.YrBuilt as int) yb, try_cast(b.YrRenovated as int) yr,
  try_cast(b.Condition as int) cond
  from bldg b join parcel p using (mj,mn) where b.nb=1 and p.puse='2'""").df()
homes['zip'] = homes.zip.str.slice(0, 5)
homes = homes[homes.zip.str.match(r'^98\d{3}$', na=False) & (homes.addr.str.len() > 3) & (homes.liv >= 300)]
homes['sk'] = homes.area.astype(str).str.strip() + '-' + homes['sub'].astype(str).str.strip()
homes['addr'] = homes.addr.str.replace(r'\s+', ' ', regex=True).str.strip().str.replace(r'\s*98\d{3}(-\d{4})?$', '', regex=True)
homes = homes.drop_duplicates(['zip', 'addr'], keep=False)  # ambiguous addresses: type details in by hand
print("homes", len(homes), "zips", homes.zip.nunique())

os.makedirs(f"{OUT}/zip", exist_ok=True)
for f in os.listdir(f"{OUT}/zip"): os.remove(f"{OUT}/zip/{f}")
zipdefault = {}
for z, g in homes.groupby('zip'):
    keys = sorted(g.sk.unique())
    rows = []
    for r in g.sort_values('addr').itertuples():
        rows.append([r.addr, keys.index(r.sk), int(r.liv - r.finb), int(r.finb), int(max(r.bsmt - r.finb, 0)), int(r.beds), float(r.baths), int(r.fp),
                     1 if r.gar > 0 else 0, int(r.lot), int(r.yb), int(r.yr), int(r.cond), int(r.grade), int(min(r.vw, 12)), 0 if str(r.wf).strip() in ('0', 'nan', 'None', '') else 1])
    body = json.dumps({'keys': keys, 'cols': ['addr','k','above','finBsmt','unfinBsmt','beds','baths','fp','garage','lot','yrBuilt','yrRenovated','cond','grade','views','waterfront'], 'homes': rows}, separators=(',', ':'))
    # gzip-compressed, named .bin (see loadZip in src/lib/remodelValue.ts)
    with open(f"{OUT}/zip/{z}.bin", 'wb') as fh:
        fh.write(gzip.compress(body.encode('utf8'), 9, mtime=0))
    zipdefault[z] = g.sk.mode()[0]
model = {
  'asOf': {'salesThrough': str(df.d.max())[:10], 'salesFrom': str(df.d.min())[:10], 'nSales': int(len(df)), 'built': '2026-10-13'},
  # "mo" stays at 0 so the page's math is unchanged: the market level now lives in the area effects.
  'coef': {**{f: round(coef[f], 5) for f in FEATS}, 'mo': 0.0}, 'intercept': 0.0, 'moNow': 0, 'marketQuarter': LATEST_Q,
  'subs': subs, 'areas': areas, 'zipDefault': zipdefault,
}
# intercept is folded into area effects (no constant column); keep the model honest about it
json.dump(model, open(f"{OUT}/model.json", 'w'), separators=(',', ':'))
print("model.json", os.path.getsize(f"{OUT}/model.json"), "zip total", sum(os.path.getsize(f"{OUT}/zip/{f}") for f in os.listdir(f"{OUT}/zip")))
