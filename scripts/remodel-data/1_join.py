import duckdb, sys
R=sys.argv[1]; OUT=sys.argv[2]
c=duckdb.connect(OUT)
c.execute(f"""create or replace table sales as select lpad(trim(Major),6,'0') mj, lpad(trim(Minor),4,'0') mn, strptime(DocumentDate,'%m/%d/%Y') d, try_cast(SalePrice as bigint) p
 from read_csv('{R}/EXTR_RPSale.csv', all_varchar=true, header=true)
 where DocumentDate like '%/202%' and trim(PrincipalUse)='6' and trim(SaleInstrument) in ('2','3') and trim(SaleReason)='1' and trim(SaleWarning)=''
 and try_cast(SalePrice as bigint) > 150000""")
c.execute(f"""create or replace table bldg as select lpad(trim(Major),6,'0') mj, lpad(trim(Minor),4,'0') mn, count(*) over (partition by Major,Minor) nb, *
 from read_csv('{R}/EXTR_ResBldg.csv', all_varchar=true, header=true)""")
c.execute(f"""create or replace table parcel as select lpad(trim(Major),6,'0') mj, lpad(trim(Minor),4,'0') mn, trim(Area) area, trim(SubArea) sub, trim(DistrictName) city,
 trim(PresentUse) puse, try_cast(SqFtLot as int) lot, trim(WfntLocation) wf, try_cast(WfntFootage as int) wff,
 (try_cast(MtRainier as int)+try_cast(Olympics as int)+try_cast(Cascades as int)+try_cast(Territorial as int)+try_cast(SeattleSkyline as int)+try_cast(PugetSound as int)+try_cast(LakeWashington as int)+try_cast(LakeSammamish as int)+try_cast(SmallLakeRiverCreek as int)+try_cast(OtherView as int)) vw
 from read_csv('{R}/EXTR_Parcel.csv', all_varchar=true, header=true)""")
c.execute("""create or replace table j as select s.d, s.p, p.area, p.sub, p.city, p.lot, p.wf, p.wff, p.vw,
 b.ZipCode zip, trim(b.Address) addr, try_cast(b.BldgGrade as int) grade, try_cast(b.SqFtTotLiving as int) liv, try_cast(b.SqFtTotBasement as int) bsmt,
 try_cast(b.SqFtFinBasement as int) finb, try_cast(b.Bedrooms as int) beds,
 try_cast(b.BathFullCount as int)+0.75*try_cast(b.Bath3qtrCount as int)+0.5*try_cast(b.BathHalfCount as int) baths,
 try_cast(b.FpSingleStory as int)+try_cast(b.FpMultiStory as int)+try_cast(b.FpFreestanding as int)+try_cast(b.FpAdditional as int) fp,
 try_cast(b.SqFtGarageAttached as int)+try_cast(b.SqFtGarageBasement as int) gar, try_cast(b.YrBuilt as int) yb, try_cast(b.YrRenovated as int) yr, try_cast(b.Condition as int) cond
 from sales s join parcel p using (mj,mn) join bldg b using (mj,mn) where b.nb=1 and p.puse='2' and s.d >= date '2024-10-01'""")
print(c.sql("select count(*), median(p), min(d), max(d), count(distinct area) areas, count(distinct city) cities from j"))
print(c.sql("select city, count(*) n, median(p) med, median(p/liv)::int ppsf, median(grade) g from j group by 1 order by med desc limit 15"))
print(c.sql("select grade, count(*) n, median(p) med, median(liv) liv, median(p/liv)::int ppsf from j group by 1 order by 1"))
