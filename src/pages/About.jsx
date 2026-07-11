import aboutCouple from "../assets/about_couple.webp";
import aboutFamilyStudy from "../assets/about_family_study.webp";
import aboutFamilyWalk from "../assets/about_family_walk.webp";
import rickHeadshot from "../assets/rick_headshot.webp";
import isabellaHeadshot from "../assets/isabella_headshot.webp";

export default function About() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section style={{ background: "#FAFAF7", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B8860B", marginBottom: 20 }}>About Us</p>
            <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(40px,5vw,62px)", lineHeight: 1.0, color: "#1A1A2E", marginBottom: 24 }}>
              Our journey.<br />Your path.
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#4A5568", maxWidth: 440 }}>
              We met when we were young and have spent nearly our entire adult lives building together. Along the way came high school, military service, college, careers, marriage, and raising a family. Education was always part of that journey — but navigating it often felt more difficult than the learning itself.
            </p>
          </div>
          <div>
            <img src={aboutCouple} alt="Rick and Isabella — founders of AcaStructure" style={{ width: "100%", height: "auto", borderRadius: 20 }} />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ background: "#FAFAF7", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <svg width="22" height="22" fill="none" stroke="#B8860B" strokeWidth="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(22px,2.8vw,32px)", color: "#1A1A2E" }}>The problem we couldn't ignore.</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 16 }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.75, color: "#4A5568" }}>
                Every semester seemed to require another website, another degree map, another spreadsheet, another advisor meeting, another policy to interpret.
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.75, color: "#1A1A2E", fontWeight: 600 }}>
                We weren't looking for another planning tool.<br />We were looking for clarity.
              </p>
            </div>
          </div>
          <div>
            <img src={aboutFamilyStudy} alt="The Lawrence family studying together at home" style={{ width: "100%", height: "auto", borderRadius: 20 }} />
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section style={{ background: "#F0EDE4", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <img src={aboutFamilyWalk} alt="The Lawrence family walking toward a university campus" style={{ width: "100%", height: "auto", borderRadius: 20 }} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <svg width="22" height="22" fill="#DC2626" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(20px,2.2vw,26px)", color: "#1A1A2E", whiteSpace: "nowrap" }}>So we built the tool we wished we had.</h2>
            </div>
            <div style={{ marginTop: 16 }} />
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.75, color: "#4A5568", marginBottom: 8 }}>Not because we wanted to build software.</p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.75, color: "#1A1A2E", fontWeight: 600 }}>Because we couldn't find it.</p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ background: "#FAFAF7", padding: "96px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(26px,3vw,38px)", color: "#1A1A2E", textAlign: "center", marginBottom: 8 }}>
            Built by people living the problem.
          </h2>
          <div style={{ marginBottom: 60 }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, maxWidth: 760, margin: "0 auto", paddingLeft: 40 }}>
            {[
              { name: "Rick", img: rickHeadshot, roles: ["Philosophy student.", "Veteran.", "Systems thinker."], focus: "Focused on academic models, research, and product vision." },
              { name: "Isabella", img: isabellaHeadshot, roles: ["Physics student.", "Veteran.", "Architect of the platform."], focus: "Focused on building reliable systems that people can trust." },
            ].map(p => (
              <div key={p.name} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                <img src={p.img} alt={p.name} style={{ width: 90, height: 110, objectFit: "cover", objectPosition: "top", borderRadius: 12, flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: 26, color: "#1A1A2E", marginBottom: 6 }}>{p.name}</h3>
                  <div style={{ width: 32, height: 2, background: "#B8860B", marginBottom: 14 }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 14 }}>
                    {p.roles.map(r => <p key={r} style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#4A5568" }}>{r}</p>)}
                  </div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#1A1A2E", lineHeight: 1.5 }}>{p.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section style={{ background: "#F0EDE4", padding: "96px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(28px,3.5vw,44px)", color: "#1A1A2E", lineHeight: 1.2, marginBottom: 20 }}>
            Every meaningful journey deserves a clearer path.
          </h2>
          <div style={{ marginBottom: 24 }} />
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#4A5568" }}>
            We built GradPath for our family, and for yours — to reduce friction, bring clarity, and help every student move forward with confidence.
          </p>
        </div>
      </section>

    </div>
  );
}
