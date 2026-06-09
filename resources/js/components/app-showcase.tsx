/* ─────────────────────────────────────────────────────────────
   APP SHOWCASE
   Faithful HTML/CSS recreations of the real Waffli app screens,
   each wrapped in a mobile phone frame. Colours, type and layout
   mirror the native app (constants/theme.ts + lib/uiTheme.ts).
───────────────────────────────────────────────────────────── */

/* App palette (dark theme) — mirrors lib/uiTheme.ts */
const T = {
    bg: '#161210',
    surface: '#1C1814',
    border: '#2A241F',
    divider: '#241E1A',
    text: '#F5EFE4',
    sec: '#8A7F71',
    ter: '#6B6055',
    muted: '#5A4F44',
    accent: '#FFD700',
    accentText: '#1A1410',
    glow: '#F0C24B',
    easy: '#22C55E',
    medium: '#FFD700',
    hard: '#FF6B6B',
    home: '#FF6B6B',
    personal: '#14B8A6',
    work: '#6366F1',
    health: '#F43F5E',
};

export const showcaseCss = `
/* ── Ambient rings (the app background) ─────────────── */
.as-rings{position:absolute;inset:0;overflow:hidden;pointer-events:none}
.as-ring{position:absolute;border-radius:50%;border-style:solid;border-color:${T.glow}}
.as-ring.r1{width:150px;height:150px;top:-70px;left:-70px;border-width:1.5px;opacity:.55}
.as-ring.r2{width:250px;height:250px;top:-110px;left:-110px;border-width:1.2px;opacity:.34}
.as-ring.r3{width:360px;height:360px;top:-160px;left:-160px;border-width:1px;opacity:.2}
.as-ring.r4{width:480px;height:480px;top:-220px;left:-220px;border-width:.8px;opacity:.1}

/* page-scale ambient rings for section background */
.as-bg-rings .as-ring.r1{width:300px;height:300px;top:-140px;left:-140px}
.as-bg-rings .as-ring.r2{width:520px;height:520px;top:-230px;left:-230px}
.as-bg-rings .as-ring.r3{width:760px;height:760px;top:-340px;left:-340px}
.as-bg-rings .as-ring.r4{width:1040px;height:1040px;top:-470px;left:-470px}

/* ── Section shell ──────────────────────────────────── */
.as-section{position:relative;padding:120px 0 130px;overflow:hidden}
.as-head{max-width:760px;margin:0 auto 64px;padding:0 24px;text-align:center;position:relative;z-index:2}
.as-eyebrow{display:inline-flex;align-items:center;gap:8px;
  font-family:'JetBrains Mono',ui-monospace,monospace;font-size:11.5px;font-weight:500;
  letter-spacing:.1em;text-transform:uppercase;color:${T.accent};margin-bottom:20px}
.as-eyebrow::before,.as-eyebrow::after{content:'';width:22px;height:1px;background:rgba(255,215,0,.3)}
.as-title{font-family:'Clash Display','Manrope',sans-serif;
  font-size:clamp(30px,4.6vw,52px);font-weight:600;letter-spacing:-.03em;line-height:1.04;color:${T.text};margin-bottom:18px}
.as-title em{font-style:normal;
  background:linear-gradient(100deg,#FFE88A,#FFD700 40%,#FF9D2E 70%,#FFD700);background-size:200% auto;
  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent}
.as-sub{font-size:16px;line-height:1.6;color:${T.sec}}

/* ── Gallery (staggered device wall) ───────────────────── */
.as-gallery{
  position:relative;z-index:2;
  max-width:1080px;margin:0 auto;padding:20px 24px 40px;
  display:grid;grid-template-columns:repeat(3,1fr);
  gap:64px 36px;justify-items:center;align-items:start;
}
.as-slide{display:flex;flex-direction:column;align-items:center;gap:22px;width:100%}
/* middle column dropped for a dynamic gallery-wall rhythm */
.as-slide:nth-child(3n+2){margin-top:56px}
.as-slide:nth-child(odd) .as-phone{animation:asFloatA 7s ease-in-out infinite}
.as-slide:nth-child(even) .as-phone{animation:asFloatB 8s ease-in-out infinite}
.as-slide:nth-child(3n+2) .as-phone{animation-delay:-2s}
.as-slide:nth-child(3n+3) .as-phone{animation-delay:-4s}
@keyframes asFloatA{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
@keyframes asFloatB{0%,100%{transform:translateY(-6px)}50%{transform:translateY(6px)}}

.as-caption{text-align:center;max-width:280px}
.as-caption b{display:block;font-size:15px;font-weight:700;color:${T.text};letter-spacing:-.01em;margin-bottom:3px}
.as-caption span{font-size:13px;color:${T.sec};line-height:1.5}

@media(max-width:920px){
  .as-gallery{grid-template-columns:repeat(2,1fr);gap:48px 28px}
  .as-slide:nth-child(3n+2){margin-top:0}
  .as-slide:nth-child(2n) .as-phone{animation-delay:-3s}
}
@media(max-width:600px){
  .as-gallery{grid-template-columns:1fr;gap:48px}
}

/* ── Phone frame ────────────────────────────────────── */
.as-phone{
  position:relative;width:288px;height:600px;flex:0 0 auto;
  background:linear-gradient(160deg,#2A241F,#161210);
  border-radius:46px;padding:9px;
  box-shadow:
    0 2px 1px rgba(255,255,255,.08) inset,
    0 0 0 2px #0c0a08,
    0 40px 80px -20px rgba(0,0,0,.7),
    0 18px 40px -12px rgba(0,0,0,.6);
}
.as-screen{
  position:relative;width:100%;height:100%;
  background:${T.bg};border-radius:38px;overflow:hidden;
  display:flex;flex-direction:column;
}
.as-island{
  position:absolute;top:11px;left:50%;transform:translateX(-50%);
  width:88px;height:26px;background:#000;border-radius:14px;z-index:30;
}
/* status bar */
.as-status{
  position:relative;z-index:20;height:46px;flex:0 0 auto;
  display:flex;align-items:flex-end;justify-content:space-between;
  padding:0 22px 6px;
}
.as-status .t{font-size:13px;font-weight:700;color:${T.text};letter-spacing:.02em}
.as-status .i{display:flex;align-items:center;gap:5px}
.as-status .i svg{display:block}

.as-body{position:relative;z-index:10;flex:1;min-height:0;overflow:hidden}
.as-pad{padding:14px 18px}

/* generic app type */
.as-stack{font-weight:800;letter-spacing:-.02em;line-height:1.16}
.as-stack .l1{font-weight:300;font-size:23px;color:${T.text}}
.as-stack .l2{font-weight:400;font-size:23px;color:${T.text}}
.as-stack .l3{font-weight:700;font-size:23px;color:${T.text}}
.as-brandline{display:flex;align-items:center;gap:8px;margin-top:12px}
.as-brandline .dash{width:22px;height:2px;background:${T.accent}}
.as-brandline span{font-size:11px;font-weight:500;color:${T.accent}}

/* gold metric card */
.as-goldcard{background:${T.accent};border-radius:16px;padding:12px 13px;width:124px;flex:0 0 auto}
.as-goldcard .pct{font-size:24px;font-weight:800;line-height:1;color:${T.accentText}}
.as-goldcard .lbl{font-size:10px;font-weight:500;color:${T.accentText};margin:3px 0 10px}
.as-goldcard .dashes{display:flex;gap:3px;margin-bottom:10px}
.as-goldcard .dashes i{width:11px;height:4px;border-radius:2px;background:rgba(0,0,0,.18)}
.as-goldcard .dashes i.on{background:#000}
.as-goldcard .foot{display:flex;justify-content:space-between;align-items:center}
.as-goldcard .foot .frac{font-size:14px;font-weight:700;color:${T.accentText}}
.as-goldcard .foot .ast{font-size:18px;color:${T.accentText};line-height:1}

/* metric row */
.as-metrics{display:flex;gap:8px;margin-top:16px}
.as-metric{flex:1;background:rgba(28,24,20,.7);border:1px solid ${T.border};border-radius:13px;padding:10px 11px}
.as-metric .mv{font-size:16px;font-weight:800;color:${T.text};letter-spacing:-.02em}
.as-metric .mv.gold{color:${T.accent}}
.as-metric .ml{font-size:9.5px;font-weight:500;color:${T.sec};margin-top:2px}

/* hero next-up card */
.as-hero{background:rgba(28,24,20,.72);border:1px solid ${T.border};border-radius:18px;padding:16px;margin-top:14px}
.as-hero .ey{font-size:9px;font-weight:600;letter-spacing:.13em;text-transform:uppercase;color:${T.accent};margin-bottom:8px}
.as-hero h3{font-size:18px;font-weight:800;letter-spacing:-.02em;color:${T.text};line-height:1.15}
.as-hero .meta{display:flex;align-items:center;gap:5px;margin:6px 0 16px;font-size:11.5px;color:${T.sec}}
.as-btn{display:flex;align-items:center;justify-content:center;gap:7px;background:${T.accent};
  border-radius:12px;padding:12px;font-size:13.5px;font-weight:700;color:${T.accentText}}

/* up next list */
.as-sech{font-size:9px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:${T.ter};margin:18px 0 10px}
.as-upitem{display:flex;align-items:center;gap:10px;padding:11px 0;border-top:1px solid ${T.divider}}
.as-upitem:first-of-type{border-top:none}
.as-updot{width:7px;height:7px;border-radius:50%;flex:0 0 auto}
.as-upitem .ut{flex:1;min-width:0}
.as-upitem .ut b{display:block;font-size:12.5px;font-weight:600;color:${T.text};white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.as-upitem .ut span{font-size:10.5px;color:${T.sec}}
.as-uptime{font-size:11px;font-weight:600;color:${T.sec}}

/* screen header (tasks) */
.as-sheader .ey{font-size:9.5px;font-weight:600;letter-spacing:.09em;color:${T.accent};margin-bottom:6px}
.as-sheader h2{font-size:23px;font-weight:800;letter-spacing:-.03em;color:${T.text}}
.as-sheader .sub{font-size:11.5px;color:${T.sec};margin-top:3px}
.as-minicard{width:96px;border-radius:13px;background:${T.accent};padding:9px 10px}
.as-minicard .pct{font-size:18px;font-weight:800;line-height:1;color:${T.accentText}}
.as-minicard .lbl{font-size:9px;font-weight:500;color:${T.accentText};margin:1px 0 6px}
.as-minicard .dashes{display:flex;gap:2px;margin-bottom:6px}
.as-minicard .dashes i{width:9px;height:3px;border-radius:2px;background:rgba(0,0,0,.2)}
.as-minicard .dashes i.on{background:#000}
.as-minicard .foot{display:flex;justify-content:space-between;align-items:center}
.as-minicard .foot .frac{font-size:11px;font-weight:600;color:${T.accentText}}
.as-minicard .foot .ast{font-size:13px;color:${T.accentText}}

/* date strip */
.as-dates{display:flex;gap:7px;margin:18px 0 4px}
.as-date{flex:1;border-radius:12px;padding:9px 0;text-align:center;background:rgba(28,24,20,.55);border:1px solid ${T.border}}
.as-date.sel{background:${T.accent};border-color:${T.accent}}
.as-date .dn{font-size:9px;font-weight:600;color:${T.sec};text-transform:uppercase;letter-spacing:.05em}
.as-date .dd{font-size:13px;font-weight:700;color:${T.text};margin-top:2px}
.as-date.sel .dn,.as-date.sel .dd{color:${T.accentText}}

/* task card */
.as-task{display:flex;border-radius:16px;overflow:hidden;background:rgba(28,24,20,.72);border:1px solid ${T.border};margin-top:10px}
.as-task .rail{width:3px;margin:9px 0;border-radius:2px;flex:0 0 auto}
.as-task .inner{flex:1;display:flex;align-items:center;gap:10px;padding:12px 12px 12px 11px;min-width:0}
.as-task .time{width:42px;flex:0 0 auto;font-size:10.5px;font-weight:600;color:${T.text};letter-spacing:-.02em}
.as-task .main{flex:1;min-width:0}
.as-task .main b{display:block;font-size:12.5px;font-weight:600;color:${T.text};letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.as-task .mrow{display:flex;align-items:center;gap:7px;margin-top:4px;flex-wrap:wrap}
.as-cmplx{display:flex;align-items:center;gap:4px;font-size:10px;font-weight:500;color:${T.sec}}
.as-cmplx i{width:5px;height:5px;border-radius:50%}
.as-mdur{font-size:10px;font-weight:500;color:${T.sec}}
.as-check{width:23px;height:23px;border-radius:50%;border:1.5px solid ${T.border};flex:0 0 auto;
  display:flex;align-items:center;justify-content:center}
.as-check.done{background:${T.easy};border-color:${T.easy}}

/* floating action stack */
.as-fab-stack{position:absolute;right:16px;bottom:22px;z-index:25;display:flex;flex-direction:column;gap:11px;align-items:center}
.as-fab{width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center}
.as-fab.sec{background:rgba(28,24,20,.8);border:1px solid rgba(42,36,31,.7);color:${T.text}}
.as-fab.primary{background:${T.accent};color:${T.accentText};box-shadow:0 8px 22px rgba(255,215,0,.35)}

/* ── Task view (detail) ─────────────────────────────── */
.as-detail-head{display:flex;align-items:center;justify-content:space-between;padding:6px 14px}
.as-iconbtn{width:38px;height:38px;border-radius:13px;background:${T.surface};border:1px solid ${T.border};
  display:flex;align-items:center;justify-content:center;color:${T.text}}
.as-accentbar{width:42px;height:3px;border-radius:2px;margin:8px 0 16px}
.as-d-eyebrow{display:flex;align-items:center;gap:7px;margin-bottom:13px}
.as-d-eyebrow span{font-size:10px;font-weight:700;letter-spacing:.13em;text-transform:uppercase}
.as-d-title{font-size:22px;font-weight:800;letter-spacing:-.03em;line-height:1.12;color:${T.text}}
.as-pills{display:flex;gap:7px;flex-wrap:wrap;margin-top:13px}
.as-pill{display:flex;align-items:center;gap:5px;padding:5px 9px;border-radius:8px;font-size:10px;font-weight:600}
.as-notes-h{display:flex;align-items:center;justify-content:space-between;margin:22px 0 9px}
.as-notes-h .lab{font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${T.ter}}
.as-notes-h .edit{display:flex;align-items:center;gap:5px;font-size:10px;font-weight:600;color:${T.sec}}
.as-notes{display:flex;gap:11px}
.as-notes .strip{width:3px;border-radius:2px;align-self:stretch}
.as-notes p{flex:1;font-size:12.5px;color:${T.text};line-height:1.65}
.as-drow{display:flex;align-items:center;gap:10px;padding:12px 0;border-top:1px solid ${T.divider};margin-top:16px}
.as-drow .dl{font-size:11.5px;font-weight:500;color:${T.sec};width:74px}
.as-drow .dv{flex:1;text-align:right;font-size:11.5px;font-weight:600;color:${T.text}}
.as-subtask{display:flex;align-items:center;gap:10px;padding:10px 0;border-top:1px solid ${T.divider}}
.as-subcheck{width:19px;height:19px;border-radius:6px;border:1.5px solid ${T.border};flex:0 0 auto;
  display:flex;align-items:center;justify-content:center}
.as-subcheck.done{background:${T.accent};border-color:${T.accent}}
.as-subtask .st{flex:1;font-size:12.5px;color:${T.text}}
.as-subtask .st.done{color:${T.sec};text-decoration:line-through}
.as-detail-foot{position:absolute;left:0;right:0;bottom:0;z-index:20;padding:13px 18px 20px;
  background:rgba(22,18,16,.92);border-top:1px solid ${T.divider}}

/* ── Brain dump ─────────────────────────────────────── */
.as-mic-card{background:${T.accent};border-radius:16px;padding:13px;width:124px;flex:0 0 auto}
.as-mic-card .lbl{font-size:10.5px;font-weight:500;color:${T.accentText};margin:5px 0 11px}
.as-mic-card .timer{display:flex;align-items:baseline;justify-content:space-between}
.as-mic-card .timer b{font-size:18px;font-weight:400;color:${T.accentText}}
.as-mic-card .timer span{font-size:11.5px;color:rgba(26,20,16,.6)}
.as-step{display:flex;gap:12px;align-items:flex-start;margin-top:16px}
.as-step-ic{width:34px;height:34px;border-radius:10px;background:rgba(255,215,0,.1);border:1px solid rgba(255,215,0,.2);
  display:flex;align-items:center;justify-content:center;color:${T.accent};flex:0 0 auto}
.as-step .sc b{display:block;font-size:12.5px;font-weight:600;color:${T.text};margin-bottom:2px}
.as-step .sc span{font-size:11px;color:${T.sec};line-height:1.5}
.as-record{display:flex;flex-direction:column;align-items:center;margin-top:22px}
.as-record .btn{width:74px;height:74px;border-radius:50%;background:${T.accent};
  display:flex;align-items:center;justify-content:center;color:${T.accentText};
  box-shadow:0 0 0 8px rgba(255,215,0,.08),0 0 0 18px rgba(255,215,0,.04)}
.as-record .cap{font-size:12px;font-weight:600;color:${T.accent};margin-top:13px}

/* ── Insights ───────────────────────────────────────── */
.as-card{background:rgba(28,24,20,.72);border:1px solid ${T.border};border-radius:16px;padding:15px;margin-top:11px}
.as-card h4{font-size:13.5px;font-weight:700;color:${T.text};letter-spacing:-.01em}
.as-card .csub{font-size:10.5px;color:${T.sec};margin-top:2px}
.as-segbar{display:flex;height:8px;border-radius:5px;overflow:hidden;margin:13px 0 11px}
.as-leg{display:flex;justify-content:space-between}
.as-leg .li{display:flex;align-items:center;gap:5px;font-size:10.5px;color:${T.sec}}
.as-leg .li i{width:6px;height:6px;border-radius:50%}
.as-catrow{margin-top:12px}
.as-catrow .top{display:flex;justify-content:space-between;margin-bottom:5px}
.as-catrow .top b{font-size:12px;font-weight:600;color:${T.text}}
.as-catrow .top span{font-size:12px;font-weight:700;color:${T.sec}}
.as-track{height:7px;border-radius:4px;background:${T.divider};overflow:hidden}
.as-fill{height:100%;border-radius:4px;background:${T.accent}}
.as-bars{display:flex;align-items:flex-end;gap:8px;height:96px;margin-top:14px;padding-top:6px}
.as-bars .b{flex:1;background:${T.accent};border-radius:6px 6px 3px 3px;min-height:8px}

/* ── Calendar (day timeline) ────────────────────────── */
.as-cal{position:relative;margin-top:16px}
.as-cal-row{position:relative;height:56px}
.as-cal-row .hr{position:absolute;top:0;left:44px;right:0;border-top:1px solid ${T.divider}}
.as-cal-row .tl{position:absolute;top:-7px;left:0;width:38px;text-align:right;
  font-size:9px;font-weight:600;color:${T.muted};letter-spacing:.02em}
.as-cal-events{position:absolute;top:0;left:50px;right:2px;bottom:0}
.as-evt{position:absolute;left:0;right:3px;border-radius:8px;padding:5px 8px;overflow:hidden;border-left:3px solid}
.as-evt b{display:block;font-size:10.5px;font-weight:700;color:${T.text};letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.as-evt span{font-size:9px;color:${T.sec}}
.as-now{position:absolute;left:44px;right:0;height:1.5px;background:${T.accent};z-index:5}
.as-now::before{content:'';position:absolute;left:-4px;top:-3px;width:7px;height:7px;border-radius:50%;background:${T.accent}}

@media(max-width:560px){
  .as-phone{width:260px;height:542px}
}
`;

