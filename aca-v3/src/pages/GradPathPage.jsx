import { Link } from "react-router-dom";
import { SketchStudentsWalking, SketchCampusWide } from "../components/Sketches";

const phoneScreen = (
  <div style={{ width: 220, background: "#1A1A2E", borderRadius: 32, padding: 10, boxShadow: "0 30px 80px rgba(0,0,0,0.4)" }}>
    <div style={{ background: "#0A1628", borderRadius: 24, padding: 16, overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <svg width="18" height="18" viewBox="0 0 830 719" fill="none">
          <path d="M415 679 L52 470 L52 370 L415 580 L778 370 L778 470 Z" fill="#3DDC3D"/>
          <path d="M130 449 L52 404 L52 270 L778 270 L778 404 L700 449 L415 295 Z" fill="#E8B400"/>
        </svg>
        <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 13, fontWeight: 600, color: "#fff" }}>GradPath</span>
      </div>
      <div style={{ background: "#112240", borderRadius: 8, padding: "8px 10px", marginBottom: 10 }}>
        <p style={{ fontFamily: "monospace", fontSize: 9, color: "#B8860B" }}>SF State · Philosophy</p>
        <p style={{ fontFamily: "monospace", fontSize: 8, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Build Your Path. Own Your Future</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 10 }}>
        {[["19%", "of Path Completed"], ["Fall 2026", "Est. Graduation"]].map(([val, label]) => (
          <div key={val} style={{ background: "#112240", borderRadius: 8, padding: 8, textAlign: "center" }}>
            <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontWeight: 700, color: "#fff" }}>{val}</p>
            <p style={{ fontFamily: "monospace", fontSize: 7, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{label}</p>
          </div>
        ))}
      </div>
      <p style={{ fontFamily: "monospace", fontSize: 7, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6 }}>Core Features</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4 }}>
        {[["📄", "Transcript"], ["🗺️", "Degree Map"], ["📅", "Semester"], ["📊", "GE Tracker"], ["🔄", "Degree Change"], ["🔁", "Transfer"]].map(([icon, label]) => (
          <div key={label} style={{ background: "#112240", borderRadius: 6, padding: "6px 4px", textAlign: "center" }}>
            <p style={{ fontSize: 12 }}>{icon}</p>
            <p style={{ fontFamily: "monospace", fontSize: 6, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const features = [
  { label: "Transcript", desc: "We import and organize your academic history so you can see the full picture." },
  { label: "Degree Map", desc: "See every requirement, every course, and every milestone on your path to graduation." },
  { label: "Semester Optimizer", desc: "Optimize every semester with syllabus-based grade tracking and intelligent planning." },
  { label: "Transfer", desc: "Explore transfer pathways and see how your credits will apply." },
  { label: "Degree Change", desc: "Thinking of a change? Model different degrees and see what it would take." },
];

export default function GradPathPage() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section className="py-20 overflow-hidden" style={{ background: "#FAFAF7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase mb-5" style={{ color: "#1B3A0E" }}>GradPath</p>
              <h1 className="font-display font-bold leading-[1.0]" style={{ fontSize: "clamp(42px,5.5vw,64px)", color: "#1A1A2E" }}>
                Every course.<br />One clear path.
              </h1>
              <p className="font-body leading-relaxed mt-6 max-w-md" style={{ fontSize: "16px", color: "#4A5568" }}>
                GradPath organizes your university's degree requirements, transfer pathways, semester planning, and progress into one clear experience — built directly from your institution's academic bulletin.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href="#" className="inline-flex items-center gap-2 font-body text-sm font-semibold text-white px-5 py-3 rounded-lg" style={{ background: "#1A1A2E" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download on App Store
                </a>
                <a href="#" className="inline-flex items-center gap-2 font-body text-sm font-semibold text-white px-5 py-3 rounded-lg" style={{ background: "#1A1A2E" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.31.17.67.21 1.03.11l12.03-12.03-3.56-3.56L3.18 23.76zM20.7 9.59l-2.31-1.33-3.79 3.79 3.79 3.79 2.33-1.35c.66-.38.66-1.52-.02-1.9zM1.28.56C1.1.76 1 1.06 1 1.44v21.12c0 .38.1.68.28.88l.04.04 11.83-11.83v-.26L1.32.52.28.56zM12.91 13.29l-3.79-3.79 3.79-3.79 3.56 3.56-3.56 4.02z"/></svg>
                  Get it on Google Play
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center relative">
              <div className="absolute inset-0 opacity-20">
                <SketchCampusWide className="w-full h-full" />
              </div>
              <div className="relative">{phoneScreen}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="py-20 border-t" style={{ background: "#FAFAF7", borderColor: "#E8E4D9" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-semibold text-center mb-16" style={{ fontSize: "clamp(24px,3vw,36px)", color: "#1A1A2E" }}>
            Everything you need. Exactly when you need it.
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Know where you stand.", desc: "Instantly see your completed courses, in-progress classes, GE fulfillment, and how every requirement is tracking toward your degree." },
              { title: "Know where you're going.", desc: "Explore your full Degree Map, plan smarter semesters with the Optimizer, and stay on track toward graduation with confidence." },
              { title: "Know what's possible.", desc: "Evaluate transfer options, model degree changes, and understand the impact of every decision before you make it." },
            ].map(v => (
              <div key={v.title} className="text-center">
                <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center border-2" style={{ borderColor: "#1B3A0E" }}>
                  <svg width="22" height="22" fill="none" stroke="#1B3A0E" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h3 className="font-display font-semibold text-lg mb-3" style={{ color: "#1A1A2E" }}>{v.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#4A5568" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature flow */}
      <section className="py-24" style={{ background: "#F0EDE4" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-semibold text-center mb-16" style={{ fontSize: "clamp(24px,3vw,36px)", color: "#1A1A2E" }}>
            Everything working together.
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {features.map((f, i) => (
              <div key={f.label} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <span className="w-8 h-8 rounded-full text-white font-body text-sm font-semibold flex items-center justify-center" style={{ background: "#1B3A0E" }}>
                    {i + 1}
                  </span>
                  {i < features.length - 1 && <span className="hidden md:block ml-2 text-gray-400">→</span>}
                </div>
                <div className="bg-white rounded-xl p-5 border" style={{ borderColor: "#E8E4D9" }}>
                  <h3 className="font-display font-semibold text-base mb-2" style={{ color: "#1A1A2E" }}>{f.label}</h3>
                  <p className="font-body text-xs leading-relaxed" style={{ color: "#4A5568" }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24" style={{ background: "#0A1628" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase mb-4" style={{ color: "#B8860B" }}>Built to earn your trust first</p>
              <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: "clamp(32px,4vw,52px)" }}>
                Transparent today.<br />Fair tomorrow.
              </h2>
              <p className="font-body text-white/65 leading-relaxed mt-5" style={{ fontSize: "16px" }}>
                During our beta at SF State and CCSF, GradPath is completely free.
              </p>
              <div className="mt-10">
                <SketchStudentsWalking className="w-full opacity-50" />
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Now through Dec 2026", price: "Free", detail: "Full access during the beta period at SFSU and CCSF.", note: "No payment required.", color: "#4A9FE8" },
                { label: "Starting Jan 1, 2027", price: "$12/mo", detail: "Continued access for accounts created during the beta.", note: "Cancel anytime.", color: "#B8860B" },
                { label: "Founding Beta Members", price: "Free for life", detail: "Permanent access for the original founding group.", note: "Never billed.", color: "#22C55E" },
              ].map(p => (
                <div key={p.label} className="rounded-xl p-6 border" style={{ background: "#112240", borderColor: "rgba(255,255,255,0.1)" }}>
                  <p className="font-mono text-[10px] tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>{p.label}</p>
                  <p className="font-display font-bold text-2xl mb-2" style={{ color: p.color }}>{p.price}</p>
                  <p className="font-body text-sm text-white/65">{p.detail}</p>
                  <p className="font-body text-sm mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>{p.note}</p>
                </div>
              ))}
              <p className="font-body text-xs text-center" style={{ color: "rgba(255,255,255,0.35)" }}>
                🔒 Subscriptions are billed directly through AcaStructure, not the App Store.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-20" style={{ background: "#FAFAF7" }}>
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold leading-tight" style={{ fontSize: "clamp(30px,4vw,48px)", color: "#1A1A2E" }}>
            Built by one of you.<br />For all of us.
          </h2>
          <div className="w-12 h-0.5 mx-auto mt-5 mb-5" style={{ background: "#1B3A0E" }} />
          <Link to="/about" className="font-body text-sm font-semibold transition-colors" style={{ color: "#1E5FA8" }}>
            Our story →
          </Link>
        </div>
      </section>
    </div>
  );
}
