import { useState } from "react";
import { SketchMeeting, SketchStudents } from "../components/Sketches";

export default function Partners() {
  const [form, setForm] = useState({ name: "", institution: "", role: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/admin@acastructure.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: `Partnership Inquiry from ${form.name}` }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="font-body">
      {/* Hero */}
      <section className="py-20 overflow-hidden" style={{ background: "#FAFAF7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase mb-1" style={{ color: "#B8860B" }}>Academic Partnerships</p>
              <div className="w-10 h-0.5 mb-6" style={{ background: "#B8860B" }} />
              <h1 className="font-display font-bold leading-[1.0]" style={{ fontSize: "clamp(38px,5vw,58px)", color: "#1A1A2E" }}>
                Let's build modern academic infrastructure together.
              </h1>
              <p className="font-body leading-relaxed mt-6 max-w-md" style={{ fontSize: "16px", color: "#4A5568" }}>
                AcaStructure is looking to collaborate with universities, faculty, advisors, articulation officers, and researchers who believe students deserve a clearer educational experience.
              </p>
            </div>
            <div className="flex justify-center">
              <SketchStudents className="w-full max-w-sm opacity-75" />
            </div>
          </div>
        </div>
      </section>

      {/* Bridge statement */}
      <section className="py-16 border-t border-b" style={{ borderColor: "#E8E4D9" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body leading-relaxed" style={{ fontSize: "19px", color: "#4A5568" }}>
            For decades, educators have worked to improve articulation, advising, curriculum planning, and student success.
          </p>
          <p className="font-display font-semibold mt-4" style={{ fontSize: "clamp(20px,2.5vw,28px)", color: "#1E5FA8" }}>
            We're simply building a modern way for students to experience that work.
          </p>
        </div>
      </section>

      {/* Audience cards */}
      <section className="py-20" style={{ background: "#FAFAF7" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <svg width="44" height="44" fill="none" stroke="#1B3A0E" strokeWidth="1.5" viewBox="0 0 48 48"><rect x="6" y="22" width="36" height="22" rx="1"/><path d="M2 22l22-16 22 16"/><line x1="18" y1="44" x2="18" y2="30"/><line x1="30" y1="44" x2="30" y2="30"/><line x1="18" y1="30" x2="30" y2="30"/></svg>,
                title: "Universities & CCs",
                desc: "Explore how GradPath can complement your existing student experience.",
              },
              {
                icon: <svg width="44" height="44" fill="none" stroke="#1E5FA8" strokeWidth="1.5" viewBox="0 0 48 48"><circle cx="16" cy="16" r="7"/><circle cx="32" cy="16" r="7"/><path d="M4 44c0-8 5-13 12-13h16c7 0 12 5 12 13"/></svg>,
                title: "Faculty & Advisors",
                desc: "Help us refine the tools students rely on every semester.",
              },
              {
                icon: <svg width="44" height="44" fill="none" stroke="#B8860B" strokeWidth="1.5" viewBox="0 0 48 48"><circle cx="24" cy="20" r="11"/><line x1="32" y1="29" x2="42" y2="40"/><circle cx="42" cy="40" r="4"/></svg>,
                title: "Researchers",
                desc: "Share ideas that help build better academic infrastructure.",
              },
            ].map(a => (
              <div key={a.title} className="bg-white rounded-2xl p-8 border text-center" style={{ borderColor: "#E8E4D9" }}>
                <div className="flex justify-center mb-5">{a.icon}</div>
                <h3 className="font-display font-semibold text-xl mb-3" style={{ color: "#1A1A2E" }}>{a.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#4A5568" }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-24" style={{ background: "#F0EDE4" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display font-bold leading-tight" style={{ fontSize: "clamp(32px,4vw,48px)", color: "#1A1A2E" }}>
                Have an idea?<br />We'd love to hear it.
              </h2>
              <p className="font-body leading-relaxed mt-5 max-w-sm" style={{ fontSize: "15px", color: "#4A5568" }}>
                Whether you're exploring collaboration, sharing research, improving advising workflows, or simply curious about what we're building — we'd be happy to start a conversation.
              </p>
              <div className="mt-10">
                <SketchMeeting className="w-full opacity-65" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: "#E8E4D9" }}>
              {status === "sent" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(27,58,14,0.1)" }}>
                    <svg width="28" height="28" fill="none" stroke="#1B3A0E" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2" style={{ color: "#1A1A2E" }}>Message sent.</h3>
                  <p className="font-body text-sm" style={{ color: "#4A5568" }}>We'll be in touch soon. Thank you for reaching out.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="font-body text-sm px-4 py-3 rounded-lg border outline-none focus:ring-1" style={{ background: "#FAFAF7", borderColor: "#E8E4D9", color: "#1A1A2E" }} />
                    <input name="institution" value={form.institution} onChange={handleChange} placeholder="Institution (optional)" className="font-body text-sm px-4 py-3 rounded-lg border outline-none focus:ring-1" style={{ background: "#FAFAF7", borderColor: "#E8E4D9", color: "#1A1A2E" }} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <select name="role" value={form.role} onChange={handleChange} className="w-full font-body text-sm px-4 py-3 rounded-lg border outline-none appearance-none" style={{ background: "#FAFAF7", borderColor: "#E8E4D9", color: form.role ? "#1A1A2E" : "#718096" }}>
                        <option value="">Your Role</option>
                        <option>Administrator</option>
                        <option>Faculty</option>
                        <option>Advisor</option>
                        <option>Researcher</option>
                        <option>Student</option>
                        <option>Other</option>
                      </select>
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#718096" }}>▾</span>
                    </div>
                    <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" type="email" className="font-body text-sm px-4 py-3 rounded-lg border outline-none focus:ring-1" style={{ background: "#FAFAF7", borderColor: "#E8E4D9", color: "#1A1A2E" }} />
                  </div>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us how you'd like to collaborate or what you're interested in..." className="w-full font-body text-sm px-4 py-3 rounded-lg border outline-none resize-none" style={{ background: "#FAFAF7", borderColor: "#E8E4D9", color: "#1A1A2E" }} />
                  {status === "error" && <p className="font-body text-sm text-red-600">Something went wrong. Please email admin@acastructure.com directly.</p>}
                  <button onClick={handleSubmit} disabled={status === "sending"} className="w-full font-body text-sm font-semibold text-white py-4 rounded-lg flex items-center justify-center gap-2 transition-colors" style={{ background: "#1B3A0E" }}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                  <p className="font-body text-xs text-center flex items-center justify-center gap-1.5" style={{ color: "#718096" }}>
                    <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                    We respect your privacy. Your information will never be shared.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom callout */}
      <section className="py-20" style={{ background: "#0A1628" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-display font-semibold text-white leading-snug" style={{ fontSize: "clamp(24px,3vw,38px)" }}>
            Building better academic pathways starts with better conversations.
          </p>
          <p className="font-display font-semibold leading-snug mt-1" style={{ fontSize: "clamp(24px,3vw,38px)", color: "#4A9FE8" }}>
            Let's start one.
          </p>
        </div>
      </section>
    </div>
  );
}
