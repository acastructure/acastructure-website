import { Link } from "react-router-dom";
import gradpathHero from "../assets/gradpath_hero.webp";
import gradpathStudents from "../assets/gradpath_students.webp";

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
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#1B3A0E", marginBottom: 20 }}>GradPath</p>
            <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(40px,5vw,62px)", lineHeight: 1.0, color: "#1A1A2E", marginBottom: 20 }}>
              Every course.<br />One clear path.
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#4A5568", maxWidth: 440, marginBottom: 32 }}>
              GradPath organizes your university's degree requirements, transfer pathways, semester planning, and progress into one clear experience — built directly from your institution's academic bulletin.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#" style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#fff", background: "#1A1A2E", padding: "11px 20px", borderRadius: 8, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                Download on App Store
              </a>
              <a href="#" style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#fff", background: "#1A1A2E", padding: "11px 20px", borderRadius: 8, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.31.17.67.21 1.03.11l12.03-12.03-3.56-3.56L3.18 23.76zM20.7 9.59l-2.31-1.33-3.79 3.79 3.79 3.79 2.33-1.35c.66-.38.66-1.52-.02-1.9zM1.28.56C1.1.76 1 1.06 1 1.44v21.12c0 .38.1.68.28.88l.04.04 11.83-11.83v-.26L1.32.52.28.56zM12.91 13.29l-3.79-3.79 3.79-3.79 3.56 3.56-3.56 4.02z"/></svg>
                Get it on Google Play
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
                  <svg width="22" height="22" fill="none" stroke="#1B3A0E" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
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
                  <span style={{ width: 32, height: 32, borderRadius: "50%", background: "#1B3A0E", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                  {i < 4 && <span style={{ color: "#9CA3AF", marginLeft: 8, fontSize: 16 }}>→</span>}
                </div>
                <div style={{ background: "#fff", borderRadius: 16, padding: 20, border: "1px solid #E8E4D9" }}>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 15, color: "#1A1A2E", marginBottom: 8 }}>{f.label}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, lineHeight: 1.7, color: "#4A5568" }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* PHONE SCREENSHOTS PLACEHOLDER */}
          <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
            {["Transcript", "Degree Map", "Semester Optimizer", "Transfer", "Degree Change"].map(label => (
              <div key={label} style={{ background: "#E8E4D9", borderRadius: 16, aspectRatio: "9/16", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8 }}>
                <svg width="24" height="24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/></svg>
                <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 9, color: "#9CA3AF", textAlign: "center" }}>{label}<br/>screenshot</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, color: "#9CA3AF", textAlign: "center", marginTop: 12, letterSpacing: "0.1em" }}>
            ↑ Phone screenshots coming soon
          </p>
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
              During our beta at SF State and CCSF, GradPath is completely free.
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
        <div style={{ width: 48, height: 2, background: "#1B3A0E", margin: "20px auto 24px" }} />
        <Link to="/about" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#1E5FA8", textDecoration: "none" }}>
          Our story →
        </Link>
      </section>

    </div>
  );
}
