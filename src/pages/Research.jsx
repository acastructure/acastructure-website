import researchHero from "../assets/research_hero.webp";
import researchFocus from "../assets/research_focus.webp";
import researchFooter from "../assets/research_footer.webp";

export default function Research() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section style={{ background: "#FAFAF7", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B8860B", marginBottom: 8 }}>Research</p>
            <div style={{ width: 40, height: 2, background: "#B8860B", marginBottom: 28 }} />
            <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(36px,4.5vw,56px)", lineHeight: 1.05, color: "#1A1A2E", marginBottom: 24 }}>
              Rethinking how academic systems connect.
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#4A5568", maxWidth: 440 }}>
              Every generation inherits educational systems built for a different era. Our research explores how modern academic infrastructure can reduce fragmentation, improve visibility, and create better educational experiences — without replacing the institutions that already exist.
            </p>
          </div>
          <div>
            <img src={researchHero} alt="Students walking toward a university with a dome" style={{ width: "100%", height: "auto", borderRadius: 16 }} />
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section style={{ background: "#F0EDE4", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B8860B", textAlign: "center", marginBottom: 48 }}>Areas of Research</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              { icon: <svg width="40" height="40" fill="none" stroke="#1B3A0E" strokeWidth="1.5" viewBox="0 0 48 48"><rect x="6" y="22" width="36" height="22" rx="1"/><path d="M2 22l22-16 22 16"/><line x1="18" y1="44" x2="18" y2="30"/><line x1="30" y1="44" x2="30" y2="30"/><line x1="18" y1="30" x2="30" y2="30"/></svg>, title: "Academic Infrastructure", desc: "Exploring how degree requirements, articulation, curriculum, and advising can become easier to understand and navigate." },
              { icon: <svg width="40" height="40" fill="none" stroke="#1E5FA8" strokeWidth="1.5" viewBox="0 0 48 48"><circle cx="24" cy="18" r="8"/><path d="M12 44c0-7 5-12 12-12s12 5 12 12"/><circle cx="36" cy="28" r="3" fill="#1E5FA8" opacity="0.5"/></svg>, title: "Student Navigation", desc: "Investigating how every student can see a clearer path from where they are today to where they want to be tomorrow." },
              { icon: <svg width="40" height="40" fill="none" stroke="#B8860B" strokeWidth="1.5" viewBox="0 0 48 48"><rect x="4" y="8" width="40" height="32" rx="2"/><line x1="4" y1="18" x2="44" y2="18"/><line x1="16" y1="8" x2="16" y2="40"/><circle cx="34" cy="30" r="5"/></svg>, title: "Institutional Visibility", desc: "Researching how educators and advisors can better understand student progress while preserving existing institutional workflows." },
              { icon: <svg width="40" height="40" fill="none" stroke="#1B3A0E" strokeWidth="1.5" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="5"/><line x1="24" y1="6" x2="24" y2="14"/><line x1="24" y1="34" x2="24" y2="42"/><line x1="6" y1="24" x2="14" y2="24"/><line x1="34" y1="24" x2="42" y2="24"/></svg>, title: "Longitudinal Learning Models", desc: "Exploring how a single academic model can evolve alongside students throughout their entire educational journey." },
            ].map(a => (
              <div key={a.title} style={{ background: "#fff", borderRadius: 20, padding: 28, border: "1px solid #E8E4D9", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>{a.icon}</div>
                <div style={{ width: 32, height: 2, background: "#B8860B", margin: "0 auto 16px" }} />
                <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 17, color: "#1A1A2E", marginBottom: 12, lineHeight: 1.3 }}>{a.title}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, lineHeight: 1.7, color: "#4A5568" }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAGLINE */}
      <section style={{ background: "#0A1628", padding: "64px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, overflow: "hidden" }}>
          {["One student.", "One evolving academic model.", "Multiple perspectives."].map((t, i) => (
            <div key={t} style={{ padding: "32px 24px", textAlign: "center", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
              <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(16px,2vw,22px)", color: "#B8860B" }}>{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CURRENT RESEARCH FOCUS */}
      <section style={{ background: "#FAFAF7", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#718096", textAlign: "center", marginBottom: 40 }}>Current Research Focus</p>
          {/* Full strip image spanning all three panels */}
          <img src={researchFocus} alt="Current research focus areas" style={{ width: "100%", height: "auto", borderRadius: 16, display: "block", marginTop: 8 }} />
          {/* Text cards below, aligned to each panel */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginTop: 20 }}>
            {[
              { title: "GradPath", desc: "Researching how students interact with academic planning tools to make smarter decisions and stay on track." },
              { title: "Academic Infrastructure", desc: "Researching modern models for articulation, advising, and curriculum intelligence that support educators and reduce friction." },
              { title: "Longitudinal Models", desc: "Exploring how educational systems might connect across every stage of a student's academic journey." },
            ].map(item => (
              <div key={item.title} style={{ background: "#fff", borderRadius: 16, padding: "20px 24px", border: "1px solid #E8E4D9" }}>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 18, color: "#1A1A2E", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, lineHeight: 1.75, color: "#4A5568" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section style={{ background: "#FAFAF7", padding: "80px 48px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center", paddingBottom: 40 }}>
          <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 500, fontSize: "clamp(20px,2vw,28px)", color: "#1A1A2E", lineHeight: 1.5, fontStyle: "italic", whiteSpace: "nowrap" }}>
            We don't believe the future of education is built by replacing institutions.
          </p>
          <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 500, fontSize: "clamp(20px,2vw,28px)", color: "#1A1A2E", lineHeight: 1.5, fontStyle: "italic", marginTop: 10, whiteSpace: "nowrap" }}>
            We believe it's built by helping them see the same student through clearer windows.
          </p>
        </div>
        <img src={researchFooter} alt="Campus panorama with bridge connecting a playground and a university building" style={{ width: "100%", maxWidth: 1100, margin: "0 auto", height: "auto", display: "block" }} />
      </section>

    </div>
  );
}
