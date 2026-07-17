import { Link } from "react-router-dom";
import heroPhone from "../assets/hero_phone.webp";

export default function Home() {
  return (
    <div style={{ background: "#000", overflowX: "hidden" }}>
      <section style={{ background: "#000", paddingTop: 80, paddingBottom: 0, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "80%", height: "50%", background: "radial-gradient(ellipse at center top, rgba(76,196,15,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="hero-pad" style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D8D5CC", marginBottom: 32 }}>Academic Infrastructure</p>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(36px, 6vw, 80px)", lineHeight: 1.05, color: "#D8D5CC", marginBottom: 28 }}>
            Degree clarity<br />in the palm of<br /><span style={{ color: "#3A9A0A" }}>students' hands.</span>
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.75, color: "rgba(216,213,204,0.55)", maxWidth: 520, margin: "0 auto 40px" }}>
            Universities build extraordinary degree pathways. We simply put them in students' hands.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", justifyContent: "center", marginBottom: 56 }}>
            <Link to="/gradpath" style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: "#0A0A0A", background: "#3A9A0A", padding: "14px 32px", borderRadius: 8, textDecoration: "none" }}>
              Get GradPath
            </Link>
          </div>
        </div>
        <div className="home-phone" style={{ position: "relative", maxWidth: 860, margin: "0 auto", marginLeft: "20%", marginRight: "20%" }}>
          <img src={heroPhone} alt="GradPath app on iPhone" style={{ width: "100%", height: "auto", display: "block" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(to top, #000 0%, transparent 100%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #000 0%, transparent 18%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, #000 0%, transparent 18%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #000 0%, transparent 12%)", pointerEvents: "none" }} />
        </div>
      </section>
      <section className="section-pad" style={{ background: "#000", paddingTop: 64, paddingBottom: 64, textAlign: "center", borderTop: "1px solid rgba(216,213,204,0.06)" }}>
        <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(22px, 3vw, 38px)", color: "#D8D5CC" }}>
          From one of you, for all of us.
        </p>
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(216,213,204,0.3)", marginTop: 16 }}>
          Built by students, for students across academia
        </p>
      </section>
    </div>
  );
}
