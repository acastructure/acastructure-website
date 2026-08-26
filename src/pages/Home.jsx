import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeUp from "../components/FadeUp";

const S = {
  bg: "#F2EFE8", text: "#1A1A18", dim: "rgba(26,26,24,0.65)",
  dimmer: "rgba(26,26,24,0.45)", border: "rgba(26,26,24,0.08)",
  green: "#2E8008", red: "#B42814", amber: "#A86800",
  cardBg: "#FBF9F4", cardWhite: "#fff", alt: "#EBE8E0",
};
const mono = (color = S.dimmer) => ({ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color });
const serif = (size, color = S.text) => ({ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: size, color, lineHeight: 1.08 });
const inter = (size, color = S.dim) => ({ fontFamily: "Inter, sans-serif", fontSize: size, color, lineHeight: 1.85 });
const accentCard = (color) => ({ background: S.cardWhite, border: `1.5px solid ${color}33`, borderRadius: 16, padding: 28 });
const iconBox = (color) => ({ width: 44, height: 44, borderRadius: 12, background: `${color}14`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 20 });
const ghostBtn = { fontFamily: "Inter, sans-serif", fontSize: 14, color: S.dim, border: "1px solid rgba(26,26,24,0.2)", padding: "11px 24px", borderRadius: 8, textDecoration: "none", display: "inline-block", transition: "color 0.2s, border-color 0.2s, transform 0.2s" };