/* ── shared bits ─────────────────────────────────────── */
function Rings({ bg = false }: { bg?: boolean }) {
    return (
        <div className={`as-rings${bg ? ' as-bg-rings' : ''}`} aria-hidden>
            <span className="as-ring r1" />
            <span className="as-ring r2" />
            <span className="as-ring r3" />
            <span className="as-ring r4" />
        </div>
    );
}

function StatusBar() {
    return (
        <div className="as-status">
            <span className="t">9:41</span>
            <span className="i">
                {/* signal */}
                <svg width="17" height="11" viewBox="0 0 17 11" fill={T.text}>
                    <rect x="0" y="7" width="3" height="4" rx="1" />
                    <rect x="4.5" y="5" width="3" height="6" rx="1" />
                    <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
                    <rect x="13.5" y="0" width="3" height="11" rx="1" />
                </svg>
                {/* wifi */}
                <svg width="16" height="11" viewBox="0 0 16 12" fill="none" stroke={T.text} strokeWidth="1.4">
                    <path d="M1 4.2a10 10 0 0 1 14 0" />
                    <path d="M3.4 6.8a6.4 6.4 0 0 1 9.2 0" />
                    <circle cx="8" cy="9.6" r="1.1" fill={T.text} stroke="none" />
                </svg>
                {/* battery */}
                <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                    <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke={T.text} strokeOpacity="0.4" />
                    <rect x="2" y="2" width="16" height="8" rx="1.5" fill={T.text} />
                    <rect x="23" y="3.5" width="1.6" height="5" rx="0.8" fill={T.text} fillOpacity="0.5" />
                </svg>
            </span>
        </div>
    );
}

