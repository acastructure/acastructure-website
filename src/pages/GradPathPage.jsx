import gradpathLogo from "../assets/logo_gradpath.svg";
import { Link } from "react-router-dom";
import gradpathHero from "../assets/gradpath_hero.webp";
import gradpathStudents from "../assets/gradpath_students.webp";
import phoneTranscript from "../assets/phone_transcript.webp";
import phoneDegreeMap from "../assets/phone_degree_map.webp";
import phoneSemester from "../assets/phone_semester.webp";
import phoneTransfer from "../assets/phone_transfer.webp";
import phoneDegreeChange from "../assets/phone_degree_change.webp";


export default function GradPathPage() {
  const features = [
    { label: "Transcript", desc: "We import and organize your academic history so you can see the full picture." },
    { label: "Degree Map", desc: "See every requirement, every course, and every milestone on your path to graduation." },
    { label: "Semester Optimizer", desc: "Optimize every semester with syllabus-based grade tracking and intelligent planning." },
    { label: "Transfer", desc: "Explore transfer pathways and see how your credits will apply." },
    { label: "Degree Change", desc: "Thinking of a change? Model different degrees and see what it would take." },
  ];

  return (
    <div className="font-body">

      {/* HERO */}
      <section style={{ background: "#FAFAF7", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <img src={gradpathLogo} alt="GradPath" style={{ height: 110, width: "auto" }} />
              <p style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(42px,5.5vw,68px)", fontWeight: 700, color: "#1A1A2E", lineHeight: 1.0, marginBottom: 4 }}>GradPath</p>
            </div>
            <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(48px,6vw,72px)", lineHeight: 1.0, color: "#1A1A2E", marginBottom: 20 }}>
              Every course.<br />One clear path.
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#4A5568", maxWidth: 440, marginBottom: 32 }}>
              GradPath organizes your university's degree requirements, transfer pathways, semester planning, and progress into one clear experience — built directly from your institution's academic bulletin.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {/* Apple App Store Badge */}
              <a href="#" style={{ display: "inline-block", textDecoration: "none" }}>
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  style={{ height: 44, width: "auto", display: "block" }}
                />
              </a>
              {/* Google Play Badge */}
              <a href="#" style={{ display: "inline-block", textDecoration: "none" }}>
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  style={{ height: 64, width: "auto", display: "block", marginTop: -10 }}
                />
              </a>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={gradpathHero} alt="GradPath app on iPhone showing degree progress" style={{ width: "100%", maxWidth: 480, height: "auto", borderRadius: 16 }} />
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section style={{ background: "#fff", padding: "80px 48px", borderTop: "1px solid #E8E4D9" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(24px,3vw,36px)", color: "#1A1A2E", textAlign: "center", marginBottom: 56 }}>
            Everything you need. Exactly when you need it.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 }}>
            {[
              { title: "Know where you stand.", desc: "Instantly see your completed courses, in-progress classes, GE fulfillment, and how every requirement is tracking toward your degree." },
              { title: "Know where you're going.", desc: "Explore your full Degree Map, plan smarter semesters with the Optimizer, and stay on track toward graduation with confidence." },
              { title: "Know what's possible.", desc: "Evaluate transfer options, model degree changes, and understand the impact of every decision before you make it." },
            ].map(v => (
              <div key={v.title} style={{ textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", border: "2px solid #1B3A0E", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="22" height="22" fill="none" stroke="#5AE712" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 18, color: "#1A1A2E", marginBottom: 12 }}>{v.title}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.75, color: "#4A5568" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE FLOW */}
      <section style={{ background: "#F0EDE4", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(24px,3vw,36px)", color: "#1A1A2E", textAlign: "center", marginBottom: 48 }}>
            Everything working together.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
            {features.map((f, i) => (
              <div key={f.label} style={{ textAlign: "center" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <span style={{ width: 32, height: 32, borderRadius: "50%", background: "#5AE712", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                  {i < 4 && <span style={{ color: "#9CA3AF", marginLeft: 8, fontSize: 16 }}>→</span>}
                </div>
                <div style={{ background: "#fff", borderRadius: 16, padding: 20, border: "1px solid #E8E4D9" }}>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 15, color: "#1A1A2E", marginBottom: 8 }}>{f.label}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, lineHeight: 1.7, color: "#4A5568" }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* PHONE SCREENSHOTS */}
          <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
            <img src={phoneTranscript} alt="Transcript screen" style={{ width: "100%", height: "auto", borderRadius: 20, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }} />
            <img src={phoneDegreeMap} alt="Degree Map screen" style={{ width: "100%", height: "auto", borderRadius: 20, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }} />
            <img src={phoneSemester} alt="Semester Optimizer screen" style={{ width: "100%", height: "auto", borderRadius: 20, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }} />
            <img src={phoneTransfer} alt="Transfer Planning screen" style={{ width: "100%", height: "auto", borderRadius: 20, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }} />
            <img src={phoneDegreeChange} alt="Degree Change screen" style={{ width: "100%", height: "auto", borderRadius: 20, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }} />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ background: "#0A1628", padding: "96px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B8860B", marginBottom: 16 }}>Built to earn your trust first</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(32px,4vw,52px)", color: "#FAFAF7", lineHeight: 1.1, marginBottom: 20 }}>
              Transparent today.<br />Fair tomorrow.
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.75, color: "rgba(250,250,247,0.6)", marginBottom: 40 }}>
             
            </p>
            <img src={gradpathStudents} alt="Students on campus using GradPath on their phones" style={{ width: "100%", borderRadius: 16, opacity: 0.85 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "Now through Dec 2026", price: "Free", detail: "Full access during the beta period at SFSU and CCSF.", note: "No payment required.", color: "#4A9FE8" },
              { label: "Starting Jan 1, 2027", price: "$12/mo", detail: "Continued access for accounts created during the beta.", note: "Cancel anytime.", color: "#B8860B" },
              { label: "Founding Beta Members", price: "Free for life", detail: "Permanent access for the original founding group.", note: "Never billed.", color: "#22C55E" },
            ].map(p => (
              <div key={p.label} style={{ background: "#112240", borderRadius: 16, padding: 24, border: "1px solid rgba(255,255,255,0.08)" }}>
                <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 8 }}>{p.label}</p>
                <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: 28, color: p.color, marginBottom: 8 }}>{p.price}</p>
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
      <section style={{ background: "#FAFAF7", padding: "80px 48px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(30px,4vw,48px)", color: "#1A1A2E", lineHeight: 1.15 }}>
          Built by one of you.<br />For all of us.
        </h2>
        <div style={{ width: 48, height: 2, background: "#5AE712", margin: "20px auto 24px" }} />
        <Link to="/about" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#1E5FA8", textDecoration: "none" }}>
          Our story →
        </Link>
      </section>

    </div>
  );
}
