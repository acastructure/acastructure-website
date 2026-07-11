import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import acaLogo from "../assets/logo_acastructure.svg";

const NAV_LINKS = [
  { label: "GradPath", to: "/gradpath" },
  { label: "Partners", to: "/partners" },
  { label: "About", to: "/about" },
];

export default function NavBar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10" style={{ background: "#0A1628" }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 shrink-0 no-underline">
          <img src={acaLogo} alt="AcaStructure" className="h-9 w-auto" />
          <span className="font-display font-semibold text-lg text-white tracking-tight">AcaStructure</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => {
            const active = location.pathname === l.to;
            return (
              <Link key={l.to} to={l.to} className="font-body text-sm no-underline transition-colors" style={{ color: active ? "#FAFAF7" : "rgba(250,250,247,0.6)", borderBottom: active ? "2px solid #5AE712" : "2px solid transparent", paddingBottom: 2 }}>
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <Link to="/gradpath" className="hidden md:inline-block font-body text-sm font-semibold no-underline px-5 py-2.5 rounded-lg" style={{ color: "#0A1628", background: "#5AE712" }}>
            Get GradPath
          </Link>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white bg-transparent border-0 cursor-pointer p-1" aria-label="Menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 18L18 6M6 6l12 12"/> : <path d="M3 6h18M3 12h18M3 18h18"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/10 px-6 pb-6" style={{ background: "#112240" }}>
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block font-body text-base no-underline py-3 border-b border-white/5" style={{ color: "rgba(250,250,247,0.8)" }}>
              {l.label}
            </Link>
          ))}
          <Link to="/gradpath" onClick={() => setOpen(false)} className="block font-body text-sm font-semibold no-underline text-center mt-4 py-3 rounded-lg" style={{ color: "#0A1628", background: "#5AE712" }}>
            Get GradPath
          </Link>
        </div>
      )}
    </nav>
  );
}
