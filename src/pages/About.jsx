import { motion } from "framer-motion";
import FadeUp from "../components/FadeUp";
import isabellaHeadshot from "../assets/isabella_headshot.webp";
import rickHeadshot from "../assets/rick_headshot.webp";

const S = {
  bg: "#F2EFE8", text: "#1A1A18", dim: "rgba(26,26,24,0.65)",
  dimmer: "rgba(26,26,24,0.45)", border: "rgba(26,26,24,0.08)",
  green: "#2E8008", red: "#B42814", amber: "#A86800",
  cardBg: "#FBF9F4", cardWhite: "#fff",
};
const mono = { fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase" };
const serif = (size, color = S.text) => ({ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: size, color, lineHeight: 1.1 });
const inter = (size, color) => ({ fontFamily: "Inter, sans-serif", fontSize: size, color, lineHeight: 1.9 });

export default function About() {
  return (
    <div style={{ background: S.bg, overflowX: "hidden" }}>

      {/* HERO */}
      <section className="section-pad section-pad-top" style={{ background: S.bg, paddingBottom: 72, textAlign: "center" }}>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ ...mono, color: S.dimmer, marginBottom: 24 }}>About AcaStructure</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ ...serif("clamp(32px, 5vw, 54px)"), marginBottom: 24 }}>
          The infrastructure that connects students,<br />advisors, and institutions<br /><span style={{ color: S.red }}>into one coherent system.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
          style={{ ...inter(16, S.dim), maxWidth: 580, margin: "0 auto" }}>
          Higher education isn't broken. But the flow of information within it often is. Degree requirements exist. Transfer pathways exist. Advisors exist. The problem is that none of it talks to each other in a way that students — or institutions — can act on efficiently.
        </motion.p>
      </section>

      <div style={{ borderTop: `1px solid ${S.border}` }} />

      {/* THE PROBLEM */}
      <section className="section-pad" style={{ background: S.bg, paddingTop: 72, paddingBottom: 72 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="two-col">
            <FadeUp>
              <p style={{ ...mono, color: S.dimmer, marginBottom: 20 }}>The problem</p>
              <h2 style={{ ...serif("clamp(22px, 2.8vw, 32px)"), lineHeight: 1.25, marginBottom: 24 }}>Every role in the university system has a piece of the puzzle. Nobody has the full picture.</h2>
              <div style={{ borderLeft: `3px solid ${S.red}`, paddingLeft: 20 }}>
                <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(16px, 2vw, 21px)", color: S.text, lineHeight: 1.5 }}>
                  Students can't see the path clearly. Advisors can't serve everyone at once. Articulation officers work in isolation. Institutions can't share what they haven't structured.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ paddingTop: 36 }}>
                <p style={{ ...inter(15, S.dim), marginBottom: 20 }}>AcaStructure is building the infrastructure layer that sits underneath all of it — ingesting, structuring, and connecting academic data so that every role in the system has access to the information they need, in a form they can actually use.</p>
                <p style={{ ...inter(15, S.dim) }}>We're not replacing advisors, articulation officers, or institutional processes. We understand that hierarchies, budgets, and administrative structures exist for good reasons. Our goal is to reduce the friction within those structures — not around them.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <div style={{ borderTop: `1px solid ${S.border}` }} />

      {/* WHAT MAKES US DIFFERENT */}
      <section className="section-pad" style={{ background: "#EBE8E0", paddingTop: 72, paddingBottom: 72 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeUp>
            <p style={{ ...mono, color: S.dimmer, textAlign: "center", marginBottom: 48 }}>What makes us different</p>
          </FadeUp>
          <div className="three-col">
            {[
              { color: S.green, title: "We're students too.", text: "We're not building this from the outside. We're actively enrolled, navigating the same systems, and experiencing the same friction our users do every semester." },
              { color: S.red, title: "We understand enterprise.", text: "Before building AcaStructure, we served in the United States Air Force. We know how large institutions operate — the hierarchies, the procurement cycles, the bureaucratic realities that can't be wished away." },
              { color: S.amber, title: "We respect the system.", text: "Universities aren't the problem. Neither are advisors or administrators. The gap is in the infrastructure connecting them. That's the only thing we're trying to change." },
            ].map((c, i) => (
              <FadeUp key={c.title} delay={i * 0.1}>
                <div style={{ background: S.cardBg, border: `1px solid ${S.border}`, borderRadius: 16, padding: 28, height: "100%" }}>
                  <div style={{ width: 32, height: 3, background: c.color, marginBottom: 16, borderRadius: 2 }} />
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: 17, color: S.text, marginBottom: 10 }}>{c.title}</h3>
                  <p style={{ ...inter(13, S.dim) }}>{c.text}</p>
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
          <FadeUp>
            <p style={{ ...mono, color: S.dimmer, textAlign: "center", marginBottom: 48 }}>The founders</p>
          </FadeUp>
          <div className="team-grid">
            {[
              { name: "Isabella", img: isabellaHeadshot, color: S.green, role: "CO-FOUNDER · USAF VETERAN · PHYSICS STUDENT", bio: "Architect of the platform. Focused on building the reliable, explainable systems that institutions and students can stake decisions on." },
              { name: "Rick", img: rickHeadshot, color: S.amber, role: "CO-FOUNDER · USAF VETERAN · PHILOSOPHY STUDENT", bio: "Focused on academic models, research strategy, and the long-term vision for how AcaStructure connects with institutions, researchers, and the broader education ecosystem." },
            ].map((f, i) => (
              <FadeUp key={f.name} delay={i * 0.15}>
                <div style={{ background: S.cardBg, border: `1px solid ${S.border}`, borderRadius: 16, padding: 28 }}>
                  <img src={f.img} alt={f.name} style={{ width: 80, height: 80, borderRadius: 12, objectFit: "cover", objectPosition: "top", marginBottom: 20, border: `1px solid rgba(26,26,24,0.08)` }} />
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: 20, color: S.text, marginBottom: 6 }}>{f.name}</h3>
                  <div style={{ width: 28, height: 2, background: f.color, marginBottom: 12 }} />
                  <p style={{ ...mono, color: S.dimmer, marginBottom: 12, fontSize: 9 }}>{f.role}</p>
                  <p style={{ ...inter(13, S.dim) }}>{f.bio}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: `1px solid ${S.border}` }} />

      {/* CLOSING */}
      <section className="section-pad" style={{ background: "#EBE8E0", paddingTop: 72, paddingBottom: 72, textAlign: "center" }}>
        <FadeUp>
          <h2 style={{ ...serif("clamp(26px, 4vw, 44px)"), lineHeight: 1.15, marginBottom: 24 }}>
            From one of you,<br />for all of us.
          </h2>
          <p style={{ ...inter(16, S.dim), maxWidth: 520, margin: "0 auto 16px" }}>
            We're two veterans who came back to college and ran into a system that had everything we needed — just not in a form we could use. We didn't set out to build a company. We set out to solve a problem we were living.
          </p>
          <p style={{ ...inter(16, S.dim), maxWidth: 520, margin: "0 auto 40px" }}>
            The more we built, the more we realized this wasn't just our problem. And the more we understood the institutional side, the more we saw that students and universities both deserved something better. So we kept building.
          </p>
          <a href="/partners" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: S.dim, border: "1px solid rgba(26,26,24,0.2)", padding: "11px 24px", borderRadius: 8, textDecoration: "none", display: "inline-block", transition: "color 0.2s, border-color 0.2s, transform 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.color = S.text; e.currentTarget.style.borderColor = "rgba(26,26,24,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = S.dim; e.currentTarget.style.borderColor = "rgba(26,26,24,0.2)"; e.currentTarget.style.transform = "translateY(0)"; }}>
            Get in touch →
          </a>
        </FadeUp>
      </section>

    </div>
  );
}
