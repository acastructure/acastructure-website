import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const ACA_MARK = (
  <svg width="36" height="36" viewBox="0 0 413 512" fill="none">
    <path d="M207 430 L52 340 L52 270 L207 360 L362 270 L362 340 Z" fill="#3DDC3D"/>
    <path d="M207 330 L52 240 L52 185 L207 275 L362 185 L362 240 Z" fill="#E8B400"/>
    <path d="M207 230 L52 140 L52 95 L207 185 L362 95 L362 140 Z" fill="#E0303C"/>
  </svg>
);

const NAV_LINKS = [
  { label: "Philosophy", to: "/philosophy" },
  { label: "GradPath", to: "/gradpath" },
  { label: "Partners", to: "/partners" },
  { label: "Research", to: "/research" },
  { label: "About", to: "/about" },
];

export default function NavBar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ background: "#0A1628" }} className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          {ACA_MARK}
          <span className="font-display font-semibold text-xl text-white tracking-tight">AcaStructure</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => {
            const active = location.pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`font-body text-sm transition-colors ${active ? "text-white border-b-2 border-green-500 pb-0.5" : "text-white/65 hover:text-white"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <Link
          to="/get-gradpath"
          className="hidden md:inline-flex font-body text-sm font-semibold text-white px-5 py-2.5 rounded-md transition-colors"
          style={{ background: "#1B3A0E" }}
          onMouseEnter={e => e.currentTarget.style.background = "#244F13"}
          onMouseLeave={e => e.currentTarget.style.background = "#1B3A0E"}
        >
          Get GradPath
        </Link>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 18L18 6M6 6l12 12"/> : <path d="M3 6h18M3 12h18M3 18h18"/>}
          </svg>
        </button>
      </div>

      {open && (
        <div style={{ background: "#112240" }} className="md:hidden border-t border-white/10 px-6 py-5 space-y-4">
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block font-body text-sm text-white/75 hover:text-white py-1">
              {l.label}
            </Link>
          ))}
          <Link to="/get-gradpath" onClick={() => setOpen(false)} className="block font-body text-sm font-semibold text-white px-4 py-2.5 rounded-md mt-3 text-center" style={{ background: "#1B3A0E" }}>
            Get GradPath
          </Link>
        </div>
      )}
    </nav>
  );
}
