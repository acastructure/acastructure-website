import { useState } from "react";

export default function Partners() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({ name: "", institution: "", role: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xjkvqolw", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: form.name,
          institution: form.institution,
          role: form.role,
          email: form.email,
          message: form.message,
          _replyto: form.email,
          _subject: `AcaStructure Partnership Inquiry from ${form.name}`,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", institution: "", role: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="font-body">
      {/* Hero */}
      <section className="relative bg-cream overflow-hidden min-h-[55vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-gold mb-4 border-b-2 border-gold w-fit pb-1">
              Academic Partnerships
            </p>
            <h1 className="font-display font-semibold text-4xl md:text-5xl text-charcoal leading-tight mt-4">
              Let's build modern academic infrastructure together.
            </h1>
            <p className="font-body text-slate leading-relaxed mt-5 max-w-md">
              AcaStructure is looking to collaborate with universities, faculty, advisors, articulation officers, and researchers who believe students deserve a clearer educational experience.
            </p>
          </div>
          <div className="hidden md:flex justify-end">
            {/* Sketch illustration placeholder */}
            <div className="w-80 h-64 bg-cream-dim rounded-xl flex items-center justify-center text-muted/30">
              <svg width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 80 80">
                <rect x="10" y="20" width="60" height="45" rx="2"/>
                <path d="M10 30h60M25 20v-8M55 20v-8"/>
                <circle cx="40" cy="50" r="10"/>
                <path d="M34 50l4 4 8-8"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge statement */}
      <section className="bg-navy-mid py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-lg text-cream/80 leading-relaxed">
            For decades, educators have worked to improve articulation, advising, curriculum planning, and student success.
          </p>
          <p className="font-display text-xl md:text-2xl text-blue-light mt-4 leading-snug">
            We're simply building a modern way for students to experience that work.
          </p>
        </div>
      </section>

      {/* Audience cards */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg width="40" height="40" fill="none" stroke="#2A4A1E" strokeWidth="1.5" viewBox="0 0 48 48">
                    <rect x="8" y="20" width="32" height="22" rx="1"/>
                    <path d="M4 20l20-14 20 14"/>
                    <line x1="18" y1="42" x2="18" y2="28"/>
                    <line x1="30" y1="42" x2="30" y2="28"/>
                    <line x1="18" y1="28" x2="30" y2="28"/>
                  </svg>
                ),
                title: "Universities & CCs",
                desc: "Explore how GradPath can complement your existing student experience.",
              },
              {
                icon: (
                  <svg width="40" height="40" fill="none" stroke="#2B5EA7" strokeWidth="1.5" viewBox="0 0 48 48">
                    <circle cx="18" cy="16" r="6"/>
                    <circle cx="30" cy="16" r="6"/>
                    <path d="M6 42c0-8 6-12 12-12h12c6 0 12 4 12 12"/>
                  </svg>
                ),
                title: "Faculty & Advisors",
                desc: "Help us refine the tools students rely on every semester.",
              },
              {
                icon: (
                  <svg width="40" height="40" fill="none" stroke="#C4892A" strokeWidth="1.5" viewBox="0 0 48 48">
                    <circle cx="24" cy="20" r="10"/>
                    <line x1="30" y1="28" x2="40" y2="40"/>
                    <circle cx="40" cy="40" r="3"/>
                  </svg>
                ),
                title: "Researchers",
                desc: "Share ideas that help build better academic infrastructure.",
              },
            ].map(a => (
              <div key={a.title} className="bg-white rounded-xl p-8 border border-cream-dim text-center">
                <div className="flex justify-center mb-4">{a.icon}</div>
                <h3 className="font-display text-xl text-charcoal mb-3">{a.title}</h3>
                <p className="font-body text-sm text-slate leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-cream-dim py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-charcoal">
                Have an idea?<br />We'd love to hear it.
              </h2>
              <p className="font-body text-slate leading-relaxed mt-4 max-w-sm">
                Whether you're exploring collaboration, sharing research, improving advising workflows, or simply curious about what we're building — we'd be happy to start a conversation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-cream-dim">
              {status === "sent" ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="28" height="28" fill="none" stroke="#2A4A1E" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-xl text-charcoal mb-2">Message sent.</h3>
                  <p className="font-body text-sm text-slate">We'll be in touch soon. Thank you for reaching out.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full font-body text-sm px-4 py-3 border border-cream-dim rounded-lg focus:outline-none focus:border-blue bg-cream placeholder-muted/60"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="institution"
                        value={form.institution}
                        onChange={handleChange}
                        placeholder="Institution (optional)"
                        className="w-full font-body text-sm px-4 py-3 border border-cream-dim rounded-lg focus:outline-none focus:border-blue bg-cream placeholder-muted/60"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <select
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        className="w-full font-body text-sm px-4 py-3 border border-cream-dim rounded-lg focus:outline-none focus:border-blue bg-cream text-charcoal appearance-none"
                      >
                        <option value="">Your Role</option>
                        <option>Administrator</option>
                        <option>Faculty</option>
                        <option>Advisor</option>
                        <option>Researcher</option>
                        <option>Student</option>
                        <option>Other</option>
                      </select>
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none">▾</span>
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full font-body text-sm px-4 py-3 border border-cream-dim rounded-lg focus:outline-none focus:border-blue bg-cream placeholder-muted/60"
                      />
                    </div>
                  </div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how you'd like to collaborate or what you're interested in..."
                    rows={4}
                    className="w-full font-body text-sm px-4 py-3 border border-cream-dim rounded-lg focus:outline-none focus:border-blue bg-cream placeholder-muted/60 resize-none"
                  />
                  {status === "error" && (
                    <p className="font-body text-sm text-red-600">Something went wrong. Please email us directly at admin@acastructure.com.</p>
                  )}
                  <button
                    onClick={handleSubmit}
                    disabled={status === "sending"}
                    className="w-full bg-forest hover:bg-forest-light disabled:opacity-60 text-cream font-body text-sm font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                  <p className="font-body text-xs text-muted text-center flex items-center justify-center gap-1">
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0110 0v4"/>
                    </svg>
                    We respect your privacy. Your information will never be shared.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom callout */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-display text-2xl md:text-3xl text-cream leading-snug">
            Building better academic pathways starts with better conversations.
          </p>
          <p className="font-display text-2xl md:text-3xl text-blue-light mt-1">Let's start one.</p>
        </div>
      </section>
    </div>
  );
}
