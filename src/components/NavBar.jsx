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
    <nav style={{ background: "#000", position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="nav-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link to="/" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", flexShrink: 0 }}>
          <img src={acaLogo} alt="AcaStructure" style={{ height: 30, width: "auto" }} />
          <span style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 16, color: "#D8D5CC" }}>AcaStructure</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-links" style={{ alignItems: "center", gap: 36 }}>
          {NAV_LINKS.map(l => {
            const active = location.pathname === l.to;
            return (
              <Link key={l.to} to={l.to} style={{ fontFamily: "Inter, sans-serif", fontSize: 14, textDecoration: "none", color: active ? "#fff" : "rgba(255,255,255,0.55)", borderBottom: active ? "2px solid #3A9A0A" : "2px solid transparent", paddingBottom: 2 }}>
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link to="/gradpath" className="nav-cta" style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#000", background: "#3A9A0A", padding: "9px 20px", borderRadius: 8, textDecoration: "none" }}>
            Get GradPath
          </Link>
          <button className="nav-hamburger" onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", color: "#D8D5CC", padding: 4 }} aria-label="Menu">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 18L18 6M6 6l12 12"/> : <path d="M3 6h18M3 12h18M3 18h18"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav-mobile-menu" style={{ background: "#0D0D0D", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "16px 48px 24px" }}>
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} style={{ display: "block", fontFamily: "Inter, sans-serif", fontSize: 16, color: "rgba(216,213,204,0.8)", textDecoration: "none", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {l.label}
            </Link>
          ))}
          <Link to="/gradpath" onClick={() => setOpen(false)} style={{ display: "block", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#000", background: "#3A9A0A", padding: "12px 20px", borderRadius: 8, textDecoration: "none", textAlign: "center", marginTop: 16 }}>
            Get GradPath
          </Link>
        </div>
      )}
    </nav>
  );
}
