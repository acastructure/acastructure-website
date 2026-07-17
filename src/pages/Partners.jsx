import { useState, useEffect } from "react";

function useMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return isMobile;
}

import { useState } from "react";
import partnersHero from "../assets/partners_hero.webp";

export default function Partners() {
  const isMobile = useMobile();
  const [form, setForm] = useState({ name: "", institution: "", role: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: `Partnership Inquiry from ${form.name}` }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch { setStatus("error"); }
  };

  return (
    <div style={{ background: "#000", overflowX: "hidden" }}>

      {/* HERO — text on top, image below */}
      <section style={{ background: "#000", paddingTop: isMobile ? 60 : 80 }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: isMobile ? "0 24px" : "0 48px", textAlign: "center" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D8D5CC", marginBottom: 24 }}>Academic Partnerships</p>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(36px, 5.5vw, 72px)", lineHeight: 1.05, color: "#D8D5CC", marginBottom: 20 }}>
            Let's build<br /><span style={{ color: "#3A9A0A" }}>together.</span>
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.75, color: "rgba(216,213,204,0.65)", maxWidth: 560, margin: "0 auto 48px" }}>
            AcaStructure is looking to collaborate with universities, faculty, advisors, articulation officers, and researchers who believe students deserve more clarity.
          </p>
        </div>

        {/* Hero image */}
        <div style={{ position: "relative", width: "100%", height: "60vh", overflow: "hidden" }}>
          <img src={partnersHero} alt="Partners" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #000 0%, transparent 40%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #000 0%, transparent 25%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #000 0%, transparent 20%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, #000 0%, transparent 20%)" }} />
        </div>
      </section>

      {/* AUDIENCE CARDS */}
      <section style={{ background: "#000", padding: isMobile ? "60px 24px" : "80px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          {[
            {
              icon: <svg width="36" height="36" fill="none" stroke="#3A9A0A" strokeWidth="1.5" viewBox="0 0 48 48"><rect x="6" y="22" width="36" height="22" rx="1"/><path d="M2 22l22-16 22 16"/><line x1="18" y1="44" x2="18" y2="30"/><line x1="30" y1="44" x2="30" y2="30"/><line x1="18" y1="30" x2="30" y2="30"/></svg>,
              title: "Universities & CCs",
              desc: "Explore how GradPath can complement your existing student experience."
            },
            {
              icon: <svg width="36" height="36" fill="none" stroke="#3A9A0A" strokeWidth="1.5" viewBox="0 0 48 48"><circle cx="16" cy="16" r="7"/><circle cx="32" cy="16" r="7"/><path d="M4 44c0-8 5-13 12-13h16c7 0 12 5 12 13"/></svg>,
              title: "Faculty & Advisors",
              desc: "Help us refine the tools students rely on every semester."
            },
            {
              icon: <svg width="36" height="36" fill="none" stroke="#3A9A0A" strokeWidth="1.5" viewBox="0 0 48 48"><circle cx="24" cy="20" r="11"/><line x1="32" y1="29" x2="42" y2="40"/><circle cx="42" cy="40" r="4"/></svg>,
              title: "Researchers",
              desc: "Share ideas that help build better academic infrastructure."
            },
          ].map(a => (
            <div key={a.title} style={{ background: "rgba(216,213,204,0.03)", borderRadius: 16, padding: "32px 28px", border: "1px solid rgba(216,213,204,0.07)", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>{a.icon}</div>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 20px)", color: "#D8D5CC", marginBottom: 10 }}>{a.title}</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(216,213,204,0.5)" }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section style={{ background: "#0A0A0A", padding: isMobile ? "60px 24px" : "80px 48px", borderTop: "1px solid rgba(216,213,204,0.06)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#D8D5CC", textAlign: "center", marginBottom: 12 }}>Get In Touch</p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 42px)", color: "#D8D5CC", textAlign: "center", lineHeight: 1.1, marginBottom: 12 }}>
            Reach out to us.
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(216,213,204,0.5)", textAlign: "center", marginBottom: 48 }}>
            Whether you're exploring collaboration, sharing research, improving advising workflows, or simply curious about what we're building — we'd be happy to start a conversation.
          </p>

          <div style={{ background: "rgba(216,213,204,0.03)", borderRadius: 16, padding: "36px", border: "1px solid rgba(216,213,204,0.07)" }}>
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(58,154,10,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="24" height="24" fill="none" stroke="#3A9A0A" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 20, color: "#D8D5CC", marginBottom: 8 }}>Message sent.</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(216,213,204,0.5)" }}>We'll be in touch soon.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, padding: "12px 16px", borderRadius: 8, border: "1px solid rgba(216,213,204,0.12)", background: "rgba(216,213,204,0.05)", color: "#D8D5CC", outline: "none" }} />
                  <input name="institution" value={form.institution} onChange={handleChange} placeholder="Institution (optional)" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, padding: "12px 16px", borderRadius: 8, border: "1px solid rgba(216,213,204,0.12)", background: "rgba(216,213,204,0.05)", color: "#D8D5CC", outline: "none" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
                  <div style={{ position: "relative" }}>
                    <select name="role" value={form.role} onChange={handleChange} style={{ width: "100%", fontFamily: "Inter, sans-serif", fontSize: 14, padding: "12px 16px", borderRadius: 8, border: "1px solid rgba(216,213,204,0.12)", background: "rgba(216,213,204,0.05)", color: form.role ? "#D8D5CC" : "rgba(216,213,204,0.35)", outline: "none", appearance: "none" }}>
                      <option value="">Your Role</option>
                      <option>Administrator</option><option>Faculty</option><option>Advisor</option><option>Researcher</option><option>Student</option><option>Other</option>
                    </select>
                    <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "rgba(216,213,204,0.35)", pointerEvents: "none" }}>▾</span>
                  </div>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, padding: "12px 16px", borderRadius: 8, border: "1px solid rgba(216,213,204,0.12)", background: "rgba(216,213,204,0.05)", color: "#D8D5CC", outline: "none" }} />
                </div>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us how you'd like to collaborate or what you're interested in..." style={{ fontFamily: "Inter, sans-serif", fontSize: 14, padding: "12px 16px", borderRadius: 8, border: "1px solid rgba(216,213,204,0.12)", background: "rgba(216,213,204,0.05)", color: "#D8D5CC", outline: "none", resize: "none" }} />
                {status === "error" && <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#DC2626" }}>Something went wrong. Email admin@acastructure.com directly.</p>}
                <button onClick={handleSubmit} disabled={status === "sending"} style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, padding: "14px", borderRadius: 8, border: "none", background: "#3A9A0A", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(216,213,204,0.25)", textAlign: "center" }}>🔒 We respect your privacy. Your information will never be shared.</p>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
