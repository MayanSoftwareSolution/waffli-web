import { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';

interface Props {
    title: string;
    lastUpdated: string;
    description: string;
    children: React.ReactNode;
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}

body.legal-page{
  background:#161210;color:#F5EFE4;
  font-family:'Manrope',sans-serif;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}

/* ── Nav (same as welcome — flat & modern) ─────────── */
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

/* ── Page header ───────────────────── */
.lh-wrap{
  padding:120px 24px 60px;
  text-align:center;position:relative;
  overflow:hidden;
}
.lh-glow{
  position:absolute;top:-20%;left:50%;transform:translateX(-50%);
  width:700px;height:500px;border-radius:50%;
  background:radial-gradient(circle,rgba(255,215,0,.06) 0%,transparent 65%);
  pointer-events:none;
}
.lh-grid{
  position:absolute;inset:0;pointer-events:none;
  background-image:
    linear-gradient(rgba(255,215,0,.018) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,215,0,.018) 1px,transparent 1px);
  background-size:72px 72px;
  mask-image:radial-gradient(ellipse at center,black 10%,transparent 70%);
}
.lh-logo{
  height:36px;object-fit:contain;margin-bottom:28px;
  display:inline-block;position:relative;
  filter:drop-shadow(0 0 12px rgba(255,215,0,.15));
}
.lh-h1{
  font-size:clamp(32px,5vw,54px);font-weight:800;
  letter-spacing:-.03em;line-height:1.1;
  color:#F5EFE4;margin-bottom:10px;position:relative;
}
.lh-updated{
  font-size:13px;color:#6B6055;font-weight:500;
  margin-bottom:36px;position:relative;
}
.lh-updated strong{color:#8A7F71;font-weight:600}

/* Quick nav pills */
.lh-pills{
  display:flex;flex-wrap:wrap;justify-content:center;gap:8px;
  position:relative;
}
.lh-pill{
  display:inline-flex;align-items:center;gap:6px;
  padding:8px 18px;border-radius:100px;
  font-size:12px;font-weight:600;text-decoration:none;
  border:1px solid rgba(255,215,0,.15);
  color:#8A7F71;letter-spacing:.02em;
  transition:all .2s;
  background:rgba(255,215,0,.03);
}
.lh-pill:hover{border-color:rgba(255,215,0,.35);color:#F5EFE4;background:rgba(255,215,0,.06)}
.lh-pill.active{
  border-color:rgba(255,215,0,.35);
  color:#FFD700;background:rgba(255,215,0,.08);
}
.lh-pill svg{flex-shrink:0;opacity:.7}

/* ── Layout ─────────────────────────── */
.lg-root{max-width:1140px;margin:0 auto;padding:0 24px 100px;
  display:grid;grid-template-columns:1fr 220px;gap:40px;align-items:start;}
.lg-content{min-width:0}
.lg-card{
  background:#1C1814;
  border:1px solid rgba(255,215,0,.08);
  border-radius:24px;
  padding:52px;
  box-shadow:0 24px 80px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,215,0,.05);
}

/* ── TOC sidebar ─────────────────────── */
.lg-toc{
  position:sticky;top:96px;
  background:#1C1814;
  border:1px solid rgba(255,215,0,.08);
  border-radius:18px;padding:24px 20px;
}
.lg-toc-title{
  font-size:10px;font-weight:700;color:#6B6055;
  letter-spacing:.12em;text-transform:uppercase;margin-bottom:16px;
}
.lg-toc-list{list-style:none;display:flex;flex-direction:column;gap:2px}
.lg-toc-item a{
  display:block;font-size:12px;font-weight:500;color:#6B6055;
  text-decoration:none;padding:6px 10px;border-radius:8px;
  transition:all .15s;letter-spacing:-.01em;line-height:1.4;
}
.lg-toc-item a:hover{color:#C4B99A;background:rgba(255,215,0,.04)}
.lg-toc-item.toc-active a{color:#FFD700;background:rgba(255,215,0,.06)}

/* ── Legal prose ─────────────────────── */
.legal-prose{font-size:15px;line-height:1.75;color:#8A7F71}

.legal-prose > p{margin-bottom:16px}
.legal-prose > p:last-child{margin-bottom:0}

.legal-prose strong{color:#F5EFE4;font-weight:600}

.legal-prose a{color:#FFD700;text-decoration:none;border-bottom:1px solid rgba(255,215,0,.25);transition:border-color .2s}
.legal-prose a:hover{border-color:#FFD700}

.legal-prose h2{
  font-size:1.2rem;font-weight:800;
  color:#FFD700;letter-spacing:-.02em;
  margin:52px 0 16px;
  padding-top:28px;
  border-top:1px solid rgba(255,215,0,.1);
}
.legal-prose h2:first-child{margin-top:0;padding-top:0;border-top:none}

.legal-prose h3{
  font-size:1rem;font-weight:700;
  color:#F5EFE4;letter-spacing:-.01em;
  margin:28px 0 10px;
}

.legal-prose ul,.legal-prose ol{
  padding-left:0;margin:12px 0 20px;
  list-style:none;display:flex;flex-direction:column;gap:8px;
}
.legal-prose ul li,.legal-prose ol li{
  color:#8A7F71;padding-left:20px;position:relative;
}
.legal-prose ul li::before{
  content:'';position:absolute;left:0;top:9px;
  width:5px;height:5px;border-radius:50%;
  background:rgba(255,215,0,.4);flex-shrink:0;
}
.legal-prose ol{counter-reset:li}
.legal-prose ol li{counter-increment:li}
.legal-prose ol li::before{
  content:counter(li);position:absolute;left:0;top:0;
  font-size:11px;font-weight:700;color:#FFD700;
  width:16px;text-align:right;
}

/* Tables */
.legal-prose table{
  width:100%;border-collapse:collapse;margin:20px 0;
  border-radius:16px;overflow:hidden;
  border:1px solid rgba(255,215,0,.08);
}
.legal-prose th{
  background:rgba(255,215,0,.05);
  color:#F5EFE4;font-size:12px;font-weight:700;
  letter-spacing:.04em;text-transform:uppercase;
  padding:13px 16px;text-align:left;
  border-bottom:1px solid rgba(255,215,0,.08);
}
.legal-prose td{
  padding:12px 16px;color:#8A7F71;font-size:14px;
  border-bottom:1px solid rgba(255,215,0,.05);vertical-align:top;
}
.legal-prose tr:last-child td{border-bottom:none}
.legal-prose tr:hover td{background:rgba(255,215,0,.015)}

/* Notice box (gold) */
.notice{
  background:rgba(255,215,0,.05);
  border:1px solid rgba(255,215,0,.2);
  border-radius:16px;padding:16px 20px;margin:20px 0;
}
.notice p{color:#C4B99A;margin:0;font-size:14px;line-height:1.65}
.notice strong{color:#FFD700}

/* Danger box (red) */
.danger{
  background:rgba(239,68,68,.06);
  border:1px solid rgba(239,68,68,.25);
  border-radius:16px;padding:16px 20px;margin:20px 0;
}
.danger p{color:#fca5a5;margin:0;font-size:14px;line-height:1.65}

/* Button row */
.btn-row{display:flex;flex-wrap:wrap;gap:10px;margin:24px 0}
.btn-pill{
  display:inline-flex;align-items:center;gap:7px;
  padding:10px 20px;border-radius:100px;
  border:1px solid rgba(255,215,0,.25);
  background:rgba(255,215,0,.06);
  color:#C4A84A;font-size:13px;font-weight:600;
  text-decoration:none;letter-spacing:.01em;
  transition:all .2s;
}
.btn-pill:hover{border-color:rgba(255,215,0,.45);color:#FFD700;background:rgba(255,215,0,.1);transform:translateY(-1px)}
.btn-pill.danger-pill{
  border-color:rgba(239,68,68,.3);background:rgba(239,68,68,.06);color:#fca5a5;
}
.btn-pill.danger-pill:hover{border-color:rgba(239,68,68,.5);background:rgba(239,68,68,.1)}

/* Support grid */
.support-grid{
  display:grid;grid-template-columns:repeat(2,1fr);
  gap:14px;margin:24px 0;
}
.support-card{
  background:#201C17;border:1px solid rgba(255,215,0,.08);
  border-radius:16px;padding:22px;
  transition:border-color .2s,transform .2s;
}
.support-card:hover{border-color:rgba(255,215,0,.18);transform:translateY(-2px)}
.support-card h3{
  font-size:14px;font-weight:700;color:#F5EFE4;
  margin:0 0 8px!important;padding:0!important;border:none!important;letter-spacing:-.01em;
}
.support-card p{color:#8A7F71;font-size:13px;line-height:1.6;margin:0!important}
.support-card-icon{
  width:36px;height:36px;border-radius:10px;
  background:rgba(255,215,0,.08);border:1px solid rgba(255,215,0,.13);
  display:flex;align-items:center;justify-content:center;
  font-size:16px;margin-bottom:12px;
}

/* Intro block */
.lg-intro{
  background:rgba(255,215,0,.04);
  border-left:3px solid #FFD700;
  border-radius:0 12px 12px 0;
  padding:14px 18px;margin-bottom:28px;
}
.lg-intro p{color:#C4B99A;font-size:14px;line-height:1.65;margin:0}
.lg-intro strong{color:#FFD700}

/* ── Footer ─────────────────────────── */
.wfooter-wrap{border-top:1px solid rgba(255,215,0,.05);padding:44px 48px}
.wfooter{
  max-width:1140px;margin:0 auto;
  display:flex;align-items:center;justify-content:space-between;
  flex-wrap:wrap;gap:20px;
}
.wfooter-logo{height:26px;object-fit:contain;opacity:.65}
.wfooter-links{display:flex;gap:24px;flex-wrap:wrap}
.wfooter-link{font-size:12px;color:#6B6055;text-decoration:none;transition:color .2s}
.wfooter-link:hover{color:#8A7F71}
.wfooter-copy{font-size:11px;color:#3A342E}

/* ── Responsive ─────────────────────── */
@media(max-width:1000px){
  .lg-root{grid-template-columns:1fr;gap:0}
  .lg-toc{display:none}
  .lg-card{padding:36px 28px}
}
@media(max-width:700px){
  .wn{padding:0 16px}
  .wn-links .wn-link{display:none}
  .lh-wrap{padding:100px 16px 48px}
  .lg-card{padding:28px 18px;border-radius:18px}
  .support-grid{grid-template-columns:1fr}
  .wfooter-wrap{padding:36px 16px}
  .wfooter{flex-direction:column;align-items:flex-start}
}
`;

export function LegalLayout({ title, lastUpdated, description, children }: Props) {
    const [tocItems, setTocItems] = useState<{ id: string; text: string }[]>([]);
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        document.body.classList.add('legal-page');

        // Build TOC from h2 elements
        const headings = Array.from(document.querySelectorAll('.legal-prose h2'));
        const items = headings.map((el, i) => {
            const id = `section-${i}`;
            el.id = id;
            return { id, text: el.textContent?.replace(/^\d+\.\s*/, '') ?? '' };
        });
        setTocItems(items);

        // Active section tracking
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { rootMargin: '-80px 0px -60% 0px' },
        );
        headings.forEach((el) => observer.observe(el));

        return () => {
            document.body.classList.remove('legal-page');
            observer.disconnect();
        };
    }, []);

    const navPages = [
        { href: '/privacy',          label: 'Privacy Policy',    icon: '🔒' },
        { href: '/terms',             label: 'Terms of Use',      icon: '📄' },
        { href: '/account-deletion',  label: 'Account Deletion',  icon: '🗑' },
        { href: '/support',           label: 'Support',           icon: '💬' },
    ];

    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

    return (
        <>
            <Head>
                <title>{`${title} — Waffli`}</title>
                <meta name="description" content={description} />
            </Head>
            <style dangerouslySetInnerHTML={{ __html: css }} />

            {/* Nav */}
            <nav className="wn">
                <a href="/"><img src="/images/waffli-logo.png" alt="Waffli" className="wn-logo" /></a>
                <div className="wn-links">
                    <a href="/#features" className="wn-link">Features</a>
                    <a href="/#pricing"  className="wn-link">Pricing</a>
                    <a href="/#download" className="wn-cta">Download</a>
                </div>
            </nav>

            {/* Page header */}
            <div className="lh-wrap">
                <div className="lh-glow" />
                <div className="lh-grid" />
                <img src="/images/waffli-logo.png" alt="Waffli" className="lh-logo" />
                <h1 className="lh-h1">{title}</h1>
                <p className="lh-updated"><strong>Last updated:</strong> {lastUpdated}</p>
                <nav className="lh-pills">
                    {navPages.map((p) => (
                        <a
                            key={p.href}
                            href={p.href}
                            className={`lh-pill${currentPath === p.href ? ' active' : ''}`}
                        >
                            <span>{p.icon}</span>
                            {p.label}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Content + TOC */}
            <div className="lg-root">
                <div className="lg-content">
                    <article className="lg-card legal-prose">
                        {children}
                    </article>
                </div>

                {/* TOC sidebar */}
                {tocItems.length > 0 && (
                    <aside className="lg-toc">
                        <div className="lg-toc-title">On this page</div>
                        <ul className="lg-toc-list">
                            {tocItems.map((item) => (
                                <li
                                    key={item.id}
                                    className={`lg-toc-item${activeId === item.id ? ' toc-active' : ''}`}
                                >
                                    <a href={`#${item.id}`}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </aside>
                )}
            </div>

            {/* Footer */}
            <div className="wfooter-wrap">
                <div className="wfooter">
                    <img src="/images/waffli-logo.png" alt="Waffli" className="wfooter-logo" />
                    <div className="wfooter-links">
                        <a href="/privacy"           className="wfooter-link">Privacy Policy</a>
                        <a href="/terms"             className="wfooter-link">Terms of Use</a>
                        <a href="/account-deletion"  className="wfooter-link">Account Deletion</a>
                        <a href="/support"           className="wfooter-link">Support</a>
                    </div>
                    <p className="wfooter-copy">© {new Date().getFullYear()} Waffli. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}
