import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 413 512"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#F5F0E8" stroke="none"><path d="M1980 4026 c-95 -51 -390 -214 -655 -364 -466 -261 -483 -272 -498 -310 -9 -22 -17 -55 -17 -73 0 -33 5 -38 263 -187 144 -83 265 -152 268 -152 3 0 57 30 120 66 l115 66 -167 96 c-92 53 -171 101 -175 107 -4 6 -3 18 3 27 6 9 148 93 316 187 l306 171 306 -171 c168 -94 310 -178 316 -187 6 -9 7 -21 3 -27 -4 -6 -83 -54 -175 -107 l-167 -96 115 -66 c63 -36 117 -66 120 -66 3 0 124 69 268 152 258 149 263 154 263 187 0 18 -8 51 -17 73 -15 38 -32 49 -498 310 -265 150 -560 313 -655 364 -95 51 -180 93 -187 93 -8 0 -93 -42 -188 -93z"/><path d="M1566 3151 c-234 -132 -430 -247 -435 -256 -5 -9 -11 -38 -13 -65 l-3 -50 438 -245 437 -244 438 244 437 244 -3 50 c-2 27 -8 56 -13 65 -5 9 -201 124 -435 256 -234 131 -430 240 -435 240 -5 0 -201 -109 -413 -239z m651 -130 c176 -99 322 -183 324 -186 2 -4 -141 -88 -317 -187 l-321 -181 -319 180 c-175 99 -319 183 -319 187 0 4 144 88 319 187 l319 180 2 -1 c1 -1 146 -82 312 -179z"/><path d="M1155 2188 c-235 -132 -431 -247 -435 -255 -5 -9 -10 -38 -12 -65 l-3 -50 435 -244 435 -244 3 42 c2 23 1 54 -3 69 -5 22 -57 57 -362 232 l-356 206 356 207 c197 114 360 213 363 219 3 6 4 38 3 70 l-3 58 -421 -245z"/><path d="M2670 2375 c0 -32 1 -64 3 -70 3 -6 166 -105 363 -219 l356 -207 -356 -206 c-305 -175 -357 -210 -362 -232 -4 -15 -5 -46 -3 -69 l3 -42 435 244 435 244 -3 50 c-2 27 -7 56 -12 65 -4 8 -200 123 -435 255 l-427 240 3 -53z"/></g></svg>`;

const links = [
  { label: "Philosophy", to: "/philosophy" },
  { label: "GradPath", to: "/gradpath" },
  { label: "Partners", to: "/partners" },
  { label: "Research", to: "/research" },
  { label: "About", to: "/about" },
];

export default function NavBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-navy text-cream sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span
            className="h-9 w-9"
            dangerouslySetInnerHTML={{ __html: LOGO_SVG }}
          />
          <span className="font-display text-xl font-semibold tracking-tight">
            AcaStructure
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`font-body text-sm transition-colors ${
                  active
                    ? "text-cream border-b-2 border-forest-light pb-0.5"
                    : "text-cream/70 hover:text-cream"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            to="/get-gradpath"
            className="hidden md:inline-flex font-body text-sm font-semibold bg-forest hover:bg-forest-light text-cream px-5 py-2.5 rounded transition-colors"
          >
            Get GradPath
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-cream"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-mid border-t border-white/10 px-6 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className="block font-body text-sm text-cream/80 hover:text-cream py-1"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/get-gradpath"
            onClick={() => setMenuOpen(false)}
            className="block font-body text-sm font-semibold bg-forest text-cream px-4 py-2.5 rounded mt-4 text-center"
          >
            Get GradPath
          </Link>
        </div>
      )}
    </nav>
  );
}
