import { Link } from "react-router-dom";

const ACA_MARK = (
  <svg width="28" height="28" viewBox="0 0 413 512" fill="none">
    <path d="M207 430 L52 340 L52 270 L207 360 L362 270 L362 340 Z" fill="#3DDC3D"/>
    <path d="M207 330 L52 240 L52 185 L207 275 L362 185 L362 240 Z" fill="#E8B400"/>
    <path d="M207 230 L52 140 L52 95 L207 185 L362 95 L362 140 Z" fill="#E0303C"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: "#0A1628" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              {ACA_MARK}
              <span className="font-display text-base font-semibold">AcaStructure</span>
            </div>
            <p className="font-body text-sm text-white/55 leading-relaxed">
              Building the bridges that connect students to higher education.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-white/35 mb-4">Company</h4>
            <div className="space-y-2.5">
              {[["Philosophy", "/philosophy"], ["About", "/about"], ["Research", "/research"]].map(([l, t]) => (
                <Link key={t} to={t} className="block font-body text-sm text-white/60 hover:text-white transition-colors">{l}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-white/35 mb-4">Products</h4>
            <div className="space-y-2.5">
              {[["GradPath", "/gradpath"], ["Partners", "/partners"], ["Get GradPath", "/get-gradpath"], ["Terms", "/terms"]].map(([l, t]) => (
                <Link key={t} to={t} className="block font-body text-sm text-white/60 hover:text-white transition-colors">{l}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-white/35 mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {[
                { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
                { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { label: "Email", path: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" },
              ].map(s => (
                <a key={s.label} href={s.label === "Email" ? "mailto:admin@acastructure.com" : "#"} aria-label={s.label} className="text-white/50 hover:text-white transition-colors">
                  <svg width="18" height="18" fill={s.label === "LinkedIn" ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d={s.path}/>
                  </svg>
                </a>
              ))}
            </div>
            <p className="font-body text-sm text-white/55">admin@acastructure.com</p>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="font-body text-xs text-white/35">© 2025 AcaStructure. All rights reserved.</p>
          <Link to="/terms" className="font-body text-xs text-white/35 hover:text-white/60 transition-colors">User Agreement</Link>
        </div>
      </div>
    </footer>
  );
}
