import { Link } from "react-router-dom";
import { SketchCampusWide } from "../components/Sketches";

const GRADPATH_SVG = (
  <svg width="48" height="48" viewBox="0 0 830 719" fill="none">
    <path d="M415 679 L52 470 L52 370 L415 580 L778 370 L778 470 Z" fill="#3DDC3D"/>
    <path d="M130 449 L52 404 L52 270 L778 270 L778 404 L700 449 L415 295 Z" fill="#E8B400"/>
    <path d="M83 344 L83 135 L747 135 L747 344" stroke="#E0303C" strokeWidth="30" fill="none"/>
  </svg>
);

const EDVISOR_SVG = (
  <svg width="48" height="48" viewBox="0 0 859 876" fill="none">
    <path d="M430 820 L55 610 L55 500 L430 710 L805 500 L805 610 Z" fill="#3DDC3D"/>
    <path d="M180 580 L55 510 L55 380 L805 380 L805 510 L680 580" stroke="#E8B400" strokeWidth="25" fill="none"/>
    <rect x="200" y="240" width="460" height="200" stroke="#E0303C" strokeWidth="20" fill="none"/>
    <line x1="200" y1="330" x2="660" y2="330" stroke="#E0303C" strokeWidth="15"/>
    <line x1="200" y1="390" x2="660" y2="390" stroke="#E0303C" strokeWidth="15"/>
  </svg>
);

