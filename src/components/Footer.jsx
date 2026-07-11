import { Link } from "react-router-dom";
import acaLogo from "../assets/logo_acastructure.svg";

export default function Footer() {
  return (
    <footer style={{ background: "#0A1628", color: "#FAFAF7" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <img src={acaLogo} alt="AcaStructure" className="h-8 w-auto" />
              <span className="font-display font-semibold text-base text-white">AcaStructure</span>
            </div>
            <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(250,250,247,0.5)" }}>
              Building the bridges that connect students to modern degree pathways.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(250,250,247,0.3)" }}>Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="font-body text-sm no-underline" style={{ color: "rgba(250,250,247,0.55)" }}>About</Link>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(250,250,247,0.3)" }}>Products</h4>
            <div className="flex flex-col gap-2.5">
              {[["GradPath", "/gradpath"], ["Terms", "/terms"]].map(([l, t]) => (
                <Link key={l} to={t} className="font-body text-sm no-underline" style={{ color: "rgba(250,250,247,0.55)" }}>{l}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(250,250,247,0.3)" }}>Connect</h4>
            <div className="flex gap-4 mb-3">
              <a href="https://www.instagram.com/acastructure" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "rgba(250,250,247,0.45)" }}>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" style={{ color: "rgba(250,250,247,0.45)" }}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@acastructure" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={{ color: "rgba(250,250,247,0.45)" }}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>
              </a>
              <a href="mailto:admin@acastructure.com" aria-label="Email" style={{ color: "rgba(250,250,247,0.45)" }}>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
              </a>
            </div>
            <p className="font-body text-sm" style={{ color: "rgba(250,250,247,0.45)" }}>admin@acastructure.com</p>
          </div>
        </div>

        <div className="pt-5 flex flex-wrap justify-between items-center gap-2">
          <p className="font-body text-xs" style={{ color: "rgba(250,250,247,0.3)" }}>© 2026 AcaStructure. All rights reserved.</p>
          <Link to="/terms" className="font-body text-xs no-underline" style={{ color: "rgba(250,250,247,0.3)" }}>User Agreement</Link>
        </div>
      </div>
    </footer>
  );
}
