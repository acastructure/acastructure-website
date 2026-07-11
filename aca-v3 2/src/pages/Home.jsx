import { Link } from "react-router-dom";
import heroBridge from "../assets/hero_bridge.webp";
import bridgeDiagram from "../assets/bridge_diagram.webp";

export default function Home() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: "88vh", display: "flex", alignItems: "center" }}>
        <img src={heroBridge} alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0A1628 45%, rgba(10,22,40,0.7) 70%, rgba(10,22,40,0.3) 100%)" }} />
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 48px", width: "100%" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B8860B", marginBottom: 20 }}>
            Academic Infrastructure
          </p>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(40px,5.5vw,68px)", lineHeight: 1.02, color: "#FAFAF7", maxWidth: 620, marginBottom: 20 }}>
            Building the bridge that connects students with a modern education experience.
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.75, color: "rgba(250,250,247,0.65)", maxWidth: 440, marginBottom: 36 }}>
            For generations, educators have built extraordinary academic pathways and advising systems. Our mission is to thoughtfully connect students to that work through modern infrastructure designed for today's world.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link to="/get-gradpath" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#FAFAF7", background: "#1B3A0E", padding: "12px 24px", borderRadius: 8, textDecoration: "none", display: "inline-block" }}>
              Get GradPath
            </Link>
            <Link to="/philosophy" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, color: "#FAFAF7", border: "1px solid rgba(250,250,247,0.35)", padding: "12px 24px", borderRadius: 8, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              Watch the story
            </Link>
          </div>
        </div>
      </section>

      {/* BRIDGE STATEMENT */}
      <section style={{ background: "#FAFAF7", padding: "80px 48px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, lineHeight: 1.75, color: "#4A5568" }}>
            Universities, faculty, advisors, and policymakers have spent decades improving higher education.
          </p>
          <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(22px,2.8vw,30px)", color: "#1E5FA8", marginTop: 16, lineHeight: 1.4 }}>
            We believe students deserve a better way to experience that work.
          </p>
        </div>
      </section>

      {/* BRIDGE DIAGRAM — real image */}
      <section style={{ background: "#0A1628", padding: "60px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <img
            src={bridgeDiagram}
            alt="AcaStructure connects institutional perspectives with student outcomes through a bridge model"
            style={{ width: "100%", height: "auto", borderRadius: 16 }}
          />
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{ background: "#FAFAF7", padding: "96px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(28px,3.5vw,42px)", color: "#1A1A2E", textAlign: "center", marginBottom: 60 }}>
            Our bridges. Every step of the journey.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {/* GradPath */}
            <div style={{ background: "#fff", borderRadius: 20, padding: 36, border: "1px solid #E8E4D9", display: "flex", flexDirection: "column" }}>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1B3A0E", marginBottom: 4 }}>Student Navigation</p>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: 28, color: "#1A1A2E", marginBottom: 16 }}>GradPath</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.75, color: "#4A5568", marginBottom: 28 }}>
                See where you stand. Plan what's next. Stay on track to your degree with clarity.
              </p>
              <Link to="/gradpath" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#1B3A0E", textDecoration: "none", marginTop: "auto" }}>
                Explore GradPath →
              </Link>
            </div>
            {/* Right column */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ background: "#fff", borderRadius: 20, padding: 28, border: "1px solid #E8E4D9", opacity: 0.82 }}>
                <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8860B", marginBottom: 4 }}>Advisor Infrastructure</p>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: 22, color: "#1A1A2E", marginBottom: 10 }}>EdVisor</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.7, color: "#4A5568", marginBottom: 14 }}>
                  Empower advisors with unified data, real-time insights, and smarter student support.
                </p>
                <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", background: "#718096", padding: "4px 10px", borderRadius: 4 }}>In Development</span>
              </div>
              <div style={{ background: "#fff", borderRadius: 20, padding: 28, border: "1px solid #E8E4D9", opacity: 0.7 }}>
                <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8860B", marginBottom: 4 }}>Building Tomorrow's Bridges</p>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: 22, color: "#1A1A2E", marginBottom: 10 }}>Future Platforms</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.7, color: "#4A5568", marginBottom: 14 }}>
                  Expanding the infrastructure to connect earlier learning, workforce pathways, and lifelong education.
                </p>
                <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", background: "#718096", padding: "4px 10px", borderRadius: 4 }}>In Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAGLINE */}
      <section style={{ background: "#112240", padding: "80px 48px", textAlign: "center" }}>
        <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(26px,3.5vw,40px)", color: "#FAFAF7" }}>
          From one of us, for all of us.
        </p>
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(250,250,247,0.4)", marginTop: 16 }}>
          Built by students at SFSU — for students across academia
        </p>
        <Link to="/about" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#22C55E", textDecoration: "none", display: "inline-block", marginTop: 28 }}>
          Our story →
        </Link>
      </section>

    </div>
  );
}
