export default function Research() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section className="relative bg-cream overflow-hidden min-h-[55vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-gold mb-4 border-b-2 border-gold w-fit pb-1">
              Research
            </p>
            <h1 className="font-display font-semibold text-4xl md:text-5xl text-charcoal leading-tight mt-4">
              Rethinking how academic systems connect.
            </h1>
            <p className="font-body text-slate leading-relaxed mt-5 max-w-md">
              Every generation inherits educational systems built for a different era. Our research explores how modern academic infrastructure can reduce fragmentation, improve visibility, and create better educational experiences — without replacing the institutions that already exist.
            </p>
          </div>
          <div className="hidden md:flex justify-end">
            <div className="w-80 h-64 bg-cream-dim rounded-xl flex items-center justify-center">
              <svg width="80" height="80" fill="none" stroke="#C4892A" strokeWidth="1" viewBox="0 0 80 80">
                <rect x="15" y="30" width="50" height="35" rx="2"/>
                <path d="M10 30l30-20 30 20"/>
                <line x1="30" y1="65" x2="30" y2="45"/>
                <line x1="50" y1="65" x2="50" y2="45"/>
                <line x1="30" y1="45" x2="50" y2="45"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Research areas */}
      <section className="bg-cream-dim py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs tracking-widest uppercase text-gold text-center mb-10">Areas of Research</p>
          <div className="grid md:grid-cols-4 gap-6">
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
                title: "Academic Infrastructure",
                desc: "Exploring how degree requirements, articulation, curriculum, and advising can become easier to understand and navigate.",
              },
              {
                icon: (
                  <svg width="40" height="40" fill="none" stroke="#2B5EA7" strokeWidth="1.5" viewBox="0 0 48 48">
                    <circle cx="24" cy="18" r="8"/>
                    <path d="M12 40c0-7 5-12 12-12s12 5 12 12"/>
                    <circle cx="36" cy="28" r="3" fill="#2B5EA7" opacity="0.4"/>
                    <line x1="36" y1="31" x2="36" y2="38" strokeDasharray="2 2"/>
                  </svg>
                ),
                title: "Student Navigation",
                desc: "Investigating how every student can see a clearer path from where they are today to where they want to be tomorrow.",
              },
              {
                icon: (
                  <svg width="40" height="40" fill="none" stroke="#C4892A" strokeWidth="1.5" viewBox="0 0 48 48">
                    <rect x="6" y="10" width="36" height="28" rx="2"/>
                    <line x1="6" y1="18" x2="42" y2="18"/>
                    <line x1="18" y1="10" x2="18" y2="38"/>
                    <circle cx="34" cy="30" r="4"/>
                  </svg>
                ),
                title: "Institutional Visibility",
                desc: "Researching how educators and advisors can better understand student progress while preserving existing institutional workflows.",
              },
              {
                icon: (
                  <svg width="40" height="40" fill="none" stroke="#2A4A1E" strokeWidth="1.5" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="16"/>
                    <path d="M24 8v8M24 32v8M8 24h8M32 24h8"/>
                    <circle cx="24" cy="24" r="5"/>
                    <circle cx="36" cy="28" r="3" opacity="0.5"/>
                  </svg>
                ),
                title: "Longitudinal Learning Models",
                desc: "Exploring how a single academic model can evolve alongside students throughout their entire educational journey — from earliest years through higher education.",
              },
            ].map(a => (
              <div key={a.title} className="bg-cream rounded-xl p-6 border border-cream-dim text-center">
                <div className="flex justify-center mb-4">{a.icon}</div>
                <h3 className="font-display text-lg text-charcoal mb-3">{a.title}</h3>
                <p className="font-body text-sm text-slate leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {["One student.", "One evolving academic model.", "Multiple perspectives."].map(t => (
              <div key={t} className="text-center px-6">
                <p className="font-display text-xl md:text-2xl text-gold leading-snug">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current focus */}
      <section className="bg-cream py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs tracking-widest uppercase text-charcoal/40 text-center mb-12">
            Current Research Focus
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "GradPath",
                desc: "Researching how students interact with academic planning tools to make smarter decisions and stay on track.",
              },
              {
                title: "Academic Infrastructure",
                desc: "Researching modern models for articulation, advising, and curriculum intelligence that support educators and reduce friction.",
              },
              {
                title: "Longitudinal Models",
                desc: "Exploring how educational systems might connect across every stage of a student's academic journey.",
              },
            ].map(f => (
              <div key={f.title} className="bg-cream-dim rounded-xl overflow-hidden border border-cream-dim">
                <div className="h-32 bg-navy-mid flex items-center justify-center">
                  <svg width="48" height="48" fill="none" stroke="#C4892A" strokeWidth="1" viewBox="0 0 48 48">
                    <rect x="8" y="28" width="32" height="14" rx="1"/>
                    <path d="M4 28l20-14 20 14"/>
                    <line x1="20" y1="42" x2="20" y2="32"/>
                    <line x1="28" y1="42" x2="28" y2="32"/>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-charcoal mb-2">{f.title}</h3>
                  <p className="font-body text-sm text-slate leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="bg-cream-dim py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-display text-2xl md:text-3xl text-charcoal leading-snug">
            We don't believe the future of education is built by replacing institutions.
          </p>
          <p className="font-display text-2xl md:text-3xl text-charcoal leading-snug mt-2">
            We believe it's built by helping them see the same student through clearer windows.
          </p>
        </div>
      </section>
    </div>
  );
}
