import { useState } from "react";
import { motion } from "framer-motion";
import FadeUp from "../components/FadeUp";

const S = {
  bg: "#F2EFE8", text: "#1A1A18", dim: "rgba(26,26,24,0.65)",
  dimmer: "rgba(26,26,24,0.45)", border: "rgba(26,26,24,0.08)",
  green: "#2E8008", red: "#B42814", amber: "#A86800",
  cardBg: "#FBF9F4", cardWhite: "#fff", alt: "#EBE8E0",
};
const mono = (color = S.dimmer) => ({ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color });
const serif = (size, color = S.text) => ({ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: size, color, lineHeight: 1.1 });
const inter = (size, color = S.dim) => ({ fontFamily: "Inter, sans-serif", fontSize: size, color, lineHeight: 1.85 });
const ghostBtn = { fontFamily: "Inter, sans-serif", fontSize: 14, color: S.dim, border: "1px solid rgba(26,26,24,0.2)", padding: "11px 24px", borderRadius: 8, textDecoration: "none", display: "inline-block", transition: "color 0.2s, border-color 0.2s, transform 0.2s" };

const inputStyle = {
  width: "100%", fontFamily: "Inter, sans-serif", fontSize: 14,
  padding: "12px 16px", borderRadius: 8,
  border: "1px solid rgba(26,26,24,0.15)",
  background: "#fff", color: S.text, outline: "none",
  boxSizing: "border-box",
};

const AUDIENCE = [
  {
    color: S.green,
    title: "Universities and Community Colleges",
    eyebrow: "Institutional knowledge is essential.",
    text: "Every institution has its own academic structure, policies, history, and ways of interpreting requirements. We work with colleges and universities to better understand those structures and build infrastructure that reflects how education actually operates — not simply how it appears on paper.",
  },
  {
    color: S.amber,
    title: "Advisors and Articulation Officers",
    eyebrow: "Human judgment stays at the center.",
    text: "Advisors and articulation professionals understand something data alone cannot capture: context. AcaStructure designs its intelligence around a human-in-the-loop model where technology can surface relationships, changes, and uncertainty while academic professionals retain the authority to interpret, validate, and decide.\n\nYour expertise doesn't sit outside the system. It helps make the system trustworthy.",
  },
  {
    color: S.red,
    title: "Researchers and Grant Organizations",
    eyebrow: "Education intelligence is also a research problem.",
    text: "Understanding how courses, programs, institutions, pathways, policies, and student outcomes relate requires work across education, technology, data, and human decision-making. We're interested in collaborating with researchers and organizations exploring transfer, educational mobility, academic infrastructure, interoperability, institutional change, and the systems that shape student pathways.",
  },
  {
    color: S.text,
    title: "Government and Policy Organizations",
    eyebrow: "Education doesn't stop at institutional boundaries.",
    text: "Academic structures connect institutions, systems, regions, workforce needs, and public policy. We welcome conversations with public agencies and policy organizations exploring how better education infrastructure can improve visibility into these relationships while preserving institutional authority and human judgment.",
  },
];

