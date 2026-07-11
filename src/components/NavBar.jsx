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
    <nav style={{ background: "#0A1628", position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img src={acaLogo} alt="AcaStructure" style={{ height: 40, width: "auto" }} />
          <span style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 20, color: "#FAFAF7", letterSpacing: "-0.01em" }}>AcaStructure</span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="hidden md:flex">
          {NAV_LINKS.map(l => {
            const active = location.pathname === l.to;
            return (
              <Link key={l.to} to={l.to} style={{ fontFamily: "Inter, sans-serif", fontSize: 14, textDecoration: "none", color: active ? "#FAFAF7" : "rgba(250,250,247,0.6)", borderBottom: active ? "2px solid #22C55E" : "2px solid transparent", paddingBottom: 2, transition: "color 0.15s" }}>
                {l.label}
              </Link>
            );
          })}
        </div>

        <Link to="/gradpath" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#0A1628", background: "#5AE712", padding: "10px 22px", color: "#0A1628", borderRadius: 8, textDecoration: "none", display: "none" }} className="hidden md:inline-block">
          Get GradPath
        </Link>

        <Link to="/gradpath" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#0A1628", background: "#5AE712", padding: "10px 22px", color: "#0A1628", borderRadius: 8, textDecoration: "none" }}>
          Get GradPath
        </Link>
      </div>
    </nav>
  );
}
