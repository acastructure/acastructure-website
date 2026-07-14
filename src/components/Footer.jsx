import { Link } from "react-router-dom";
import acaLogo from "../assets/logo_acastructure.svg";

export default function Footer() {
  return (
    <footer style={{ background: "#0A1628", color: "#FAFAF7" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-8 border-b border-white/10">
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
              <Link to="/gradpath" className="font-body text-sm no-underline" style={{ color: "rgba(250,250,247,0.55)" }}>GradPath</Link>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(250,250,247,0.3)" }}>Legal</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/privacy-policy" className="font-body text-sm no-underline" style={{ color: "rgba(250,250,247,0.55)" }}>Privacy Policy</Link>
              <Link to="/terms-of-service" className="font-body text-sm no-underline" style={{ color: "rgba(250,250,247,0.55)" }}>Terms of Service</Link>
              <Link to="/beta-program-agreement" className="font-body text-sm no-underline" style={{ color: "rgba(250,250,247,0.55)" }}>Beta Program Agreement</Link>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(250,250,247,0.3)" }}>Connect</h4>
            <div className="flex gap-4 mb-3">
              {/* Instagram, LinkedIn, TikTok, Email icons */}
            </div>
            <p className="font-body text-sm" style={{ color: "rgba(250,250,247,0.45)" }}>admin@acastructure.com</p>
          </div>
        </div>
        <div className="pt-5 flex flex-wrap justify-between items-center gap-4">
          <p className="font-body text-xs" style={{ color: "rgba(250,250,247,0.3)" }}>© 2026 AcaStructure. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy-policy" className="font-body text-xs no-underline" style={{ color: "rgba(250,250,247,0.3)" }}>Privacy Policy</Link>
            <Link to="/terms-of-service" className="font-body text-xs no-underline" style={{ color: "rgba(250,250,247,0.3)" }}>Terms of Service</Link>
            <Link to="/beta-program-agreement" className="font-body text-xs no-underline" style={{ color: "rgba(250,250,247,0.3)" }}>Beta Program Agreement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
