import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const calculatorHTML = `
<style>
*{box-sizing:border-box;margin:0;padding:0}
.scene2{background:linear-gradient(160deg,#000a02 0%,#000 50%,#001805 100%);padding:2.5rem 1.5rem 3rem;font-family:'Raleway',sans-serif;perspective:1200px}
.clipboard2{background:linear-gradient(170deg,#041808 0%,#020d04 60%,#041006 100%);border:1px solid rgba(0,230,118,0.6);border-radius:14px;padding:2rem;position:relative;transform:rotateX(2deg);transform-origin:top center;box-shadow:0 2px 0 rgba(0,230,118,0.4),0 4px 0 #020d04,0 6px 0 rgba(0,230,118,0.2),0 8px 0 #010902,0 10px 0 rgba(0,230,118,0.1),0 20px 40px rgba(0,0,0,0.8),0 40px 80px rgba(0,0,0,0.5),inset 0 1px 0 rgba(0,230,118,0.3)}
.clipboard2::before{content:'';position:absolute;top:0;left:30px;right:30px;height:1px;background:linear-gradient(90deg,transparent,rgba(0,230,118,0.8),transparent)}
.clipboard2::after{content:'';position:absolute;bottom:-12px;left:10%;right:10%;height:12px;background:radial-gradient(ellipse at center,rgba(0,230,118,0.15) 0%,transparent 70%);filter:blur(4px)}
.clip2{position:absolute;top:-18px;left:50%;transform:translateX(-50%);width:60px;height:22px;background:linear-gradient(135deg,#0a3d1a,#041408);border:1px solid rgba(0,230,118,0.5);border-radius:4px 4px 0 0}
.ch2{text-align:center;margin-bottom:1.75rem}
.ch2 .ey2{font-size:13px;letter-spacing:.25em;text-transform:uppercase;color:#00e676;margin-bottom:8px;font-weight:700}
.ch2 h2{font-size:30px;font-weight:700;color:#fff;letter-spacing:.05em;text-shadow:0 0 30px rgba(0,230,118,0.5)}
.ch2 h2 span{color:#00e676;text-shadow:0 0 20px rgba(0,230,118,0.8)}
.ch2 .tg2{font-size:13px;color:#00e676;margin-top:6px;letter-spacing:.1em;text-transform:uppercase;font-weight:600}
.panel2{background:linear-gradient(135deg,rgba(255,255,255,0.02) 0%,rgba(0,0,0,0.3) 100%);border:1px solid rgba(0,230,118,0.3);border-radius:10px;padding:1.4rem 1.6rem;margin-bottom:14px;box-shadow:inset 0 1px 0 rgba(0,230,118,0.12),0 2px 12px rgba(0,0,0,0.4);position:relative}
.panel2::before{content:'';position:absolute;top:0;left:16px;right:16px;height:1px;background:linear-gradient(90deg,transparent,rgba(0,230,118,0.4),transparent)}
.pt2{font-size:17px;letter-spacing:.2em;text-transform:uppercase;color:#00e676;margin-bottom:16px;font-weight:700;text-shadow:0 0 14px rgba(0,230,118,0.6)}
.divider2{height:1px;background:linear-gradient(90deg,transparent,rgba(0,230,118,0.25),transparent);margin:0 0 18px}
.g2v{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.g2v+.g2v,.g3v+.g2v,.g2v+.g3v{margin-top:16px}
.g3v{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px}
.fieldv{display:flex;flex-direction:column}
.fieldv label{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#00e676;margin-bottom:8px;font-weight:700;min-height:32px;display:flex;align-items:flex-end;line-height:1.3}
.fieldv input,.fieldv select{width:100%;background:rgba(0,15,5,0.8);border:1px solid rgba(0,230,118,0.35);border-radius:6px;color:#fff;font-size:15px;padding:11px 14px;font-family:'Raleway',sans-serif;box-shadow:inset 0 3px 8px rgba(0,0,0,0.6);transition:border-color .2s,box-shadow .2s}
.fieldv input::placeholder{color:rgba(0,230,118,0.2)}
.fieldv input:focus,.fieldv select:focus{outline:none;border-color:#00e676;box-shadow:inset 0 3px 8px rgba(0,0,0,0.6),0 0 14px rgba(0,230,118,0.3)}
.fieldv select option{background:#020d04;color:#fff}
.fieldv .hintv{font-size:12px;color:rgba(0,230,118,0.7);margin-top:6px}
.resultsv{display:none;margin-top:14px}
.resultsv.visible{display:block}
.fmv{background:linear-gradient(135deg,rgba(255,255,255,0.02),rgba(0,0,0,0.3));border:1px solid #00e676;border-radius:12px;padding:1.6rem;text-align:center;margin-bottom:14px;box-shadow:0 0 40px rgba(0,230,118,0.18),inset 0 1px 0 rgba(0,230,118,0.18)}
.flv{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#00e676;margin-bottom:10px;font-weight:700}
.fvv{font-size:50px;font-weight:700;color:#00e676;line-height:1;text-shadow:0 0 30px rgba(0,230,118,0.8);font-variant-numeric:tabular-nums;min-height:60px;display:flex;align-items:center;justify-content:center}
.frv{font-size:14px;color:#fff;margin-top:8px}
.mgv{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:14px}
.mcv{background:rgba(0,15,5,0.6);border:1px solid rgba(0,230,118,0.25);border-radius:8px;padding:1rem;text-align:center;box-shadow:inset 0 2px 6px rgba(0,0,0,0.4)}
.mlv{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#00e676;margin-bottom:7px;font-weight:700}
.mvv{font-size:19px;font-weight:700;color:#fff;min-height:28px}
.msv{font-size:11px;color:rgba(0,230,118,0.65);margin-top:3px}
.brv{display:flex;align-items:center;gap:14px;margin-bottom:12px}
.blv{font-size:13px;color:#fff;width:160px;flex-shrink:0;font-weight:600}
.btv{flex:1;height:7px;background:rgba(0,0,0,0.5);border-radius:4px;overflow:hidden;border:1px solid rgba(0,230,118,0.12);box-shadow:inset 0 2px 4px rgba(0,0,0,0.5)}
.bfv{height:100%;border-radius:4px;background:linear-gradient(90deg,#00e676,#4dffaa);box-shadow:0 0 10px rgba(0,230,118,0.6);transition:width .9s ease}
.bvv{font-size:13px;color:#00e676;width:80px;text-align:right;flex-shrink:0;font-weight:700}
.assumptionsv{background:rgba(0,15,5,0.5);border:1px solid rgba(0,230,118,0.25);border-radius:8px;padding:1rem 1.25rem;margin-bottom:12px;font-size:14px;color:#fff;line-height:2}
.assumptionsv strong{color:#00e676}
.discv{font-size:12px;color:rgba(255,255,255,0.75);line-height:1.8;margin-top:12px;padding:12px 16px;border:1px solid rgba(0,230,118,0.18);border-radius:8px;background:rgba(0,15,5,0.5)}
.ctav{background:linear-gradient(135deg,rgba(255,255,255,0.02),rgba(0,0,0,0.3));border:1px solid #00e676;border-radius:10px;padding:1.2rem 1.5rem;display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;margin-top:12px}
.ctav p{font-size:13px;color:rgba(255,255,255,0.85);margin-top:3px}
.ctav strong{color:#00e676;font-size:15px;display:block}
.courtesyv{text-align:center;font-size:13px;color:#00e676;letter-spacing:.15em;text-transform:uppercase;margin-top:1.75rem;font-weight:700;padding-top:1.25rem;border-top:1px solid rgba(0,230,118,0.2);text-shadow:0 0 12px rgba(0,230,118,0.5)}
</style>
<div class="scene2"><div class="clipboard2">
  <div class="clip2"></div>
  <div class="ch2"><div class="ey2">Adult Family Home</div><h2>AFH <span>Valuation</span> Estimator</h2><div class="tg2">Know your value · Plan your next move</div></div>
  <div class="panel2"><div class="pt2">Business Financials</div><div class="divider2"></div>
    <div class="g2v"><div class="fieldv"><label>Annual net income ($)</label><input type="number" id="v-net" placeholder="124000"><div class="hintv">After expenses, before owner salary</div></div><div class="fieldv"><label>Annual gross revenue ($)</label><input type="number" id="v-rev" placeholder="288000"></div></div>
    <div class="g3v"><div class="fieldv"><label>Licensed capacity</label><select id="v-cap"><option value="">Select...</option><option value="2">2 beds</option><option value="4">4 beds</option><option value="6">6 beds</option></select></div><div class="fieldv"><label>Occupancy</label><select id="v-occ"><option value="100">100% full</option><option value="83">83% (5/6)</option><option value="67">67% (4/6)</option><option value="75">75% (3/4)</option><option value="50">50% half</option></select></div><div class="fieldv"><label>Years operating</label><select id="v-yrs"><option value="1">Under 2 yrs</option><option value="3">2-5 years</option><option value="7">5-10 years</option><option value="12">10+ years</option></select></div></div>
    <div class="g2v"><div class="fieldv"><label>Payer mix</label><select id="v-payer"><option value="private">Primarily private pay</option><option value="mixed">Mixed private / Medicaid</option><option value="medicaid">Primarily Medicaid</option></select></div><div class="fieldv"><label>Staffing</label><select id="v-staff"><option value="full">Full staff in place</option><option value="partial">Partial staff available</option><option value="none">No staff included</option></select></div></div>
  </div>
  <div class="panel2"><div class="pt2">Property (if included)</div><div class="divider2"></div>
    <div class="g3v"><div class="fieldv"><label>Property value est.</label><input type="number" id="v-prop" placeholder="650000"><div class="hintv">Leave blank if business only</div></div><div class="fieldv"><label>DSHS license status</label><select id="v-dshs"><option value="active">Active - good standing</option><option value="conditions">Active - with conditions</option><option value="expired">Expired</option><option value="none">Never licensed</option></select></div><div class="fieldv"><label>County</label><select id="v-county"><option value="king">King</option><option value="snohomish">Snohomish</option><option value="pierce">Pierce</option><option value="kitsap">Kitsap</option><option value="thurston">Thurston</option><option value="other">Other WA county</option></select></div></div>
  </div>
  <button style="width:100%;padding:16px;border-radius:8px;background:#ffffff;color:#004d1a;border:2px solid #004d1a;font-size:15px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;cursor:pointer;margin-top:4px;font-family:'Raleway',sans-serif;transition:background 0.2s,color 0.2s,border-color 0.2s" onmouseenter="this.style.background='#004d1a';this.style.color='#ffffff';this.style.borderColor='#ffffff'" onmouseleave="this.style.background='#ffffff';this.style.color='#004d1a';this.style.borderColor='#004d1a'" onclick="calcVal()">Calculate Estimated Value</button>
  <div class="resultsv" id="val-results">
    <div class="fmv" style="margin-top:16px"><div class="flv">Estimated total value</div><div class="fvv" id="v-mid">-</div><div class="frv" id="v-range">Range: - to -</div></div>
    <div class="mgv"><div class="mcv"><div class="mlv">Business value</div><div class="mvv" id="v-biz">-</div><div class="msv">Income approach</div></div><div class="mcv"><div class="mlv">Property value</div><div class="mvv" id="v-propout">-</div><div class="msv">As entered</div></div><div class="mcv"><div class="mlv">Implied cap rate</div><div class="mvv" id="v-caprate">-</div><div class="msv">Risk-adjusted</div></div></div>
    <div class="mgv"><div class="mcv"><div class="mlv">Operating margin</div><div class="mvv" id="v-margin">-</div></div><div class="mcv"><div class="mlv">Value per bed</div><div class="mvv" id="v-perbed">-</div></div><div class="mcv"><div class="mlv">Gross rent multiplier</div><div class="mvv" id="v-grm">-</div></div></div>
    <div class="panel2"><div class="pt2">Value Factors</div><div class="divider2"></div><div id="v-bars"></div></div>
    <div class="assumptionsv" id="v-assumptions"></div>
    <div class="discv">This estimate uses income capitalization methodology and Washington AFH market data. It is for informational purposes only and does not constitute a certified appraisal or broker opinion of value. Contact David Stein for a professional certified valuation.</div>
    <div class="ctav"><div><strong>Get a certified professional valuation</strong><p>David Stein - Licensed Broker and Certified Appraiser - eXp Realty - 20+ years AFH experience</p></div><button style="font-size:12px;padding:10px 22px;border-radius:6px;background:#ffffff;color:#004d1a;border:2px solid #004d1a;cursor:pointer;letter-spacing:.12em;text-transform:uppercase;font-family:'Raleway',sans-serif;font-weight:700;white-space:nowrap;transition:background 0.2s,color 0.2s,border-color 0.2s" onmouseenter="this.style.background='#004d1a';this.style.color='#ffffff';this.style.borderColor='#ffffff'" onmouseleave="this.style.background='#ffffff';this.style.color='#004d1a';this.style.borderColor='#004d1a'" onclick="window.location.href='/contact'">Contact David</button></div>
  </div>
  <div class="courtesyv">Courtesy of Real Property Planning</div>
</div></div>
<script>
function fmtV(n){if(!n||isNaN(n))return'-';if(Math.abs(n)>=1000000)return'$'+(n/1000000).toFixed(2)+'M';if(Math.abs(n)>=1000)return'$'+(n/1000).toFixed(0)+'K';return'$'+Math.round(n).toLocaleString();}
function fmtPV(n){return Math.round(n*10)/10+'%';}
function odometerV(el,finalStr,duration){var start=Date.now();var isMoney=finalStr.startsWith('$');var isPct=finalStr.endsWith('%');function tick(){var elapsed=Date.now()-start;if(elapsed<duration){if(isMoney){var r=Math.round(Math.random()*2000000);el.textContent=r>=1000000?'$'+(r/1000000).toFixed(2)+'M':'$'+(r/1000).toFixed(0)+'K';}else if(isPct){el.textContent=(Math.random()*30).toFixed(1)+'%';}else{el.textContent=(Math.random()*10).toFixed(2)+'x';}requestAnimationFrame(tick);}else{el.textContent=finalStr;}}requestAnimationFrame(tick);}
function calcVal(){
  var net=parseFloat(document.getElementById('v-net').value)||0;
  var rev=parseFloat(document.getElementById('v-rev').value)||0;
  var cap=parseInt(document.getElementById('v-cap').value)||0;
  var occ=parseFloat(document.getElementById('v-occ').value)/100;
  var yrs=parseInt(document.getElementById('v-yrs').value)||3;
  var payer=document.getElementById('v-payer').value;
  var staff=document.getElementById('v-staff').value;
  var propval=parseFloat(document.getElementById('v-prop').value)||0;
  var dshs=document.getElementById('v-dshs').value;
  if(!net){alert('Please enter annual net income to calculate.');return;}
  var baseCap=0.15,capAdj=0;
  if(payer==='private')capAdj-=0.02;else if(payer==='medicaid')capAdj+=0.02;
  if(yrs>=7)capAdj-=0.015;else if(yrs<=1)capAdj+=0.025;
  if(occ>=1.0)capAdj-=0.01;else if(occ<=0.5)capAdj+=0.02;
  if(staff==='full')capAdj-=0.01;else if(staff==='none')capAdj+=0.015;
  if(dshs==='active')capAdj-=0.005;else if(dshs==='conditions'||dshs==='expired')capAdj+=0.03;
  var lowCap=Math.max(0.10,baseCap+capAdj-0.02);
  var highCap=Math.min(0.25,baseCap+capAdj+0.02);
  var midCap=(lowCap+highCap)/2;
  var bizMid=Math.round(net/midCap);
  var bizLow=Math.round(net/highCap);
  var bizHigh=Math.round(net/lowCap);
  var totalMid=bizMid+propval;
  var totalLow=bizLow+propval;
  var totalHigh=bizHigh+propval;
  var margin=rev>0?Math.round((net/rev)*100):0;
  var perBed=cap>0?Math.round(totalMid/cap):0;
  var grm=rev>0?Math.round((totalMid/rev)*10)/10:0;
  document.getElementById('val-results').classList.add('visible');
  document.getElementById('val-results').scrollIntoView({behavior:'smooth',block:'start'});
  var DUR=2000;
  odometerV(document.getElementById('v-mid'),fmtV(totalMid),DUR);
  document.getElementById('v-range').textContent='Range: '+fmtV(totalLow)+' to '+fmtV(totalHigh);
  setTimeout(function(){
    odometerV(document.getElementById('v-biz'),fmtV(bizMid),DUR*0.7);
    odometerV(document.getElementById('v-propout'),propval>0?fmtV(propval):'Not included',DUR*0.7);
    odometerV(document.getElementById('v-caprate'),fmtPV(midCap*100),DUR*0.7);
    odometerV(document.getElementById('v-margin'),rev>0?fmtPV(margin):'-',DUR*0.7);
    odometerV(document.getElementById('v-perbed'),cap>0?fmtV(perBed):'-',DUR*0.7);
    odometerV(document.getElementById('v-grm'),rev>0?grm+'x':'-',DUR*0.7);
  },300);
  setTimeout(function(){
    var bars=[
      {label:'Payer mix quality',pct:payer==='private'?90:payer==='mixed'?65:40,val:payer==='private'?'Private pay':payer==='mixed'?'Mixed':'Medicaid'},
      {label:'Occupancy strength',pct:Math.round(occ*100),val:Math.round(occ*100)+'%'},
      {label:'Operating tenure',pct:yrs>=7?90:yrs>=3?65:30,val:yrs>=7?'10+ yrs':yrs>=3?'2-5 yrs':'<2 yrs'},
      {label:'Staffing continuity',pct:staff==='full'?90:staff==='partial'?55:25,val:staff==='full'?'Full':staff==='partial'?'Partial':'None'},
      {label:'License standing',pct:dshs==='active'?95:dshs==='conditions'?50:10,val:dshs==='active'?'Active':'Issues'},
    ];
    document.getElementById('v-bars').innerHTML=bars.map(function(b){return'<div class="brv"><span class="blv">'+b.label+'</span><div class="btv"><div class="bfv" style="width:0%" data-pct="'+b.pct+'"></div></div><span class="bvv">'+b.val+'</span></div>';}).join('');
    setTimeout(function(){document.querySelectorAll('#v-bars .bfv').forEach(function(el){el.style.width=el.dataset.pct+'%';});},50);
    var notes=[];
    if(payer==='private')notes.push('<strong>Private pay mix</strong> - reduces risk premium, favorable to value');
    if(payer==='medicaid')notes.push('<strong>Medicaid-heavy</strong> - reimbursement risk increases cap rate');
    if(yrs>=7)notes.push('<strong>Established operation</strong> - tenure signals stability, lowers cap rate');
    if(occ>=1.0)notes.push('<strong>Full occupancy</strong> - maximum revenue demonstrates demand');
    if(occ<=0.5)notes.push('<strong>Low occupancy</strong> - buyer will price in stabilization risk');
    if(staff==='full')notes.push('<strong>Full staff retained</strong> - reduces transition risk for buyer');
    if(dshs==='conditions'||dshs==='expired')notes.push('<strong>License issues</strong> - significantly impacts marketability and price');
    if(rev>0&&margin>40)notes.push('<strong>Strong operating margin ('+margin+'%)</strong> - well-positioned for market');
    else if(rev>0&&margin<=30)notes.push('<strong>Thin margin ('+margin+'%)</strong> - review expenses before listing');
    document.getElementById('v-assumptions').innerHTML=notes.join('<br>')||'No significant risk factors detected.';
  },DUR+200);
}
</script>
`;

const AFHValuationEstimator = () => {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#1e2a38", padding: "48px 24px 40px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <Link to="/afh-club/calculators" style={{ display: "inline-block", fontSize: 13, color: "#c8b98a", letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 700, marginBottom: 20, textDecoration: "none", fontFamily: "'Raleway', sans-serif" }}>
              Back to Calculators
            </Link>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "#c8b98a", marginBottom: 10, fontFamily: "'Raleway', sans-serif" }}>For sellers</p>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontFamily: "'Raleway', sans-serif", fontWeight: 700, color: "#fff", marginBottom: 12, lineHeight: 1.2 }}>AFH Valuation Estimator</h1>
            <p style={{ fontSize: 18, fontFamily: "'Raleway', sans-serif", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: 600 }}>Know what your AFH is worth before you list. Estimate business and property value using income capitalization.</p>
          </div>
        </section>
        <div dangerouslySetInnerHTML={{ __html: calculatorHTML }} />
      </main>
      <Footer />
    </>
  );
};

export default AFHValuationEstimator;