function Phone({ children }: { children: React.ReactNode }) {
    return (
        <div className="as-phone">
            <div className="as-screen">
                <div className="as-island" />
                <Rings />
                <StatusBar />
                <div className="as-body">{children}</div>
            </div>
        </div>
    );
}

/* ── Screen 1 · Today ────────────────────────────────── */
function TodayScreen() {
    return (
        <div className="as-pad">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ flex: 1, paddingTop: 2 }}>
                    <div className="as-stack">
                        <div className="l1">Just</div>
                        <div className="l2">one</div>
                        <div className="l3">thing.</div>
                    </div>
                    <div className="as-brandline">
                        <span className="dash" />
                        <span>Good morning</span>
                    </div>
                </div>
                <div className="as-goldcard">
                    <div className="pct">0%</div>
                    <div className="lbl">Today</div>
                    <div className="dashes"><i /><i /></div>
                    <div className="foot"><span className="frac">0/2</span><span className="ast">✱</span></div>
                </div>
            </div>

            <div className="as-metrics">
                <div className="as-metric"><div className="mv">2</div><div className="ml">Remaining</div></div>
                <div className="as-metric"><div className="mv gold">0</div><div className="ml">Distractions</div></div>
                <div className="as-metric"><div className="mv">🙂</div><div className="ml">Mood</div></div>
            </div>

            <div className="as-hero">
                <div className="ey">Next up</div>
                <h3>Take Medication</h3>
                <div className="meta">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T.sec} strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                    9:00 – 9:05 am
                </div>
                <div className="as-btn">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill={T.accentText}><path d="M8 5v14l11-7z" /></svg>
                    Start
                </div>
            </div>

            <div className="as-sech">Up next</div>
            <div className="as-upitem">
                <span className="as-updot" style={{ background: T.medium }} />
                <div className="ut"><b>Deep Clean Spare Room</b><span>Home · 90m</span></div>
                <span className="as-uptime">11:30</span>
            </div>
            <div className="as-upitem">
                <span className="as-updot" style={{ background: T.work }} />
                <div className="ut"><b>Review Documents</b><span>Work · 30m</span></div>
                <span className="as-uptime">2:00</span>
            </div>
        </div>
    );
}

