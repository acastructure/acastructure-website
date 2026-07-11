import { Link } from "react-router-dom";
import gradpathLogo from "../assets/logo_gradpath.svg";
import gradpathHero from "../assets/gradpath_hero.webp";
import gradpathStudents from "../assets/gradpath_students.webp";
import phoneTranscript from "../assets/phone_transcript.webp";
import phoneDegreeMap from "../assets/phone_degree_map.webp";
import phoneSemester from "../assets/phone_semester.webp";
import phoneTransfer from "../assets/phone_transfer.webp";
import phoneDegreeChange from "../assets/phone_degree_change.webp";

const features = [
  { label: "Transcript", desc: "We import and organize your academic history so you can see the full picture.", img: phoneTranscript },
  { label: "Degree Map", desc: "See every requirement, every course, and every milestone on your path to graduation.", img: phoneDegreeMap },
  { label: "Semester Optimizer", desc: "Optimize every semester with syllabus-based grade tracking and intelligent planning.", img: phoneSemester },
  { label: "Transfer", desc: "Explore transfer pathways and see how your credits will apply.", img: phoneTransfer },
  { label: "Degree Change", desc: "Thinking of a change? Model different degrees and see what it would take.", img: phoneDegreeChange },
];

export default function GradPathPage() {
  return (
    <div className="font-body overflow-x-hidden">

      {/* HERO */}
      <section className="py-16 px-6" style={{ background: "#FAFAF7" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <img src={gradpathLogo} alt="GradPath" style={{ height: 60, width: "auto" }} />
              <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "#1B3A0E", letterSpacing: "0.2em" }}>GradPath</p>
            </div>
            <h1 className="font-display font-bold leading-tight mb-5" style={{ fontSize: "clamp(34px, 5vw, 64px)", color: "#1A1A2E" }}>
              Every course.<br />One clear path.
            </h1>
            <p className="font-body leading-relaxed mb-8" style={{ fontSize: "clamp(14px, 1.4vw, 16px)", color: "#4A5568", maxWidth: 440 }}>
              GradPath organizes your university's degree requirements, transfer pathways, semester planning, and progress into one clear experience — built directly from your institution's academic bulletin.
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <a href="#" className="inline-flex items-center no-underline" style={{ height: 44 }}>
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" style={{ height: 44, width: "auto", display: "block" }} />
              </a>
              <a href="#" className="inline-flex items-center no-underline" style={{ height: 44 }}>
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" style={{ height: 44, width: "auto", display: "block" }} />
              </a>
            </div>
          </div>
          <div>
            <img src={gradpathHero} alt="GradPath on iPhone" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-16 px-6" style={{ background: "#fff", borderTop: "1px solid #E8E4D9" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-semibold text-center mb-12" style={{ fontSize: "clamp(22px, 3vw, 34px)", color: "#1A1A2E" }}>
            Everything you need. Exactly when you need it.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Know where you stand.", desc: "Instantly see your completed courses, in-progress classes, GE fulfillment, and how every requirement is tracking toward your degree." },
              { title: "Know where you're going.", desc: "Explore your full Degree Map, plan smarter semesters with the Optimizer, and stay on track toward graduation with confidence." },
              { title: "Know what's possible.", desc: "Evaluate transfer options, model degree changes, and understand the impact of every decision before you make it." },
            ].map(v => (
              <div key={v.title} className="text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ border: "2px solid #1B3A0E" }}>
                  <svg width="22" height="22" fill="none" stroke="#1B3A0E" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h3 className="font-display font-semibold mb-3" style={{ fontSize: "clamp(16px, 1.8vw, 18px)", color: "#1A1A2E" }}>{v.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#4A5568" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE FLOW */}
      <section className="py-16 px-6" style={{ background: "#F0EDE4" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-semibold text-center mb-10" style={{ fontSize: "clamp(22px, 3vw, 34px)", color: "#1A1A2E" }}>
            Everything working together.
          </h2>
          {/* Desktop: 5 columns | Mobile: horizontal scroll */}
          <div className="hidden md:grid gap-4" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
            {features.map((f, i) => (
              <div key={f.label} className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <span className="w-8 h-8 rounded-full text-white font-body font-semibold text-sm flex items-center justify-center" style={{ background: "#1B3A0E" }}>{i + 1}</span>
                </div>
                <div className="bg-white rounded-2xl p-4 mb-4" style={{ border: "1px solid #E8E4D9" }}>
                  <h3 className="font-display font-semibold text-sm mb-2" style={{ color: "#1A1A2E" }}>{f.label}</h3>
                  <p className="font-body leading-relaxed" style={{ fontSize: 11, color: "#4A5568" }}>{f.desc}</p>
                </div>
                <img src={f.img} alt={f.label} className="w-full h-auto rounded-2xl" style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }} />
              </div>
            ))}
          </div>
          {/* Mobile: scrollable cards */}
          <div className="md:hidden flex gap-4 overflow-x-auto pb-4" style={{ WebkitOverflowScrolling: "touch" }}>
            {features.map((f, i) => (
              <div key={f.label} className="shrink-0" style={{ width: 200 }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full text-white font-body font-semibold text-xs flex items-center justify-center shrink-0" style={{ background: "#1B3A0E" }}>{i + 1}</span>
                  <span className="font-display font-semibold text-sm" style={{ color: "#1A1A2E" }}>{f.label}</span>
                </div>
                <img src={f.img} alt={f.label} className="w-full h-auto rounded-2xl mb-3" style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }} />
                <p className="font-body text-xs leading-relaxed" style={{ color: "#4A5568" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 px-6" style={{ background: "#0A1628" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: "#B8860B", letterSpacing: "0.2em" }}>Built to earn your trust first</p>
            <h2 className="font-display font-bold text-white leading-tight mb-5" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
              Transparent today.<br />Fair tomorrow.
            </h2>
            <p className="font-body leading-relaxed mb-8" style={{ fontSize: "clamp(14px, 1.4vw, 16px)", color: "rgba(250,250,247,0.6)" }}>
              During our beta at SF State and CCSF, GradPath is completely free.
            </p>
            <img src={gradpathStudents} alt="Students on campus" className="w-full rounded-2xl" />
          </div>
          <div className="flex flex-col gap-4">
            {[
              { label: "Now through Dec 2026", price: "Free", detail: "Full access during the beta period at SFSU and CCSF.", note: "No payment required.", color: "#4A9FE8" },
              { label: "Starting Jan 1, 2027", price: "$12/mo", detail: "Continued access for accounts created during the beta.", note: "Cancel anytime.", color: "#B8860B" },
              { label: "Founding Beta Members", price: "Free for life", detail: "Permanent access for the original founding group.", note: "Never billed.", color: "#22C55E" },
            ].map(p => (
              <div key={p.label} className="rounded-2xl p-6" style={{ background: "#112240", border: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em" }}>{p.label}</p>
                <p className="font-display font-bold mb-2" style={{ fontSize: "clamp(22px, 2.5vw, 28px)", color: p.color }}>{p.price}</p>
                <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{p.detail}</p>
                <p className="font-body text-sm mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>{p.note}</p>
              </div>
            ))}
            <p className="font-body text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
              🔒 Subscriptions are billed directly through AcaStructure, not the App Store.
            </p>
          </div>
        </div>
      </section>

      {/* TAGLINE */}
      <section className="py-16 px-6 text-center" style={{ background: "#FAFAF7" }}>
        <h2 className="font-display font-bold leading-tight" style={{ fontSize: "clamp(26px, 3.5vw, 44px)", color: "#1A1A2E" }}>
          Built by one of you.<br />For all of us.
        </h2>
        <div style={{ width: 48, height: 2, background: "#1B3A0E", margin: "20px auto 0" }} />
      </section>

    </div>
  );
}
