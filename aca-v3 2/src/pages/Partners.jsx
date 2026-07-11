import { useState } from "react";
import partnersHero from "../assets/partners_hero.webp";
import partnersMeeting from "../assets/partners_meeting.webp";
import partnersHandshake from "../assets/partners_handshake.webp";
import partnersPresenter from "../assets/partners_presenter.webp";

export default function Partners() {
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
    <div className="font-body">

      {/* HERO */}
      <section style={{ background: "#FAFAF7", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B8860B", marginBottom: 8 }}>Academic Partnerships</p>
            <div style={{ width: 40, height: 2, background: "#B8860B", marginBottom: 28 }} />
            <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(36px,4.5vw,56px)", lineHeight: 1.05, color: "#1A1A2E", marginBottom: 24 }}>
              Let's build modern academic infrastructure together.
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#4A5568", maxWidth: 400 }}>
              AcaStructure is looking to collaborate with universities, faculty, advisors, articulation officers, and researchers who believe students deserve a clearer educational experience.
            </p>
          </div>
          <div>
            <img src={partnersHero} alt="Students walking toward a university building" style={{ width: "100%", height: "auto", borderRadius: 16 }} />
          </div>
        </div>
      </section>

      {/* BRIDGE STATEMENT */}
      <section style={{ padding: "64px 48px", borderTop: "1px solid #E8E4D9", borderBottom: "1px solid #E8E4D9" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, lineHeight: 1.75, color: "#4A5568" }}>
            For decades, educators have worked to improve articulation, advising, curriculum planning, and student success.
          </p>
          <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(20px,2.5vw,28px)", color: "#1E5FA8", marginTop: 16, lineHeight: 1.4 }}>
            We're simply building a modern way for students to experience that work.
          </p>
        </div>
      </section>

      {/* AUDIENCE CARDS */}
      <section style={{ background: "#FAFAF7", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {[
            { icon: <svg width="44" height="44" fill="none" stroke="#1B3A0E" strokeWidth="1.5" viewBox="0 0 48 48"><rect x="6" y="22" width="36" height="22" rx="1"/><path d="M2 22l22-16 22 16"/><line x1="18" y1="44" x2="18" y2="30"/><line x1="30" y1="44" x2="30" y2="30"/><line x1="18" y1="30" x2="30" y2="30"/></svg>, title: "Universities & CCs", desc: "Explore how GradPath can complement your existing student experience." },
            { icon: <svg width="44" height="44" fill="none" stroke="#1E5FA8" strokeWidth="1.5" viewBox="0 0 48 48"><circle cx="16" cy="16" r="7"/><circle cx="32" cy="16" r="7"/><path d="M4 44c0-8 5-13 12-13h16c7 0 12 5 12 13"/></svg>, title: "Faculty & Advisors", desc: "Help us refine the tools students rely on every semester." },
            { icon: <svg width="44" height="44" fill="none" stroke="#B8860B" strokeWidth="1.5" viewBox="0 0 48 48"><circle cx="24" cy="20" r="11"/><line x1="32" y1="29" x2="42" y2="40"/><circle cx="42" cy="40" r="4"/></svg>, title: "Researchers", desc: "Share ideas that help build better academic infrastructure." },
          ].map(a => (
            <div key={a.title} style={{ background: "#fff", borderRadius: 20, padding: 32, border: "1px solid #E8E4D9", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>{a.icon}</div>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 20, color: "#1A1A2E", marginBottom: 12 }}>{a.title}</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.75, color: "#4A5568" }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section style={{ background: "#F0EDE4", padding: "96px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(30px,3.5vw,46px)", color: "#1A1A2E", lineHeight: 1.1, marginBottom: 20 }}>
              Have an idea?<br />We'd love to hear it.
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.75, color: "#4A5568", marginBottom: 36, maxWidth: 360 }}>
              Whether you're exploring collaboration, sharing research, improving advising workflows, or simply curious about what we're building — we'd be happy to start a conversation.
            </p>
            <img src={partnersMeeting} alt="Team meeting around a table" style={{ width: "100%", borderRadius: 12 }} />
          </div>

          <div style={{ background: "#fff", borderRadius: 20, padding: 36, border: "1px solid #E8E4D9" }}>
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(27,58,14,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="26" height="26" fill="none" stroke="#1B3A0E" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 22, color: "#1A1A2E", marginBottom: 8 }}>Message sent.</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#4A5568" }}>We'll be in touch soon.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, padding: "12px 16px", borderRadius: 8, border: "1px solid #E8E4D9", background: "#FAFAF7", outline: "none", color: "#1A1A2E" }} />
                  <input name="institution" value={form.institution} onChange={handleChange} placeholder="Institution (optional)" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, padding: "12px 16px", borderRadius: 8, border: "1px solid #E8E4D9", background: "#FAFAF7", outline: "none", color: "#1A1A2E" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div style={{ position: "relative" }}>
                    <select name="role" value={form.role} onChange={handleChange} style={{ width: "100%", fontFamily: "Inter, sans-serif", fontSize: 14, padding: "12px 16px", borderRadius: 8, border: "1px solid #E8E4D9", background: "#FAFAF7", appearance: "none", color: form.role ? "#1A1A2E" : "#718096" }}>
                      <option value="">Your Role</option>
                      <option>Administrator</option><option>Faculty</option><option>Advisor</option><option>Researcher</option><option>Student</option><option>Other</option>
                    </select>
                    <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#718096" }}>▾</span>
                  </div>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, padding: "12px 16px", borderRadius: 8, border: "1px solid #E8E4D9", background: "#FAFAF7", outline: "none", color: "#1A1A2E" }} />
                </div>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us how you'd like to collaborate or what you're interested in..." style={{ fontFamily: "Inter, sans-serif", fontSize: 14, padding: "12px 16px", borderRadius: 8, border: "1px solid #E8E4D9", background: "#FAFAF7", outline: "none", resize: "none", color: "#1A1A2E" }} />
                {status === "error" && <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#DC2626" }}>Something went wrong. Email admin@acastructure.com directly.</p>}
                <button onClick={handleSubmit} disabled={status === "sending"} style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#fff", background: "#1B3A0E", border: "none", padding: "14px", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#718096", textAlign: "center" }}>🔒 We respect your privacy. Your information will never be shared.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section style={{ background: "#0A1628", padding: "64px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, alignItems: "center" }}>
          <img src={partnersHandshake} alt="Professional handshake" style={{ width: "100%", borderRadius: 12, opacity: 0.85 }} />
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(20px,2.5vw,30px)", color: "#FAFAF7", lineHeight: 1.4 }}>
              Building better academic pathways starts with better conversations.
            </p>
            <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(20px,2.5vw,30px)", color: "#4A9FE8", marginTop: 4 }}>Let's start one.</p>
          </div>
          <img src={partnersPresenter} alt="Presenter at a conference" style={{ width: "100%", borderRadius: 12, opacity: 0.85 }} />
        </div>
      </section>

    </div>
  );
}
