import { motion } from "framer-motion";
import FadeUp from "../components/FadeUp";
import { Link } from "react-router-dom";
import isabellaHeadshot from "../assets/isabella_headshot.webp";
import rickHeadshot from "../assets/rick_headshot.webp";

const S = {
  bg: "#F2EFE8", text: "#1A1A18", dim: "rgba(26,26,24,0.65)",
  dimmer: "rgba(26,26,24,0.45)", border: "rgba(26,26,24,0.08)",
  green: "#2E8008", red: "#B42814", amber: "#A86800",
  cardBg: "#FBF9F4", alt: "#EBE8E0",
};
const mono = (color = S.dimmer) => ({ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color });
const serif = (size, color = S.text) => ({ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: size, color, lineHeight: 1.1 });
const inter = (size, color = S.dim) => ({ fontFamily: "Inter, sans-serif", fontSize: size, color, lineHeight: 1.9 });
const ghostBtn = { fontFamily: "Inter, sans-serif", fontSize: 14, color: S.dim, border: "1px solid rgba(26,26,24,0.2)", padding: "11px 24px", borderRadius: 8, textDecoration: "none", display: "inline-block", transition: "color 0.2s, border-color 0.2s, transform 0.2s" };

export default function About() {
  return (
    <div style={{ background: S.bg, overflowX: "hidden" }}>

      {/* HERO */}
      <section className="section-pad section-pad-top" style={{ background: S.bg, paddingBottom: 72, textAlign: "center" }}>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ ...mono(), marginBottom: 24 }}>About AcaStructure</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ ...serif("clamp(32px, 5vw, 60px)"), marginBottom: 20, lineHeight: 1.06 }}>
          Education is complex.<br /><span style={{ color: S.red }}>Understanding it shouldn't be.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
          style={{ ...inter(16), maxWidth: 580, margin: "0 auto 16px" }}>
          Education is made of millions of relationships — between courses, requirements, programs, institutions, policies, pathways, and people.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
          style={{ ...inter(16), maxWidth: 580, margin: "0 auto" }}>
          Those relationships already exist. AcaStructure is building the intelligence infrastructure to make them understandable, connected, and useful.
        </motion.p>
      </section>

      <div style={{ borderTop: `1px solid ${S.border}` }} />

      {/* WHAT WE BELIEVE */}
      <section className="section-pad" style={{ background: S.alt, paddingTop: 72, paddingBottom: 72 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="two-col">
            <FadeUp>
              <p style={{ ...mono(), marginBottom: 20 }}>What we believe</p>
              <h2 style={{ ...serif("clamp(20px, 2.5vw, 28px)"), lineHeight: 1.3 }}>
                Education doesn't need another system telling it what to do. It needs infrastructure that helps it understand what it already knows.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ paddingTop: 36 }}>
                <p style={{ ...inter(15), marginBottom: 16 }}>Universities have spent generations building programs, policies, academic pathways, and institutional knowledge.</p>
                <p style={{ ...inter(15), marginBottom: 16 }}>Students navigate those structures. Advisors interpret them. Faculty shape them. Articulation officers connect them. Institutions govern them.</p>
                <p style={{ ...inter(15), marginBottom: 16 }}>The knowledge exists.</p>
                <p style={{ ...inter(15) }}>The challenge is that it lives across documents, systems, institutions, and people — often without a common structure for understanding how everything relates. AcaStructure exists to help make those relationships visible.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <div style={{ borderTop: `1px solid ${S.border}` }} />

      {/* THE PROBLEM */}
      <section className="section-pad" style={{ background: S.bg, paddingTop: 72, paddingBottom: 72 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="two-col">
            <FadeUp>
              <p style={{ ...mono(), marginBottom: 20 }}>The problem</p>
              <h2 style={{ ...serif("clamp(20px, 2.5vw, 28px)"), lineHeight: 1.3 }}>
                Every part of education knows something. Very little understands everything together.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ paddingTop: 36 }}>
                <p style={{ ...inter(15), marginBottom: 16 }}>A degree requirement means one thing in the context of a program and something different in the context of a transfer pathway.</p>
                <p style={{ ...inter(15), marginBottom: 16 }}>A course can satisfy one requirement at one institution and not another.</p>
                <p style={{ ...inter(15), marginBottom: 16 }}>Policies change. Programs evolve. Catalogs are revised. Agreements expire. New pathways emerge. And behind every rule is context that matters.</p>
                <p style={{ ...inter(15), marginBottom: 0 }}>AcaStructure is building infrastructure capable of structuring and connecting these relationships so academic information can become something more useful: <span style={{ fontWeight: 600, color: S.text }}>education intelligence.</span></p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <div style={{ borderTop: `1px solid ${S.border}` }} />

      {/* OUR APPROACH */}
      <section className="section-pad" style={{ background: S.alt, paddingTop: 72, paddingBottom: 72 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="two-col">
            <FadeUp>
              <p style={{ ...mono(), marginBottom: 20 }}>Our approach</p>
              <h2 style={{ ...serif("clamp(20px, 2.5vw, 28px)"), lineHeight: 1.3 }}>
                Intelligence should clarify complexity — not hide it.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ paddingTop: 36 }}>
                <p style={{ ...inter(15), marginBottom: 16 }}>We believe trustworthy education technology should be able to distinguish between what is known, what has changed, what is connected, and what remains uncertain.</p>
                <p style={{ ...inter(15), marginBottom: 16 }}>That means preserving context. It means respecting institutional authority. It means recognizing that education changes over time.</p>
                <p style={{ ...inter(15) }}>And it means building systems that support human judgment rather than attempting to replace it.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <div style={{ borderTop: `1px solid ${S.border}` }} />

      {/* HUMAN IN THE LOOP */}
      <section className="section-pad" style={{ background: S.bg, paddingTop: 72, paddingBottom: 72, textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <FadeUp>
            <p style={{ ...mono(), marginBottom: 20 }}>Human-in-the-loop</p>
            <h2 style={{ ...serif("clamp(28px, 4vw, 48px)"), marginBottom: 24, lineHeight: 1.1 }}>
              Intelligence informs.<br /><span style={{ color: S.red }}>People decide.</span>
            </h2>
            <p style={{ ...inter(15), marginBottom: 16 }}>Some decisions should never belong to an algorithm alone.</p>
            <p style={{ ...inter(15), marginBottom: 16 }}>Advisors understand students. Faculty understand disciplines. Articulation officers understand equivalency. Institutions understand their own policies and retain authority over them.</p>
            <p style={{ ...inter(15), marginBottom: 16 }}>Technology can help surface relationships, identify changes, organize complexity, and communicate uncertainty. People provide context, judgment, validation, and authority.</p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: S.text, lineHeight: 1.8 }}>
              We don't see human expertise as something technology should work around. We see it as part of the infrastructure.
            </p>
          </FadeUp>
        </div>
      </section>

      <div style={{ borderTop: `1px solid ${S.border}` }} />

      {/* WHAT MAKES US DIFFERENT */}
      <section className="section-pad" style={{ background: S.alt, paddingTop: 72, paddingBottom: 72 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeUp><p style={{ ...mono(), textAlign: "center", marginBottom: 56 }}>What makes us different</p></FadeUp>
          <div className="three-col">
            {[
              {
                color: S.green,
                title: "We're students too.",
                body: "AcaStructure began from inside the problem. We're actively navigating higher education ourselves. We understand what it feels like when the information you need exists somewhere — but understanding how it applies to you requires piecing together multiple systems, documents, and people.\n\nThat experience gave us the first question. It didn't give us all the answers.",
              },
              {
                color: S.red,
                title: "We understand complex institutions.",
                body: "Before AcaStructure, we served in the United States Air Force. We learned that large organizations have hierarchy, specialized expertise, institutional processes, distributed information, and legitimate boundaries of authority.\n\nComplexity isn't necessarily dysfunction. Sometimes complexity simply needs better infrastructure around it.",
              },
              {
                color: S.amber,
                title: "We respect institutional knowledge.",
                body: "Universities aren't the problem. Neither are advisors, faculty, articulation officers, or administrators. They hold much of the knowledge that makes education function.\n\nAcaStructure isn't being built to circumvent that expertise. We're building infrastructure that can help connect it.",
              },
            ].map((c, i) => (
              <FadeUp key={c.title} delay={i * 0.1}>
                <div style={{ background: S.cardBg, border: `1px solid ${S.border}`, borderRadius: 16, padding: 28, height: "100%" }}>
                  <div style={{ width: 32, height: 3, background: c.color, marginBottom: 16, borderRadius: 2 }} />
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: 17, color: S.text, marginBottom: 14 }}>{c.title}</h3>
                  {c.body.split("\n\n").map((para, j) => (
                    <p key={j} style={{ ...inter(13), marginBottom: j < c.body.split("\n\n").length - 1 ? 12 : 0 }}>{para}</p>
                  ))}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: `1px solid ${S.border}` }} />

      {/* FOUNDERS */}
      <section className="section-pad" style={{ background: S.bg, paddingTop: 72, paddingBottom: 72 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeUp><p style={{ ...mono(), textAlign: "center", marginBottom: 56 }}>The founders</p></FadeUp>
          <div className="team-grid">
            {[
              {
                name: "Isabella", img: isabellaHeadshot, color: S.green,
                role: "CO-FOUNDER · USAF VETERAN · PHYSICS STUDENT",
                bio: "Architect of AcaStructure's technical systems. Focused on building reliable, explainable infrastructure capable of turning complex academic information into useful intelligence while preserving the human judgment institutions depend on.",
              },
              {
                name: "Rick", img: rickHeadshot, color: S.amber,
                role: "CO-FOUNDER · USAF VETERAN · PHILOSOPHY STUDENT",
                bio: "Focused on AcaStructure's models, research, and long-term systems thinking — including how academic relationships, institutional knowledge, human judgment, and education intelligence fit together.",
              },
            ].map((f, i) => (
              <FadeUp key={f.name} delay={i * 0.15}>
                <div style={{ background: S.cardBg, border: `1px solid ${S.border}`, borderRadius: 16, padding: 28 }}>
                  <img src={f.img} alt={f.name} style={{ width: 80, height: 80, borderRadius: 12, objectFit: "cover", objectPosition: "top", marginBottom: 20, border: `1px solid ${S.border}` }} />
                  <h3 style={{ ...serif("20px"), marginBottom: 6 }}>{f.name}</h3>
                  <div style={{ width: 28, height: 2, background: f.color, marginBottom: 12 }} />
                  <p style={{ ...mono("rgba(26,26,24,0.4)"), fontSize: 9, marginBottom: 12 }}>{f.role}</p>
                  <p style={{ ...inter(13) }}>{f.bio}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: `1px solid ${S.border}` }} />

      {/* OUR STORY */}
      <section className="section-pad" style={{ background: S.alt, paddingTop: 72, paddingBottom: 72 }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <FadeUp>
            <p style={{ ...mono(), textAlign: "center", marginBottom: 24 }}>Our story</p>
            <p style={{ ...inter(16), marginBottom: 16 }}>We started by trying to understand our own degrees.</p>
            <p style={{ ...inter(15), marginBottom: 16 }}>We came back to college as two veterans and encountered a familiar kind of problem: the information existed, but understanding how all of it fit together was unnecessarily difficult.</p>
            <p style={{ ...inter(15), marginBottom: 16 }}>So we started organizing it. Then connecting it. Then building tools around it.</p>
            <p style={{ ...inter(15), marginBottom: 16 }}>And the deeper we went, the more interesting the problem became.</p>
            <p style={{ ...inter(15), marginBottom: 24 }}>What began as an attempt to understand our own academic pathways exposed a much larger question:</p>
            <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(18px, 2.5vw, 24px)", color: S.text, lineHeight: 1.5, marginBottom: 24 }}>
              How does an education system understand the millions of relationships that make it work?
            </p>
            <p style={{ ...inter(15), marginBottom: 16 }}>That's the question AcaStructure is now building around.</p>
            <p style={{ ...inter(15) }}>Not because we believe we already have every answer. But because we believe better infrastructure can help students, educators, researchers, and institutions understand the system together.</p>
          </FadeUp>
        </div>
      </section>

      <div style={{ borderTop: `1px solid ${S.border}` }} />

      {/* CLOSING */}
      <section className="section-pad" style={{ background: S.bg, paddingTop: 72, paddingBottom: 72, textAlign: "center" }}>
        <FadeUp>
          <h2 style={{ ...serif("clamp(24px, 3.5vw, 40px)"), lineHeight: 1.15, marginBottom: 20 }}>
            Built from inside education.<br /><span style={{ color: S.red }}>Built to understand it.</span>
          </h2>
          <p style={{ ...inter(16), maxWidth: 480, margin: "0 auto 40px" }}>
            AcaStructure is building education intelligence infrastructure with students and institutions at its center.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/gradpath" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#F2EFE8", background: "#1A1A18", padding: "12px 24px", borderRadius: 8, textDecoration: "none", transition: "box-shadow 0.2s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,26,24,0.25)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Get GradPath — Free
            </Link>
            <Link to="/partners" style={ghostBtn}
              onMouseEnter={e => { e.currentTarget.style.color = S.text; e.currentTarget.style.borderColor = "rgba(26,26,24,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = S.dim; e.currentTarget.style.borderColor = "rgba(26,26,24,0.2)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Partner with us →
            </Link>
          </div>
        </FadeUp>
      </section>

    </div>
  );
}
