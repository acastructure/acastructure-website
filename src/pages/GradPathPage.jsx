import { Link } from "react-router-dom";
import gradpathStudent from "../assets/gradpath_student.webp";
import phoneTranscript from "../assets/phone_transcript.webp";
import phoneDegreeMap from "../assets/phone_degree_map.webp";
import phoneSemester from "../assets/phone_semester.webp";
import phoneTransfer from "../assets/phone_transfer.webp";
import phoneDegreeChange from "../assets/phone_degree_change.webp";

const phones = [
  { src: phoneTranscript, num: "01", label: "Transcript", desc: "Import your courses and let GradPath automatically map your academic history — every course, every grade, every semester." },
  { src: phoneDegreeMap, num: "02", label: "Degree Map", desc: "Visualize your full path to graduation. See every requirement, every course, and every milestone — all in one place." },
  { src: phoneSemester, num: "03", label: "Semester Optimizer", desc: "Track grades, office hours, and your full graduation pathway. Build smarter semesters with confidence." },
  { src: phoneTransfer, num: "04", label: "Transfer Planning", desc: "Explore transfer targets for SFSU students. See exactly how your credits apply before you make a move." },
  { src: phoneDegreeChange, num: "05", label: "Degree Change", desc: "Thinking of switching majors? See exactly which courses carry over, what's still needed, and how many semesters it adds." },
];

export default function GradPathPage() {
  return (
    <div style={{ background: "#000", overflowX: "hidden" }}>

      {/* HERO — full bleed student photo with text overlay */}
      <section style={{ position: "relative", height: "90vh", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <img src={gradpathStudent} alt="Student using GradPath" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        {/* Vignette bottom */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #000 0%, transparent 40%)" }} />
        {/* Content */}
        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto", padding: "0 48px", textAlign: "center", width: "100%" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#3A9A0A", marginBottom: 24 }}>GradPath</p>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(36px, 5.5vw, 72px)", lineHeight: 1.05, color: "#D8D5CC", marginBottom: 20 }}>
            Every course.<br /><span style={{ color: "#3A9A0A" }}>One clear path.</span>
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.75, color: "rgba(216,213,204,0.65)", marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
            Everything you need to plan, track, and graduate with confidence.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", justifyContent: "center", marginBottom: 32 }}>
            <Link to="/get-gradpath" style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: "#000", background: "#3A9A0A", padding: "14px 32px", borderRadius: 8, textDecoration: "none" }}>
              Get GradPath
            </Link>
            <Link to="/gradpath" style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 500, color: "#D8D5CC", border: "1px solid rgba(216,213,204,0.3)", padding: "13px 32px", borderRadius: 8, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              See how it works
            </Link>
          </div>
          {/* App store badges */}
          <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center" }}>
            <a href="#" style={{ display: "inline-block", textDecoration: "none" }}>
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" style={{ height: 44, width: "auto", display: "block" }} />
            </a>
            <a href="#" style={{ display: "inline-block", textDecoration: "none", marginTop: -6, marginBottom: -6 }}>
              <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" style={{ height: 56, width: "auto", display: "block" }} />
            </a>
          </div>
        </div>
      </section>

      {/* PHONE SCREENSHOTS — vertical scroll */}
      <section style={{ background: "#000", padding: "80px 48px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#3A9A0A", textAlign: "center", marginBottom: 16 }}>Core Features</p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(26px, 3.5vw, 40px)", color: "#D8D5CC", textAlign: "center", marginBottom: 80 }}>
            Everything working together.
          </h2>

          {phones.map((p, i) => (
            <div key={p.label} style={{ marginBottom: i < phones.length - 1 ? 96 : 0 }}>
              {/* Label */}
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 12, color: "#3A9A0A", fontWeight: 500 }}>{p.num}</span>
                <div style={{ flex: 1, height: 1, background: "rgba(216,213,204,0.08)" }} />
              </div>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(24px, 3vw, 32px)", color: "#D8D5CC", marginBottom: 12 }}>{p.label}</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(216,213,204,0.5)", marginBottom: 36 }}>{p.desc}</p>
              {/* Phone image */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={p.src} alt={p.label} style={{ width: "100%", maxWidth: 360, height: "auto", borderRadius: 32, boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(216,213,204,0.06)" }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section style={{ background: "#0A0A0A", padding: "80px 48px", borderTop: "1px solid rgba(216,213,204,0.06)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#3A9A0A", textAlign: "center", marginBottom: 12 }}>Transparent pricing</p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 42px)", color: "#D8D5CC", textAlign: "center", lineHeight: 1.1, marginBottom: 8 }}>
            Transparent today.<br />Fair tomorrow.
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(216,213,204,0.45)", textAlign: "center", marginBottom: 48 }}>
            During our beta at SF State and CCSF, GradPath is completely free.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { label: "Now through Dec 2026", price: "Free", detail: "Full access during the beta period at SFSU and CCSF.", note: "No payment required.", color: "#4A9FE8" },
              { label: "Starting Jan 1, 2027", price: "$12/mo", detail: "Continued access for accounts created during the beta.", note: "Cancel anytime.", color: "#B8860B" },
              { label: "Founding Beta Members", price: "Free for life", detail: "Permanent access for the original founding group.", note: "Never billed.", color: "#3A9A0A" },
            ].map(p => (
              <div key={p.label} style={{ background: "rgba(216,213,204,0.03)", borderRadius: 16, padding: "24px 28px", border: "1px solid rgba(216,213,204,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
                <div>
                  <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(216,213,204,0.3)", marginBottom: 6 }}>{p.label}</p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(216,213,204,0.5)", marginBottom: 2 }}>{p.detail}</p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(216,213,204,0.25)" }}>{p.note}</p>
                </div>
                <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(22px, 2.5vw, 28px)", color: p.color, whiteSpace: "nowrap" }}>{p.price}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(216,213,204,0.2)", textAlign: "center", marginTop: 20 }}>
            🔒 Subscriptions are billed directly through AcaStructure, not the App Store.
          </p>
        </div>
      </section>

    </div>
  );
}
