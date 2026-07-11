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
  { label: "Transcript", desc: "We import and organize your academic history so you can see the full picture." },
  { label: "Degree Map", desc: "See every requirement, every course, and every milestone on your path to graduation." },
  { label: "Semester Optimizer", desc: "Optimize every semester with syllabus-based grade tracking and intelligent planning." },
  { label: "Transfer", desc: "Explore transfer pathways and see how your credits will apply." },
  { label: "Degree Change", desc: "Thinking of a change? Model different degrees and see what it would take." },
];

export default function GradPathPage() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="r-section" style={{ background: "#FAFAF7" }}>
        <div className="r-max r-grid-2">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <img src={gradpathLogo} alt="GradPath" style={{ height: 64, width: "auto" }} />
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#1B3A0E" }}>GradPath</p>
            </div>
            <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(36px,5vw,68px)", lineHeight: 1.0, color: "#1A1A2E", marginBottom: 12 }}>
              Every course.<br />One clear path.
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px,1.4vw,16px)", lineHeight: 1.75, color: "#4A5568", marginBottom: 32 }}>
              GradPath organizes your university's degree requirements, transfer pathways, semester planning, and progress into one clear experience — built directly from your institution's academic bulletin.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <a href="#" style={{ display: "inline-block", textDecoration: "none" }}>
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" style={{ height: 44, width: "auto", display: "block" }} />
              </a>
              <a href="#" style={{ display: "inline-block", textDecoration: "none" }}>
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" style={{ height: 64, width: "auto", display: "block", marginTop: -10 }} />
              </a>
            </div>
          </div>
          <div>
            <img src={gradpathHero} alt="GradPath app on iPhone" style={{ width: "100%", height: "auto", borderRadius: 16 }} />
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="r-section" style={{ background: "#fff", borderTop: "1px solid #E8E4D9" }}>
        <div className="r-max">
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(22px,3vw,34px)", color: "#1A1A2E", textAlign: "center", marginBottom: 48 }}>
            Everything you need. Exactly when you need it.
          </h2>
          <div className="r-grid-3">
            {[
              { title: "Know where you stand.", desc: "Instantly see your completed courses, in-progress classes, GE fulfillment, and how every requirement is tracking toward your degree." },
              { title: "Know where you're going.", desc: "Explore your full Degree Map, plan smarter semesters with the Optimizer, and stay on track toward graduation with confidence." },
              { title: "Know what's possible.", desc: "Evaluate transfer options, model degree changes, and understand the impact of every decision before you make it." },
            ].map(v => (
              <div key={v.title} style={{ textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", border: "2px solid #1B3A0E", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="22" height="22" fill="none" stroke="#1B3A0E" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(16px,1.8vw,18px)", color: "#1A1A2E", marginBottom: 12 }}>{v.title}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.75, color: "#4A5568" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE FLOW */}
      <section className="r-section" style={{ background: "#F0EDE4" }}>
        <div className="r-max">
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(22px,3vw,34px)", color: "#1A1A2E", textAlign: "center", marginBottom: 40 }}>
            Everything working together.
          </h2>
          <div className="r-grid-5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
            {features.map((f, i) => (
              <div key={f.label} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <span style={{ width: 30, height: 30, borderRadius: "50%", background: "#1B3A0E", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
                </div>
                <div style={{ background: "#fff", borderRadius: 16, padding: 16, border: "1px solid #E8E4D9" }}>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 14, color: "#1A1A2E", marginBottom: 8 }}>{f.label}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, lineHeight: 1.7, color: "#4A5568" }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* PHONE SCREENSHOTS */}
          <div className="r-grid-5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, marginTop: 24 }}>
            {[phoneTranscript, phoneDegreeMap, phoneSemester, phoneTransfer, phoneDegreeChange].map((src, i) => (
              <img key={i} src={src} alt={features[i].label} style={{ width: "100%", height: "auto", borderRadius: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }} />
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="r-section" style={{ background: "#0A1628" }}>
        <div className="r-max r-grid-pricing">
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B8860B", marginBottom: 16 }}>Built to earn your trust first</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(28px,4vw,48px)", color: "#FAFAF7", lineHeight: 1.1, marginBottom: 20 }}>
              Transparent today.<br />Fair tomorrow.
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px,1.4vw,16px)", lineHeight: 1.75, color: "rgba(250,250,247,0.6)", marginBottom: 32 }}>
              During our beta at SF State and CCSF, GradPath is completely free.
            </p>
            <img src={gradpathStudents} alt="Students on campus using GradPath" style={{ width: "100%", borderRadius: 16 }} />
          </div>
          <div className="r-pricing-cards" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "Now through Dec 2026", price: "Free", detail: "Full access during the beta period at SFSU and CCSF.", note: "No payment required.", color: "#4A9FE8" },
              { label: "Starting Jan 1, 2027", price: "$12/mo", detail: "Continued access for accounts created during the beta.", note: "Cancel anytime.", color: "#B8860B" },
              { label: "Founding Beta Members", price: "Free for life", detail: "Permanent access for the original founding group.", note: "Never billed.", color: "#22C55E" },
            ].map(p => (
              <div key={p.label} style={{ background: "#112240", borderRadius: 16, padding: 24, border: "1px solid rgba(255,255,255,0.08)" }}>
                <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 8 }}>{p.label}</p>
                <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(22px,2.5vw,28px)", color: p.color, marginBottom: 8 }}>{p.price}</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)" }}>{p.detail}</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>{p.note}</p>
              </div>
            ))}
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
              🔒 Subscriptions are billed directly through AcaStructure, not the App Store.
            </p>
          </div>
        </div>
      </section>

      {/* TAGLINE */}
      <section className="r-section-sm" style={{ background: "#FAFAF7", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(26px,3.5vw,44px)", color: "#1A1A2E", lineHeight: 1.15 }}>
          Built by one of you.<br />For all of us.
        </h2>
        <div style={{ width: 48, height: 2, background: "#1B3A0E", margin: "20px auto 24px" }} />
        <Link to="/about" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#1E5FA8", textDecoration: "none" }}>
          Our story →
        </Link>
      </section>

    </div>
  );
}
