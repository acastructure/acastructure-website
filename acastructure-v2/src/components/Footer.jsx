import { Link } from "react-router-dom";

const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 413 512"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#F5F0E8" stroke="none"><path d="M1980 4026 c-95 -51 -390 -214 -655 -364 -466 -261 -483 -272 -498 -310 -9 -22 -17 -55 -17 -73 0 -33 5 -38 263 -187 144 -83 265 -152 268 -152 3 0 57 30 120 66 l115 66 -167 96 c-92 53 -171 101 -175 107 -4 6 -3 18 3 27 6 9 148 93 316 187 l306 171 306 -171 c168 -94 310 -178 316 -187 6 -9 7 -21 3 -27 -4 -6 -83 -54 -175 -107 l-167 -96 115 -66 c63 -36 117 -66 120 -66 3 0 124 69 268 152 258 149 263 154 263 187 0 18 -8 51 -17 73 -15 38 -32 49 -498 310 -265 150 -560 313 -655 364 -95 51 -180 93 -187 93 -8 0 -93 -42 -188 -93z"/><path d="M1566 3151 c-234 -132 -430 -247 -435 -256 -5 -9 -11 -38 -13 -65 l-3 -50 438 -245 437 -244 438 244 437 244 -3 50 c-2 27 -8 56 -13 65 -5 9 -201 124 -435 256 -234 131 -430 240 -435 240 -5 0 -201 -109 -413 -239z m651 -130 c176 -99 322 -183 324 -186 2 -4 -141 -88 -317 -187 l-321 -181 -319 180 c-175 99 -319 183 -319 187 0 4 144 88 319 187 l319 180 2 -1 c1 -1 146 -82 312 -179z"/><path d="M1155 2188 c-235 -132 -431 -247 -435 -255 -5 -9 -10 -38 -12 -65 l-3 -50 435 -244 435 -244 3 42 c2 23 1 54 -3 69 -5 22 -57 57 -362 232 l-356 206 356 207 c197 114 360 213 363 219 3 6 4 38 3 70 l-3 58 -421 -245z"/><path d="M2670 2375 c0 -32 1 -64 3 -70 3 -6 166 -105 363 -219 l356 -207 -356 -206 c-305 -175 -357 -210 -362 -232 -4 -15 -5 -46 -3 -69 l3 -42 435 244 435 244 -3 50 c-2 27 -7 56 -12 65 -4 8 -200 123 -435 255 l-427 240 3 -53z"/></g></svg>`;

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-8 w-8" dangerouslySetInnerHTML={{ __html: LOGO_SVG }} />
              <span className="font-display text-lg font-semibold">AcaStructure</span>
            </div>
            <p className="font-body text-sm text-cream/60 leading-relaxed">
              Building the bridges that connect students to higher education.
            </p>
            <p className="font-body text-xs text-cream/40 mt-3">
              © 2025 AcaStructure. All rights reserved.
            </p>
          </div>

          {/* Links col 1 */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-cream/40 mb-4">Company</h4>
            <div className="space-y-2.5">
              {[["Philosophy", "/philosophy"], ["About", "/about"], ["Research", "/research"]].map(([label, to]) => (
                <Link key={to} to={to} className="block font-body text-sm text-cream/70 hover:text-cream transition-colors">{label}</Link>
              ))}
            </div>
          </div>

          {/* Links col 2 */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-cream/40 mb-4">Products</h4>
            <div className="space-y-2.5">
              {[["GradPath", "/gradpath"], ["Partners", "/partners"], ["Get GradPath", "/get-gradpath"], ["Terms", "/terms"]].map(([label, to]) => (
                <Link key={to} to={to} className="block font-body text-sm text-cream/70 hover:text-cream transition-colors">{label}</Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-cream/40 mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="text-cream/60 hover:text-cream transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-cream/60 hover:text-cream transition-colors">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:acastructure@gmail.com" aria-label="Email" className="text-cream/60 hover:text-cream transition-colors">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
            <p className="font-body text-sm text-cream/60">acastructure@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
