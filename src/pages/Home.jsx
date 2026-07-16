import { Link } from "react-router-dom";
import heroPhone from "../assets/hero_phone.webp";

export default function Home() {
  return (
    <div style={{ background: "#000", overflowX: "hidden" }}>

      {/* HERO — vertical centered layout */}
      <section style={{ background: "#000", paddingTop: 100, paddingBottom: 0, textAlign: "center", position: "relative", overflow: "hidden" }}>

        {/* Subtle green glow behind headline */}
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "80%", height: "50%", background: "radial-gradient(ellipse at center top, rgba(76,196,15,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto", padding: "0 48px" }}>

          {/* Eyebrow */}
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D8D5CC", marginBottom: 32 }}>
            Academic Infrastructure
          </p>

          {/* Headline */}
          <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.05, color: "#D8D5CC", marginBottom: 28 }}>
            Degree clarity<br />in the palm of<br />
            <span style={{ color: "#4CC40F" }}>students' hands.</span>
          </h1>

          {/* Subtext */}
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.75, color: "rgba(216,213,204,0.55)", maxWidth: 520, margin: "0 auto 40px" }}>
            Universities build extraordinary degree pathways. We simply put them in students' hands.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", justifyContent: "center", marginBottom: 72 }}>
            <Link to="/gradpath" style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: "#0A0A0A", background: "#4CC40F", padding: "14px 32px", borderRadius: 8, textDecoration: "none", display: "inline-block" }}>
              Get GradPath
            </Link>
            <Link to="/gradpath" style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 500, color: "#D8D5CC", background: "transparent", border: "1px solid rgba(216,213,204,0.25)", padding: "13px 32px", borderRadius: 8, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              See how it works
            </Link>
          </div>
        </div>

        {/* Phone image — full width, centered, large */}
        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
          <img
            src={heroPhone}
            alt="GradPath app on iPhone"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          {/* Fade bottom into black */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(to top, #000 0%, transparent 100%)", pointerEvents: "none" }} />
          {/* Fade left */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #000 0%, transparent 18%)", pointerEvents: "none" }} />
          {/* Fade right */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, #000 0%, transparent 18%)", pointerEvents: "none" }} />
          {/* Fade top slightly */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #000 0%, transparent 12%)", pointerEvents: "none" }} />
        </div>

      </section>

      {/* TAGLINE */}
      <section style={{ background: "#000", padding: "64px 48px", textAlign: "center", borderTop: "1px solid rgba(216,213,204,0.06)" }}>
        <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(22px, 3vw, 38px)", color: "#D8D5CC" }}>
          From one of us, for all of us.
        </p>
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(216,213,204,0.3)", marginTop: 16 }}>
          Built by students at SFSU — for students across academia
        </p>
        <Link to="/about" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#4CC40F", textDecoration: "none", display: "inline-block", marginTop: 24 }}>
          Our story →
        </Link>
      </section>

    </div>
  );
}