function BridgeDiagram() {
  const instItems = ["Faculty & Departments", "Curriculum & Programs", "Advisors", "Articulation", "Degree Maps", "Policy & Compliance", "Transfer Systems", "K–16 Collaboratives"];
  const stuItems = ["Clarity", "Confidence", "On Track", "Graduation", "Opportunity", "A Better Future"];
  return (
    <div style={{ background: "#0D2240" }} className="rounded-2xl p-8 md:p-12">
      <h3 className="font-display font-semibold text-2xl md:text-3xl text-white text-center mb-2">
        Connecting two perspectives.{" "}
        <span style={{ color: "#4A9FE8" }}>One shared destination.</span>
      </h3>
      <div className="grid grid-cols-3 gap-6 mt-10 items-center">
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-5" style={{ color: "#B8860B" }}>Institutional Perspective</p>
          <div className="space-y-2.5">
            {instItems.map(item => (
              <div key={item} className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "#4A9FE8" }} />
                <span className="font-body text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 160 220" className="w-full max-w-[160px]" fill="none">
            {instItems.map((_, i) => (
              <line key={`l${i}`} x1="8" y1={14 + i * 27} x2="80" y2="110" stroke="#4A9FE8" strokeWidth="1.5" opacity="0.5" strokeDasharray="3 5"/>
            ))}
            {stuItems.map((_, i) => (
              <line key={`r${i}`} x1="152" y1={24 + i * 32} x2="80" y2="110" stroke="#22C55E" strokeWidth="1.5" opacity="0.5" strokeDasharray="3 5"/>
            ))}
            <rect x="58" y="92" width="44" height="36" rx="4" fill="#0A1628" stroke="#B8860B" strokeWidth="1.5"/>
            <text x="80" y="113" textAnchor="middle" fontFamily="Playfair Display" fontSize="7" fill="#B8860B">AcaStructure</text>
          </svg>
          <p className="font-display text-base text-white mt-2 text-center">AcaStructure</p>
        </div>
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-5" style={{ color: "#22C55E" }}>Student Perspective</p>
          <div className="space-y-2.5">
            {stuItems.map(item => (
              <div key={item} className="flex items-center gap-2.5">
                <svg width="16" height="16" fill="none" stroke="#22C55E" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
                <span className="font-body text-sm text-white/80">{item}</span>
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
      {/* Hero — full bleed with bridge photo */}
      <section className="relative overflow-hidden" style={{ background: "#0A1628", minHeight: "85vh" }}>
        <div className="absolute inset-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80')",
          backgroundSize: "cover", backgroundPosition: "center", opacity: 0.35
        }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0A1628 40%, rgba(10,22,40,0.5) 70%, transparent)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36 flex items-center min-h-[85vh]">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.25em] uppercase mb-6" style={{ color: "#B8860B" }}>Academic Infrastructure</p>
            <h1 className="font-display font-bold text-white leading-[1.0]" style={{ fontSize: "clamp(42px, 6vw, 72px)" }}>
              Building the bridge that connects students with a modern education experience.
            </h1>
            <p className="font-body text-white/65 leading-relaxed mt-6 max-w-lg" style={{ fontSize: "17px" }}>
              For generations, educators have built extraordinary academic pathways and advising systems. Our mission is to thoughtfully connect students to that work through modern infrastructure designed for today's world.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link to="/get-gradpath" className="inline-flex items-center font-body text-sm font-semibold text-white px-6 py-3.5 rounded-md transition-colors" style={{ background: "#1B3A0E" }}>
                Get GradPath
              </Link>
              <Link to="/philosophy" className="inline-flex items-center gap-2 font-body text-sm font-medium text-white px-6 py-3.5 rounded-md border transition-colors" style={{ borderColor: "rgba(255,255,255,0.3)" }}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                Watch the story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge statement */}
      <section className="py-20" style={{ background: "#FAFAF7" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body leading-relaxed" style={{ fontSize: "19px", color: "#4A5568" }}>
            Universities, faculty, advisors, and policymakers have spent decades improving higher education.
          </p>
          <p className="font-display font-semibold mt-4 leading-snug" style={{ fontSize: "clamp(22px,3vw,30px)", color: "#1E5FA8" }}>
            We believe students deserve a better way to experience that work.
          </p>
        </div>
      </section>

      {/* Diagram */}
      <section className="py-20" style={{ background: "#0A1628" }}>
        <div className="max-w-6xl mx-auto px-6">
          <BridgeDiagram />
        </div>
      </section>

      {/* Products */}
      <section className="py-24" style={{ background: "#FAFAF7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display font-semibold text-center mb-16" style={{ fontSize: "clamp(28px,3.5vw,40px)", color: "#1A1A2E" }}>
            Our bridges. Every step of the journey.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* GradPath */}
            <div className="md:col-span-2 bg-white rounded-2xl p-8 border" style={{ borderColor: "#E8E4D9" }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="shrink-0">{GRADPATH_SVG}</div>
                <div>
                  <p className="font-mono text-[11px] tracking-widest uppercase mb-1" style={{ color: "#1B3A0E" }}>Student Navigation</p>
                  <h3 className="font-display font-semibold text-2xl" style={{ color: "#1A1A2E" }}>GradPath</h3>
                </div>
              </div>
              <p className="font-body leading-relaxed mb-8" style={{ color: "#4A5568" }}>
                See where you stand. Plan what's next. Stay on track to your degree with clarity.
              </p>
              <Link to="/gradpath" className="font-body text-sm font-semibold transition-colors" style={{ color: "#1B3A0E" }}>
                Explore GradPath →
              </Link>
            </div>

            {/* EdVisor + Future */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 border" style={{ borderColor: "#E8E4D9", opacity: 0.85 }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="shrink-0 w-10 h-10">{EDVISOR_SVG}</div>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "#B8860B" }}>Advisor Infrastructure</p>
                    <h3 className="font-display font-semibold text-lg" style={{ color: "#1A1A2E" }}>EdVisor</h3>
                  </div>
                </div>
                <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "#4A5568" }}>
                  Empower advisors with unified data, real-time insights, and smarter student support.
                </p>
                <span className="font-mono text-[10px] tracking-widest uppercase text-white px-2.5 py-1 rounded" style={{ background: "#718096" }}>In Development</span>
              </div>
              <div className="bg-white rounded-2xl p-6 border" style={{ borderColor: "#E8E4D9", opacity: 0.75 }}>
                <p className="font-mono text-[10px] tracking-widest uppercase mb-1" style={{ color: "#B8860B" }}>Building Tomorrow's Bridges</p>
                <h3 className="font-display font-semibold text-lg mb-2" style={{ color: "#1A1A2E" }}>Future Platforms</h3>
                <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "#4A5568" }}>
                  Expanding the infrastructure to connect earlier learning, workforce pathways, and lifelong education.
                </p>
                <span className="font-mono text-[10px] tracking-widest uppercase text-white px-2.5 py-1 rounded" style={{ background: "#718096" }}>In Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus sketch + tagline */}
      <section className="py-20 overflow-hidden" style={{ background: "#F0EDE4" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SketchCampusWide className="w-full h-auto mb-12 opacity-70" />
          <div className="text-center">
            <p className="font-display font-semibold" style={{ fontSize: "clamp(28px,3.5vw,42px)", color: "#1A1A2E" }}>
              From one of us, for all of us.
            </p>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase mt-5" style={{ color: "#718096" }}>
              Built by students at SFSU — for students across academia
            </p>
            <Link to="/about" className="font-body text-sm font-semibold mt-8 inline-block transition-colors" style={{ color: "#1B3A0E" }}>
              Our story →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