/* ── Screen 2 · Tasks ────────────────────────────────── */
function TasksScreen() {
    return (
        <>
            <div className="as-pad">
                <div className="as-sheader" style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ flex: 1 }}>
                        <div className="ey">TODAY · 0 OF 2</div>
                        <h2>Tasks</h2>
                        <div className="sub">Let's crush it!</div>
                    </div>
                    <div className="as-minicard">
                        <div className="pct">0%</div>
                        <div className="lbl">Today</div>
                        <div className="dashes"><i /><i /></div>
                        <div className="foot"><span className="frac">0/2</span><span className="ast">✱</span></div>
                    </div>
                </div>

                <div className="as-dates">
                    <div className="as-date"><div className="dn">Sun</div><div className="dd">7</div></div>
                    <div className="as-date sel"><div className="dn">Mon</div><div className="dd">8</div></div>
                    <div className="as-date"><div className="dn">Tue</div><div className="dd">9</div></div>
                    <div className="as-date"><div className="dn">Wed</div><div className="dd">10</div></div>
                    <div className="as-date"><div className="dn">Thu</div><div className="dd">11</div></div>
                </div>

                <div className="as-task">
                    <div className="rail" style={{ background: T.home }} />
                    <div className="inner">
                        <div className="time">11:30 am</div>
                        <div className="main">
                            <b>Deep Clean Spare Room</b>
                            <div className="mrow">
                                <span className="as-cmplx"><i style={{ background: T.medium }} />Medium</span>
                                <span className="as-mdur">90m</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={T.muted} strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
                            </div>
                        </div>
                        <div className="as-check" />
                    </div>
                </div>

                <div className="as-task">
                    <div className="rail" style={{ background: T.border }} />
                    <div className="inner">
                        <div className="time">9:00 pm</div>
                        <div className="main">
                            <b>Take Medication</b>
                            <div className="mrow">
                                <span className="as-cmplx"><i style={{ background: T.easy }} />Easy</span>
                                <span className="as-mdur">5m</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="2"><path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg>
                            </div>
                        </div>
                        <div className="as-check" />
                    </div>
                </div>

                <div className="as-task" style={{ opacity: 0.55 }}>
                    <div className="rail" style={{ background: T.easy }} />
                    <div className="inner">
                        <div className="time" style={{ color: T.ter }}>8:00 am</div>
                        <div className="main">
                            <b style={{ color: T.sec, textDecoration: 'line-through' }}>Morning Stretch</b>
                            <div className="mrow"><span className="as-cmplx"><i style={{ background: T.easy }} />Easy</span><span className="as-mdur">10m</span></div>
                        </div>
                        <div className="as-check done">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="as-fab-stack">
                <div className="as-fab sec">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                </div>
                <div className="as-fab sec">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4" /></svg>
                </div>
                <div className="as-fab primary">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
                </div>
            </div>
        </>
    );
}

