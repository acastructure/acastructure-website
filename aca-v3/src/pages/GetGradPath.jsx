import { Link } from "react-router-dom";

const GRADPATH_LOGO = (
  <svg width="72" height="72" viewBox="0 0 830 719" fill="none">
    <path d="M415 679 L52 470 L52 370 L415 580 L778 370 L778 470 Z" fill="#3DDC3D"/>
    <path d="M130 449 L52 404 L52 270 L778 270 L778 404 L700 449 L415 295 Z" fill="#E8B400"/>
    <path d="M83 344 L83 135 L747 135 L747 344" stroke="#E0303C" strokeWidth="30" fill="none"/>
  </svg>
);

export default function GetGradPath() {
  return (
    <div className="font-body">
      <section style={{ background: "#0A1628", color: "#FAFAF7" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
            {GRADPATH_LOGO}
          </div>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#22C55E", marginBottom: 20 }}>
            Get GradPath
          </p>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(36px,5vw,52px)", lineHeight: 1.05, color: "#FAFAF7", marginBottom: 20 }}>
            Your degree, mapped out.
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.7, color: "rgba(250,250,247,0.65)", maxWidth: 480, margin: "0 auto 36px" }}>
            Download GradPath to see your full path to graduation — degree requirements, GE tracking, semester planning, and transfer articulation, built from your school's actual bulletin.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(250,250,247,0.08)", border: "1px solid rgba(250,250,247,0.15)", color: "rgba(250,250,247,0.4)", padding: "12px 24px", borderRadius: 10, cursor: "not-allowed", userSelect: "none", fontFamily: "Inter, sans-serif", fontSize: 14 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" opacity="0.5"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download on the App Store
            </span>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(34,197,94,0.5)" }}>
              Link going live ahead of August 2026 launch
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#FAFAF7" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "80px 24px" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8860B", marginBottom: 16 }}>Pricing</p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(24px,3vw,34px)", color: "#1A1A2E", marginBottom: 32 }}>
            Free to start. Transparent after that.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "#E8E4D9" }}>
            {[
              { label: "Now through Dec 2026", detail: "Full access during the beta period at SFSU and CCSF. No payment required.", price: "Free" },
              { label: "Starting Jan 1, 2027", detail: "Continued access for accounts created during the beta. Cancel anytime.", price: "$12/mo" },
              { label: "Founding beta members", detail: "Permanent access for the original founding group. Never billed.", price: "Free for life" },
            ].map(row => (
              <div key={row.label} style={{ background: "#FAFAF7", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <p style={{ fontFamily: "Playfair Display, serif", fontSize: 16, color: "#1A1A2E", marginBottom: 4 }}>{row.label}</p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#718096" }}>{row.detail}</p>
                </div>
                <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 14, color: "#B8860B", whiteSpace: "nowrap", fontWeight: 500 }}>{row.price}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#718096", marginTop: 20 }}>
            Subscriptions are billed directly through AcaStructure, not the App Store.
          </p>
        </div>
      </section>
    </div>
  );
}
