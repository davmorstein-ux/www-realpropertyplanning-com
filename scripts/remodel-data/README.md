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
   `2_build.py` prints the hold-out accuracy and the coefficients.
5. Update the figures quoted in `src/data/remodelPage.ts` (sales count, date
   range, accuracy, percentages) and `MODEL_YEAR` in `src/lib/remodelValue.ts`
   when the year changes; add a dated line to the page's record in
   `src/data/articleRecords.ts`.

Never published: owner, buyer or seller names, or any individual sale price.
The ZIP files carry only the public building record for each address.
