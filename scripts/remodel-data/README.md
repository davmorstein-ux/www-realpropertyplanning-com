# What's My Remodel Worth? data refresh

Rebuilds `public/data/remodel/` (the model and the per-ZIP address files) from
King County Assessor data downloads. Refresh quarterly.

1. Download three files from the King County Assessor Data Download page
   (https://info.kingcounty.gov/assessor/DataDownload/default.aspx):
   **Real Property Sales**, **Residential Building**, **Parcel**. Unzip them into
   one folder (`EXTR_RPSale.csv`, `EXTR_ResBldg.csv`, `EXTR_Parcel.csv`).
   They are large (about 1 GB unzipped) and are never committed.
2. `pip install duckdb pandas numpy`
3. Edit the date window in `1_join.py` (`s.d >= date '...'`): the last 24 months.
4. Run:
   ```
   python3 -I scripts/remodel-data/1_join.py RAW_DIR /tmp/kc.duckdb
   python3 -I scripts/remodel-data/2_build.py RAW_DIR /tmp/kc.duckdb public/data/remodel
   ```
   `2_build.py` prints the hold-out accuracy and the coefficients. Estimates are
   priced at the latest quarter of sales (`marketQuarter` in model.json), which
   carries current mortgage rates and the season; refresh after each quarter ends.
5. Update the figures quoted in `src/data/remodelPage.ts` (sales count, date
   range, MARKET_MONTHS, accuracy, percentages) and `MODEL_YEAR` in `src/lib/remodelValue.ts`
   when the year changes; add a dated line to the page's record in
   `src/data/articleRecords.ts`.

Never published: owner, buyer or seller names, or any individual sale price.
The ZIP files carry only the public building record for each address.

## Snohomish County (added Oct 15, 2026)

Downloads (Snohomish County GIS Open Data, https://snohomishcountywa.gov/6206/GIS-Open-Data):
- Recent Property Sales, CSV: https://hub.arcgis.com/api/v3/datasets/ee8866d1da4847b59dbdfee0fd8ca9f7_0/downloads/data?format=csv&spatialRefId=4326&where=1%3D1 (save as `sales.csv`; the county updates it quarterly)
- Improvement Records, Excel: https://www.arcgis.com/sharing/rest/content/items/3c5edc985cec4fba8b3938d16ed1d3c3/data (save as CSV named `impr.csv`)
- Assessment roll, CSV version (zip): use `MainData.csv` only. The roll's NameAddr.csv has owner names: never read it.

`python3 -I scripts/remodel-data/sno_build.py RAW_DIR public/data/remodel`
writes `model-sno.json` and `zip-sno/<zip>.bin`. Update the SNO_* figures in `src/data/remodelPage.ts`.
RCW 42.56.070(8): these data may not be used to compile lists of individuals for commercial purposes.
