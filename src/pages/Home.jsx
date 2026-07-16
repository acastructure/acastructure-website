import { Link } from "react-router-dom";
import heroPhone from "../assets/hero_phone.webp";

export default function Home() {
  return (
    <div style={{ background: "#000", overflowX: "hidden" }}>

      {/* HERO */}
      <section style={{ background: "#000", minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>

        {/* Green glow behind text */}
        <div style={{ position: "absolute", top: "10%", left: "-5%", width: "50%", height: "80%", background: "radial-gradient(ellipse at center, rgba(90,231,18,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 48px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>

          {/* LEFT */}
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#5AE712", marginBottom: 32 }}>
              Academic Infrastructure
            </p>
            <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(36px, 4.8vw, 70px)", lineHeight: 1.05, color: "#fff", marginBottom: 24 }}>
              Degree clarity now<br />in the palm of<br /><span style={{ color: "#5AE712" }}>students' hands.</span>
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.75, color: "rgba(255,255,255,0.5)", maxWidth: 460, marginBottom: 40 }}>
              Universities build extraordinary degree pathways. We simply put them in students' hands.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
              <Link to="/gradpath" style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: "#000", background: "#5AE712", padding: "14px 28px", borderRadius: 8, textDecoration: "none", display: "inline-block" }}>
                Get GradPath
              </Link>
              <Link to="/gradpath" style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 500, color: "#fff", background: "transparent", border: "1px solid rgba(255,255,255,0.25)", padding: "13px 28px", borderRadius: 8, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                See how it works
              </Link>
            </div>
          </div>

          {/* RIGHT — phone with vignette */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <img src={heroPhone} alt="GradPath app" style={{ width: "100%", maxWidth: 800, height: "auto", display: "block" }} />
            {/* Fade left edge into black */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #000 0%, transparent 25%)", pointerEvents: "none" }} />
            {/* Fade top edge */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #000 0%, transparent 20%)", pointerEvents: "none" }} />
            {/* Fade bottom edge */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #000 0%, transparent 20%)", pointerEvents: "none" }} />
            {/* Fade right edge */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, #000 0%, transparent 20%)", pointerEvents: "none" }} />
          </div>

        </div>
      </section>



      {/* TAGLINE */}
      <section style={{ background: "#0A0A0A", padding: "64px 48px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(22px, 3vw, 38px)", color: "#fff" }}>
          From one of us, for all of us.
        </p>
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: 16 }}>
          Built by students at SFSU — for students across academia
        </p>
        <Link to="/about" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#5AE712", textDecoration: "none", display: "inline-block", marginTop: 24 }}>
          Our story →
        </Link>
      </section>

    </div>
  );
}
