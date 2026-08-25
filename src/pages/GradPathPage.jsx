import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeUp from "../components/FadeUp";
import gradpathStudent from "../assets/gradpath_student.webp";
import logoGradPath from "../assets/logo_gradpath.svg";
import phoneTranscript from "../assets/phone_transcript.webp";
import phoneDegreeMap from "../assets/phone_degree_map.webp";
import phoneSemester from "../assets/phone_semester.webp";
import phoneTransfer from "../assets/phone_transfer.webp";
import phoneDegreeChange from "../assets/phone_degree_change.webp";

const S = {
  bg: "#F2EFE8", text: "#1A1A18", dim: "rgba(26,26,24,0.65)",
  dimmer: "rgba(26,26,24,0.45)", border: "rgba(26,26,24,0.08)",
  green: "#2E8008", cardBg: "#FBF9F4", cardWhite: "#fff",
};
const mono = { fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase" };
const serif = (size, color = S.text) => ({ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: size, color, lineHeight: 1.08 });
const inter = (size, color) => ({ fontFamily: "Inter, sans-serif", fontSize: size, color, lineHeight: 1.85 });

const phones = [
  { src: phoneTranscript, label: "Let your past build your future.", desc: "Import your courses and let GradPath automatically map your academic history — every course, every grade, every semester." },
  { src: phoneDegreeMap, label: "See your future.", desc: "Visualize your full path to graduation. See every requirement, every course, and every milestone — all in one place." },
  { src: phoneSemester, label: "Control your present.", desc: "Track grades, office hours, and your full graduation pathway. Build smarter semesters with confidence." },
  { src: phoneTransfer, label: "Continue building your future.", desc: "Explore your transfer targets. See exactly how your credits apply before you make a move." },
  { src: phoneDegreeChange, label: "Explore your options.", desc: "Thinking of switching majors? See exactly which courses carry over, what's still needed, and how many semesters it adds." },
];

export default function GradPathPage() {
  return (
    <div style={{ background: S.bg, overflowX: "hidden" }}>

      {/* HERO */}
      <section className="section-pad-top" style={{ background: S.bg, paddingBottom: 0 }}>
        <div className="hero-pad" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
            <img src={logoGradPath} alt="GradPath" style={{ height: "clamp(36px, 4.5vw, 56px)", width: "auto" }} />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ ...serif("clamp(34px, 5.5vw, 68px)"), marginBottom: 20 }}>
            Every course.<br /><span style={{ color: S.green }}>One clear path.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            style={{ ...inter("clamp(15px, 1.5vw, 18px)", S.dim), maxWidth: 560, margin: "0 auto 32px" }}>
            GradPath organizes your university's degree requirements, transfer pathways, semester planning, and progress into one clear experience — built directly from your university's official degree requirements.
          </motion.p>

          {/* App store badges */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
            style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center", position: "relative", zIndex: 2, marginBottom: -24 }}>
            <a href="#" style={{ display: "inline-block", textDecoration: "none", transition: "transform 0.2s, filter 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.filter = "drop-shadow(0 4px 12px rgba(26,26,24,0.2))"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.filter = "none"; }}>
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" style={{ height: 40, width: "auto", display: "block" }} />
            </a>
            <a href="#" style={{ display: "inline-block", textDecoration: "none", transition: "transform 0.2s, filter 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.filter = "drop-shadow(0 4px 12px rgba(26,26,24,0.2))"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.filter = "none"; }}>
              <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" style={{ height: 58, width: "auto", display: "block" }} />
            </a>
          </motion.div>
        </div>

        {/* Hero image */}
        <div style={{ position: "relative", width: "100%", height: "60vh", overflow: "hidden" }}>
          <motion.img src={gradpathStudent} alt="Student using GradPath"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(242,239,232,0.05)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #F2EFE8 0%, transparent 25%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #F2EFE8 0%, transparent 12%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #F2EFE8 0%, transparent 10%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, #F2EFE8 0%, transparent 10%)" }} />
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="section-pad" style={{ background: S.bg, paddingTop: 80, paddingBottom: 80, borderTop: `1px solid ${S.border}` }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <FadeUp>
            <p style={{ ...mono, color: S.dimmer, textAlign: "center", marginBottom: 80 }}>Core Features</p>
          </FadeUp>

          {phones.map((p, i) => (
            <FadeUp key={p.label} delay={0.05} duration={1.0} style={{ marginBottom: i < phones.length - 1 ? 96 : 0, textAlign: "center" }}>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(22px, 3vw, 30px)", color: S.text, marginBottom: 12 }}>{p.label}</h3>
              <p style={{ ...inter(15, S.dim), marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>{p.desc}</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 32px 80px rgba(26,26,24,0.15)" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ position: "relative", width: "100%", maxWidth: p.label === "See your future." ? 440 : 360 }}>
                  <img src={p.src} alt={p.label} style={{ width: "100%", height: "auto", borderRadius: 32, display: "block", boxShadow: "0 24px 64px rgba(26,26,24,0.12), 0 0 0 1px rgba(26,26,24,0.06)" }} />
                </motion.div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="section-pad" style={{ background: "#EBE8E0", paddingTop: 80, paddingBottom: 80, borderTop: `1px solid ${S.border}` }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <FadeUp>
            <p style={{ ...mono, color: S.dimmer, marginBottom: 12 }}>Pricing</p>
            <h2 style={{ ...serif("clamp(26px, 3.5vw, 42px)"), lineHeight: 1.1, marginBottom: 20 }}>
              Free for life.<br /><span style={{ color: S.green }}>For every student.</span>
            </h2>
            <p style={{ ...inter("clamp(15px, 1.5vw, 17px)", S.dim), maxWidth: 520, margin: "0 auto 40px" }}>
              Students already carry enough. Tuition, textbooks, fees — GradPath will never be one of them. Access to your degree pathway should never come with a price tag.
            </p>
            <div style={{ background: S.cardWhite, borderRadius: 16, padding: "28px 36px", border: `1.5px solid rgba(46,128,8,0.2)`, display: "inline-block" }}>
              <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 48px)", color: S.green, marginBottom: 6 }}>$0</p>
              <p style={{ ...mono, color: S.dimmer }}>No cost. No catch. Free for life.</p>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
