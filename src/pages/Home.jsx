import { Link } from "react-router-dom";
import heroBridge from "../assets/hero_bridge.webp";
import bridgeDiagram from "../assets/bridge_diagram.webp";
import gradpathLogo from "../assets/logo_gradpath.svg";

export default function Home() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="r-hero" style={{ background: "#0A1628", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <img src={heroBridge} alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0A1628 50%, rgba(10,22,40,0.7) 75%, rgba(10,22,40,0.2) 100%)" }} />
        <div className="r-max" style={{ position: "relative", width: "100%", padding: "0" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B8860B", marginBottom: 20 }}>Academic Infrastructure</p>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(32px,5.5vw,68px)", lineHeight: 1.05, color: "#FAFAF7", maxWidth: 620, marginBottom: 20 }}>
            Building the bridges that connect students to modern degree pathways.
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px,1.5vw,17px)", lineHeight: 1.75, color: "rgba(250,250,247,0.65)", maxWidth: 480, marginBottom: 36 }}>
            Universities have spent generations building extraordinary academic pathways. We're building the bridge that helps students experience them with greater clarity, confidence, and purpose.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link to="/gradpath" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#0A1628", background: "#5AE712", padding: "12px 24px", borderRadius: 8, textDecoration: "none", display: "inline-block" }}>
              Get GradPath
            </Link>
            <Link to="/about" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, color: "#FAFAF7", border: "1px solid rgba(250,250,247,0.35)", padding: "12px 24px", borderRadius: 8, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              Our story
            </Link>
          </div>
        </div>
      </section>

      {/* BRIDGE STATEMENT */}
      <section className="r-section-sm" style={{ background: "#FAFAF7" }}>
        <div className="r-max" style={{ textAlign: "center", maxWidth: 760 }}>
          <p className="r-nowrap" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(18px,2.2vw,28px)", color: "#1A1A2E", lineHeight: 1.3 }}>
            Connecting two perspectives. <span style={{ color: "#1E5FA8" }}>One shared destination.</span>
          </p>
        </div>
      </section>

      {/* BRIDGE DIAGRAM */}
      <section className="r-section-sm" style={{ background: "#0A1628" }}>
        <div className="r-max">
          <img className="r-bridge-img" src={bridgeDiagram} alt="AcaStructure connecting institutional perspectives with student outcomes" style={{ width: "100%", height: "auto", borderRadius: 16 }} />
        </div>
      </section>

      {/* TAGLINE */}
      <section className="r-section-sm" style={{ background: "#112240", textAlign: "center" }}>
        <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(22px,3vw,38px)", color: "#FAFAF7" }}>
          From one of us, for all of us.
        </p>
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(250,250,247,0.4)", marginTop: 16 }}>
          Built by students at SFSU — for students across academia
        </p>
        <Link to="/about" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#22C55E", textDecoration: "none", display: "inline-block", marginTop: 24 }}>
          Our story →
        </Link>
      </section>

    </div>
  );
}
