export default function About() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section className="bg-cream pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-gold mb-4">About Us</p>
            <h1 className="font-display font-semibold text-4xl md:text-5xl text-charcoal leading-tight">
              Our journey.<br />Your path.
            </h1>
            <p className="font-body text-slate leading-relaxed mt-5">
              We met when we were young and have spent nearly our entire adult lives building together. Along the way came high school, military service, college, careers, marriage, and raising a family. Education was always part of that journey — but navigating it often felt more difficult than the learning itself.
            </p>
          </div>
          {/* Illustrated portrait placeholder */}
          <div className="flex justify-center">
            <div className="w-80 h-72 bg-cream-dim rounded-2xl border border-cream-dim flex items-center justify-center">
              <div className="text-center">
                <svg width="80" height="80" fill="none" stroke="#C4892A" strokeWidth="1" viewBox="0 0 80 80" className="mx-auto mb-3">
                  <circle cx="30" cy="28" r="12"/>
                  <circle cx="50" cy="28" r="12"/>
                  <path d="M10 70c0-12 9-20 20-20M50 70c0-12 9-20 20-20M30 50c4 6 16 6 20 0"/>
                </svg>
                <p className="font-body text-xs text-muted">Rick & Isabella</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-cream-dim py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <svg width="16" height="16" fill="none" stroke="#C4892A" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <h2 className="font-display text-2xl text-charcoal">The problem we couldn't ignore.</h2>
            </div>
            <div className="border-b-2 border-gold w-12 mb-6" />
            <div className="space-y-4">
              <p className="font-body text-slate leading-relaxed">
                Every semester seemed to require another website, another degree map, another spreadsheet, another advisor meeting, another policy to interpret.
              </p>
              <p className="font-body text-slate leading-relaxed font-semibold">
                We weren't looking for another planning tool.<br />We were looking for clarity.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-64 bg-cream rounded-xl border border-cream-dim flex items-center justify-center">
              <svg width="100" height="80" fill="none" stroke="#4A5568" strokeWidth="1" viewBox="0 0 100 80">
                <rect x="5" y="5" width="40" height="55" rx="2"/>
                <rect x="55" y="5" width="40" height="55" rx="2"/>
                <line x1="12" y1="18" x2="38" y2="18"/>
                <line x1="12" y1="26" x2="38" y2="26"/>
                <line x1="12" y1="34" x2="30" y2="34"/>
                <line x1="62" y1="18" x2="88" y2="18"/>
                <line x1="62" y1="26" x2="88" y2="26"/>
                <line x1="62" y1="34" x2="78" y2="34"/>
                <circle cx="50" cy="68" r="6"/>
                <line x1="45" y1="60" x2="50" y2="62"/>
                <line x1="55" y1="60" x2="50" y2="62"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="w-80 h-56 bg-cream-dim rounded-xl border border-cream-dim flex items-center justify-center">
              <svg width="100" height="70" fill="none" stroke="#2A4A1E" strokeWidth="1" viewBox="0 0 100 70">
                <path d="M10 60l20-30 20 10 20-25 20 20" strokeWidth="2"/>
                <circle cx="10" cy="60" r="3" fill="#2A4A1E"/>
                <circle cx="30" cy="30" r="3" fill="#2A4A1E"/>
                <circle cx="50" cy="40" r="3" fill="#2A4A1E"/>
                <circle cx="70" cy="15" r="3" fill="#2A4A1E"/>
                <circle cx="90" cy="35" r="3" fill="#2A4A1E"/>
              </svg>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <svg width="16" height="16" fill="#DC2626" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h2 className="font-display text-2xl text-charcoal">So we built the tool we wished we'd had.</h2>
            </div>
            <div className="border-b-2 border-gold w-12 mb-6" />
            <div className="space-y-3">
              <p className="font-body text-slate leading-relaxed">Not because we wanted to build software.</p>
              <p className="font-body text-slate leading-relaxed font-semibold">Because we couldn't find it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream-dim py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl text-charcoal text-center mb-3">Built by people living the problem.</h2>
          <div className="border-b-2 border-gold w-12 mx-auto mb-12" />
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "Rick",
                roles: ["Philosophy student.", "Veteran.", "Systems thinker."],
                focus: "Focused on academic models, research, and product vision.",
              },
              {
                name: "Isabella",
                roles: ["Physics student.", "Previously computer engineering.", "Veteran architect of the platform."],
                focus: "Focused on building reliable systems that people can trust.",
              },
            ].map(person => (
              <div key={person.name} className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-cream border border-cream-dim flex items-center justify-center shrink-0">
                  <svg width="36" height="36" fill="none" stroke="#C4892A" strokeWidth="1.5" viewBox="0 0 48 48">
                    <circle cx="24" cy="18" r="10"/>
                    <path d="M8 44c0-9 7-16 16-16s16 7 16 16"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-charcoal mb-1">{person.name}</h3>
                  <div className="border-b-2 border-gold w-10 mb-3" />
                  <div className="space-y-0.5 mb-4">
                    {person.roles.map(r => (
                      <p key={r} className="font-body text-sm text-slate">{r}</p>
                    ))}
                  </div>
                  <p className="font-body text-sm text-charcoal font-medium leading-relaxed">{person.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-navy py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-cream leading-snug">
            Every meaningful journey deserves a clearer path.
          </h2>
          <div className="border-b-2 border-gold w-12 mx-auto my-6" />
          <p className="font-body text-cream/70 leading-relaxed max-w-xl mx-auto">
            We built GradPath for our family, and for yours — to reduce friction, bring clarity, and help every student move forward with confidence.
          </p>
        </div>
      </section>
    </div>
  );
}