/* ── Screen · Calendar (day timeline) ────────────────── */
function CalendarScreen() {
    const hours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM'];
    const events = [
        { top: 4, h: 38, name: 'Morning Routine', time: '9:00 – 9:45', color: T.personal },
        { top: 56, h: 52, name: 'Review Documents', time: '10:00 – 11:00', color: T.work },
        { top: 140, h: 80, name: 'Deep Clean Spare Room', time: '11:30 – 1:00', color: T.home },
        { top: 252, h: 30, name: 'Take Medication', time: '1:30 – 1:35', color: T.health },
    ];
    return (
        <div className="as-pad">
            <div className="as-sheader" style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ flex: 1 }}>
                    <div className="ey">MONDAY · JUN 8</div>
                    <h2>Calendar</h2>
                    <div className="sub">Your day, hour by hour</div>
                </div>
            </div>

            <div className="as-dates">
                <div className="as-date"><div className="dn">Sun</div><div className="dd">7</div></div>
                <div className="as-date sel"><div className="dn">Mon</div><div className="dd">8</div></div>
                <div className="as-date"><div className="dn">Tue</div><div className="dd">9</div></div>
                <div className="as-date"><div className="dn">Wed</div><div className="dd">10</div></div>
                <div className="as-date"><div className="dn">Thu</div><div className="dd">11</div></div>
            </div>

            <div className="as-cal">
                {hours.map((h) => (
                    <div className="as-cal-row" key={h}>
                        <span className="tl">{h}</span>
                        <span className="hr" />
                    </div>
                ))}
                <div className="as-now" style={{ top: 96 }} />
                <div className="as-cal-events">
                    {events.map((e) => (
                        <div
                            key={e.name}
                            className="as-evt"
                            style={{ top: e.top, height: e.h, background: `${e.color}1F`, borderLeftColor: e.color }}
                        >
                            <b>{e.name}</b>
                            <span>{e.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ── Screen 3 · Task view (detail) ───────────────────── */
function TaskViewScreen() {
    return (
        <>
            <div className="as-detail-head">
                <div className="as-iconbtn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                </div>
                <div className="as-iconbtn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" /></svg>
                </div>
            </div>

            <div style={{ padding: '4px 22px 0' }}>
                <div className="as-accentbar" style={{ background: T.home }} />
                <div className="as-d-eyebrow">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={T.home} strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></svg>
                    <span style={{ color: T.home }}>Home</span>
                </div>
                <div className="as-d-title">Deep Clean<br />Spare Room</div>
                <div className="as-pills">
                    <span className="as-pill" style={{ background: 'rgba(255,215,0,.08)', border: '1px solid rgba(255,215,0,.2)', color: T.medium }}>
                        <i style={{ width: 6, height: 6, borderRadius: 3, background: T.medium, display: 'inline-block' }} />Medium
                    </span>
                    <span className="as-pill" style={{ background: 'rgba(255,215,0,.08)', border: '1px solid rgba(255,215,0,.2)', color: T.accent }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="2"><path d="M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3" /></svg>Recurring
                    </span>
                </div>

                <div className="as-notes-h">
                    <span className="lab">Notes</span>
                    <span className="edit">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={T.sec} strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>Edit
                    </span>
                </div>
                <div className="as-notes">
                    <div className="strip" style={{ background: `${T.home}70` }} />
                    <p>Clear out the old boxes, vacuum under the bed, and wipe down the windowsills before the weekend.</p>
                </div>

                <div className="as-drow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.home} strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                    <span className="dl">Scheduled</span>
                    <span className="dv">Today · 11:30 am · ~90m</span>
                </div>

                <div className="as-sech" style={{ marginTop: 22 }}>Subtasks · 1/3</div>
                <div className="as-subtask" style={{ borderTop: 'none' }}>
                    <div className="as-subcheck done"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={T.accentText} strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></div>
                    <span className="st done">Clear out old boxes</span>
                </div>
                <div className="as-subtask">
                    <div className="as-subcheck" /><span className="st">Vacuum under the bed</span>
                </div>
                <div className="as-subtask">
                    <div className="as-subcheck" /><span className="st">Wipe down windowsills</span>
                </div>

                <div className="as-sech" style={{ marginTop: 22 }}>Details</div>
                <div className="as-drow" style={{ borderTop: 'none', paddingTop: 4, marginTop: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.muted} strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                    <span className="dl">Added</span><span className="dv">2d ago</span>
                </div>
            </div>

            <div className="as-detail-foot">
                <div className="as-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.accentText} strokeWidth="2.2"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>
                    Edit task
                </div>
            </div>
        </>
    );
}

/* ── Screen 4 · Brain dump ───────────────────────────── */
function BrainDumpScreen() {
    return (
        <div className="as-pad">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ flex: 1, paddingTop: 2 }}>
                    <div className="as-stack">
                        <div className="l1">Let's</div>
                        <div className="l1">Get</div>
                        <div className="l1">Started</div>
                    </div>
                    <div className="as-brandline">
                        <span className="dash" />
                        <span>Speak freely, I'll handle the rest</span>
                    </div>
                </div>
                <div className="as-mic-card">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={T.accentText} strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4" /></svg>
                    <div className="lbl">30 dumps left</div>
                    <div className="timer"><b>0:00</b><span>/ 1:00</span></div>
                </div>
            </div>

            <div className="as-sech" style={{ marginTop: 22 }}>How it works</div>
            <div className="as-step">
                <div className="as-step-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4" /></svg></div>
                <div className="sc"><b>Speak freely</b><span>Dump everything on your mind — tasks, ideas, reminders, anything.</span></div>
            </div>
            <div className="as-step">
                <div className="as-step-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" /></svg></div>
                <div className="sc"><b>AI understands</b><span>Your words are transcribed and analysed into clear, actionable tasks.</span></div>
            </div>
            <div className="as-step">
                <div className="as-step-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg></div>
                <div className="sc"><b>Instantly scheduled</b><span>Each task is sized, categorised, and slotted around your day.</span></div>
            </div>

            <div className="as-record">
                <div className="btn"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={T.accentText} strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4" /></svg></div>
                <div className="cap">Tap to speak</div>
            </div>
        </div>
    );
}

/* ── Screen 5 · Insights ─────────────────────────────── */
function InsightsScreen() {
    return (
        <div className="as-pad">
            <div className="as-sheader">
                <div className="ey">THIS WEEK</div>
                <h2>Insights</h2>
                <div className="sub">What you actually finished</div>
            </div>

            <div className="as-card">
                <h4>Done by complexity</h4>
                <div className="csub">What you actually finished</div>
                <div className="as-segbar">
                    <div style={{ flex: 14, background: T.easy }} />
                    <div style={{ flex: 10, background: T.medium }} />
                    <div style={{ flex: 5, background: T.hard }} />
                </div>
                <div className="as-leg">
                    <span className="li"><i style={{ background: T.easy }} />Easy 14</span>
                    <span className="li"><i style={{ background: T.medium }} />Medium 10</span>
                    <span className="li"><i style={{ background: T.hard }} />Hard 5</span>
                </div>
            </div>

            <div className="as-card">
                <h4>Done by category</h4>
                <div className="csub">Your top task categories</div>
                <div className="as-catrow">
                    <div className="top"><b>Personal</b><span>13</span></div>
                    <div className="as-track"><div className="as-fill" style={{ width: '100%' }} /></div>
                </div>
                <div className="as-catrow">
                    <div className="top"><b>Work</b><span>10</span></div>
                    <div className="as-track"><div className="as-fill" style={{ width: '77%' }} /></div>
                </div>
                <div className="as-catrow">
                    <div className="top"><b>Health</b><span>3</span></div>
                    <div className="as-track"><div className="as-fill" style={{ width: '23%' }} /></div>
                </div>
            </div>

            <div className="as-card">
                <h4>Activity</h4>
                <div className="csub">Tasks done per day</div>
                <div className="as-bars">
                    <div className="b" style={{ height: '55%' }} />
                    <div className="b" style={{ height: '100%' }} />
                    <div className="b" style={{ height: '92%' }} />
                    <div className="b" style={{ height: '48%' }} />
                    <div className="b" style={{ height: '30%' }} />
                    <div className="b" style={{ height: '30%' }} />
                    <div className="b" style={{ height: '40%' }} />
                </div>
            </div>
        </div>
    );
}

const screens = [
    { el: <TodayScreen />,     title: 'Daily focus',   sub: 'One task at a time — no overwhelm, just momentum.' },
    { el: <TasksScreen />,     title: 'Your schedule', sub: 'Every task sized, timed and colour-coded by category.' },
    { el: <CalendarScreen />,  title: 'Calendar',      sub: 'A real day timeline — tasks placed by the hour.' },
    { el: <TaskViewScreen />,  title: 'Task view',     sub: 'Notes, subtasks and timing — the full picture in one place.' },
    { el: <BrainDumpScreen />, title: 'Brain dump',    sub: 'Speak your mind; AI turns it into scheduled tasks.' },
    { el: <InsightsScreen />,  title: 'Insights',      sub: 'See what you actually finished, not what is pending.' },
];

/* Standalone phone for the hero — the real "Daily focus" screen. */
export function HeroPhone() {
    return (
        <Phone>
            <TodayScreen />
        </Phone>
    );
}

export function AppShowcase() {
    return (
        <section id="screens" className="as-section">
            <Rings bg />
            <div className="as-head" data-reveal>
                <div className="as-eyebrow">The real app</div>
                <h2 className="as-title">Designed to get out of <em>your way</em></h2>
                <p className="as-sub">
                    Every screen is built for focus — a warm, dark interface that feels calm in your hand.
                    These are the actual Waffli screens.
                </p>
            </div>

            <div className="as-gallery">
                {screens.map((s, i) => (
                    <div className="as-slide" data-reveal data-d={String((i % 3) + 1)} key={s.title}>
                        <Phone>{s.el}</Phone>
                        <div className="as-caption">
                            <b>{s.title}</b>
                            <span>{s.sub}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
