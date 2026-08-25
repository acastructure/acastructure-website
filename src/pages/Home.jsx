import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeUp from "../components/FadeUp";

const S = {
  bg: "#F2EFE8",
  text: "#1A1A18",
  dim: "rgba(26,26,24,0.65)",
  dimmer: "rgba(26,26,24,0.45)",
  border: "rgba(26,26,24,0.08)",
  green: "#2E8008",
  red: "#B42814",
  amber: "#A86800",
  cardBg: "#FBF9F4",
  cardWhite: "#fff",
};

const mono = { fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase" };
const serif = (size, color = S.text) => ({ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: size, color, lineHeight: 1.08 });
const inter = (size, color) => ({ fontFamily: "Inter, sans-serif", fontSize: size, color, lineHeight: 1.85 });

const accentCard = (color) => ({
  background: S.cardWhite,
  border: `1.5px solid ${color}33`,
  borderRadius: 16, padding: 28,
});

const iconBox = (color) => ({
  width: 44, height: 44, borderRadius: 12,
  background: `${color}14`,
  display: "flex", alignItems: "center", justifyContent: "center",
  margin: "0 auto 16px", fontSize: 20,
});

export default function Home() {
  return (
    <div style={{ background: S.bg, overflowX: "hidden" }}>

      {/* HERO */}
      <section style={{ background: S.bg, paddingTop: 80, paddingBottom: 0, textAlign: "center" }}>
        <div className="hero-pad" style={{ maxWidth: 860, margin: "0 auto" }}>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: "inline-block", background: "rgba(26,26,24,0.06)", border: "1px solid rgba(26,26,24,0.12)", borderRadius: 100, padding: "5px 16px", marginBottom: 28 }}>
            <span style={{ ...mono, color: S.dimmer }}>Academic Infrastructure</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ ...serif("clamp(40px, 6vw, 76px)"), marginBottom: 24 }}>
            The system behind<br /><span style={{ color: S.red }}>every student's path.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            style={{ ...inter(17, S.dim), maxWidth: 520, margin: "0 auto 40px" }}>
            AcaStructure builds the infrastructure that connects academic data across students, institutions, and the systems that serve them — making degree pathways understandable, interactive, and accessible.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
            style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 72 }}>
            <Link to="/gradpath" style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: "#F2EFE8", background: "#1A1A18", padding: "13px 28px", borderRadius: 8, textDecoration: "none", transition: "box-shadow 0.2s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,26,24,0.25)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Get GradPath — Free
            </Link>
            <Link to="/partners" style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: S.dim, border: "1px solid rgba(26,26,24,0.2)", padding: "12px 24px", borderRadius: 8, textDecoration: "none", transition: "color 0.2s, border-color 0.2s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = S.text; e.currentTarget.style.borderColor = "rgba(26,26,24,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = S.dim; e.currentTarget.style.borderColor = "rgba(26,26,24,0.2)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              For institutions →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-pad" style={{ background: S.bg, paddingTop: 80, paddingBottom: 80, borderTop: `1px solid ${S.border}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeUp>
            <p style={{ ...mono, color: S.dimmer, textAlign: "center", marginBottom: 48 }}>How it works</p>
          </FadeUp>
          <div className="loop-cards">

            <div className="loop-card">
            <FadeUp delay={0.1}>
              <div style={{ ...accentCard(S.green), textAlign: "center" }}>
                <div style={iconBox(S.green)}>🎓</div>
                <p style={{ ...mono, color: S.green, marginBottom: 8 }}>GradPath</p>
                <p style={{ ...serif("17px"), marginBottom: 8 }}>Students</p>
                <p style={{ ...inter(13, S.dim) }}>Map degree requirements, plan semesters, and navigate transfer pathways — free, always.</p>
              </div>
            </FadeUp>
            </div>

            <p className="loop-arrow" style={{ textAlign: "center", color: "rgba(26,26,24,0.2)", fontSize: 20 }}>→</p>

            <div className="loop-card">
            <FadeUp delay={0.2}>
              <div style={{ ...accentCard(S.red), textAlign: "center" }}>
                <div style={iconBox(S.red)}>◈</div>
                <p style={{ ...mono, color: S.red, marginBottom: 8 }}>The Core</p>
                <p style={{ ...serif("17px"), marginBottom: 8 }}>The Data</p>
                <p style={{ ...inter(13, S.dim) }}>Academic data flows into connected infrastructure — structured, maintained, and continuously refined.</p>
              </div>
            </FadeUp>
            </div>

            <p className="loop-arrow" style={{ textAlign: "center", color: "rgba(26,26,24,0.2)", fontSize: 20 }}>→</p>

            <div className="loop-card">
            <FadeUp delay={0.3}>
              <div style={{ ...accentCard(S.amber), textAlign: "center" }}>
                <div style={iconBox(S.amber)}>🏛️</div>
                <p style={{ ...mono, color: S.amber, marginBottom: 8 }}>EdVisor</p>
                <p style={{ ...serif("17px"), marginBottom: 8 }}>Institutions</p>
                <p style={{ ...inter(13, S.dim) }}>Universities, advisors, and articulation officers get tools built on real, structured academic intelligence.</p>
              </div>
            </FadeUp>
            </div>

          </div>
          <FadeUp delay={0.35}>
            <p style={{ textAlign: "center", ...mono, color: "rgba(26,26,24,0.4)", marginTop: 24 }}>↺ &nbsp; one connected system, continuously improving</p>
          </FadeUp>
        </div>
      </section>

      {/* THE ECOSYSTEM */}
      <section className="section-pad" style={{ background: "#EBE8E0", paddingTop: 80, paddingBottom: 80, borderTop: `1px solid ${S.border}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeUp>
            <p style={{ ...mono, color: S.dimmer, textAlign: "center", marginBottom: 48 }}>The Ecosystem</p>
          </FadeUp>
          <div className="two-col-cards">
            <FadeUp delay={0.1}>
              <div style={{ ...accentCard(S.green), height: "100%" }}>
                <div style={{ display: "inline-block", background: "rgba(46,128,8,0.08)", border: "1px solid rgba(46,128,8,0.2)", borderRadius: 100, padding: "4px 14px", marginBottom: 16 }}>
                  <span style={{ ...mono, color: S.green }}>Live now</span>
                </div>
                <h2 style={{ ...serif("24px"), marginBottom: 10 }}>GradPath</h2>
                <p style={{ ...inter(13, S.dim), marginBottom: 20 }}>The student-facing layer. Degree maps, semester planning, transfer pathways, and progress tracking — built directly from your university's official degree requirements.</p>
                <p style={{ ...mono, color: S.green }}>Free for every student →</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div style={{ ...accentCard(S.amber), height: "100%" }}>
                <div style={{ display: "inline-block", background: "rgba(168,104,0,0.08)", border: "1px solid rgba(168,104,0,0.25)", borderRadius: 100, padding: "4px 14px", marginBottom: 16 }}>
                  <span style={{ ...mono, color: S.amber }}>Coming soon</span>
                </div>
                <h2 style={{ ...serif("24px"), marginBottom: 10 }}>EdVisor</h2>
                <p style={{ ...inter(13, S.dim), marginBottom: 20 }}>The institution-facing layer. Tools for advisors, faculty, <span style={{ fontFamily: "Inter, sans-serif" }}>&</span> articulation officers to manage and validate the academic pathways students rely on.</p>
                <p style={{ ...mono, color: S.amber }}>For institutions →</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="section-pad" style={{ background: S.bg, paddingTop: 80, paddingBottom: 80, borderTop: `1px solid ${S.border}`, textAlign: "center" }}>
        <FadeUp>
          <h2 style={{ ...serif("clamp(26px, 4vw, 44px)"), lineHeight: 1.15, marginBottom: 20 }}>
            Academic data exists.<br /><span style={{ color: S.red }}>We connect it.</span>
          </h2>
          <p style={{ ...inter(16, S.dim), maxWidth: 460, margin: "0 auto 36px" }}>
            Universities have already built extraordinary degree pathways. AcaStructure makes them accessible, interactive, and connected — for students, institutions, and the systems that serve both.
          </p>
          <Link to="/partners" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: S.dim, border: "1px solid rgba(26,26,24,0.2)", padding: "11px 24px", borderRadius: 8, textDecoration: "none", transition: "color 0.2s, border-color 0.2s, transform 0.2s", display: "inline-block" }}
            onMouseEnter={e => { e.currentTarget.style.color = S.text; e.currentTarget.style.borderColor = "rgba(26,26,24,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = S.dim; e.currentTarget.style.borderColor = "rgba(26,26,24,0.2)"; e.currentTarget.style.transform = "translateY(0)"; }}>
            Partner with us →
          </Link>
        </FadeUp>
      </section>

    </div>
  );
}
