import { Link } from "react-router-dom";

const GRADPATH_LOGO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 830 719"><g transform="translate(0.000000,719.000000) scale(0.100000,-0.100000)" fill="#3DDC3D" stroke="none"><path d="M3900 6978 c-534 -236 -1886 -1052 -2615 -1585 -302 -219 -503 -423 -594 -603 -56 -111 -71 -176 -71 -315 0 -148 18 -226 79 -337 95 -172 256 -310 541 -461 l155 -83 305 176 305 175 -277 159 c-153 88 -292 173 -309 189 -45 43 -38 129 16 176 44 38 2344 1371 2365 1371 21 0 2321 -1333 2365 -1371 54 -47 61 -133 16 -176 -17 -16 -156 -101 -309 -189 l-277 -159 305 -175 305 -176 155 83 c285 151 446 289 541 461 61 111 79 189 79 337 0 139 -15 204 -71 315 -91 180 -292 384 -594 603 -729 533 -2081 1349 -2615 1585 -127 56 -200 56 -320 0z"/><g transform="translate(0,0)" fill="#E8B400" stroke="none"><path d="M1270 4490 l-415 -239 0 -133 0 -133 2740 0 2740 0 0 133 0 133 -415 239 c-228 131 -423 239 -432 239 -10 0 -205 -108 -433 -239 l-415 -239 -1080 0 -1080 0 -415 239 c-228 131 -423 239 -432 239 -10 0 -205 -108 -433 -239z"/></g><g transform="translate(0,0)" fill="#E0303C" stroke="none"><path d="M830 3440 l0 -270 3320 0 3320 0 0 270 0 270 -3320 0 -3320 0 0 -270z"/></g></g></svg>`;

const features = [
  { label: "Transcript", desc: "We import and organize your academic history so you can see the full picture." },
  { label: "Degree Map", desc: "See every requirement, every course, and every milestone on your path to graduation." },
  { label: "Semester Optimizer", desc: "Optimize every semester with syllabus-based grade tracking, office hours, and intelligent planning." },
  { label: "Transfer", desc: "Explore transfer pathways and see how your credits will apply." },
  { label: "Degree Change", desc: "Thinking of a change? Model different degrees and see what it would take." },
];

