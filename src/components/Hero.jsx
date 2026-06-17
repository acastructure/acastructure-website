export default function Hero() {
  return (
    <section className="relative bg-ink text-paper overflow-hidden">
      {/* faint blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#6FA8DC 1px, transparent 1px), linear-gradient(90deg, #6FA8DC 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-10 pb-24 md:pt-14 md:pb-32">
        {/* title block, like a drawing sheet header */}
        <div className="flex items-center justify-between border-b border-blueprint-dim/50 pb-4 mb-16 font-mono text-[11px] tracking-widest uppercase text-blueprint/70">
          <span>AcaStructure / Academic Infrastructure</span>
          <span className="hidden sm:inline">Sheet 01 — Overview</span>
        </div>

        <p className="font-mono text-xs tracking-[0.2em] uppercase text-blueprint mb-5">
          Academic Infrastructure
        </p>

        <h1 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.08] max-w-3xl text-paper">
          We bridge legacy academic systems to a modern interface.
        </h1>

        <p className="font-body text-base md:text-lg text-paper/70 max-w-xl mt-6 leading-relaxed">
          Degree requirements, transfer rules, and advising workflows were built for another era.
          AcaStructure models that complexity once, then gives every student and every advisor a clear
          window into it.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#product"
            className="font-body text-sm font-medium bg-blueprint text-ink px-6 py-3 rounded-sm hover:bg-paper transition-colors"
          >
            See how it works
          </a>
          <a
            href="#contact"
            className="font-body text-sm font-medium border border-paper/30 text-paper px-6 py-3 rounded-sm hover:border-paper transition-colors"
          >
            Talk to us
          </a>
        </div>

        {/* signature diagram: legacy -> acastructure -> modern */}
        <div className="mt-24">
          <BridgeDiagram />
        </div>
      </div>
    </section>
  );
}

function BridgeDiagram() {
  return (
    <svg
      viewBox="0 0 1000 220"
      className="w-full h-auto"
      role="img"
      aria-label="Diagram showing AcaStructure as a bridge between legacy academic systems and a modern interface"
    >
      <defs>
        <marker id="dot" markerWidth="6" markerHeight="6" refX="3" refY="3">
          <circle cx="3" cy="3" r="2.5" fill="#6FA8DC" />
        </marker>
      </defs>

      {/* legacy cluster (left) */}
      <g stroke="#6FA8DC" strokeWidth="1" fill="none" opacity="0.85">
        <rect x="40" y="40" width="70" height="44" />
        <rect x="40" y="100" width="70" height="44" />
        <rect x="40" y="160" width="70" height="30" />
        <line x1="110" y1="62" x2="170" y2="108" />
        <line x1="110" y1="122" x2="170" y2="108" />
        <line x1="110" y1="175" x2="170" y2="108" />
      </g>
      <text x="44" y="205" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#6FA8DC" opacity="0.8">
        LEGACY SYSTEMS
      </text>

      {/* center node: AcaStructure */}
      <g>
        <line x1="170" y1="108" x2="430" y2="108" stroke="#6FA8DC" strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
        <rect x="430" y="78" width="140" height="60" stroke="#C9A668" strokeWidth="1.25" fill="#11151C" />
        <text
          x="500"
          y="113"
          textAnchor="middle"
          fontFamily="Space Grotesk, sans-serif"
          fontSize="15"
          fill="#C9A668"
        >
          AcaStructure
        </text>
        <line x1="570" y1="108" x2="830" y2="108" stroke="#6FA8DC" strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
      </g>

      {/* modern cluster (right) */}
      <g stroke="#6FA8DC" strokeWidth="1" fill="none" opacity="0.85">
        <rect x="830" y="68" width="90" height="34" rx="2" />
        <rect x="830" y="112" width="90" height="34" rx="2" />
        <line x1="830" y1="85" x2="800" y2="108" />
        <line x1="830" y1="129" x2="800" y2="108" />
      </g>
      <text x="830" y="170" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#6FA8DC" opacity="0.8">
        MODERN INTERFACE
      </text>
    </svg>
  );
}
