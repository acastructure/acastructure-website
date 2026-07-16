import { Link } from "react-router-dom";
import heroPhone from "../assets/hero_phone.webp";

export default function Home() {
  return (
    <div className="font-body overflow-x-hidden" style={{ background: "#000" }}>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#000", minHeight: "100vh" }}>

        {/* Subtle radial glow behind text on left */}
        <div style={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "60%",
          height: "70%",
          background: "radial-gradient(ellipse at center, rgba(90,231,18,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="max-w-7xl mx-auto px-6 h-full" style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: 40 }}>

          {/* LEFT — copy */}
          <div style={{ paddingTop: 40, paddingBottom: 40 }}>
            {/* Eyebrow */}
            <p className="font-mono text-xs uppercase tracking-widest mb-8" style={{ color: "#5AE712", letterSpacing: "0.25em" }}>
              Academic Infrastructure
            </p>

            {/* Headline */}
            <h1 className="font-display font-bold leading-tight mb-6" style={{ fontSize: "clamp(36px, 5vw, 68px)", color: "#fff" }}>
              Degree clarity now<br />in the palm of<br />
              <span style={{ color: "#5AE712" }}>students' hands.</span>
            </h1>

            {/* Subtext */}
            <p className="font-body leading-relaxed mb-10" style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: "rgba(255,255,255,0.55)", maxWidth: 460 }}>
              Universities build extraordinary degree pathways. We simply put them in students' hands.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/gradpath"
                className="font-body font-semibold no-underline px-7 py-3.5 rounded-lg text-sm transition-all"
                style={{ background: "#5AE712", color: "#000", fontSize: 15 }}
              >
                Get GradPath
              </Link>
              <Link
                to="/gradpath"
                className="font-body font-medium no-underline px-7 py-3.5 rounded-lg text-sm flex items-center gap-2.5 transition-all"
                style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", fontSize: 15 }}
              >
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                See how it works
              </Link>
            </div>
          </div>

          {/* RIGHT — phone mockup */}
          <div className="flex items-center justify-center" style={{ paddingTop: 40, paddingBottom: 40 }}>
            <img
              src={heroPhone}
              alt="GradPath app on iPhone"
              style={{ width: "100%", maxWidth: 680, height: "auto", display: "block" }}
            />
          </div>

        </div>
      </section>

      {/* BRIDGE STATEMENT */}
      <section className="py-16 px-6" style={{ background: "#0A0A0A" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display font-semibold leading-snug" style={{ fontSize: "clamp(18px, 2.5vw, 28px)", color: "#fff" }}>
            Connecting two perspectives.{" "}
            <span style={{ color: "#5AE712" }}>One shared destination.</span>
          </p>
        </div>
      </section>

      {/* TAGLINE */}
      <section className="py-16 px-6 text-center" style={{ background: "#0A0A0A" }}>
        <p className="font-display font-semibold" style={{ fontSize: "clamp(22px, 3vw, 38px)", color: "#fff" }}>
          From one of us, for all of us.
        </p>
        <p className="font-mono text-xs uppercase tracking-widest mt-4" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>
          Built by students at SFSU — for students across academia
        </p>
        <Link to="/about" className="font-body font-semibold no-underline inline-block mt-6" style={{ color: "#5AE712", fontSize: 14 }}>
          Our story →
        </Link>
      </section>

    </div>
  );
}