export default function GradPathPage() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section className="bg-cream pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-forest mb-4">GradPath</p>
              <h1 className="font-display font-semibold text-4xl md:text-5xl text-charcoal leading-tight">
                Every course.<br />One clear path.
              </h1>
              <p className="font-body text-slate leading-relaxed mt-5 max-w-md">
                GradPath organizes your university's degree requirements, transfer pathways, semester planning, and progress into one clear experience — built directly from your institution's academic bulletin.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/get-gradpath"
                  className="inline-flex items-center gap-2 bg-charcoal text-cream font-body text-sm font-semibold px-5 py-3 rounded-lg hover:bg-navy transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </Link>
                <Link
                  to="/get-gradpath"
                  className="inline-flex items-center gap-2 bg-charcoal text-cream font-body text-sm font-semibold px-5 py-3 rounded-lg hover:bg-navy transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3.18 23.76c.31.17.67.21 1.03.11l12.03-12.03-3.56-3.56L3.18 23.76zM20.7 9.59l-2.31-1.33-3.79 3.79 3.79 3.79 2.33-1.35c.66-.38.66-1.52-.02-1.9zM1.28.56C1.1.76 1 1.06 1 1.44v21.12c0 .38.1.68.28.88l.04.04 11.83-11.83v-.26L1.32.52.28.56zM12.91 13.29l-3.79-3.79 3.79-3.79 3.56 3.56-3.56 4.02z"/>
                  </svg>
                  Google Play
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-56 md:w-64 bg-charcoal rounded-3xl p-3 shadow-2xl">
                  <div className="bg-navy rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6" dangerouslySetInnerHTML={{ __html: GRADPATH_LOGO }} />
                      <span className="font-display text-sm font-semibold text-cream">GradPath</span>
                    </div>
                    <div className="bg-navy-mid rounded-lg p-3 mb-3">
                      <p className="font-mono text-xs text-gold">SF State · Philosophy</p>
                      <p className="font-body text-xs text-cream/60 mt-0.5">Build Your Path. Own Your Future</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-center mb-3">
                      <div className="bg-navy-mid rounded-lg p-2">
                        <p className="font-display text-base font-semibold text-cream">19%</p>
                        <p className="font-mono text-[9px] text-cream/50">of Path Completed</p>
                      </div>
                      <div className="bg-navy-mid rounded-lg p-2">
                        <p className="font-display text-base font-semibold text-cream">Fall 2026</p>
                        <p className="font-mono text-[9px] text-cream/50">Est. Graduation</p>
                      </div>
                    </div>
                    <p className="font-mono text-[9px] text-cream/40 uppercase tracking-widest mb-2">Core Features</p>
                    <div className="grid grid-cols-3 gap-1.5">
                      {["Transcript","Degree Map","Semester"].map(f => (
                        <div key={f} className="bg-navy-mid rounded p-1.5 text-center">
                          <p className="font-mono text-[8px] text-cream/70">{f}</p>
                        </div>
                      ))}
                      {["GE Tracker","Degree Change","Transfer"].map(f => (
                        <div key={f} className="bg-navy-mid rounded p-1.5 text-center">
                          <p className="font-mono text-[8px] text-cream/70">{f}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-white py-20 border-t border-cream-dim">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-charcoal text-center mb-12">
            Everything you need. Exactly when you need it.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "📍", title: "Know where you stand.", desc: "Instantly see your completed courses, in-progress classes, GE fulfillment, and how every requirement is tracking toward your degree." },
              { icon: "🎓", title: "Know where you're going.", desc: "Explore your full Degree Map, plan smarter semesters with the Optimizer, and stay on track toward graduation with confidence." },
              { icon: "🔀", title: "Know what's possible.", desc: "Evaluate transfer options, model degree changes, and understand the impact of every decision before you make it." },
            ].map(v => (
              <div key={v.title} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center text-2xl">
                  {v.icon}
                </div>
                <h3 className="font-display text-lg text-charcoal mb-2">{v.title}</h3>
                <p className="font-body text-sm text-slate leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature flow */}
      <section className="bg-cream py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-charcoal text-center mb-16">
            Everything working together.
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {features.map((f, i) => (
              <div key={f.label} className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <span className="w-7 h-7 rounded-full bg-forest text-cream font-body text-xs font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  {i < features.length - 1 && (
                    <span className="hidden md:block text-muted ml-2">→</span>
                  )}
                </div>
                <div className="bg-white rounded-xl p-4 border border-cream-dim">
                  <h3 className="font-display text-base text-charcoal mb-2">{f.label}</h3>
                  <p className="font-body text-xs text-slate leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-navy py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-gold mb-3">Built to earn your trust first</p>
              <h2 className="font-display text-3xl md:text-4xl text-cream leading-tight">
                Transparent today. Fair tomorrow.
              </h2>
              <p className="font-body text-cream/70 leading-relaxed mt-4">
                During our beta at SF State and CCSF, GradPath is completely free.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: "Now through Dec 2026", price: "Free", sub: "Full access during the beta period at SFSU and CCSF.", detail: "No payment required.", color: "text-blue-light" },
                { label: "Starting Jan 1, 2027", price: "$12/mo", sub: "Continued access for accounts created during the beta.", detail: "Cancel anytime.", color: "text-gold" },
                { label: "Founding Beta Members", price: "Free for life", sub: "Permanent access for the original founding group.", detail: "Never billed.", color: "text-forest-light" },
              ].map(p => (
                <div key={p.label} className="bg-navy-mid rounded-xl p-6 border border-white/10">
                  <p className="font-mono text-xs tracking-widest uppercase text-cream/50 mb-1">{p.label}</p>
                  <p className={`font-display text-2xl font-semibold ${p.color} mb-2`}>{p.price}</p>
                  <p className="font-body text-sm text-cream/70">{p.sub}</p>
                  <p className="font-body text-sm text-cream/40 mt-1">{p.detail}</p>
                </div>
              ))}
              <p className="font-body text-xs text-cream/40 text-center mt-2">
                Subscriptions are billed directly through AcaStructure, not the App Store.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom tagline */}
      <section className="bg-cream py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-display text-3xl md:text-4xl text-charcoal">
            Built by one of you.<br />For all of us.
          </p>
          <Link to="/about" className="font-body text-sm text-blue font-semibold mt-8 inline-block hover:text-blue-light transition-colors">
            Our story →
          </Link>
        </div>
      </section>
    </div>
  );
}
