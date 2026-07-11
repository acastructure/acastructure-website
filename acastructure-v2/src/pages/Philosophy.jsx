export default function Philosophy() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden min-h-[60vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80')"}}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold mb-4">Our Philosophy</p>
          <h1 className="font-display font-semibold text-4xl md:text-6xl text-cream max-w-xl leading-tight">
            Building bridges for student success.
          </h1>
          <p className="font-body text-base text-cream/70 max-w-lg mt-5 leading-relaxed">
            AcaStructure exists to thoughtfully connect students to the extraordinary work of educators and institutions — creating modern infrastructure that makes education clearer, more accessible, and more equitable for all.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-cream py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-mono text-xs tracking-widest uppercase text-gold mb-6">Our Mission</p>
          <h2 className="font-display text-3xl md:text-4xl text-charcoal leading-snug">
            To build academic infrastructure that connects students and institutions through{" "}
            <span className="text-blue">clarity</span>,{" "}
            <span className="text-blue">trust</span>, and{" "}
            <span className="text-blue">thoughtful design</span>.
          </h2>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-cream-dim py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-cream rounded-xl p-8 border border-cream-dim">
              <div className="w-12 h-12 mb-5">
                <svg viewBox="0 0 48 48" fill="none" stroke="#2B5EA7" strokeWidth="1.5" className="w-full h-full">
                  <rect x="8" y="20" width="32" height="22" rx="1"/>
                  <path d="M4 20l20-14 20 14"/>
                  <line x1="18" y1="42" x2="18" y2="28"/>
                  <line x1="30" y1="42" x2="30" y2="28"/>
                  <line x1="18" y1="28" x2="30" y2="28"/>
                </svg>
              </div>
              <h3 className="font-display text-xl text-charcoal mb-4 leading-snug">
                Education is one of humanity's greatest achievements.
              </h3>
              <div className="space-y-3">
                <p className="font-body text-sm text-slate leading-relaxed">
                  For generations, educators, advisors, researchers, and institutions have dedicated their lives to helping students succeed.
                </p>
                <p className="font-body text-sm text-slate leading-relaxed">
                  They've built academic pathways, mapped degree requirements, and strengthened transfer systems — one student at a time.
                </p>
                <p className="font-body text-sm text-slate leading-relaxed">
                  We believe that work deserves to be experienced, not hidden behind fragmented systems, disconnected websites, or scattered documents.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-cream rounded-xl p-8 border border-cream-dim">
              <div className="w-12 h-12 mb-5">
                <svg viewBox="0 0 48 48" fill="none" stroke="#2B5EA7" strokeWidth="1.5" className="w-full h-full">
                  <circle cx="18" cy="16" r="6"/>
                  <circle cx="30" cy="16" r="6"/>
                  <path d="M6 42c0-8 6-12 12-12h12c6 0 12 4 12 12"/>
                </svg>
              </div>
              <h3 className="font-display text-xl text-charcoal mb-4 leading-snug">
                We don't believe education needs to be rebuilt.
              </h3>
              <div className="space-y-3">
                <p className="font-body text-sm text-slate leading-relaxed font-semibold">
                  We believe it needs to be better connected.
                </p>
                <p className="font-body text-sm text-slate leading-relaxed">
                  Our mission isn't to replace universities. It isn't to replace advisors. It isn't to replace the extraordinary work already happening across higher education.
                </p>
                <p className="font-body text-sm text-slate leading-relaxed">
                  Our mission is to thoughtfully connect students to it.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-cream rounded-xl p-8 border border-cream-dim">
              <div className="w-12 h-12 mb-5">
                <svg viewBox="0 0 48 48" fill="none" stroke="#2B5EA7" strokeWidth="1.5" className="w-full h-full">
                  <circle cx="24" cy="24" r="16"/>
                  <circle cx="24" cy="24" r="4"/>
                  <line x1="24" y1="8" x2="24" y2="14"/>
                  <line x1="24" y1="34" x2="24" y2="40"/>
                  <line x1="8" y1="24" x2="14" y2="24"/>
                  <line x1="34" y1="24" x2="40" y2="24"/>
                </svg>
              </div>
              <h3 className="font-display text-xl text-charcoal mb-4 leading-snug">
                Connecting two perspectives. One shared destination.
              </h3>
              <div className="space-y-3">
                <p className="font-body text-sm text-slate leading-relaxed">
                  Students and institutions experience education from different perspectives, but they're working toward the same destination: student success.
                </p>
                <p className="font-body text-sm text-slate leading-relaxed">
                  AcaStructure exists to build the bridge between them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking forward */}
      <section className="bg-cream py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-gold mb-4">Looking Forward</p>
              <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-6">One bridge at a time.</h2>
              <p className="font-body text-slate leading-relaxed">
                GradPath is only the beginning. AcaStructure exists to thoughtfully build infrastructure wherever complexity creates unnecessary barriers between people and the systems designed to serve them.
              </p>
            </div>
            <div className="bg-cream-dim rounded-xl p-10 text-center">
              <p className="font-display text-5xl text-gold mb-2">"</p>
              <blockquote className="font-display text-xl md:text-2xl text-charcoal leading-snug">
                Knowledge has never existed in a vacuum. Neither should the systems that connect people to it.
              </blockquote>
              <p className="font-body text-sm text-blue font-semibold mt-6">— The AcaStructure Philosophy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
