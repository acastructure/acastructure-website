import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroPhone from "../assets/hero_phone.webp";

export default function Home() {
  return (
    <div style={{ background: "#000", overflowX: "hidden" }}>
      <section style={{ background: "#000", paddingTop: 80, paddingBottom: 0, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "80%", height: "50%", background: "radial-gradient(ellipse at center top, rgba(76,196,15,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="hero-pad" style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D8D5CC", marginBottom: 32 }}>
            Academic Infrastructure
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.22,1,0.36,1] }}
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(36px, 6vw, 80px)", lineHeight: 1.05, color: "#D8D5CC", marginBottom: 28 }}>
            Clarity in the<br />palm of <span style={{ color: "#3A9A0A" }}>students' hands.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.75, color: "rgba(216,213,204,0.55)", maxWidth: 520, margin: "0 auto 40px" }}>
            Universities build extraordinary degree pathways. We simply put them in students' hands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
            style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", justifyContent: "center", marginBottom: 56 }}>
            <Link to="/gradpath" style={{
              fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: "#0A0A0A",
              background: "#3A9A0A", padding: "14px 32px", borderRadius: 8, textDecoration: "none",
              transition: "box-shadow 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 24px rgba(58,154,10,0.5)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Get GradPath
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6, ease: [0.22,1,0.36,1] }}
          className="home-phone" style={{ position: "relative", maxWidth: 860, margin: "0 auto", marginLeft: "20%", marginRight: "20%" }}>
          <img src={heroPhone} alt="GradPath app on iPhone" style={{ width: "100%", height: "auto", display: "block" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(to top, #000 0%, transparent 100%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #000 0%, transparent 18%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, #000 0%, transparent 18%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #000 0%, transparent 12%)", pointerEvents: "none" }} />
        </motion.div>
      </section>

      <section className="section-pad" style={{ background: "#000", paddingTop: 64, paddingBottom: 64, textAlign: "center", borderTop: "1px solid rgba(216,213,204,0.06)" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(22px, 3vw, 38px)", color: "#D8D5CC" }}>
          From one of you, for all of us.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(216,213,204,0.3)", marginTop: 16 }}>
          Built by students, for students across academia
        </motion.p>
      </section>
    </div>
  );
}