export default function Partners() {
  const [form, setForm] = useState({ name: "", institution: "", role: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xnjegyda", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: `Partnership Inquiry from ${form.name}` }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch { setStatus("error"); }
  };

  return (
    <div style={{ background: S.bg, overflowX: "hidden" }}>

      {/* HERO */}
      <section className="section-pad section-pad-top" style={{ background: S.bg, paddingBottom: 72, textAlign: "center" }}>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ ...mono(), marginBottom: 24 }}>Academic Partnerships</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ ...serif("clamp(32px, 5vw, 56px)"), marginBottom: 24 }}>
          Building this system requires<br />more than <span style={{ color: S.red }}>two people.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ ...inter(17), maxWidth: 600, margin: "0 auto 20px" }}>
          Education cannot be understood from data alone.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ ...inter(16), maxWidth: 600, margin: "0 auto 20px" }}>
          AcaStructure is building intelligence infrastructure alongside the people and institutions who understand how education actually works — its rules, relationships, exceptions, decisions, and constant change.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(16px, 2vw, 20px)", color: S.text, maxWidth: 560, margin: "0 auto" }}>
          Because the people who understand the system should help shape the intelligence built around it.
        </motion.p>
      </section>

      <div style={{ borderTop: `1px solid ${S.border}` }} />

      {/* WHO WE WORK WITH */}
      <section className="section-pad" style={{ background: S.bg, paddingTop: 72, paddingBottom: 72 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeUp><p style={{ ...mono(), textAlign: "center", marginBottom: 56 }}>Who we work with</p></FadeUp>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {AUDIENCE.map((a, i) => (
              <FadeUp key={a.title} delay={i * 0.08}>
                <div style={{
                  padding: "40px 0",
                  borderBottom: i < AUDIENCE.length - 1 ? `1px solid ${S.border}` : "none",
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: 48,
                  alignItems: "start",
                }}>
                  <div>
                    <div style={{ width: 32, height: 3, background: a.color, marginBottom: 16, borderRadius: 2 }} />
                    <h3 style={{ ...serif("clamp(18px, 2vw, 22px)"), lineHeight: 1.2 }}>{a.title}</h3>
                  </div>
                  <div>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: S.text, marginBottom: 12, lineHeight: 1.5 }}>{a.eyebrow}</p>
                    {a.text.split("\n\n").map((para, j) => (
                      <p key={j} style={{ ...inter(15), marginBottom: j < a.text.split("\n\n").length - 1 ? 16 : 0 }}>{para}</p>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: `1px solid ${S.border}` }} />

      {/* WHAT PARTNERSHIP LOOKS LIKE */}
      <section className="section-pad" style={{ background: S.alt, paddingTop: 72, paddingBottom: 72 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="two-col">
            <FadeUp>
              <p style={{ ...mono(), marginBottom: 20 }}>What partnership looks like</p>
              <h2 style={{ ...serif("clamp(22px, 2.8vw, 32px)"), lineHeight: 1.25, marginBottom: 0 }}>
                We're not asking you to adopt our answers.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ paddingTop: 36 }}>
                <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(16px, 2vw, 20px)", color: S.text, marginBottom: 24 }}>
                  We're asking you to help us ask better questions.
                </p>
                <p style={{ ...inter(15), marginBottom: 16 }}>AcaStructure is still being built. Early partnerships help us understand where academic information becomes difficult to interpret, where institutional knowledge matters most, and where technology should — and should not — participate.</p>
                <p style={{ ...inter(15), marginBottom: 16 }}>That might mean sharing expertise, reviewing what we're building, identifying edge cases, contributing research, challenging our assumptions, or simply showing us how your institution approaches a problem.</p>
                <p style={{ ...inter(15), marginBottom: 16 }}>We're building slowly and deliberately because infrastructure that people depend on should earn their trust.</p>
                <p style={{ ...inter(15) }}>The goal isn't to replace institutional knowledge. It's to make that knowledge more understandable, connected, and useful.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <div style={{ borderTop: `1px solid ${S.border}` }} />

      {/* CONTACT FORM */}
      <section className="section-pad" style={{ background: S.bg, paddingTop: 72, paddingBottom: 72 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeUp>
            <p style={{ ...mono(), textAlign: "center", marginBottom: 16 }}>Get in touch</p>
            <h2 style={{ ...serif("clamp(24px, 3vw, 38px)"), textAlign: "center", marginBottom: 12 }}>
              Help us understand education better.
            </h2>
            <p style={{ ...inter(16), textAlign: "center", maxWidth: 540, margin: "0 auto 12px" }}>
              Whether you're an institution, educator, researcher, policymaker, or organization thinking deeply about the future of education infrastructure, we'd like to hear from you.
            </p>
            <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(15px, 1.8vw, 18px)", color: S.text, textAlign: "center", marginBottom: 48 }}>
              Tell us what you understand that the data doesn't.
            </p>
          </FadeUp>

          <div style={{ background: S.cardBg, border: `1px solid ${S.border}`, borderRadius: 16, padding: 36, maxWidth: 680, margin: "0 auto" }}>
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(46,128,8,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="24" height="24" fill="none" stroke={S.green} strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 20, color: S.text, marginBottom: 8 }}>Message sent.</h3>
                <p style={{ ...inter(14) }}>We'll be in touch soon.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div className="partners-form-grid">
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" style={inputStyle} />
                  <input name="institution" value={form.institution} onChange={handleChange} placeholder="Institution (optional)" style={inputStyle} />
                </div>
                <div className="partners-form-grid">
                  <div style={{ position: "relative" }}>
                    <select name="role" value={form.role} onChange={handleChange} style={{ ...inputStyle, appearance: "none", color: form.role ? S.text : "rgba(26,26,24,0.4)" }}>
                      <option value="">Your role</option>
                      <option>Administrator</option>
                      <option>Faculty</option>
                      <option>Advisor</option>
                      <option>Articulation Officer</option>
                      <option>Researcher</option>
                      <option>Government / Policy</option>
                      <option>Student</option>
                      <option>Other</option>
                    </select>
                    <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: S.dimmer, pointerEvents: "none" }}>▾</span>
                  </div>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email address" style={inputStyle} />
                </div>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                  placeholder="Tell us what you understand that the data doesn't..."
                  style={{ ...inputStyle, resize: "none" }} />
                {status === "error" && <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: S.red }}>Something went wrong. Email admin@acastructure.com directly.</p>}
                <button onClick={handleSubmit} disabled={status === "sending"}
                  style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, padding: 14, borderRadius: 8, border: "none", background: "#1A1A18", color: "#F2EFE8", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "box-shadow 0.2s, transform 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(26,26,24,0.2)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                <p style={{ ...mono("rgba(26,26,24,0.35)"), textAlign: "center", marginTop: 4 }}>🔒 Your information will never be shared.</p>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
