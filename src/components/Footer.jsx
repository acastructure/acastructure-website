import { Link } from "react-router-dom";
import acaLogo from "../assets/logo_acastructure.webp";

const linkStyle = { fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(26,26,24,0.55)", textDecoration: "none", display: "inline-block", transition: "color 0.2s, transform 0.2s" };
const hoverLink = e => { e.currentTarget.style.color = "#1A1A18"; e.currentTarget.style.transform = "translateY(-2px)"; };
const leaveLink = e => { e.currentTarget.style.color = "rgba(26,26,24,0.55)"; e.currentTarget.style.transform = "translateY(0)"; };
const iconStyle = { color: "rgba(26,26,24,0.45)", transition: "color 0.2s, transform 0.2s", display: "inline-block" };
const hoverIcon = e => { e.currentTarget.style.color = "#1A1A18"; e.currentTarget.style.transform = "translateY(-2px)"; };
const leaveIcon = e => { e.currentTarget.style.color = "rgba(26,26,24,0.45)"; e.currentTarget.style.transform = "translateY(0)"; };

export default function Footer() {
  return (
    <footer style={{ background: "#EBE8E0", color: "#1A1A18", borderTop: "1px solid rgba(26,26,24,0.08)" }}>
      <div className="footer-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 48px" }}>
        <div className="footer-grid">

          <div className="footer-brand">
            <Link to="/" style={{ display: "inline-block", marginBottom: 14, transition: "opacity 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
              <img src={acaLogo} alt="AcaStructure" style={{ height: 20, width: "auto", display: "block" }} />
            </Link>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, lineHeight: 1.75, color: "rgba(26,26,24,0.5)", maxWidth: 220 }}>
              Building intelligence infrastructure for education.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(26,26,24,0.35)", marginBottom: 16 }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link to="/about" style={linkStyle} onMouseEnter={hoverLink} onMouseLeave={leaveLink}>About</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(26,26,24,0.35)", marginBottom: 16 }}>The Ecosystem</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link to="/gradpath" style={{ ...linkStyle, color: "#2E8008" }} onMouseEnter={e => { e.currentTarget.style.color = "#1A1A18"; e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseLeave={e => { e.currentTarget.style.color = "#2E8008"; e.currentTarget.style.transform = "translateY(0)"; }}>GradPath</Link>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(26,26,24,0.3)" }}>EdVisor <span style={{ fontSize: 10, fontFamily: "IBM Plex Mono, monospace", color: "#A86800" }}>soon</span></span>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(26,26,24,0.35)", marginBottom: 16 }}>Legal</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link to="/privacy-policy" style={linkStyle} onMouseEnter={hoverLink} onMouseLeave={leaveLink}>Privacy Policy</Link>
              <Link to="/terms-of-service" style={linkStyle} onMouseEnter={hoverLink} onMouseLeave={leaveLink}>Terms of Service</Link>
              <Link to="/beta-program-agreement" style={linkStyle} onMouseEnter={hoverLink} onMouseLeave={leaveLink}>Beta Agreement</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(26,26,24,0.35)", marginBottom: 16 }}>Connect</h4>
            <div style={{ display: "flex", gap: 16, marginBottom: 14 }}>
              <a href="https://www.instagram.com/acastructure" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={iconStyle} onMouseEnter={hoverIcon} onMouseLeave={leaveIcon}>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
              </a>
              <a href="#" aria-label="LinkedIn" style={iconStyle} onMouseEnter={hoverIcon} onMouseLeave={leaveIcon}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" /></svg>
              </a>
              <a href="https://www.tiktok.com/@acastructure" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={iconStyle} onMouseEnter={hoverIcon} onMouseLeave={leaveIcon}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" /></svg>
              </a>
              <a href="mailto:admin@acastructure.com" aria-label="Email" style={iconStyle} onMouseEnter={hoverIcon} onMouseLeave={leaveIcon}>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
              </a>
            </div>
            <a href="mailto:admin@acastructure.com" style={linkStyle} onMouseEnter={hoverLink} onMouseLeave={leaveLink}>admin@acastructure.com</a>
          </div>
        </div>

        <div style={{ paddingTop: 20 }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(26,26,24,0.35)" }}>© 2026 AcaStructure LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
