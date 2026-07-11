import aboutCouple from "../assets/about_couple.webp";
import aboutFamilyStudy from "../assets/about_family_study.webp";
import aboutFamilyWalk from "../assets/about_family_walk.webp";
import rickHeadshot from "../assets/rick_headshot.webp";
import isabellaHeadshot from "../assets/isabella_headshot.webp";

export default function About() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="r-section" style={{ background: "#FAFAF7" }}>
        <div className="r-max r-grid-2">
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B8860B", marginBottom: 20 }}>About Us</p>
            <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(36px,5vw,62px)", lineHeight: 1.0, color: "#1A1A2E", marginBottom: 24 }}>
              Our journey.<br />Your path.
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px,1.4vw,16px)", lineHeight: 1.75, color: "#4A5568" }}>
              We met when we were young and have spent nearly our entire adult lives building together. Along the way came high school, military service, college, careers, marriage, and raising a family. Education was always part of that journey — but navigating it often felt more difficult than the learning itself.
            </p>
          </div>
          <div>
            <img src={aboutCouple} alt="Rick and Isabella — founders of AcaStructure" style={{ width: "100%", height: "auto", borderRadius: 20 }} />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="r-section" style={{ background: "#FAFAF7" }}>
        <div className="r-max r-grid-2">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <svg width="22" height="22" fill="none" stroke="#B8860B" strokeWidth="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(20px,2.5vw,30px)", color: "#1A1A2E" }}>The problem we couldn't ignore.</h2>
            </div>
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px,1.4vw,15px)", lineHeight: 1.75, color: "#4A5568" }}>
                Every semester seemed to require another website, another degree map, another spreadsheet, another advisor meeting, another policy to interpret.
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px,1.4vw,15px)", lineHeight: 1.75, color: "#1A1A2E", fontWeight: 600 }}>
                We weren't looking for another planning tool. We were looking for clarity.
              </p>
            </div>
          </div>
          <div>
            <img src={aboutFamilyStudy} alt="The Lawrence family studying together" style={{ width: "100%", height: "auto", borderRadius: 20 }} />
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="r-section" style={{ background: "#F0EDE4" }}>
        <div className="r-max r-grid-2">
          <div>
            <img src={aboutFamilyWalk} alt="The Lawrence family walking toward campus" style={{ width: "100%", height: "auto", borderRadius: 20 }} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <svg width="22" height="22" fill="#DC2626" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(18px,2.2vw,26px)", color: "#1A1A2E" }}>So we built the tool we wished we had.</h2>
            </div>
            <div style={{ marginTop: 16 }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px,1.4vw,15px)", lineHeight: 1.75, color: "#4A5568", marginBottom: 8 }}>Not because we wanted to build software.</p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px,1.4vw,15px)", lineHeight: 1.75, color: "#1A1A2E", fontWeight: 600 }}>Because we couldn't find it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="r-section" style={{ background: "#FAFAF7" }}>
        <div className="r-max">
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(24px,3vw,36px)", color: "#1A1A2E", textAlign: "center", marginBottom: 8 }}>
            Built by people living the problem.
          </h2>
          <div style={{ width: 48, height: 2, background: "#B8860B", margin: "0 auto 48px" }} />
          <div className="r-bio-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            {[
              { name: "Rick", img: rickHeadshot, roles: ["Philosophy student.", "Veteran.", "Systems thinker."], focus: "Focused on academic models, research, and product vision." },
              { name: "Isabella", img: isabellaHeadshot, roles: ["Physics student.", "Veteran.", "Architect of the platform."], focus: "Focused on building reliable systems that people can trust." },
            ].map(p => (
              <div key={p.name} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                <img src={p.img} alt={p.name} style={{ width: 90, height: 110, objectFit: "cover", objectPosition: "top", borderRadius: 12, flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(22px,2.5vw,26px)", color: "#1A1A2E", marginBottom: 6 }}>{p.name}</h3>
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
      <section className="r-section" style={{ background: "#F0EDE4", textAlign: "center" }}>
        <div className="r-max" style={{ maxWidth: 700 }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(24px,3.5vw,42px)", color: "#1A1A2E", lineHeight: 1.2, marginBottom: 20 }}>
            Every meaningful journey deserves a clearer path.
          </h2>
          <div style={{ width: 48, height: 2, background: "#B8860B", margin: "0 auto 24px" }} />
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px,1.4vw,16px)", lineHeight: 1.75, color: "#4A5568" }}>
            We built GradPath for our family, and for yours — to reduce friction, bring clarity, and help every student move forward with confidence.
          </p>
        </div>
      </section>

    </div>
  );
}
