import { SketchCampus, SketchCampusWide } from "../components/Sketches";

export default function Philosophy() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "#0A1628", minHeight: "55vh" }}>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-40">
          <SketchCampus className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0A1628 50%, transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24 flex items-center min-h-[55vh]">
          <div className="max-w-xl">
            <p className="font-mono text-xs tracking-[0.25em] uppercase mb-5" style={{ color: "#B8860B" }}>Our Philosophy</p>
            <h1 className="font-display font-bold text-white leading-[1.0]" style={{ fontSize: "clamp(40px,5.5vw,64px)" }}>
              Building bridges for student success.
            </h1>
            <p className="font-body text-white/65 leading-relaxed mt-5 max-w-md" style={{ fontSize: "16px" }}>
              AcaStructure exists to thoughtfully connect students to the extraordinary work of educators and institutions — creating modern infrastructure that makes education clearer, more accessible, and more equitable for all.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24" style={{ background: "#FAFAF7" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase mb-8" style={{ color: "#B8860B" }}>Our Mission</p>
          <h2 className="font-display font-semibold leading-snug" style={{ fontSize: "clamp(26px,3.5vw,42px)", color: "#1A1A2E" }}>
            To build academic infrastructure that connects students and institutions through{" "}
            <span style={{ color: "#1E5FA8" }}>clarity</span>,{" "}
            <span style={{ color: "#1E5FA8" }}>trust</span>, and{" "}
            <span style={{ color: "#1E5FA8" }}>thoughtful design</span>.
          </h2>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-20" style={{ background: "#FAFAF7" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="44" height="44" fill="none" stroke="#1E5FA8" strokeWidth="1.5" viewBox="0 0 48 48">
                    <rect x="6" y="22" width="36" height="22" rx="1"/>
                    <path d="M2 22l22-16 22 16"/>
                    <line x1="18" y1="44" x2="18" y2="30"/>
                    <line x1="30" y1="44" x2="30" y2="30"/>
                    <line x1="18" y1="30" x2="30" y2="30"/>
                  </svg>
                ),
                title: "Education is one of humanity's greatest achievements.",
                body: [
                  "For generations, educators, advisors, researchers, and institutions have dedicated their lives to helping students succeed.",
                  "They've built academic pathways, mapped degree requirements, and strengthened transfer systems — one student at a time.",
                  "We believe that work deserves to be experienced, not hidden behind fragmented systems, disconnected websites, or scattered documents.",
                ],
              },
              {
                icon: (
                  <svg width="44" height="44" fill="none" stroke="#1E5FA8" strokeWidth="1.5" viewBox="0 0 48 48">
                    <circle cx="16" cy="16" r="7"/>
                    <circle cx="32" cy="16" r="7"/>
                    <path d="M4 44c0-8 5-13 12-13h16c7 0 12 5 12 13"/>
                  </svg>
                ),
                title: "We don't believe education needs to be rebuilt.",
                body: [
                  "We believe it needs to be better connected.",
                  "Our mission isn't to replace universities. It isn't to replace advisors. It isn't to replace the extraordinary work already happening across higher education.",
                  "Our mission is to thoughtfully connect students to it.",
                ],
              },
              {
                icon: (
                  <svg width="44" height="44" fill="none" stroke="#1E5FA8" strokeWidth="1.5" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="18"/>
                    <circle cx="24" cy="24" r="5"/>
                    <line x1="24" y1="6" x2="24" y2="14"/>
                    <line x1="24" y1="34" x2="24" y2="42"/>
                    <line x1="6" y1="24" x2="14" y2="24"/>
                    <line x1="34" y1="24" x2="42" y2="24"/>
                  </svg>
                ),
                title: "Connecting two perspectives. One shared destination.",
                body: [
                  "Students and institutions experience education from different perspectives, but they're working toward the same destination: student success.",
                  "AcaStructure exists to build the bridge between them.",
                ],
              },
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border" style={{ borderColor: "#E8E4D9" }}>
                <div className="mb-5">{p.icon}</div>
                <h3 className="font-display font-semibold text-lg mb-5 leading-snug" style={{ color: "#1A1A2E" }}>{p.title}</h3>
                <div className="space-y-3">
                  {p.body.map((b, j) => (
                    <p key={j} className="font-body text-sm leading-relaxed" style={{ color: "#4A5568", fontWeight: j === 0 && i === 1 ? 600 : 400 }}>{b}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking forward */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#F0EDE4" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase mb-4" style={{ color: "#B8860B" }}>Looking Forward</p>
              <h2 className="font-display font-semibold mb-6 leading-tight" style={{ fontSize: "clamp(32px,4vw,48px)", color: "#1A1A2E" }}>
                One bridge at a time.
              </h2>
              <p className="font-body leading-relaxed" style={{ fontSize: "16px", color: "#4A5568" }}>
                GradPath is only the beginning. AcaStructure exists to thoughtfully build infrastructure wherever complexity creates unnecessary barriers between people and the systems designed to serve them.
              </p>
            </div>
            <div className="flex justify-center">
              <SketchCampus className="w-full max-w-sm opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Closing quote */}
      <section className="py-20" style={{ background: "#FAFAF7" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display text-8xl leading-none" style={{ color: "#1E5FA8" }}>"</p>
          <blockquote className="font-display font-medium italic mt-2 leading-snug" style={{ fontSize: "clamp(22px,3vw,32px)", color: "#1A1A2E" }}>
            Knowledge has never existed in a vacuum. Neither should the systems that connect people to it.
          </blockquote>
          <p className="font-body text-sm font-semibold mt-6" style={{ color: "#1E5FA8" }}>— The AcaStructure Philosophy</p>
        </div>
      </section>

      {/* Wide campus sketch footer */}
      <div className="overflow-hidden" style={{ background: "#F0EDE4" }}>
        <SketchCampusWide className="w-full opacity-50" />
      </div>
    </div>
  );
}
