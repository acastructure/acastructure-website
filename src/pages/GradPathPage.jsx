import { Link } from "react-router-dom";
import gradpathStudent from "../assets/gradpath_student.webp";
import gradpathStudents from "../assets/gradpath_students.webp";
import phoneTranscript from "../assets/phone_transcript.webp";
import phoneDegreeMap from "../assets/phone_degree_map.webp";
import phoneSemester from "../assets/phone_semester.webp";
import phoneTransfer from "../assets/phone_transfer.webp";
import phoneDegreeChange from "../assets/phone_degree_change.webp";

const phones = [
  { src: phoneTranscript, label: "Transcript", desc: "We import and organize your academic history so you can see the full picture." },
  { src: phoneDegreeMap, label: "Degree Map", desc: "See every requirement, every course, and every milestone on your path to graduation." },
  { src: phoneSemester, label: "Semester Optimizer", desc: "Optimize every semester with syllabus-based grade tracking and intelligent planning." },
  { src: phoneTransfer, label: "Transfer", desc: "Explore transfer pathways and see how your credits will apply." },
  { src: phoneDegreeChange, label: "Degree Change", desc: "Thinking of a change? Model different degrees and see what it would take." },
];

export default function GradPathPage() {
  return (
    <div style={{ background: "#000", overflowX: "hidden" }}>

      {/* HERO — two column */}
      <section style={{ background: "#000", minHeight: "90vh", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", overflow: "hidden" }}>

        {/* LEFT — copy */}
        <div style={{ padding: "80px 48px 80px 80px" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#3A9A0A", marginBottom: 28 }}>
            GradPath
          </p>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1.05, color: "#D8D5CC", marginBottom: 24 }}>
            Every course.<br />
            <span style={{ color: "#3A9A0A" }}>One clear path.</span>
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px, 1.4vw, 17px)", lineHeight: 1.75, color: "rgba(216,213,204,0.55)", maxWidth: 420, marginBottom: 40 }}>
            Everything you need to plan, track, and graduate with confidence.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <Link to="/get-gradpath" style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: "#000", background: "#3A9A0A", padding: "14px 28px", borderRadius: 8, textDecoration: "none" }}>
              Get GradPath
            </Link>
            <Link to="/gradpath" style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 500, color: "#D8D5CC", border: "1px solid rgba(216,213,204,0.25)", padding: "13px 28px", borderRadius: 8, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              See how it works
            </Link>
          </div>

          {/* App store badges */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginTop: 32 }}>
            <a href="#" style={{ display: "inline-block", textDecoration: "none" }}>
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" style={{ height: 44, width: "auto", display: "block" }} />
            </a>
            <a href="#" style={{ display: "inline-block", textDecoration: "none", marginTop: -6, marginBottom: -6 }}>
              <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" style={{ height: 56, width: "auto", display: "block" }} />
            </a>
          </div>
        </div>

        {/* RIGHT — student photo with vignette */}
        <div style={{ position: "relative", height: "90vh", overflow: "hidden" }}>
          <img src={gradpathStudent} alt="Student using GradPath" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
          {/* Vignette fades */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #000 0%, transparent 30%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, #000 0%, transparent 20%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #000 0%, transparent 15%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #000 0%, transparent 20%)", pointerEvents: "none" }} />
        </div>

      </section>

      {/* VALUE PROPS */}
      <section style={{ background: "#0A0A0A", padding: "80px 80px", borderTop: "1px solid rgba(216,213,204,0.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#3A9A0A", textAlign: "center", marginBottom: 16 }}>Built for students</p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(28px, 3.5vw, 44px)", color: "#D8D5CC", textAlign: "center", marginBottom: 56, lineHeight: 1.2 }}>
            Everything you need.<br /><span style={{ color: "#3A9A0A" }}>Exactly</span> when you need it.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
            {[
              { title: "Know where you stand.", desc: "See your completed courses, in-progress classes, GE fulfillment, and every requirement in one place." },
              { title: "Know where you're going.", desc: "Explore your full Degree Map, plan smarter semesters, and stay on track toward graduation." },
              { title: "Know what's possible.", desc: "Evaluate transfer options, model degree changes, and understand the impact before you decide." },
            ].map(v => (
              <div key={v.title} style={{ textAlign: "center" }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", border: "1px solid rgba(216,213,204,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="20" height="20" fill="none" stroke="#3A9A0A" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 18, color: "#D8D5CC", marginBottom: 12 }}>{v.title}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(216,213,204,0.5)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHONE SCREENSHOTS — dark section */}
      <section style={{ background: "#000", padding: "80px 48px", borderTop: "1px solid rgba(216,213,204,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(24px, 3vw, 36px)", color: "#D8D5CC", textAlign: "center", marginBottom: 56 }}>
            Everything working together.
          </h2>

          {/* Desktop: 5 columns */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
            {phones.map((p, i) => (
              <div key={p.label} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <span style={{ width: 28, height: 28, borderRadius: "50%", background: "#3A9A0A", color: "#000", fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                </div>
                <div style={{ background: "rgba(216,213,204,0.04)", borderRadius: 16, padding: "14px 10px", border: "1px solid rgba(216,213,204,0.08)", marginBottom: 16, minHeight: 110, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 14, color: "#D8D5CC", marginBottom: 8 }}>{p.label}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 11, lineHeight: 1.6, color: "rgba(216,213,204,0.45)" }}>{p.desc}</p>
                </div>
                <img src={p.src} alt={p.label} style={{ width: "100%", height: "auto", borderRadius: 16, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ background: "#0A0A0A", padding: "80px 80px", borderTop: "1px solid rgba(216,213,204,0.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#3A9A0A", marginBottom: 16 }}>Built to earn your trust first</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 46px)", color: "#D8D5CC", lineHeight: 1.1, marginBottom: 20 }}>
              Transparent today.<br />Fair tomorrow.
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px, 1.4vw, 16px)", lineHeight: 1.75, color: "rgba(216,213,204,0.55)", marginBottom: 32 }}>
              During our beta at SF State and CCSF, GradPath is completely free.
            </p>
            <img src={gradpathStudents} alt="Students using GradPath" style={{ width: "100%", borderRadius: 16 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { label: "Now through Dec 2026", price: "Free", detail: "Full access during the beta period at SFSU and CCSF.", note: "No payment required.", color: "#4A9FE8" },
              { label: "Starting Jan 1, 2027", price: "$12/mo", detail: "Continued access for accounts created during the beta.", note: "Cancel anytime.", color: "#B8860B" },
              { label: "Founding Beta Members", price: "Free for life", detail: "Permanent access for the original founding group.", note: "Never billed.", color: "#3A9A0A" },
            ].map(p => (
              <div key={p.label} style={{ background: "rgba(216,213,204,0.03)", borderRadius: 16, padding: 24, border: "1px solid rgba(216,213,204,0.08)" }}>
                <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(216,213,204,0.3)", marginBottom: 8 }}>{p.label}</p>
                <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 26px)", color: p.color, marginBottom: 8 }}>{p.price}</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(216,213,204,0.55)" }}>{p.detail}</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(216,213,204,0.3)", marginTop: 4 }}>{p.note}</p>
              </div>
            ))}
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(216,213,204,0.25)", textAlign: "center" }}>
              🔒 Subscriptions are billed directly through AcaStructure, not the App Store.
            </p>
          </div>
        </div>
      </section>

      {/* TAGLINE */}
      <section style={{ background: "#000", padding: "64px 48px", textAlign: "center", borderTop: "1px solid rgba(216,213,204,0.06)" }}>
        <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 44px)", color: "#D8D5CC", lineHeight: 1.15 }}>
          Built by one of you.<br />For all of us.
        </h2>
        <div style={{ width: 48, height: 2, background: "#3A9A0A", margin: "20px auto 0" }} />
      </section>

    </div>
  );
}
