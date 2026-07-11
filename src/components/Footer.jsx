import { Link } from "react-router-dom";
import acaLogo from "../assets/logo_acastructure.svg";

export default function Footer() {
  return (
    <footer style={{ background: "#0A1628", color: "#FAFAF7" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <img src={acaLogo} alt="AcaStructure" style={{ height: 32, width: "auto" }} />
              <span style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 17, color: "#FAFAF7" }}>AcaStructure</span>
            </div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, lineHeight: 1.75, color: "rgba(250,250,247,0.5)", maxWidth: 240 }}>
              Building the bridges that connect students to higher education.
            </p>
          </div>

          {[
            { heading: "Company", links: [["About", "/about"], ["Research", "/research"]] },
            { heading: "Products", links: [["GradPath", "/gradpath"], ["Partners", "/partners"], ["Get GradPath", "/get-gradpath"], ["Terms", "/terms"]] },
          ].map(col => (
            <div key={col.heading}>
              <h4 style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(250,250,247,0.3)", marginBottom: 16 }}>{col.heading}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map(([label, to]) => (
                  <Link key={to} to={to} style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(250,250,247,0.55)", textDecoration: "none" }}>{label}</Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h4 style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(250,250,247,0.3)", marginBottom: 16 }}>Connect</h4>
            <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
              {[
                { label: "LinkedIn", d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z", filled: true },
                { label: "Instagram", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", filled: true },
                { label: "Email", d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6", filled: false },
              ].map(s => (
                <a key={s.label} href={s.label === "Email" ? "mailto:admin@acastructure.com" : "#"} aria-label={s.label} style={{ color: "rgba(250,250,247,0.45)" }}>
                  <svg width="18" height="18" fill={s.filled ? "currentColor" : "none"} stroke={s.filled ? "none" : "currentColor"} strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d={s.d}/>
                  </svg>
                </a>
              ))}
            </div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(250,250,247,0.45)" }}>admin@acastructure.com</p>
          </div>
        </div>

        <div style={{ paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(250,250,247,0.3)" }}>© 2026 AcaStructure. All rights reserved.</p>
          <Link to="/terms" style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(250,250,247,0.3)", textDecoration: "none" }}>User Agreement</Link>
        </div>
      </div>
    </footer>
  );
}
