import { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { AppShowcase, HeroPhone, showcaseCss } from '@/components/app-showcase';

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const reviews = [
  { stars:5, text:"I've tried every productivity app. Waffli is the only one that actually gets out of my way. The brain dump feature alone is worth it — 10 minutes before bed and my mind is clear.", name:'Alex M.',   role:'Software Engineer', init:'A' },
  { stars:5, text:'The "just one thing" philosophy is exactly what my ADHD brain needed. I stop doom-scrolling my own task list and actually start doing things. Game changer.', name:'Jordan T.',role:'Freelance Designer', init:'J' },
  { stars:5, text:"Finally a dark-mode app that looks as good as it works. The gold UI cards feel premium and the morning check-in has become my favourite ritual. Highly recommend.", name:'Sam R.',    role:'Entrepreneur',      init:'S' },
];

const plans = [
  { name:'Free',      price:'0',    period:'Forever free', badge:null,          featured:false,
    features:[
      {label:'Today view — one task focus',active:true},
      {label:'30 brain dumps per month',   active:true},
      {label:'Basic task management',      active:true},
      {label:'Morning check-in',           active:true},
      {label:'Progress insights',          active:false},
      {label:'Unlimited brain dumps',      active:false},
    ], cta:{label:'Get started free', style:'outline'} },
  { name:'Pro',       price:'4.99', period:'per month',    badge:'Most Popular', featured:true,
    features:[
      {label:'Everything in Free',         active:true},
      {label:'60 brain dumps per month',   active:true},
      {label:'Extended voice capture (3m)',active:true},
      {label:'Full progress & insights',   active:true},
      {label:'Evening wind-down ritual',   active:true},
      {label:'Unlimited brain dumps',      active:false},
    ], cta:{label:'Start Pro', style:'gold'} },
  { name:'Unlimited', price:'9.99', period:'per month',    badge:null,          featured:false,
    features:[
      {label:'Everything in Pro',          active:true},
      {label:'Unlimited brain dumps',      active:true},
      {label:'Extended voice (4 min)',     active:true},
      {label:'Advanced analytics',         active:true},
      {label:'Priority support',           active:true},
      {label:'Early feature access',       active:true},
    ], cta:{label:'Go Unlimited', style:'outline'} },
];

const ticker = ['Stop overthinking','iOS & Android','Brain dump in 60 seconds','Free to start','One task at a time','Dark mode native','No subscriptions required','Start doing'];

/* ─────────────────────────────────────────────────────────────
   STYLES
───────────────────────────────────────────────────────────── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
@import url('https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}

body.landing{
  --gold:#FFD700; --gold-2:#F0C24B; --ember:#FF8A3D;
  --ink:#161210; --ink-2:#1C1814; --line:#2A241F;
  --txt:#F5EFE4; --txt-2:#8A7F71; --txt-3:#6B6055;
  --display:'Clash Display','Manrope',sans-serif;
  --mono:'JetBrains Mono',ui-monospace,monospace;
  background:#0F0C0A;color:#F5EFE4;
  font-family:'Manrope',sans-serif;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}

/* ── App ambient background (concentric gold rings, top-left) ── */
.land-rings{position:fixed;top:0;left:0;width:0;height:0;z-index:-1;pointer-events:none}
.land-rings span{position:absolute;border-radius:50%;border-style:solid;border-color:#F0C24B}
.land-rings .lr1{width:540px;height:540px;top:-250px;left:-250px;border-width:1.4px;opacity:.16}
.land-rings .lr2{width:860px;height:860px;top:-410px;left:-410px;border-width:1.1px;opacity:.1}
.land-rings .lr3{width:1200px;height:1200px;top:-580px;left:-580px;border-width:1px;opacity:.06}
.land-rings .lr4{width:1560px;height:1560px;top:-760px;left:-760px;border-width:.8px;opacity:.035}

/* ── Aurora bloom field (drifting warm light) ── */
.aurora{position:fixed;inset:0;z-index:-2;pointer-events:none;overflow:hidden;background:#0F0C0A}
.aurora span{position:absolute;border-radius:50%;filter:blur(100px);opacity:.9;mix-blend-mode:screen}
.aurora .a1{width:900px;height:900px;top:-320px;left:-120px;
  background:radial-gradient(circle,rgba(255,200,50,.6),transparent 65%);animation:auroraA 22s ease-in-out infinite}
.aurora .a2{width:780px;height:780px;top:-2%;right:-200px;
  background:radial-gradient(circle,rgba(255,125,40,.5),transparent 63%);animation:auroraB 26s ease-in-out infinite}
.aurora .a3{width:680px;height:680px;bottom:-240px;left:30%;
  background:radial-gradient(circle,rgba(240,194,75,.4),transparent 64%);animation:auroraC 30s ease-in-out infinite}
.aurora::after{content:'';position:absolute;inset:0;
  background:radial-gradient(140% 100% at 50% -5%,transparent 42%,rgba(12,10,8,.62) 100%)}

/* ── Fine tech grid (radial-faded) ── */
.land-grid{position:fixed;inset:0;z-index:-1;pointer-events:none;
  background-image:
    linear-gradient(rgba(255,215,0,.045) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,215,0,.045) 1px,transparent 1px);
  background-size:64px 64px;
  -webkit-mask-image:radial-gradient(120% 70% at 50% 0%,#000 0%,transparent 70%);
  mask-image:radial-gradient(120% 70% at 50% 0%,#000 0%,transparent 70%);
}

/* ── Grain ─────────────────────────── */
.grain::after{
  content:'';position:fixed;inset:0;pointer-events:none;z-index:999;
  opacity:.04;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* ── Keyframes ─────────────────────── */
@keyframes fadeUp   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
@keyframes fadeIn   { from{opacity:0} to{opacity:1} }
@keyframes floatA   { 0%,100%{transform:translateY(0) rotate(-1.5deg)} 50%{transform:translateY(-14px) rotate(-0.5deg)} }
@keyframes floatB   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
@keyframes floatC   { 0%,100%{transform:translateY(0) rotate(1deg)} 50%{transform:translateY(-7px) rotate(0.4deg)} }
@keyframes glow     { 0%,100%{opacity:.35;transform:scale(1)} 50%{opacity:.55;transform:scale(1.07)} }
@keyframes marquee  { from{transform:translateX(0)} to{transform:translateX(-50%)} }
@keyframes borderPulse { 0%,100%{border-color:rgba(255,215,0,.18)} 50%{border-color:rgba(255,215,0,.45)} }
@keyframes waveform { 0%,100%{height:4px} 50%{height:20px} }
@keyframes shimmer  { from{background-position:-400px 0} to{background-position:400px 0} }
@keyframes auroraA  { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(60px,40px) scale(1.12)} }
@keyframes auroraB  { 0%,100%{transform:translate(0,0) scale(1.05)} 50%{transform:translate(-50px,30px) scale(.92)} }
@keyframes auroraC  { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(40px,-30px) scale(1.1)} }
@keyframes sheen    { to{background-position:200% center} }
@keyframes spin     { to{transform:rotate(1turn)} }
@keyframes pulseGlow{ 0%,100%{opacity:.5} 50%{opacity:1} }

/* ── Scroll reveal ─────────────────── */
[data-reveal]{opacity:0;transform:translateY(28px);
  transition:opacity .75s cubic-bezier(.22,1,.36,1),transform .75s cubic-bezier(.22,1,.36,1)}
[data-reveal].revealed{opacity:1;transform:translateY(0)}
[data-reveal][data-d="1"]{transition-delay:.1s}
[data-reveal][data-d="2"]{transition-delay:.2s}
[data-reveal][data-d="3"]{transition-delay:.3s}
[data-reveal][data-d="4"]{transition-delay:.4s}
[data-reveal][data-d="5"]{transition-delay:.5s}

/* ── Hero load animations ──────────── */
.h-badge {animation:fadeUp .65s ease .1s both}
.h-logo  {animation:fadeUp .7s  ease .05s both}
.h-h1    {animation:fadeUp .8s  ease .22s both}
.h-sub   {animation:fadeUp .7s  ease .38s both}
.h-ctas  {animation:fadeUp .7s  ease .52s both}
.h-note  {animation:fadeUp .6s  ease .64s both}
.h-vis   {animation:fadeIn 1.1s ease .4s  both}

/* ── Nav ───────────────────────────── */
.wn{
  position:fixed;top:0;left:0;right:0;z-index:200;
  display:flex;align-items:center;justify-content:space-between;
  padding:0 44px;height:84px;
  background:#100D0B;
  border-bottom:1px solid rgba(255,255,255,.05);
}
.wn-logo{height:50px;object-fit:contain}
.wn-links{display:flex;align-items:center;gap:38px}
.wn-link{color:#9A8F80;font-size:14.5px;font-weight:500;text-decoration:none;transition:color .18s}
.wn-link:hover{color:#F5EFE4}
.wn-cta{
  display:inline-flex;align-items:center;gap:8px;
  background:#FFD700;color:#1A1410;
  padding:11px 22px;border-radius:10px;
  font-size:14px;font-weight:700;text-decoration:none;
  transition:background .18s;
}
.wn-cta:hover{background:#FFE14A}

/* ── Hero ──────────────────────────── */
.wh{
  position:relative;min-height:100vh;
  display:flex;align-items:center;
  padding:110px 48px 80px;overflow:hidden;
}
.wh-bg-glow-a{
  position:absolute;top:-15%;left:-8%;
  width:900px;height:900px;border-radius:50%;
  background:radial-gradient(circle,rgba(255,215,0,.07) 0%,transparent 65%);
  animation:glow 9s ease-in-out infinite;pointer-events:none;
}
.wh-bg-glow-b{
  position:absolute;bottom:-25%;right:-12%;
  width:700px;height:700px;border-radius:50%;
  background:radial-gradient(circle,rgba(240,194,75,.04) 0%,transparent 65%);
  animation:glow 12s ease-in-out 3s infinite;pointer-events:none;
}
.wh-grid{display:none}
.wh-inner{
  position:relative;z-index:2;
  max-width:1240px;margin:0 auto;width:100%;
  display:grid;grid-template-columns:1fr 1fr;
  gap:72px;align-items:center;
}

/* Left copy */
.wh-wordmark{
  height:42px;width:auto;display:block;margin-bottom:34px;
  filter:drop-shadow(0 0 24px rgba(255,215,0,.18));
}
.wh-h1{
  font-family:var(--display);
  font-size:clamp(54px,6.6vw,92px);
  font-weight:600;line-height:.98;letter-spacing:-.03em;
  color:#F5EFE4;margin-bottom:24px;
}
.wh-h1 em{
  font-style:normal;display:block;
  background:linear-gradient(100deg,#FFE88A 0%,#FFD700 28%,#FF9D2E 52%,#FFD700 76%,#FFE88A 100%);
  background-size:200% auto;
  -webkit-background-clip:text;background-clip:text;
  -webkit-text-fill-color:transparent;color:transparent;
  animation:sheen 6s linear infinite;
}
.wh-h1 .dot{color:#FF9D2E}
.wh-sub{
  font-size:17px;font-weight:400;color:#8A7F71;
  line-height:1.68;margin-bottom:40px;max-width:420px;
}
.wh-ctas{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:28px}
.wbp{
  display:inline-flex;align-items:center;gap:10px;
  background:#FFD700;color:#1A1410;
  padding:16px 30px;border-radius:16px;
  font-size:15px;font-weight:700;text-decoration:none;letter-spacing:-.01em;
  box-shadow:0 8px 32px rgba(255,215,0,.3),0 0 0 1px rgba(255,215,0,.4);
  transition:all .2s cubic-bezier(.22,1,.36,1);
}
.wbp:hover{background:#FFE44D;transform:translateY(-2px);box-shadow:0 14px 44px rgba(255,215,0,.42)}
.wbs{
  display:inline-flex;align-items:center;gap:10px;
  background:transparent;color:#F5EFE4;
  padding:16px 30px;border-radius:16px;
  font-size:15px;font-weight:600;text-decoration:none;
  border:1.5px solid rgba(245,239,228,.15);letter-spacing:-.01em;
  transition:all .2s cubic-bezier(.22,1,.36,1);
}
.wbs:hover{border-color:rgba(255,215,0,.35);color:#FFD700;transform:translateY(-2px)}
.wh-note{
  font-size:12px;color:#6B6055;font-weight:500;
  display:flex;align-items:center;gap:8px;
}
.wh-note::before{content:'';display:block;width:18px;height:1px;background:#4A4138}

/* ── Hero visual composition ────────── */
/* ── Hero device stage ─────────────── */
.wh-stage{
  position:relative;height:620px;
  display:flex;align-items:center;justify-content:center;
  perspective:1600px;
}
.wh-stage-glow{
  position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
  width:520px;height:520px;border-radius:50%;
  background:radial-gradient(circle,rgba(255,180,40,.22) 0%,rgba(255,138,61,.08) 40%,transparent 70%);
  filter:blur(30px);pointer-events:none;animation:glow 10s ease-in-out infinite;
}
/* Three separate layers — each owns ONE transform so nothing fights:
   .wh-enter = one-time entrance · .wh-float = idle bob · .wh-phone-tilt = cursor tilt */
.wh-enter{
  position:relative;z-index:2;transform-style:preserve-3d;
  animation:phoneIn 1.1s cubic-bezier(.22,1,.36,1) both;
}
.wh-float{transform-style:preserve-3d;animation:floatPhone 9s ease-in-out infinite}
.wh-phone-tilt{
  --ry:-16deg; --rx:6deg;
  transform:translateY(-12px) rotateY(var(--ry)) rotateX(var(--rx)) rotateZ(1deg) scale(.84);
  transform-style:preserve-3d;
  filter:drop-shadow(0 50px 70px rgba(0,0,0,.6));
  transition:transform .45s cubic-bezier(.22,1,.36,1);
}
.wh-phone-tilt .as-phone{animation:none}
.wh-phone-tilt .as-rings .as-ring{animation-duration:0s}
@keyframes phoneIn{
  0%{opacity:0;transform:translateY(26px) rotateY(-22deg) scale(.94)}
  100%{opacity:1;transform:none}
}
@keyframes floatPhone{
  0%,100%{transform:translateY(-6px)}
  50%{transform:translateY(8px)}
}

.wh-chip{
  position:absolute;z-index:5;
  display:inline-flex;align-items:center;gap:8px;
  padding:10px 15px;border-radius:14px;
  background:rgba(28,24,20,.72);
  border:1px solid rgba(255,215,0,.18);
  backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
  font-size:12.5px;font-weight:600;color:#F5EFE4;letter-spacing:-.01em;
  box-shadow:0 14px 40px rgba(0,0,0,.5);
}
.wh-chip-dot{width:7px;height:7px;border-radius:50%;background:#FFD700;box-shadow:0 0 10px #FFD700;animation:pulseGlow 2s ease-in-out infinite}
.wh-chip-a{top:54px;left:-6px;animation:floatA 7s ease-in-out infinite}
.wh-chip-b{bottom:70px;right:-14px;animation:floatC 6.5s ease-in-out 1s infinite}

/* ── Ticker ────────────────────────── */
.wticker{
  overflow:hidden;
  border-top:1px solid rgba(255,215,0,.07);
  border-bottom:1px solid rgba(255,215,0,.07);
  padding:20px 0;background:rgba(28,24,20,.55);
}
.wticker-inner{display:flex;animation:marquee 22s linear infinite;white-space:nowrap}
.wticker-item{
  display:inline-flex;align-items:center;gap:8px;
  padding:0 40px;font-family:var(--mono);font-size:12px;font-weight:500;
  color:#6B6055;letter-spacing:.04em;text-transform:uppercase;flex-shrink:0;
}
.wticker-dot{width:5px;height:5px;border-radius:50%;background:#FFD700;box-shadow:0 0 8px #FFD700;flex-shrink:0}
.wticker-hi{color:#FFD700}

/* ── Section shell ─────────────────── */
.wsec{max-width:1240px;margin:0 auto;padding:110px 48px}
.wsec-label{
  display:inline-flex;align-items:center;gap:9px;
  font-family:var(--mono);font-size:11.5px;font-weight:500;color:#FFD700;
  letter-spacing:.1em;text-transform:uppercase;margin-bottom:20px;
}
.wsec-label::before{content:'';display:block;width:6px;height:6px;border-radius:50%;
  background:#FFD700;box-shadow:0 0 10px #FFD700}
.wsec-h2{
  font-family:var(--display);
  font-size:clamp(34px,4.2vw,58px);font-weight:600;
  line-height:1.04;letter-spacing:-.03em;color:#F5EFE4;margin-bottom:16px;
}
.wsec-h2 span{
  background:linear-gradient(100deg,#FFE88A,#FFD700 40%,#FF9D2E 70%,#FFD700);
  background-size:200% auto;-webkit-background-clip:text;background-clip:text;
  -webkit-text-fill-color:transparent;color:transparent;animation:sheen 7s linear infinite;
}
.wsec-sub{font-size:16px;color:#8A7F71;line-height:1.72;max-width:560px}

/* ── How it works ──────────────────── */
.wsteps{
  display:grid;grid-template-columns:repeat(3,1fr);
  gap:16px;margin-top:64px;
}
.wstep{
  position:relative;padding:36px 32px 38px;border-radius:22px;
  background:linear-gradient(180deg,rgba(28,24,20,.7),rgba(20,17,14,.6));
  border:1px solid rgba(255,215,0,.08);
  backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
  overflow:hidden;transition:transform .4s cubic-bezier(.22,1,.36,1),border-color .4s;
}
.wstep::before{content:'';position:absolute;top:0;left:24px;right:24px;height:1px;
  background:linear-gradient(90deg,transparent,rgba(255,215,0,.5),transparent);
  opacity:0;transition:opacity .4s}
.wstep:hover{transform:translateY(-6px);border-color:rgba(255,215,0,.22)}
.wstep:hover::before{opacity:1}
.wstep-num{
  font-family:var(--mono);font-size:12px;font-weight:500;color:#6B6055;letter-spacing:.06em;
  margin-bottom:22px;display:flex;align-items:center;gap:12px;
}
.wstep-num::after{content:'';flex:1;height:1px;background:rgba(255,215,0,.1)}
.wstep-icon{
  width:52px;height:52px;border-radius:15px;
  background:radial-gradient(circle at 30% 25%,rgba(255,215,0,.18),rgba(255,215,0,.05));
  border:1px solid rgba(255,215,0,.18);
  display:flex;align-items:center;justify-content:center;
  margin-bottom:24px;font-size:22px;
  box-shadow:0 8px 24px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,215,0,.15);
}
.wstep-h3{font-size:20px;font-weight:700;color:#F5EFE4;letter-spacing:-.02em;margin-bottom:9px}
.wstep-p{font-size:14px;color:#8A7F71;line-height:1.66}

/* ── Bento feature grid ────────────── */
.bento-section{max-width:1240px;margin:0 auto;padding:0 48px 110px}
.bento-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:auto auto;
  gap:16px;margin-top:64px;
}
.bento-cell{
  background:linear-gradient(180deg,rgba(28,24,20,.72),rgba(19,16,13,.6));
  border:1px solid rgba(255,215,0,.09);
  border-radius:24px;overflow:hidden;
  position:relative;
  backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
  transition:border-color .4s,transform .4s cubic-bezier(.22,1,.36,1),box-shadow .4s;
  display:flex;flex-direction:column;
}
.bento-cell::before{content:'';position:absolute;top:0;left:28px;right:28px;height:1px;
  background:linear-gradient(90deg,transparent,rgba(255,215,0,.55),transparent);
  opacity:0;transition:opacity .4s;z-index:3}
.bento-cell:hover{border-color:rgba(255,215,0,.24);transform:translateY(-6px);
  box-shadow:0 30px 70px -20px rgba(0,0,0,.6),0 0 50px -20px rgba(255,215,0,.25)}
.bento-cell:hover::before{opacity:1}
.bento-cell.tall{grid-row:span 2}

/* Image pane */
.bento-img-wrap{
  position:relative;overflow:hidden;
  background:#161210;flex-shrink:0;
  -webkit-mask-image:radial-gradient(120% 100% at 50% 0,#000 55%,transparent 100%);
  mask-image:radial-gradient(120% 100% at 50% 0,#000 55%,transparent 100%);
}
.bento-img-wrap img{width:100%;display:block;object-fit:cover;transition:transform .6s cubic-bezier(.22,1,.36,1)}
.bento-cell:hover .bento-img-wrap img{transform:scale(1.04)}
.bento-img-wrap::after{
  content:'';
  position:absolute;bottom:0;left:0;right:0;height:60%;
  background:linear-gradient(to top,rgba(19,16,13,1),transparent);
  pointer-events:none;
}

/* Text pane */
.bento-copy{padding:20px 26px 26px;position:relative;z-index:2}
.bento-tag{
  display:inline-block;font-family:var(--mono);
  font-size:10.5px;font-weight:500;color:#FFD700;
  letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px;
}
.bento-h3{font-size:19px;font-weight:700;color:#F5EFE4;letter-spacing:-.025em;margin-bottom:7px}
.bento-p{font-size:13px;color:#8A7F71;line-height:1.65}
.bento-pills{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px}
.bento-pill{
  display:inline-flex;align-items:center;gap:5px;
  padding:5px 11px;border-radius:100px;
  background:rgba(255,215,0,.06);border:1px solid rgba(255,215,0,.13);
  font-size:11px;font-weight:600;color:#A89060;
}
.bento-pill::before{content:'✓';color:#FFD700;font-size:10px}

/* ── Testimonials ──────────────────── */
.wtest{max-width:1240px;margin:0 auto;padding:110px 48px}
.wtest-hd{text-align:center;margin-bottom:64px}
.wreviews{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.wreview{
  position:relative;overflow:hidden;
  background:linear-gradient(180deg,rgba(28,24,20,.7),rgba(19,16,13,.55));
  border:1px solid rgba(255,215,0,.08);
  border-radius:22px;padding:30px;
  backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
  transition:border-color .4s,transform .4s cubic-bezier(.22,1,.36,1),box-shadow .4s;
}
.wreview::before{content:'';position:absolute;top:0;left:26px;right:26px;height:1px;
  background:linear-gradient(90deg,transparent,rgba(255,215,0,.5),transparent);opacity:0;transition:opacity .4s}
.wreview:hover{border-color:rgba(255,215,0,.22);transform:translateY(-6px);
  box-shadow:0 28px 60px -22px rgba(0,0,0,.6)}
.wreview:hover::before{opacity:1}
.wreview-stars{display:flex;gap:3px;margin-bottom:14px;color:#FFD700;font-size:13px}
.wreview-quote{font-size:14px;color:#C4B99A;line-height:1.72;margin-bottom:22px;font-style:italic}
.wreview-quote::before{content:'❝';color:rgba(255,215,0,.3);font-size:18px;display:block;margin-bottom:6px}
.wreview-author{display:flex;align-items:center;gap:12px}
.wreview-av{
  width:38px;height:38px;border-radius:50%;
  background:linear-gradient(135deg,#2A241F,#3A3028);
  border:1.5px solid rgba(255,215,0,.15);
  display:flex;align-items:center;justify-content:center;
  font-size:13px;font-weight:800;color:#FFD700;flex-shrink:0;
}
.wreview-name{font-size:13px;font-weight:700;color:#F5EFE4}
.wreview-role{font-size:11px;color:#6B6055;margin-top:1px}

/* ── Pricing ───────────────────────── */
.wprice{max-width:1240px;margin:0 auto;padding:0 48px 110px}
.wprice-hd{text-align:center;margin-bottom:64px}
.wprice-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.wplan{
  background:linear-gradient(180deg,rgba(28,24,20,.7),rgba(19,16,13,.55));
  border:1px solid rgba(255,215,0,.08);
  border-radius:24px;padding:38px 34px;position:relative;
  overflow:hidden;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
  transition:border-color .4s,transform .4s cubic-bezier(.22,1,.36,1);
}
.wplan:hover{transform:translateY(-6px);border-color:rgba(255,215,0,.2)}
.wplan.featured{
  border-color:transparent;
  background:linear-gradient(160deg,#241E17 0%,#1A1611 100%);
  box-shadow:0 30px 80px -30px rgba(255,215,0,.3),0 0 70px -30px rgba(255,138,61,.25),inset 0 1px 0 rgba(255,215,0,.14);
  transform:scale(1.04);
}
.wplan.featured:hover{transform:scale(1.04) translateY(-6px)}
.wplan.featured::before{content:'';position:absolute;inset:0;border-radius:24px;padding:1px;
  background:conic-gradient(from 0deg,#FFD700,#FF8A3D,#FFD700,#FFE88A,#FFD700);
  -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;mask-composite:exclude;
  animation:spin 8s linear infinite;opacity:.8;pointer-events:none}
.wplan-badge{
  position:absolute;top:18px;right:18px;z-index:2;
  background:#FFD700;color:#1A1410;
  font-family:var(--mono);font-size:9.5px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
  padding:4px 11px;border-radius:100px;box-shadow:0 4px 16px rgba(255,215,0,.4);
}
.wplan-name{font-family:var(--mono);font-size:11px;font-weight:500;color:#8A7F71;letter-spacing:.08em;text-transform:uppercase;margin-bottom:14px;position:relative}
.wplan-price{font-family:var(--display);font-size:52px;font-weight:600;color:#F5EFE4;letter-spacing:-.04em;line-height:1;margin-bottom:3px;position:relative}
.wplan-price span{font-size:17px;font-weight:500;color:#8A7F71;vertical-align:top;margin-top:10px;display:inline-block}
.wplan-period{font-size:12px;color:#6B6055;margin-bottom:28px}
.wplan-feats{list-style:none;margin-bottom:32px;display:flex;flex-direction:column;gap:11px}
.wplan-feat{font-size:13px;color:#8A7F71;display:flex;align-items:center;gap:9px}
.wplan-feat::before{
  content:'';width:16px;height:16px;border-radius:50%;flex-shrink:0;
  background:rgba(255,215,0,.06);border:1.5px solid rgba(255,215,0,.2);
}
.wplan-feat.on::before{
  background:rgba(255,215,0,.12);border-color:#FFD700;
  background-image:url("data:image/svg+xml,%3Csvg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L3 5L7 1' stroke='%23FFD700' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat:no-repeat;background-position:center;
}
.wplan-cta{
  display:block;text-align:center;padding:13px;border-radius:13px;
  font-size:13px;font-weight:700;text-decoration:none;transition:all .2s;
}
.wplan-cta.outline{border:1.5px solid rgba(255,215,0,.18);color:#8A7F71}
.wplan-cta.outline:hover{border-color:rgba(255,215,0,.38);color:#FFD700}
.wplan-cta.gold{background:#FFD700;color:#1A1410;box-shadow:0 4px 24px rgba(255,215,0,.25)}
.wplan-cta.gold:hover{background:#FFE44D;transform:translateY(-1px);box-shadow:0 8px 32px rgba(255,215,0,.35)}

/* ── CTA ────────────────────────────── */
.wcta-wrap{max-width:1240px;margin:0 auto;padding:0 48px 110px}
.wcta{
  position:relative;overflow:hidden;
  background:
    radial-gradient(120% 140% at 50% -20%,rgba(255,180,40,.16),transparent 55%),
    linear-gradient(180deg,#1F1A14,#141009);
  border:1px solid rgba(255,215,0,.16);
  border-radius:34px;padding:88px 80px;text-align:center;
  box-shadow:inset 0 1px 0 rgba(255,215,0,.1),0 40px 100px -40px rgba(0,0,0,.7);
}
.wcta::before{content:'';position:absolute;inset:0;border-radius:34px;padding:1px;
  background:conic-gradient(from 90deg,transparent,rgba(255,215,0,.6),transparent 30%,transparent 70%,rgba(255,138,61,.5),transparent);
  -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;mask-composite:exclude;
  animation:spin 14s linear infinite;pointer-events:none}
.wcta-glow{
  position:absolute;top:-10%;left:50%;transform:translateX(-50%);
  width:680px;height:420px;
  background:radial-gradient(ellipse,rgba(255,180,40,.18) 0%,transparent 70%);
  filter:blur(20px);pointer-events:none;animation:glow 9s ease-in-out infinite;
}
.wcta-h2{
  font-family:var(--display);
  font-size:clamp(36px,4.8vw,64px);font-weight:600;
  letter-spacing:-.035em;color:#F5EFE4;line-height:1.02;
  margin-bottom:18px;position:relative;
}
.wcta-h2 em{font-style:normal;
  background:linear-gradient(100deg,#FFE88A,#FFD700 40%,#FF9D2E 70%,#FFD700);background-size:200% auto;
  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;
  animation:sheen 6s linear infinite}
.wcta-sub{font-size:16px;color:#8A7F71;margin-bottom:40px;position:relative}
.wcta-btns{display:flex;justify-content:center;gap:14px;flex-wrap:wrap;position:relative}
.wstore{
  display:inline-flex;align-items:center;gap:12px;
  padding:16px 28px;border-radius:16px;text-decoration:none;
  border:1.5px solid rgba(255,215,0,.18);background:rgba(255,215,0,.04);
  transition:all .2s;
}
.wstore:hover{border-color:rgba(255,215,0,.38);background:rgba(255,215,0,.08);transform:translateY(-2px)}
.wstore-sm{font-size:10px;color:#8A7F71;font-weight:500;letter-spacing:.03em;display:block}
.wstore-lg{font-size:16px;color:#F5EFE4;font-weight:700;letter-spacing:-.01em;display:block;margin-top:1px}

/* ── Footer ─────────────────────────── */
.wfooter{
  border-top:1px solid rgba(255,215,0,.05);
  padding:44px 48px;max-width:1240px;margin:0 auto;
  display:flex;align-items:center;justify-content:space-between;
  flex-wrap:wrap;gap:20px;
}
.wfooter-logo{height:26px;object-fit:contain;opacity:.65}
.wfooter-links{display:flex;gap:26px}
.wfooter-link{font-size:12px;color:#6B6055;text-decoration:none;transition:color .2s}
.wfooter-link:hover{color:#8A7F71}
.wfooter-copy{font-size:11px;color:#3A342E}

/* ── Divider ────────────────────────── */
.wdiv{max-width:1240px;margin:0 auto;height:1px;background:rgba(255,215,0,.06)}

/* ── Responsive ─────────────────────── */
@media(max-width:1024px){
  .wh-inner{grid-template-columns:1fr;gap:56px}
  .wh-stage{height:560px}
  .bento-grid{grid-template-columns:1fr}
  .bento-cell.tall{grid-row:span 1}
}
@media(max-width:900px){
  .wn{padding:0 20px}
  .wn-links .wn-link{display:none}
  .wh{padding:100px 20px 60px}
  .wsteps{grid-template-columns:1fr;border-radius:20px}
  .wstep+.wstep{border-left:none;border-top:1px solid rgba(255,215,0,.07)}
  .wreviews{grid-template-columns:1fr}
  .wprice-grid{grid-template-columns:1fr}
  .wsec{padding:80px 20px}
  .bento-section{padding:0 20px 80px}
  .wtest{padding:80px 20px}
  .wprice{padding:0 20px 80px}
  .wcta{padding:52px 24px}
  .wcta-wrap{padding:0 20px 80px}
  .wfooter{padding:36px 20px;flex-direction:column;align-items:flex-start}
}
@media(max-width:600px){
  .wh-stage{height:520px}
  .wh-phone-tilt{transform:rotateY(-10deg) rotateX(4deg) scale(.92)}
  .wh-h1{font-size:46px}
}
`;

/* ─────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────── */
export default function Welcome() {
  useEffect(() => {
    document.body.classList.add('landing');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.07 },
    );
    document.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el));

    // Cursor-driven parallax tilt for the hero phone
    const stage = document.querySelector<HTMLElement>('.wh-stage');
    const tilt = document.querySelector<HTMLElement>('.wh-phone-tilt');
    const onMove = (e: MouseEvent) => {
      if (!stage || !tilt) return;
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;   // -0.5 → 0.5
      const py = (e.clientY - r.top) / r.height - 0.5;
      tilt.style.setProperty('--ry', `${-16 + px * 18}deg`);
      tilt.style.setProperty('--rx', `${6 - py * 12}deg`);
    };
    const onLeave = () => {
      if (!tilt) return;
      tilt.style.setProperty('--ry', '-16deg');
      tilt.style.setProperty('--rx', '6deg');
    };
    stage?.addEventListener('mousemove', onMove);
    stage?.addEventListener('mouseleave', onLeave);

    return () => {
      document.body.classList.remove('landing');
      obs.disconnect();
      stage?.removeEventListener('mousemove', onMove);
      stage?.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Waffli — Stop Overthinking. Start Doing.</title>
        <meta name="description" content="The focus app that clears your head and gets you moving. Brain dump, one task at a time, and track your real progress." />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <style dangerouslySetInnerHTML={{ __html: showcaseCss }} />

      {/* ── FUTURISTIC BACKGROUND FIELD ── */}
      <div className="aurora" aria-hidden>
        <span className="a1" /><span className="a2" /><span className="a3" />
      </div>
      <div className="land-grid" aria-hidden />

      <div className="grain">

        {/* ── APP AMBIENT BACKGROUND (mirrors the app's AmbientBackdrop) ── */}
        <div className="land-rings" aria-hidden>
          <span className="lr1" /><span className="lr2" /><span className="lr3" /><span className="lr4" />
        </div>

        {/* ── NAV ──────────────────────────────────────── */}
        <nav className="wn">
          <img src="/images/waffli-logo.png" alt="Waffli" className="wn-logo" />
          <div className="wn-links">
            <a href="#screens"  className="wn-link">Screens</a>
            <a href="#features" className="wn-link">Features</a>
            <a href="#pricing"  className="wn-link">Pricing</a>
            <a href="#download" className="wn-cta">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download
            </a>
          </div>
        </nav>

        {/* ── HERO ──────────────────────────────────────── */}
        <section className="wh">
          <div className="wh-bg-glow-a" />
          <div className="wh-bg-glow-b" />
          <div className="wh-grid" />

          <div className="wh-inner">
            {/* Left */}
            <div>
              {/* Full wordmark logo — prominent at top */}
              <img src="/images/waffli-logo.png" alt="Waffli" className="h-logo wh-wordmark" />

              <h1 className="wh-h1 h-h1">
                Stop<br />
                overthinking<span className="dot">.</span>
                <em>Start doing.</em>
              </h1>

              <p className="wh-sub h-sub">
                The productivity app built for people who think too much.
                Clear your head, focus on one thing, and actually get things done.
              </p>

              <div className="wh-ctas h-ctas">
                <a href="#download" className="wbp">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </a>
                <a href="#download" className="wbs">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-17c0-.83 1-.9 1.5-.5l14 8.5-14 8.5C4 22 3 21.33 3 20.5z"/>
                  </svg>
                  Google Play
                </a>
              </div>

              <p className="wh-note h-note">Free to download · No credit card required</p>
            </div>

            {/* Right — real app, premium device tilt */}
            <div className="wh-stage h-vis">
              <div className="wh-stage-glow" />
              <div className="wh-enter">
                <div className="wh-float">
                  <div className="wh-phone-tilt">
                    <HeroPhone />
                  </div>
                </div>
              </div>
              <div className="wh-chip wh-chip-a">
                <span className="wh-chip-dot" />
                One task at a time
              </div>
              <div className="wh-chip wh-chip-b">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2.2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
                Brain dump in 60s
              </div>
            </div>
          </div>
        </section>

        {/* ── TICKER ─────────────────────────────────────── */}
        <div className="wticker">
          <div className="wticker-inner">
            {[...ticker, ...ticker].map((t, i) => (
              <span key={i} className="wticker-item">
                <span className="wticker-dot" />
                <span className={i % 4 === 1 ? 'wticker-hi' : ''}>{t}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── HOW IT WORKS ───────────────────────────────── */}
        <section>
          <div className="wsec">
            <div data-reveal>
              <span className="wsec-label">How it works</span>
              <h2 className="wsec-h2">Three steps to a<br /><span>calmer, clearer day</span></h2>
              <p className="wsec-sub">Less friction between your intentions and your actions.</p>
            </div>
            <div className="wsteps">
              {[
                { num:'01', icon:(
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v4"/></svg>
                  ), h:'Dump your thoughts',     p:"Voice or type whatever's in your head. Waffli captures it all and transforms mental noise into an actionable plan." },
                { num:'02', icon:(
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="#FFD700"/></svg>
                  ), h:'Focus on one thing',     p:'Waffli surfaces your single most important task right now. No lists to scroll. Just the thing that matters most.' },
                { num:'03', icon:(
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 15l3-4 3 2 4-6"/></svg>
                  ), h:'Celebrate your wins',    p:"See what you actually finished, not what's still pending. Daily and weekly insights that motivate, not shame." },
              ].map((s, i) => (
                <div key={i} className="wstep" data-reveal data-d={String(i + 1)}>
                  <div className="wstep-num">{s.num}</div>
                  <div className="wstep-icon">{s.icon}</div>
                  <h3 className="wstep-h3">{s.h}</h3>
                  <p  className="wstep-p">{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APP SCREENS SHOWCASE ───────────────────────── */}
        <AppShowcase />

        {/* ── BENTO FEATURE GRID ─────────────────────────── */}
        <section id="features">
          <div className="bento-section">
            <div data-reveal>
              <span className="wsec-label">Features</span>
              <h2 className="wsec-h2">Everything you need.<br /><span>Nothing you don't.</span></h2>
            </div>

            <div className="bento-grid">

              {/* Cell 1: Brain Dump */}
              <div className="bento-cell" data-reveal data-d="1">
                <div className="bento-img-wrap" style={{ height: 240 }}>
                  <img src="/images/screen-3.png" alt="Brain Dump" style={{ height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div className="bento-copy">
                  <span className="bento-tag">Brain Dump</span>
                  <h3 className="bento-h3">Speak freely. We'll handle the rest.</h3>
                  <p className="bento-p">Racing thoughts at 11pm? Just speak. Waffli captures everything and turns mental noise into a plan — so you can actually sleep.</p>
                  <div className="bento-pills">
                    <span className="bento-pill">Voice capture</span>
                    <span className="bento-pill">30 free dumps/month</span>
                    <span className="bento-pill">Instant clarity</span>
                  </div>
                </div>
              </div>

              {/* Cell 2: Just One Thing */}
              <div className="bento-cell" data-reveal data-d="2">
                <div className="bento-img-wrap" style={{ height: 240 }}>
                  <img src="/images/screen-1.png" alt="Just One Thing" style={{ height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div className="bento-copy">
                  <span className="bento-tag">Just One Thing</span>
                  <h3 className="bento-h3">The focus you've been looking for.</h3>
                  <p className="bento-p">No endless lists, no context switching. Waffli shows you exactly one task right now — your most important — and nothing else.</p>
                  <div className="bento-pills">
                    <span className="bento-pill">One task at a time</span>
                    <span className="bento-pill">Morning ritual</span>
                    <span className="bento-pill">Progress tracking</span>
                  </div>
                </div>
              </div>

              {/* Cell 3: Today Tasks */}
              <div className="bento-cell" data-reveal data-d="3">
                <div className="bento-img-wrap" style={{ height: 220 }}>
                  <img src="/images/screen-2.png" alt="Today Tasks" style={{ height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div className="bento-copy">
                  <span className="bento-tag">Smart Planning</span>
                  <h3 className="bento-h3">Your day, orchestrated.</h3>
                  <p className="bento-p">Tasks with time blocks, energy levels, and complexity. A 5-minute errand and a 90-minute deep-work session need different handling.</p>
                  <div className="bento-pills">
                    <span className="bento-pill">Time estimates</span>
                    <span className="bento-pill">Easy / Medium / Hard</span>
                    <span className="bento-pill">Smart scheduling</span>
                  </div>
                </div>
              </div>

              {/* Cell 4: Progress */}
              <div className="bento-cell" data-reveal data-d="4">
                <div className="bento-img-wrap" style={{ height: 220 }}>
                  <img src="/images/screen-4.png" alt="Progress Insights" style={{ height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div className="bento-copy">
                  <span className="bento-tag">Progress & Insights</span>
                  <h3 className="bento-h3">See what you actually achieved.</h3>
                  <p className="bento-p">Most apps track what you haven't done. Waffli celebrates what you have. Daily and weekly insights show your real momentum.</p>
                  <div className="bento-pills">
                    <span className="bento-pill">Done by complexity</span>
                    <span className="bento-pill">Category breakdown</span>
                    <span className="bento-pill">Activity streaks</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ───────────────────────────────── */}
        <div className="wdiv" />
        <section className="wtest">
          <div className="wtest-hd" data-reveal>
            <span className="wsec-label" style={{ justifyContent: 'center' }}>What people say</span>
            <h2 className="wsec-h2" style={{ textAlign: 'center' }}>Built for people who<br /><span>actually get things done</span></h2>
          </div>
          <div className="wreviews">
            {reviews.map((r, i) => (
              <div key={i} className="wreview" data-reveal data-d={String(i + 1)}>
                <div className="wreview-stars">{'★'.repeat(r.stars)}</div>
                <p className="wreview-quote">{r.text}</p>
                <div className="wreview-author">
                  <div className="wreview-av">{r.init}</div>
                  <div>
                    <div className="wreview-name">{r.name}</div>
                    <div className="wreview-role">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRICING ────────────────────────────────────── */}
        <div className="wdiv" />
        <section id="pricing" className="wprice">
          <div className="wprice-hd" data-reveal>
            <span className="wsec-label" style={{ justifyContent: 'center' }}>Pricing</span>
            <h2 className="wsec-h2" style={{ textAlign: 'center' }}>Simple, transparent<br /><span>pricing</span></h2>
            <p className="wsec-sub" style={{ margin: '0 auto', textAlign: 'center' }}>Start free, upgrade when you're ready. No tricks, no dark patterns.</p>
          </div>
          <div className="wprice-grid">
            {plans.map((plan, i) => (
              <div key={i} className={`wplan${plan.featured ? ' featured' : ''}`} data-reveal data-d={String(i + 1)}>
                {plan.badge && <span className="wplan-badge">{plan.badge}</span>}
                <div className="wplan-name">{plan.name}</div>
                <div className="wplan-price"><span>$</span>{plan.price}</div>
                <div className="wplan-period">{plan.period}</div>
                <ul className="wplan-feats">
                  {plan.features.map((f, j) => (
                    <li key={j} className={`wplan-feat${f.active ? ' on' : ''}`}>{f.label}</li>
                  ))}
                </ul>
                <a href="#download" className={`wplan-cta ${plan.cta.style}`}>{plan.cta.label}</a>
              </div>
            ))}
          </div>
        </section>

        {/* ── DOWNLOAD CTA ───────────────────────────────── */}
        <div id="download" className="wcta-wrap">
          <div className="wcta" data-reveal>
            <div className="wcta-glow" />
            <h2 className="wcta-h2">Ready to stop<br /><em>overthinking?</em></h2>
            <p className="wcta-sub">Download Waffli free. Your calmer, clearer day starts now.</p>
            <div className="wcta-btns">
              <a href="#" className="wstore">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#F5EFE4">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div><span className="wstore-sm">Download on the</span><span className="wstore-lg">App Store</span></div>
              </a>
              <a href="#" className="wstore">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#F5EFE4">
                  <path d="M3 20.5v-17c0-.83 1-.9 1.5-.5l14 8.5-14 8.5C4 22 3 21.33 3 20.5z"/>
                </svg>
                <div><span className="wstore-sm">Get it on</span><span className="wstore-lg">Google Play</span></div>
              </a>
            </div>
          </div>
        </div>

        {/* ── FOOTER ─────────────────────────────────────── */}
        <footer>
          <div className="wfooter">
            <img src="/images/waffli-logo.png" alt="Waffli" className="wfooter-logo" />
            <div className="wfooter-links">
              <a href="/privacy"          className="wfooter-link">Privacy Policy</a>
              <a href="/terms"            className="wfooter-link">Terms of Use</a>
              <a href="/account-deletion" className="wfooter-link">Account Deletion</a>
              <a href="/support"          className="wfooter-link">Support</a>
              <a href="mailto:sinatechnologies@outlook.com" className="wfooter-link">Contact</a>
            </div>
            <p className="wfooter-copy">© {new Date().getFullYear()} Waffli. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </>
  );
}
