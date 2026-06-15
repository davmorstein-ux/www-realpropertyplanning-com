import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const calculatorHTML = `
<style>
*{box-sizing:border-box;margin:0;padding:0}
.scene{background:linear-gradient(160deg,#000510 0%,#000 50%,#000d20 100%);padding:2.5rem 1.5rem 3rem;font-family:'Raleway',sans-serif;perspective:1200px}
.clipboard{background:linear-gradient(170deg,#071830 0%,#030d1e 60%,#050f22 100%);border:1px solid rgba(30,144,255,0.6);border-radius:14px;padding:2rem;position:relative;transform:rotateX(2deg);transform-origin:top center;box-shadow:0 2px 0 rgba(30,144,255,0.4),0 4px 0 #030d1e,0 6px 0 rgba(30,144,255,0.2),0 8px 0 #020a18,0 10px 0 rgba(30,144,255,0.1),0 20px 40px rgba(0,0,0,0.8),0 40px 80px rgba(0,0,0,0.5),inset 0 1px 0 rgba(30,144,255,0.3)}
.clipboard::before{content:'';position:absolute;top:0;left:30px;right:30px;height:1px;background:linear-gradient(90deg,transparent,rgba(30,144,255,0.8),transparent)}
.clipboard::after{content:'';position:absolute;bottom:-12px;left:10%;right:10%;height:12px;background:radial-gradient(ellipse at center,rgba(30,144,255,0.15) 0%,transparent 70%);filter:blur(4px)}
.clip{position:absolute;top:-18px;left:50%;transform:translateX(-50%);width:60px;height:22px;background:linear-gradient(135deg,#1a3a6e,#0d2244);border:1px solid rgba(30,144,255,0.5);border-radius:4px 4px 0 0}
.ch{text-align:center;margin-bottom:1.75rem}
.ch .ey{font-size:13px;letter-spacing:.25em;text-transform:uppercase;color:#1e90ff;margin-bottom:8px;font-weight:700}
.ch h2{font-size:30px;font-weight:700;color:#fff;letter-spacing:.05em;text-shadow:0 0 30px rgba(30,144,255,0.5)}
.ch h2 span{color:#1e90ff;text-shadow:0 0 20px rgba(30,144,255,0.8)}
.ch .tg{font-size:13px;color:#1e90ff;margin-top:6px;letter-spacing:.1em;text-transform:uppercase;font-weight:600}
.panel{background:linear-gradient(135deg,rgba(255,255,255,0.03) 0%,rgba(0,0,0,0.3) 100%);border:1px solid rgba(30,144,255,0.35);border-radius:10px;padding:1.4rem 1.6rem;margin-bottom:14px;box-shadow:inset 0 1px 0 rgba(30,144,255,0.15),0 2px 12px rgba(0,0,0,0.4);position:relative}
.panel::before{content:'';position:absolute;top:0;left:16px;right:16px;height:1px;background:linear-gradient(90deg,transparent,rgba(30,144,255,0.4),transparent)}
.pt{font-size:17px;letter-spacing:.2em;text-transform:uppercase;color:#1e90ff;margin-bottom:16px;font-weight:700;text-shadow:0 0 14px rgba(30,144,255,0.6)}
.divider{height:1px;background:linear-gradient(90deg,transparent,rgba(30,144,255,0.25),transparent);margin:0 0 18px}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.g2+.g2{margin-top:16px}
.field{display:flex;flex-direction:column}
.field label{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#1e90ff;margin-bottom:8px;font-weight:700;min-height:32px;display:flex;align-items:flex-end;line-height:1.3}
.field input,.field select{width:100%;background:rgba(0,10,28,0.8);border:1px solid rgba(30,144,255,0.4);border-radius:6px;color:#fff;font-size:15px;padding:11px 14px;font-family:'Raleway',sans-serif;box-shadow:inset 0 3px 8px rgba(0,0,0,0.6);transition:border-color .2s,box-shadow .2s}
.field input::placeholder{color:rgba(30,144,255,0.25)}
.field input:focus,.field select:focus{outline:none;border-color:#1e90ff;box-shadow:inset 0 3px 8px rgba(0,0,0,0.6),0 0 14px rgba(30,144,255,0.35)}
.field select option{background:#030d1e;color:#fff}
.dp-wrap{margin-top:18px}
.dp-label-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
.dp-label{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#1e90ff;font-weight:700}
.dp-input-row{display:flex;align-items:center;gap:12px;margin-top:10px}
.dp-input-row input{flex:1;background:rgba(0,10,28,0.8);border:1px solid rgba(30,144,255,0.4);border-radius:6px;color:#fff;font-size:15px;padding:11px 14px;font-family:'Raleway',sans-serif;box-shadow:inset 0 3px 8px rgba(0,0,0,0.6)}
.dp-input-row input:focus{outline:none;border-color:#1e90ff;box-shadow:inset 0 3px 8px rgba(0,0,0,0.6),0 0 14px rgba(30,144,255,0.35)}
.dp-derived{font-size:14px;color:#1e90ff;font-weight:700;white-space:nowrap;min-width:120px;text-align:right}
.dp-hint{font-size:12px;color:#7ab8ff;margin-top:6px}
.results{display:none;margin-top:14px}
.results.visible{display:block}
.fm{background:linear-gradient(135deg,rgba(255,255,255,0.03),rgba(0,0,0,0.3));border:1px solid #1e90ff;border-radius:12px;padding:1.6rem;text-align:center;margin-bottom:14px;box-shadow:0 0 40px rgba(30,144,255,0.2),inset 0 1px 0 rgba(30,144,255,0.2)}
.fl{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#1e90ff;margin-bottom:10px;font-weight:700}
.fv{font-size:50px;font-weight:700;color:#1e90ff;line-height:1;text-shadow:0 0 30px rgba(30,144,255,0.8);font-variant-numeric:tabular-nums;min-height:60px;display:flex;align-items:center;justify-content:center}
.fu{font-size:14px;color:#fff;margin-top:8px}
.mg{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:14px}
.mc{background:rgba(0,10,28,0.6);border:1px solid rgba(30,144,255,0.3);border-radius:8px;padding:1rem;text-align:center;box-shadow:inset 0 2px 6px rgba(0,0,0,0.4)}
.ml{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#1e90ff;margin-bottom:7px;font-weight:700}
.mv{font-size:19px;font-weight:700;color:#fff;min-height:28px}
.br{display:flex;align-items:center;gap:14px;margin-bottom:12px}
.bl{font-size:13px;color:#fff;width:150px;flex-shrink:0;font-weight:600}
.bt{flex:1;height:7px;background:rgba(0,0,0,0.5);border-radius:4px;overflow:hidden;border:1px solid rgba(30,144,255,0.15);box-shadow:inset 0 2px 4px rgba(0,0,0,0.5)}
.bf{height:100%;border-radius:4px;background:linear-gradient(90deg,#1e90ff,#4db8ff);box-shadow:0 0 10px rgba(30,144,255,0.6);transition:width .9s ease}
.bv{font-size:13px;color:#1e90ff;width:70px;text-align:right;flex-shrink:0;font-weight:700}
.disc{font-size:12px;color:rgba(255,255,255,0.75);line-height:1.8;margin-top:12px;padding:12px 16px;border:1px solid rgba(30,144,255,0.2);border-radius:8px;background:rgba(0,10,28,0.5)}
.cta{background:linear-gradient(135deg,rgba(255,255,255,0.03),rgba(0,0,0,0.3));border:1px solid #1e90ff;border-radius:10px;padding:1.2rem 1.5rem;display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;margin-top:12px}
.cta p{font-size:13px;color:rgba(255,255,255,0.85);margin-top:3px}
.cta strong{color:#1e90ff;font-size:15px;display:block}
.courtesy{text-align:center;font-size:13px;color:#1e90ff;letter-spacing:.15em;text-transform:uppercase;margin-top:1.75rem;font-weight:700;padding-top:1.25rem;border-top:1px solid rgba(30,144,255,0.2);text-shadow:0 0 12px rgba(30,144,255,0.5)}
</style>
<div class="scene">
<div class="clipboard">
  <div class="clip"></div>
  <div class="ch">
    <div class="ey">Adult Family Home</div>
    <h2>AFH <span>ROI</span> Calculator</h2>
    <div class="tg">Know your numbers · Grow with confidence</div>
  </div>
  <div class="panel">
    <div class="pt">Acquisition</div>
    <div class="divider"></div>
    <div class="g2">
      <div class="field"><label>Purchase price ($)</label><input type="number" id="r-price" placeholder="850000" oninput="updateDerived()"></div>
      <div class="field"><label>Interest rate (%)</label><input type="number" id="r-rate" placeholder="7.25" step="0.01"></div>
    </div>
    <div class="g2">
      <div class="field"><label>Loan term (years)</label><select id="r-term"><option value="30">30 years</option><option value="25">25 years</option><option value="20">20 years</option><option value="15">15 years</option></select></div>
      <div class="field"></div>
    </div>
    <div class="dp-wrap">
      <div class="dp-label-row">
        <span class="dp-label">Down payment</span>
        <div style="display:inline-flex;border-radius:6px;overflow:hidden;border:2px solid #003380">
          <button id="btn-pct" onclick="setDPMode('pct')" style="padding:10px 28px;font-size:18px;font-weight:700;cursor:pointer;font-family:'Raleway',sans-serif;border:none;background:#ffffff;color:#003380;border:2px solid #ffffff;transition:all 0.2s">%</button>
          <button id="btn-dollar" onclick="setDPMode('dollar')" style="padding:10px 28px;font-size:14px;font-weight:700;cursor:pointer;font-family:'Raleway',sans-serif;border:none;background:#003380;color:#ffffff;border:2px solid transparent;transition:all 0.2s">$</button>
        </div>
      </div>
      <div class="dp-input-row">
        <input type="number" id="r-down" placeholder="25" oninput="updateDerived()">
        <span class="dp-derived" id="dp-derived">= —</span>
      </div>
      <div class="dp-hint" id="dp-hint">Enter percentage of purchase price</div>
    </div>
  </div>
  <div class="panel">
    <div class="pt">Revenue & Operations</div>
    <div class="divider"></div>
    <div class="g2">
      <div class="field"><label>Annual gross revenue ($)</label><input type="number" id="r-rev" placeholder="288000"></div>
      <div class="field"><label>Annual operating expenses ($)</label><input type="number" id="r-exp" placeholder="164000"></div>
    </div>
    <div class="g2">
      <div class="field"><label>Licensed capacity</label><select id="r-cap"><option value="2">2 beds</option><option value="4">4 beds</option><option value="6">6 beds</option></select></div>
      <div class="field"><label>Current occupancy (%)</label><input type="number" id="r-occ" placeholder="83"></div>
    </div>
  </div>
  <button style="width:100%;padding:16px;border-radius:8px;background:#ffffff;color:#003380;border:2px solid #003380;font-size:15px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;cursor:pointer;margin-top:4px;font-family:'Raleway',sans-serif;transition:background 0.2s,color 0.2s,border-color 0.2s" onmouseenter="this.style.background='#003380';this.style.color='#ffffff';this.style.borderColor='#ffffff'" onmouseleave="this.style.background='#ffffff';this.style.color='#003380';this.style.borderColor='#003380'" onclick="calcROI()">Calculate ROI</button>
  <div class="results" id="roi-results">
    <div class="fm" style="margin-top:16px">
      <div class="fl">Estimated annual ROI</div>
      <div class="fv" id="r-roi">—</div>
      <div class="fu">cash-on-cash return</div>
    </div>
    <div class="mg">
      <div class="mc"><div class="ml">Monthly cash flow</div><div class="mv" id="r-cf">—</div></div>
      <div class="mc"><div class="ml">Annual NOI</div><div class="mv" id="r-noi">—</div></div>
      <div class="mc"><div class="ml">Cap rate</div><div class="mv" id="r-caprate">—</div></div>
    </div>
    <div class="mg">
      <div class="mc"><div class="ml">Monthly mortgage</div><div class="mv" id="r-mort">—</div></div>
      <div class="mc"><div class="ml">Cash invested</div><div class="mv" id="r-invested">—</div></div>
      <div class="mc"><div class="ml">Operating margin</div><div class="mv" id="r-margin">—</div></div>
    </div>
    <div class="panel">
      <div class="pt">Return Breakdown</div>
      <div class="divider"></div>
      <div id="r-bars"></div>
    </div>
    <div class="disc">Estimates are for informational purposes only. Actual returns depend on financing terms, occupancy, staffing costs, regulatory changes, and market conditions. Consult David Stein for a professional investment analysis.</div>
    <div class="cta">
      <div><strong>Ready to analyze a specific deal?</strong><p>David Stein — Licensed Broker & Certified Appraiser · eXp Realty · 20+ years AFH experience</p></div>
      <button style="font-size:12px;padding:10px 22px;border-radius:6px;background:#ffffff;color:#003380;border:2px solid #003380;cursor:pointer;letter-spacing:.12em;text-transform:uppercase;font-family:'Raleway',sans-serif;font-weight:700;white-space:nowrap;transition:background 0.2s,color 0.2s,border-color 0.2s" onmouseenter="this.style.background='#003380';this.style.color='#ffffff';this.style.borderColor='#ffffff'" onmouseleave="this.style.background='#ffffff';this.style.color='#003380';this.style.borderColor='#003380'" onclick="window.location.href='/contact'">Contact David ↗</button>
    </div>
  </div>
  <div class="courtesy">Courtesy of Real Property Planning</div>
</div>
</div>
<script>
var dpMode='pct';
function setDPMode(m){
  dpMode=m;
  var price=parseFloat(document.getElementById('r-price').value)||0;
  var cur=parseFloat(document.getElementById('r-down').value)||0;
  var pct=document.getElementById('btn-pct');
  var dollar=document.getElementById('btn-dollar');
  if(m==='pct'){
    pct.style.background='#ffffff';pct.style.color='#003380';pct.style.fontSize='18px';pct.style.border='2px solid #ffffff';
    dollar.style.background='#003380';dollar.style.color='#ffffff';dollar.style.fontSize='14px';dollar.style.border='2px solid transparent';
    document.getElementById('r-down').placeholder='25';
    document.getElementById('dp-hint').textContent='Enter percentage of purchase price';
    if(price>0&&cur>0)document.getElementById('r-down').value=Math.round((cur/price)*100);
    else document.getElementById('r-down').value='';
  }else{
    dollar.style.background='#ffffff';dollar.style.color='#003380';dollar.style.fontSize='18px';dollar.style.border='2px solid #ffffff';
    pct.style.background='#003380';pct.style.color='#ffffff';pct.style.fontSize='14px';pct.style.border='2px solid transparent';
    document.getElementById('r-down').placeholder='212500';
    document.getElementById('dp-hint').textContent='Enter dollar amount of down payment';
    if(price>0&&cur>0)document.getElementById('r-down').value=Math.round(price*(cur/100));
    else document.getElementById('r-down').value='';
  }
  updateDerived();
}
function updateDerived(){
  var price=parseFloat(document.getElementById('r-price').value)||0;
  var val=parseFloat(document.getElementById('r-down').value)||0;
  var derived=document.getElementById('dp-derived');
  if(dpMode==='pct'){derived.textContent=price>0&&val>0?'= $'+Math.round(price*(val/100)).toLocaleString():'= —';}
  else{var p=price>0?(val/price)*100:0;derived.textContent=price>0&&val>0?'= '+Math.round(p*10)/10+'%':'= —';}
}
function getDownAmt(){
  var price=parseFloat(document.getElementById('r-price').value)||0;
  var val=parseFloat(document.getElementById('r-down').value)||0;
  return dpMode==='pct'?price*(val/100):val;
}
function fmtD(n){if(Math.abs(n)>=1000000)return'$'+(n/1000000).toFixed(2)+'M';if(Math.abs(n)>=1000)return'$'+(n/1000).toFixed(0)+'K';return'$'+Math.round(n).toLocaleString();}
function fmtP(n){return Math.round(n*10)/10+'%';}
function odometer(el,finalStr,duration){
  var start=Date.now();
  var isMoney=finalStr.startsWith('$');var isPct=finalStr.endsWith('%');
  function tick(){
    var elapsed=Date.now()-start;
    if(elapsed<duration){
      if(isMoney){var r=Math.round(Math.random()*2000000);el.textContent=r>=1000000?'$'+(r/1000000).toFixed(2)+'M':'$'+(r/1000).toFixed(0)+'K';}
      else if(isPct){el.textContent=(Math.random()*30).toFixed(1)+'%';}
      else{el.textContent=(Math.random()*10).toFixed(2)+'x';}
      requestAnimationFrame(tick);
    }else{el.textContent=finalStr;}
  }
  requestAnimationFrame(tick);
}
function calcROI(){
  var price=parseFloat(document.getElementById('r-price').value)||0;
  var rate=parseFloat(document.getElementById('r-rate').value)||7.25;
  var term=parseInt(document.getElementById('r-term').value)||30;
  var rev=parseFloat(document.getElementById('r-rev').value)||0;
  var exp=parseFloat(document.getElementById('r-exp').value)||0;
  var occ=parseFloat(document.getElementById('r-occ').value)||83;
  var downAmt=getDownAmt();
  if(!price||!rev||!downAmt){alert('Please enter purchase price, down payment, and annual gross revenue.');return;}
  var loanAmt=price-downAmt;
  var mr=(rate/100)/12;var np=term*12;
  var mortgage=loanAmt*(mr*Math.pow(1+mr,np))/(Math.pow(1+mr,np)-1);
  var annMort=mortgage*12;
  var adjRev=rev*(occ/100);var noi=adjRev-exp;
  var annCF=noi-annMort;var roi=(annCF/downAmt)*100;
  var capRate=(noi/price)*100;var margin=(noi/adjRev)*100;
  document.getElementById('roi-results').classList.add('visible');
  document.getElementById('roi-results').scrollIntoView({behavior:'smooth',block:'start'});
  var DUR=2000;
  odometer(document.getElementById('r-roi'),fmtP(roi),DUR);
  setTimeout(function(){
    odometer(document.getElementById('r-cf'),fmtD(annCF/12)+'/mo',DUR*0.6);
    odometer(document.getElementById('r-noi'),fmtD(noi),DUR*0.6);
    odometer(document.getElementById('r-caprate'),fmtP(capRate),DUR*0.6);
    odometer(document.getElementById('r-mort'),fmtD(mortgage)+'/mo',DUR*0.6);
    odometer(document.getElementById('r-invested'),fmtD(downAmt),DUR*0.6);
    odometer(document.getElementById('r-margin'),fmtP(margin),DUR*0.6);
  },300);
  setTimeout(function(){
    var bars=[
      {label:'Cash-on-cash ROI',pct:Math.min(100,Math.max(0,roi/30*100)),val:fmtP(Math.max(0,roi))},
      {label:'Cap rate',pct:Math.min(100,capRate/20*100),val:fmtP(capRate)},
      {label:'Operating margin',pct:Math.min(100,Math.max(0,margin)),val:fmtP(margin)},
      {label:'Debt coverage',pct:Math.min(100,(noi/annMort)/2*100),val:Math.round((noi/annMort)*100)/100+'x'},
    ];
    document.getElementById('r-bars').innerHTML=bars.map(function(b){return'<div class="br"><span class="bl">'+b.label+'</span><div class="bt"><div class="bf" style="width:0%" data-pct="'+Math.max(0,b.pct)+'"></div></div><span class="bv">'+b.val+'</span></div>';}).join('');
    setTimeout(function(){document.querySelectorAll('#r-bars .bf').forEach(function(el){el.style.width=el.dataset.pct+'%';});},50);
  },DUR+200);
}
</script>
`;

const AFHROICalculator = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Band */}
        <section style={{ background: "#1e2a38", padding: "48px 24px 40px", color: "#ffffff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <Link to="/afh-club/calculators" style={{ display: "inline-block", marginBottom: 24 }}>
              <img
                src="/back-to-calculators-blue.webp"
                alt="Back to Calculators"
                style={{ height: 52, width: "auto", display: "block", cursor: "pointer" }}
              />
            </Link>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase" as const, color: "#c8b98a", marginBottom: 10, fontFamily: "'Raleway', sans-serif" }}>
              For buyers &amp; investors
            </p>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontFamily: "'Raleway', sans-serif", fontWeight: 700, color: "#ffffff", marginBottom: 12, lineHeight: 1.2 }}>
              AFH ROI Calculator
            </h1>
            <p className="hero-text-white" style={{ fontSize: 18, fontFamily: "'Raleway', sans-serif", lineHeight: 1.7, maxWidth: 600 }}>
              Know your numbers before you commit. Analyze cash-on-cash return, cap rate, NOI, and monthly cash flow.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <div dangerouslySetInnerHTML={{ __html: calculatorHTML }} />
      </main>
      <Footer />
    </>
  );
};

export default AFHROICalculator;