export default function Home() {
  return (
    <div style={{ background: S.bg, overflowX: "hidden" }}>

      {/* HERO */}
      <section style={{ background: S.bg, paddingTop: 80, paddingBottom: 0, textAlign: "center" }}>
        <div className="hero-pad" style={{ maxWidth: 860, margin: "0 auto" }}>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: "inline-block", background: "rgba(26,26,24,0.06)", border: "1px solid rgba(26,26,24,0.12)", borderRadius: 100, padding: "5px 16px", marginBottom: 28 }}>
            <span style={{ ...mono(), color: S.dimmer }}>Education Intelligence Infrastructure</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ ...serif("clamp(38px, 6vw, 74px)"), marginBottom: 24, lineHeight: 1.06 }}>
            The intelligence layer<br /><span style={{ color: S.red }}>behind education.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            style={{ ...inter(17), maxWidth: 560, margin: "0 auto 40px" }}>
            Building the intelligence infrastructure that helps education understand itself.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
            style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 80 }}>
            <Link to="/gradpath" style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: "#F2EFE8", background: "#1A1A18", padding: "13px 28px", borderRadius: 8, textDecoration: "none", transition: "box-shadow 0.2s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,26,24,0.25)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Get GradPath — Free
            </Link>
            <Link to="/partners" style={ghostBtn}
              onMouseEnter={e => { e.currentTarget.style.color = S.text; e.currentTarget.style.borderColor = "rgba(26,26,24,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = S.dim; e.currentTarget.style.borderColor = "rgba(26,26,24,0.2)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              For institutions →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-pad" style={{ background: S.alt, paddingTop: 80, paddingBottom: 80, borderTop: `1px solid ${S.border}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeUp><p style={{ ...mono(), textAlign: "center", marginBottom: 56 }}>How it works</p></FadeUp>
          <div className="loop-cards" style={{ alignItems: "stretch" }}>

            <div className="loop-card" style={{ display: "flex", flexDirection: "column" }}>
              <FadeUp delay={0.1} style={{ flex: 1 }}>
                <div style={{ ...accentCard(S.green), textAlign: "center", height: "100%" }}>
                  <div style={iconBox(S.green)}>🎓</div>
                  <p style={{ ...mono(S.green), marginBottom: 8 }}>GradPath</p>
                  <p style={{ ...serif("17px"), marginBottom: 10 }}>Students</p>
                  <p style={{ ...inter(13) }}>Academic intelligence made useful for students. Understand degree requirements, explore pathways, and see how academic decisions connect — free, always.</p>
                </div>
              </FadeUp>
            </div>

            {/* GradPath → Core, Core → EdVisor arrows on desktop */}
            <div className="loop-arrow-h" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <span style={{ color: "rgba(26,26,24,0.2)", fontSize: 18 }}>→</span>
              <span style={{ color: "rgba(26,26,24,0.2)", fontSize: 18 }}>←</span>
            </div>
            <p className="loop-arrow-v">↕</p>

            <div className="loop-card" style={{ display: "flex", flexDirection: "column" }}>
              <FadeUp delay={0.2} style={{ flex: 1 }}>
                <div style={{ ...accentCard(S.red), textAlign: "center", height: "100%" }}>
                  <div style={iconBox(S.red)}>◈</div>
                  <p style={{ ...mono(S.red), marginBottom: 8 }}>The Core</p>
                  <p style={{ ...serif("17px"), marginBottom: 10 }}>Connected Intelligence</p>
                  <p style={{ ...inter(13) }}>Academic information is structured, connected, versioned, and continuously refined as education changes.</p>
                  <p style={{ ...inter(13), marginTop: 10, fontStyle: "italic" }}>Human judgment remains at the center.</p>
                </div>
              </FadeUp>
            </div>

            {/* Core → EdVisor, EdVisor → Core arrows on desktop */}
            <div className="loop-arrow-h" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <span style={{ color: "rgba(26,26,24,0.2)", fontSize: 18 }}>→</span>
              <span style={{ color: "rgba(26,26,24,0.2)", fontSize: 18 }}>←</span>
            </div>
            <p className="loop-arrow-v">↕</p>

            <div className="loop-card" style={{ display: "flex", flexDirection: "column" }}>
              <FadeUp delay={0.3} style={{ flex: 1 }}>
                <div style={{ ...accentCard(S.amber), textAlign: "center", height: "100%" }}>
                  <div style={iconBox(S.amber)}>🏛️</div>
                  <p style={{ ...mono(S.amber), marginBottom: 8 }}>EdVisor</p>
                  <p style={{ ...serif("17px"), marginBottom: 10 }}>Institutions</p>
                  <p style={{ ...inter(13) }}>Give advisors, faculty, and institutional teams a clearer view of the academic structures and relationships they manage.</p>
                </div>
              </FadeUp>
            </div>

          </div>
          <FadeUp delay={0.35}>
            <p style={{ textAlign: "center", ...mono("rgba(26,26,24,0.4)"), marginTop: 24 }}>↺ &nbsp; one connected system, continuously improving</p>
          </FadeUp>
        </div>
      </section>

      {/* HUMAN IN THE LOOP */}
      <section className="section-pad" style={{ background: S.bg, paddingTop: 80, paddingBottom: 80, borderTop: `1px solid ${S.border}` }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <FadeUp>
            <p style={{ ...mono(), marginBottom: 20 }}>Human-in-the-loop</p>
            <h2 style={{ ...serif("clamp(28px, 4vw, 48px)"), marginBottom: 20, lineHeight: 1.1 }}>
              Intelligence informs.<br /><span style={{ color: S.red }}>People decide.</span>
            </h2>
            <p style={{ ...inter(16), maxWidth: 580, margin: "0 auto 20px" }}>
              Education requires context, judgment, and institutional authority. AcaStructure designs its intelligence around a human-in-the-loop model — using intelligence to surface relationships, changes, and uncertainty while keeping people and institutions at the center of consequential decisions.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* THE ECOSYSTEM */}
      <section className="section-pad" style={{ background: S.alt, paddingTop: 80, paddingBottom: 80, borderTop: `1px solid ${S.border}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeUp><p style={{ ...mono(), textAlign: "center", marginBottom: 48 }}>The Ecosystem</p></FadeUp>
          <div className="two-col-cards">
            <FadeUp delay={0.1}>
              <div style={{ ...accentCard(S.green), height: "100%" }}>
                <div style={{ display: "inline-block", background: "rgba(46,128,8,0.08)", border: "1px solid rgba(46,128,8,0.2)", borderRadius: 100, padding: "4px 14px", marginBottom: 16 }}>
                  <span style={{ ...mono(S.green) }}>Live now</span>
                </div>
                <h2 style={{ ...serif("24px"), marginBottom: 10 }}>GradPath</h2>
                <p style={{ ...inter(13), marginBottom: 8, fontWeight: 500, color: S.text }}>The student-facing window of AcaStructure.</p>
                <p style={{ ...inter(13), marginBottom: 20 }}>Academic intelligence translated into something students can actually use — helping them understand requirements, pathways, progress, and the consequences of academic decisions.</p>
                <p style={{ ...mono(S.green) }}>Free for every student →</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div style={{ ...accentCard(S.amber), height: "100%", opacity: 0.7 }}>
                <div style={{ display: "inline-block", background: "rgba(168,104,0,0.08)", border: "1px solid rgba(168,104,0,0.25)", borderRadius: 100, padding: "4px 14px", marginBottom: 16 }}>
                  <span style={{ ...mono(S.amber) }}>In development</span>
                </div>
                <h2 style={{ ...serif("24px"), marginBottom: 10 }}>EdVisor</h2>
                <p style={{ ...inter(13), marginBottom: 8, fontWeight: 500, color: S.text }}>The institution-facing window of AcaStructure.</p>
                <p style={{ ...inter(13), marginBottom: 20 }}>Tools designed to help institutions understand, manage, and validate the academic structures and relationships their students depend on.</p>
                <p style={{ ...mono(S.amber) }}>For institutions →</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="section-pad" style={{ background: S.bg, paddingTop: 80, paddingBottom: 80, borderTop: `1px solid ${S.border}`, textAlign: "center" }}>
        <FadeUp>
          <h2 style={{ ...serif("clamp(26px, 4vw, 44px)"), lineHeight: 1.15, marginBottom: 24 }}>
            Education is always changing.<br />
            <span style={{ color: S.red }}>Its infrastructure should understand why.</span>
          </h2>
          <p style={{ ...inter(16), maxWidth: 520, margin: "0 auto 16px" }}>
            Courses change. Requirements evolve. Programs emerge. Pathways intersect. Institutions make decisions.
          </p>
          <p style={{ ...inter(16), maxWidth: 520, margin: "0 auto 40px" }}>
            AcaStructure connects these relationships into structured academic intelligence — creating a clearer understanding of how education fits together.
          </p>
          <Link to="/partners" style={ghostBtn}
            onMouseEnter={e => { e.currentTarget.style.color = S.text; e.currentTarget.style.borderColor = "rgba(26,26,24,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = S.dim; e.currentTarget.style.borderColor = "rgba(26,26,24,0.2)"; e.currentTarget.style.transform = "translateY(0)"; }}>
            Partner with us →
          </Link>
        </FadeUp>
      </section>

    </div>
  );
}
