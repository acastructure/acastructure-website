import philosophyHero from "../assets/philosophy_hero.webp";

export default function Philosophy() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#0A1628", minHeight: "55vh", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "55%", overflow: "hidden" }}>
          <img src={philosophyHero} alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0A1628 20%, transparent)" }} />
        </div>
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "96px 48px", width: "100%" }}>
          <div style={{ maxWidth: 520 }}>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B8860B", marginBottom: 20 }}>Our Philosophy</p>
            <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(38px,5vw,60px)", lineHeight: 1.0, color: "#FAFAF7", marginBottom: 20 }}>
              Building bridges for student success.
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.75, color: "rgba(250,250,247,0.65)", maxWidth: 420 }}>
              AcaStructure exists to thoughtfully connect students to the extraordinary work of educators and institutions — creating modern infrastructure that makes education clearer, more accessible, and more equitable for all.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ background: "#FAFAF7", padding: "96px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B8860B", marginBottom: 24 }}>Our Mission</p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(24px,3.2vw,40px)", color: "#1A1A2E", lineHeight: 1.3 }}>
            To build academic infrastructure that connects students and institutions through{" "}
            <span style={{ color: "#1E5FA8" }}>clarity</span>,{" "}
            <span style={{ color: "#1E5FA8" }}>trust</span>, and{" "}
            <span style={{ color: "#1E5FA8" }}>thoughtful design</span>.
          </h2>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section style={{ background: "#FAFAF7", padding: "0 48px 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
          {[
            {
              icon: <svg width="40" height="40" fill="none" stroke="#1E5FA8" strokeWidth="1.5" viewBox="0 0 48 48"><rect x="6" y="22" width="36" height="22" rx="1"/><path d="M2 22l22-16 22 16"/><line x1="18" y1="44" x2="18" y2="30"/><line x1="30" y1="44" x2="30" y2="30"/><line x1="18" y1="30" x2="30" y2="30"/></svg>,
              title: "Education is one of humanity's greatest achievements.",
              body: ["For generations, educators, advisors, researchers, and institutions have dedicated their lives to helping students succeed.", "They've built academic pathways, mapped degree requirements, and strengthened transfer systems — one student at a time.", "We believe that work deserves to be experienced, not hidden behind fragmented systems, disconnected websites, or scattered documents."],
            },
            {
              icon: <svg width="40" height="40" fill="none" stroke="#1E5FA8" strokeWidth="1.5" viewBox="0 0 48 48"><circle cx="16" cy="16" r="7"/><circle cx="32" cy="16" r="7"/><path d="M4 44c0-8 5-13 12-13h16c7 0 12 5 12 13"/></svg>,
              title: "We don't believe education needs to be rebuilt.",
              body: ["We believe it needs to be better connected.", "Our mission isn't to replace universities. It isn't to replace advisors. It isn't to replace the extraordinary work already happening across higher education.", "Our mission is to thoughtfully connect students to it."],
            },
            {
              icon: <svg width="40" height="40" fill="none" stroke="#1E5FA8" strokeWidth="1.5" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="5"/><line x1="24" y1="6" x2="24" y2="14"/><line x1="24" y1="34" x2="24" y2="42"/><line x1="6" y1="24" x2="14" y2="24"/><line x1="34" y1="24" x2="42" y2="24"/></svg>,
              title: "Connecting two perspectives. One shared destination.",
              body: ["Students and institutions experience education from different perspectives, but they're working toward the same destination: student success.", "AcaStructure exists to build the bridge between them."],
            },
          ].map((p, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 20, padding: 32, border: "1px solid #E8E4D9" }}>
              <div style={{ marginBottom: 20 }}>{p.icon}</div>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 18, color: "#1A1A2E", marginBottom: 20, lineHeight: 1.4 }}>{p.title}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {p.body.map((b, j) => (
                  <p key={j} style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.75, color: "#4A5568", fontWeight: j === 0 && i === 1 ? 600 : 400 }}>{b}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOOKING FORWARD */}
      <section style={{ background: "#F0EDE4", padding: "96px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B8860B", marginBottom: 16 }}>Looking Forward</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(30px,4vw,48px)", color: "#1A1A2E", marginBottom: 24, lineHeight: 1.1 }}>One bridge at a time.</h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#4A5568" }}>
              GradPath is only the beginning. AcaStructure exists to thoughtfully build infrastructure wherever complexity creates unnecessary barriers between people and the systems designed to serve them.
            </p>
          </div>
          <div style={{ background: "#FAFAF7", borderRadius: 20, padding: 48, textAlign: "center" }}>
            <p style={{ fontFamily: "Playfair Display, serif", fontSize: 80, color: "#1E5FA8", lineHeight: 0.8, marginBottom: 16 }}>"</p>
            <blockquote style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", fontSize: "clamp(18px,2.2vw,26px)", color: "#1A1A2E", lineHeight: 1.5 }}>
              Knowledge has never existed in a vacuum. Neither should the systems that connect people to it.
            </blockquote>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#1E5FA8", marginTop: 24 }}>— The AcaStructure Philosophy</p>
          </div>
        </div>
      </section>

    </div>
  );
}
