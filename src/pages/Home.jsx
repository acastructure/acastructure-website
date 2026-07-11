import { Link } from "react-router-dom";
import heroBridge from "../assets/hero_bridge.webp";
import bridgeDiagram from "../assets/bridge_diagram.webp";

export default function Home() {
  return (
    <div className="font-body overflow-x-hidden">

      {/* HERO */}
      <section className="relative overflow-hidden flex items-center" style={{ background: "#0A1628", minHeight: "85vh" }}>
        <img src={heroBridge} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0A1628 55%, rgba(10,22,40,0.6) 80%, rgba(10,22,40,0.1) 100%)" }} />
        <div className="relative w-full max-w-7xl mx-auto px-6 py-24">
          <p className="font-mono text-xs uppercase tracking-widest mb-5" style={{ color: "#B8860B", letterSpacing: "0.2em" }}>Academic Infrastructure</p>
          <h1 className="font-display font-bold text-white leading-tight mb-5" style={{ fontSize: "clamp(28px, 5vw, 64px)", maxWidth: 600 }}>
            Building the bridges that connect students to modern degree pathways.
          </h1>
          <p className="font-body leading-relaxed mb-8 max-w-lg" style={{ fontSize: "clamp(14px, 1.5vw, 17px)", color: "rgba(250,250,247,0.65)" }}>
            Universities have spent generations building extraordinary academic pathways. We're building the bridge that helps students experience them with greater clarity, confidence, and purpose.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/gradpath" className="font-body font-semibold no-underline px-6 py-3 rounded-lg text-sm" style={{ color: "#0A1628", background: "#5AE712" }}>
              Get GradPath
            </Link>
            <Link to="/about" className="font-body font-medium no-underline px-6 py-3 rounded-lg text-sm flex items-center gap-2" style={{ color: "#FAFAF7", border: "1px solid rgba(250,250,247,0.3)" }}>
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              Our story
            </Link>
          </div>
        </div>
      </section>

      {/* BRIDGE STATEMENT */}
      <section className="py-16 px-6" style={{ background: "#FAFAF7" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display font-semibold leading-snug" style={{ fontSize: "clamp(18px, 2.5vw, 28px)", color: "#1A1A2E" }}>
            Connecting two perspectives.{" "}
            <span style={{ color: "#1E5FA8" }}>One shared destination.</span>
          </p>
        </div>
      </section>

      {/* BRIDGE DIAGRAM */}
      <section className="py-12 px-6" style={{ background: "#0A1628" }}>
        <div className="max-w-6xl mx-auto">
          <img src={bridgeDiagram} alt="AcaStructure bridge diagram" className="w-full h-auto rounded-2xl" />
        </div>
      </section>

      {/* TAGLINE */}
      <section className="py-16 px-6 text-center" style={{ background: "#112240" }}>
        <p className="font-display font-semibold text-white" style={{ fontSize: "clamp(22px, 3vw, 38px)" }}>
          From one of us, for all of us.
        </p>
        <p className="font-mono text-xs uppercase tracking-widest mt-4" style={{ color: "rgba(250,250,247,0.4)", letterSpacing: "0.15em" }}>
          Built by students at SFSU — for students across academia
        </p>
        <Link to="/about" className="font-body font-semibold no-underline inline-block mt-6" style={{ color: "#22C55E", fontSize: 14 }}>
          Our story →
        </Link>
      </section>

    </div>
  );
}
