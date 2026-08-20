import { useState } from "react";
import { motion } from "framer-motion";
import FadeUp from "../components/FadeUp";

const S = {
  bg: "#F2EFE8", text: "#1A1A18", dim: "rgba(26,26,24,0.65)",
  dimmer: "rgba(26,26,24,0.45)", border: "rgba(26,26,24,0.08)",
  green: "#2E8008", red: "#B42814", amber: "#A86800",
  cardBg: "#FBF9F4", cardWhite: "#fff",
};
const mono = { fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase" };
const serif = (size, color = S.text) => ({ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: size, color, lineHeight: 1.1 });
const inter = (size, color) => ({ fontFamily: "Inter, sans-serif", fontSize: size, color, lineHeight: 1.85 });

const accentCard = (color) => ({
  background: S.cardWhite,
  border: `1.5px solid ${color}33`,
  borderRadius: 16, padding: 28, height: "100%",
});

const AUDIENCE = [
  { color: S.green, title: "Universities & Community Colleges", text: "We're building directly from institutional bulletin data. If your school wants to be part of the pilot or explore how GradPath and EdVisor could serve your students and advisors, we want to hear from you." },
  { color: S.amber, title: "Advisors & Articulation Officers", text: "You know the gaps better than anyone. We're building EdVisor specifically to support the work you already do — not replace it. Your expertise and feedback directly shape what we build." },
  { color: S.red, title: "Researchers & Grant Bodies", text: "The articulation problem is a research problem as much as a technology problem. We're interested in collaborating with researchers working on transfer pathways, academic equity, and higher education data infrastructure." },
  { color: S.text, title: "Government & Policy Organizations", text: "Academic data infrastructure has implications that extend well beyond individual institutions. If you work in education policy, workforce development, or government programs tied to student outcomes, we'd like to connect." },
];

const inputStyle = {
  width: "100%", fontFamily: "Inter, sans-serif", fontSize: 14,
  padding: "12px 16px", borderRadius: 8,
  border: "1px solid rgba(26,26,24,0.15)",
  background: "#fff", color: S.text, outline: "none",
  boxSizing: "border-box",
};

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
          style={{ ...mono, color: S.dimmer, marginBottom: 24 }}>Academic Partnerships</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ ...serif("clamp(32px, 5vw, 56px)"), marginBottom: 24 }}>
          Building this system<br />requires more than <span style={{ color: S.red }}>two people.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
          style={{ ...inter(16, S.dim), maxWidth: 560, margin: "0 auto" }}>
          AcaStructure is actively looking to collaborate with universities, community colleges, faculty, advisors, articulation officers, and researchers who believe students deserve more clarity — and that the institutions serving them deserve better tools.
        </motion.p>
      </section>

      <div style={{ borderTop: `1px solid ${S.border}` }} />

      {/* WHO WE WORK WITH */}
      <section className="section-pad" style={{ background: S.bg, paddingTop: 72, paddingBottom: 72 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeUp>
            <p style={{ ...mono, color: S.dimmer, textAlign: "center", marginBottom: 48 }}>Who we work with</p>
          </FadeUp>
          <div className="two-col-cards">
            {AUDIENCE.map((a, i) => (
              <FadeUp key={a.title} delay={i * 0.08}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }} style={accentCard(a.color)}>
                  <div style={{ width: 32, height: 3, background: a.color, marginBottom: 16, borderRadius: 2 }} />
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: 18, color: S.text, marginBottom: 10 }}>
                    {a.title.replace(" & ", " ").split(" ").map((w, j, arr) => {
                      if (a.title.includes(" & ") && w === a.title.split(" & ")[0].split(" ").pop()) {
                        return <span key={j}>{w} <span style={{ fontFamily: "Inter, sans-serif" }}>&</span> </span>;
                      }
                      return w + (j < arr.length - 1 ? " " : "");
                    })}
                  </h3>
                  <p style={{ ...inter(13, S.dim) }}>{a.text}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: `1px solid ${S.border}` }} />

      {/* WHAT PARTNERSHIP LOOKS LIKE */}
      <section className="section-pad" style={{ background: "#EBE8E0", paddingTop: 72, paddingBottom: 72 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="two-col">
            <FadeUp>
              <p style={{ ...mono, color: S.dimmer, marginBottom: 20 }}>What partnership looks like</p>
              <h2 style={{ ...serif("clamp(22px, 2.8vw, 32px)"), lineHeight: 1.25 }}>We're not selling anything yet. We're building something real.</h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ paddingTop: 36 }}>
                <p style={{ ...inter(15, S.dim), marginBottom: 20 }}>Right now we're looking for institutions and individuals willing to engage honestly — share problems, review what we're building, tell us where we're wrong. Early partnerships shape the system at a foundational level.</p>
                <p style={{ ...inter(15, S.dim) }}>We understand institutional timelines, procurement realities, and administrative constraints. We're not asking anyone to move fast. We're asking them to move with us.</p>
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
            <p style={{ ...mono, color: S.dimmer, textAlign: "center", marginBottom: 16 }}>Get in touch</p>
            <h2 style={{ ...serif("clamp(24px, 3vw, 38px)"), textAlign: "center", marginBottom: 12 }}>Reach out to us.</h2>
            <p style={{ ...inter(15, S.dim), textAlign: "center", maxWidth: 480, margin: "0 auto 48px" }}>
              Whether you're exploring a collaboration, sharing research, or simply curious about what we're building — we'd love to start a conversation.
            </p>
          </FadeUp>

          <div style={{ background: S.cardBg, border: `1px solid ${S.border}`, borderRadius: 16, padding: 36, maxWidth: 680, margin: "0 auto" }}>
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(46,128,8,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="24" height="24" fill="none" stroke={S.green} strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 20, color: S.text, marginBottom: 8 }}>Message sent.</h3>
                <p style={{ ...inter(14, S.dim) }}>We'll be in touch soon.</p>
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
                  placeholder="Tell us how you'd like to collaborate or what you're interested in..."
                  style={{ ...inputStyle, resize: "none" }} />
                {status === "error" && <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: S.red }}>Something went wrong. Email admin@acastructure.com directly.</p>}
                <button onClick={handleSubmit} disabled={status === "sending"}
                  style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, padding: 14, borderRadius: 8, border: "none", background: "#1A1A18", color: "#F2EFE8", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "box-shadow 0.2s, transform 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(26,26,24,0.2)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                <p style={{ ...mono, color: "rgba(26,26,24,0.35)", textAlign: "center", marginTop: 4 }}>🔒 Your information will never be shared.</p>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
