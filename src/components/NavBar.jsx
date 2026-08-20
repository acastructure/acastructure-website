import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import acaLogo from "../assets/logo_acastructure.webp";

const NAV_LINKS = [
  { label: "GradPath", to: "/gradpath", color: "#2E8008" },
  { label: "Partners", to: "/partners", color: null },
  { label: "About", to: "/about", color: null },
];

export default function NavBar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ background: "#F2EFE8", position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid rgba(26,26,24,0.08)" }}>
      <div className="nav-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link to="/" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0, transition: "opacity 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.75"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
          <img src={acaLogo} alt="AcaStructure" style={{ height: 22, width: "auto", display: "block" }} />
        </Link>

        {/* Desktop links */}
        <div className="nav-links" style={{ alignItems: "center", gap: 36 }}>
          {NAV_LINKS.map(l => {
            const active = location.pathname === l.to;
            return (
              <Link key={l.to} to={l.to} style={{
                fontFamily: "Inter, sans-serif", fontSize: 14, textDecoration: "none",
                color: active ? "#1A1A18" : l.color ? l.color : "rgba(26,26,24,0.5)",
                fontWeight: active ? 600 : 400,
                borderBottom: active ? "2px solid #1A1A18" : "2px solid transparent",
                paddingBottom: 2, transition: "color 0.2s, transform 0.2s", display: "inline-block"
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "#1A1A18"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = active ? "#1A1A18" : l.color ? l.color : "rgba(26,26,24,0.5)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link to="/gradpath" className="nav-cta" style={{
            fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600,
            color: "#F2EFE8", background: "#1A1A18", padding: "9px 20px",
            borderRadius: 8, textDecoration: "none", transition: "box-shadow 0.2s, transform 0.2s"
          }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(26,26,24,0.25)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
            Get GradPath
          </Link>
          <button className="nav-hamburger" onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#1A1A18", padding: 4 }} aria-label="Menu">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav-mobile-menu" style={{ background: "#F2EFE8", borderTop: "1px solid rgba(26,26,24,0.08)", padding: "16px 48px 24px" }}>
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} style={{
              display: "block", fontFamily: "Inter, sans-serif", fontSize: 16,
              color: l.color ? l.color : "#1A1A18", textDecoration: "none",
              padding: "12px 0", borderBottom: "1px solid rgba(26,26,24,0.07)"
            }}>{l.label}</Link>
          ))}
          <Link to="/gradpath" onClick={() => setOpen(false)} style={{
            display: "block", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600,
            color: "#F2EFE8", background: "#1A1A18", padding: "12px 20px",
            borderRadius: 8, textDecoration: "none", textAlign: "center", marginTop: 16
          }}>Get GradPath</Link>
        </div>
      )}
    </nav>
  );
}
