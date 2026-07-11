import { Link } from "react-router-dom";

const GRADPATH_LOGO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 830 719"><g transform="translate(0.000000,719.000000) scale(0.100000,-0.100000)" fill="#3DDC3D" stroke="none"><path d="M3900 6978 c-534 -236 -1886 -1052 -2615 -1585 -302 -219 -503 -423 -594 -603 -56 -111 -71 -176 -71 -315 0 -148 18 -226 79 -337 95 -172 256 -310 541 -461 l155 -83 305 176 305 175 -277 159 c-153 88 -292 173 -309 189 -45 43 -38 129 16 176 44 38 2344 1371 2365 1371 21 0 2321 -1333 2365 -1371 54 -47 61 -133 16 -176 -17 -16 -156 -101 -309 -189 l-277 -159 305 -175 305 -176 155 83 c285 151 446 289 541 461 61 111 79 189 79 337 0 139 -15 204 -71 315 -91 180 -292 384 -594 603 -729 533 -2081 1349 -2615 1585 -127 56 -200 56 -320 0z"/><g transform="translate(0,0)" fill="#E8B400" stroke="none"><path d="M1270 4490 l-415 -239 0 -133 0 -133 2740 0 2740 0 0 133 0 133 -415 239 c-228 131 -423 239 -432 239 -10 0 -205 -108 -433 -239 l-415 -239 -1080 0 -1080 0 -415 239 c-228 131 -423 239 -432 239 -10 0 -205 -108 -433 -239z"/></g><g transform="translate(0,0)" fill="#E0303C" stroke="none"><path d="M830 3440 l0 -270 3320 0 3320 0 0 270 0 270 -3320 0 -3320 0 0 -270z"/></g></g></svg>`;

const EDVISOR_LOGO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 859 876"><g transform="translate(0.000000,876.000000) scale(0.100000,-0.100000)" fill="#3DDC3D" stroke="none"><path d="M4230 8548 c-534 -236 -1886 -1052 -2615 -1585 -302 -219 -503 -423 -594 -603 -56 -111 -71 -176 -71 -315 0 -148 18 -226 79 -337 95 -172 256 -310 541 -461 l155 -83 305 176 305 175 -277 159 c-153 88 -292 173 -309 189 -45 43 -38 129 16 176 44 38 2344 1371 2365 1371 21 0 2321 -1333 2365 -1371 54 -47 61 -133 16 -176 -17 -16 -156 -101 -309 -189 l-277 -159 305 -175 305 -176 155 83 c285 151 446 289 541 461 61 111 79 189 79 337 0 139 -15 204 -71 315 -91 180 -292 384 -594 603 -729 533 -2081 1349 -2615 1585 -127 56 -200 56 -320 0z"/></g></svg>`;

