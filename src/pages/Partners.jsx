import { useState } from "react";
import partnersHero from "../assets/partners_hero.webp";
import partnersMeeting from "../assets/partners_meeting.webp";

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
    <div className="font-body overflow-x-hidden">

      {/* HERO */}
      <section className="py-16 px-6" style={{ background: "#FAFAF7" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "#B8860B", letterSpacing: "0.2em" }}>Academic Partnerships</p>
            <div style={{ width: 40, height: 2, background: "#B8860B", marginBottom: 24 }} />
            <h1 className="font-display font-bold leading-tight mb-6" style={{ fontSize: "clamp(28px, 4vw, 50px)", color: "#1A1A2E" }}>
              Let's build modern academic infrastructure together.
            </h1>
            <p className="font-body leading-relaxed" style={{ fontSize: "clamp(14px, 1.4vw, 16px)", color: "#4A5568" }}>
              AcaStructure is looking to collaborate with universities, faculty, advisors, articulation officers, and researchers who believe students deserve a clearer educational experience.
            </p>
          </div>
          <div>
            <img src={partnersHero} alt="Students walking toward university" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </section>

      {/* BRIDGE STATEMENT */}
      <section className="py-14 px-6 text-center" style={{ borderTop: "1px solid #E8E4D9", borderBottom: "1px solid #E8E4D9" }}>
        <div className="max-w-2xl mx-auto">
          <p className="font-body leading-relaxed mb-3" style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "#4A5568" }}>
            For decades, educators have worked to improve articulation, advising, curriculum planning, and student success.
          </p>
          <p className="font-display font-semibold leading-snug" style={{ fontSize: "clamp(18px, 2.2vw, 24px)", color: "#1E5FA8" }}>
            We're simply building a modern way for students to experience education with clarity.
          </p>
        </div>
      </section>

      {/* AUDIENCE CARDS */}
      <section className="py-16 px-6" style={{ background: "#FAFAF7" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <svg width="40" height="40" fill="none" stroke="#1B3A0E" strokeWidth="1.5" viewBox="0 0 48 48"><rect x="6" y="22" width="36" height="22" rx="1"/><path d="M2 22l22-16 22 16"/><line x1="18" y1="44" x2="18" y2="30"/><line x1="30" y1="44" x2="30" y2="30"/><line x1="18" y1="30" x2="30" y2="30"/></svg>, title: "Universities & CCs", desc: "Explore how GradPath can complement your existing student experience." },
            { icon: <svg width="40" height="40" fill="none" stroke="#1E5FA8" strokeWidth="1.5" viewBox="0 0 48 48"><circle cx="16" cy="16" r="7"/><circle cx="32" cy="16" r="7"/><path d="M4 44c0-8 5-13 12-13h16c7 0 12 5 12 13"/></svg>, title: "Faculty & Advisors", desc: "Help us refine the tools students rely on every semester." },
            { icon: <svg width="40" height="40" fill="none" stroke="#B8860B" strokeWidth="1.5" viewBox="0 0 48 48"><circle cx="24" cy="20" r="11"/><line x1="32" y1="29" x2="42" y2="40"/><circle cx="42" cy="40" r="4"/></svg>, title: "Researchers", desc: "Share ideas that help build better academic infrastructure." },
          ].map(a => (
            <div key={a.title} className="bg-white rounded-2xl p-8 text-center" style={{ border: "1px solid #E8E4D9" }}>
              <div className="flex justify-center mb-5">{a.icon}</div>
              <h3 className="font-display font-semibold mb-3" style={{ fontSize: "clamp(17px, 2vw, 20px)", color: "#1A1A2E" }}>{a.title}</h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: "#4A5568" }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-16 px-6" style={{ background: "#F0EDE4" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display font-bold leading-tight mb-5" style={{ fontSize: "clamp(26px, 3.5vw, 42px)", color: "#1A1A2E" }}>
              Have an idea?<br />We'd love to hear it.
            </h2>
            <p className="font-body leading-relaxed mb-8" style={{ fontSize: "clamp(14px, 1.4vw, 15px)", color: "#4A5568" }}>
              Whether you're exploring collaboration, sharing research, improving advising workflows, or simply curious about what we're building — we'd be happy to start a conversation.
            </p>
            <img src={partnersMeeting} alt="Team meeting" className="w-full rounded-xl" />
          </div>

          <div className="bg-white rounded-2xl p-8" style={{ border: "1px solid #E8E4D9" }}>
            {status === "sent" ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(27,58,14,0.1)" }}>
                  <svg width="24" height="24" fill="none" stroke="#1B3A0E" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 className="font-display font-semibold text-xl mb-2" style={{ color: "#1A1A2E" }}>Message sent.</h3>
                <p className="font-body text-sm" style={{ color: "#4A5568" }}>We'll be in touch soon.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="font-body text-sm px-4 py-3 rounded-lg w-full outline-none" style={{ border: "1px solid #E8E4D9", background: "#FAFAF7", color: "#1A1A2E" }} />
                  <input name="institution" value={form.institution} onChange={handleChange} placeholder="Institution (optional)" className="font-body text-sm px-4 py-3 rounded-lg w-full outline-none" style={{ border: "1px solid #E8E4D9", background: "#FAFAF7", color: "#1A1A2E" }} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <select name="role" value={form.role} onChange={handleChange} className="w-full font-body text-sm px-4 py-3 rounded-lg outline-none appearance-none" style={{ border: "1px solid #E8E4D9", background: "#FAFAF7", color: form.role ? "#1A1A2E" : "#718096" }}>
                      <option value="">Your Role</option>
                      <option>Administrator</option><option>Faculty</option><option>Advisor</option><option>Researcher</option><option>Student</option><option>Other</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#718096" }}>▾</span>
                  </div>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="font-body text-sm px-4 py-3 rounded-lg w-full outline-none" style={{ border: "1px solid #E8E4D9", background: "#FAFAF7", color: "#1A1A2E" }} />
                </div>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us how you'd like to collaborate or what you're interested in..." className="w-full font-body text-sm px-4 py-3 rounded-lg outline-none resize-none" style={{ border: "1px solid #E8E4D9", background: "#FAFAF7", color: "#1A1A2E" }} />
                {status === "error" && <p className="font-body text-sm" style={{ color: "#DC2626" }}>Something went wrong. Email admin@acastructure.com directly.</p>}
                <button onClick={handleSubmit} disabled={status === "sending"} className="w-full font-body text-sm font-semibold py-4 rounded-lg flex items-center justify-center gap-2 border-0 cursor-pointer" style={{ color: "#0A1628", background: "#5AE712" }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                <p className="font-body text-xs text-center" style={{ color: "#718096" }}>🔒 We respect your privacy. Your information will never be shared.</p>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