function BridgeDiagram() {
  return (
    <div className="relative bg-navy-mid rounded-xl p-8 md:p-12">
      <h3 className="font-display text-2xl md:text-3xl text-cream text-center mb-2">
        Connecting two perspectives.{" "}
        <span className="text-blue-light">One shared destination.</span>
      </h3>
      <div className="grid md:grid-cols-3 gap-8 mt-10 items-center">
        {/* Institutional */}
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-gold mb-5">Institutional Perspective</p>
          <div className="space-y-3">
            {["Faculty & Departments","Curriculum & Programs","Advisors","Articulation","Degree Maps","Policy & Compliance","Transfer Systems","K–16 Collaboratives"].map(item => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-light shrink-0" />
                <span className="font-body text-sm text-cream/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Center */}
        <div className="text-center">
          <svg viewBox="0 0 200 300" className="w-full max-w-[180px] mx-auto" aria-hidden="true">
            {[0,1,2,3,4,5,6,7].map(i => (
              <line key={`l${i}`} x1="20" y1={20 + i*37} x2="100" y2="150" stroke="#4A7EC4" strokeWidth="1.5" opacity="0.6" strokeDasharray="3 4"/>
            ))}
            {[0,1,2,3,4,5,6,7].map(i => (
              <line key={`r${i}`} x1="180" y1={20 + i*37} x2="100" y2="150" stroke="#3DDC3D" strokeWidth="1.5" opacity="0.6" strokeDasharray="3 4"/>
            ))}
            <rect x="75" y="128" width="50" height="44" rx="3" fill="#0D1B2A" stroke="#C4892A" strokeWidth="1.5"/>
            <text x="100" y="155" textAnchor="middle" fontFamily="Playfair Display" fontSize="8" fill="#C4892A">AcaStructure</text>
          </svg>
          <p className="font-display text-lg text-cream mt-2">AcaStructure</p>
        </div>
        {/* Student */}
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-forest-light mb-5">Student Perspective</p>
          <div className="space-y-3">
            {["Clarity","Confidence","On Track","Graduation","Opportunity","A Better Future"].map(item => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-forest-light shrink-0" />
                <span className="font-body text-sm text-cream/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80')"}}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold mb-5">Academic Infrastructure</p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.07] max-w-2xl text-cream">
            Building the bridge that connects students with a modern education experience.
          </h1>
          <p className="font-body text-base md:text-lg text-cream/70 max-w-lg mt-6 leading-relaxed">
            For generations, educators have built extraordinary academic pathways and advising systems. Our mission is to thoughtfully connect students to that work through modern infrastructure designed for today's world.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/get-gradpath"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold bg-forest hover:bg-forest-light text-cream px-6 py-3.5 rounded transition-colors"
            >
              Get GradPath
            </Link>
            <Link
              to="/philosophy"
              className="inline-flex items-center gap-2 font-body text-sm font-medium border border-cream/30 text-cream hover:border-cream px-6 py-3.5 rounded transition-colors"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Our philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* Bridge statement */}
      <section className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-lg text-slate leading-relaxed">
            Universities, faculty, advisors, and policymakers have spent decades improving higher education.
          </p>
          <p className="font-display text-2xl md:text-3xl text-blue mt-4 leading-snug">
            We believe students deserve a better way to experience that work.
          </p>
        </div>
      </section>

      {/* Two perspectives diagram */}
      <section className="bg-navy py-20">
        <div className="max-w-6xl mx-auto px-6">
          <BridgeDiagram />
        </div>
      </section>

      {/* Products */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-charcoal text-center mb-3">
            Our bridges. Every step of the journey.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* GradPath */}
            <div className="bg-white rounded-xl p-8 border border-cream-dim">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12" dangerouslySetInnerHTML={{ __html: GRADPATH_LOGO }} />
                <div>
                  <p className="font-mono text-xs tracking-widest uppercase text-forest">Student Navigation</p>
                  <h3 className="font-display text-2xl text-charcoal">GradPath</h3>
                </div>
              </div>
              <p className="font-body text-slate leading-relaxed mb-6">
                See where you stand. Plan what's next. Stay on track to your degree with clarity.
              </p>
              <Link
                to="/gradpath"
                className="font-body text-sm font-semibold text-forest hover:text-forest-light inline-flex items-center gap-1 transition-colors"
              >
                Explore GradPath →
              </Link>
            </div>

            {/* EdVisor */}
            <div className="bg-white rounded-xl p-8 border border-cream-dim opacity-80">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12" dangerouslySetInnerHTML={{ __html: EDVISOR_LOGO }} />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-mono text-xs tracking-widest uppercase text-gold">Advisor Infrastructure</p>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-muted border border-muted/40 px-2 py-0.5 rounded">In Development</span>
                  </div>
                  <h3 className="font-display text-2xl text-charcoal">EdVisor</h3>
                </div>
              </div>
              <p className="font-body text-slate leading-relaxed mb-6">
                Empower advisors with unified data, real-time insights, and smarter student support.
              </p>
              <span className="font-body text-sm text-muted inline-flex items-center gap-1">Coming soon</span>
            </div>
          </div>

          {/* Future Platforms */}
          <div className="bg-white rounded-xl p-8 border border-cream-dim mt-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-cream flex items-center justify-center shrink-0">
                <svg width="24" height="24" fill="none" stroke="#C4892A" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-gold mb-1">Building Tomorrow's Bridges</p>
                <h3 className="font-display text-xl text-charcoal mb-2">Future Platforms</h3>
                <p className="font-body text-slate leading-relaxed">
                  Expanding the infrastructure to connect earlier learning, workforce pathways, and lifelong education.
                </p>
                <span className="inline-block font-mono text-[10px] tracking-widest uppercase text-muted border border-muted/40 px-2 py-0.5 rounded mt-3">In Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From one of us */}
      <section className="bg-navy-mid py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-display text-3xl md:text-4xl text-cream">From one of us, for all of us.</p>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-cream/50 mt-5">
            Built by students at SFSU — for students across academia
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-forest-light hover:text-cream mt-8 transition-colors"
          >
            Our story →
          </Link>
        </div>
      </section>
    </div>
  );
}
