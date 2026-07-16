import rickHeadshot from "../assets/rick_headshot.webp";
import isabellaHeadshot from "../assets/isabella_headshot.webp";
import aboutHero from "../assets/about_hero.webp";

export default function About() {
  return (
    <div style={{ background: "#000", overflowX: "hidden" }}>

      {/* HERO — text on top, image below */}
      <section style={{ background: "#000", paddingTop: 80 }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 48px", textAlign: "center" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D8D5CC", marginBottom: 24 }}>About Us</p>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(36px, 5.5vw, 72px)", lineHeight: 1.05, color: "#D8D5CC", marginBottom: 20 }}>
            Our journey.<br /><span style={{ color: "#3A9A0A" }}>Your path.</span>
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.75, color: "rgba(216,213,204,0.65)", maxWidth: 560, margin: "0 auto 48px" }}>
            We met when we were young and have spent nearly our entire adult lives building together. Along the way came high school, military service, college, careers, marriage, and raising a family. Education was always part of that journey — but navigating it often felt more difficult than the learning itself.
          </p>
        </div>

        {/* Hero image */}
        <div style={{ position: "relative", width: "100%", height: "65vh", overflow: "hidden" }}>
          <img src={aboutHero} alt="Students on campus" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #000 0%, transparent 40%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #000 0%, transparent 25%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #000 0%, transparent 20%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, #000 0%, transparent 20%)" }} />
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ background: "#000", padding: "80px 48px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(24px, 3vw, 38px)", color: "#D8D5CC", marginBottom: 24 }}>
            The problem we couldn't ignore.
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.85, color: "rgba(216,213,204,0.6)", marginBottom: 20 }}>
            Every semester seemed to require another website, another degree map, another spreadsheet, another advisor meeting, another policy to interpret.
          </p>
          <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#D8D5CC", lineHeight: 1.5 }}>
            We weren't looking for another planning tool.<br />We were looking for clarity.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section style={{ background: "#0A0A0A", padding: "80px 48px", borderTop: "1px solid rgba(216,213,204,0.06)", borderBottom: "1px solid rgba(216,213,204,0.06)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(24px, 3vw, 38px)", color: "#D8D5CC", marginBottom: 24 }}>
            So we built the tool we wished we had.
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.85, color: "rgba(216,213,204,0.6)", marginBottom: 16 }}>
            Not because we wanted to build software.
          </p>
          <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(17px, 2vw, 22px)", color: "#3A9A0A" }}>
            Because we couldn't find it.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ background: "#000", padding: "80px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#D8D5CC", textAlign: "center", marginBottom: 12 }}>The Team</p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(24px, 3vw, 38px)", color: "#D8D5CC", textAlign: "center", marginBottom: 64 }}>
            Built by people living the problem.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48 }}>
            {[
              {
                name: "Rick",
                img: rickHeadshot,
                roles: ["Philosophy student.", "Veteran, USAF.", "Systems thinker."],
                focus: "Focused on academic models, research, and product vision."
              },
              {
                name: "Isabella",
                img: isabellaHeadshot,
                roles: ["Physics student.", "Veteran, USAF.", "Architect of the platform."],
                focus: "Focused on building reliable systems that people can trust."
              },
            ].map(p => (
              <div key={p.name} style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
                <img src={p.img} alt={p.name} style={{ width: 100, height: 100, borderRadius: 12, objectFit: "cover", objectPosition: "top", flexShrink: 0, border: "1px solid rgba(216,213,204,0.1)" }} />
                <div>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 26px)", color: "#D8D5CC", marginBottom: 8 }}>{p.name}</h3>
                  <div style={{ width: 32, height: 1, background: "#3A9A0A", marginBottom: 12 }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 12 }}>
                    {p.roles.map(r => <p key={r} style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(216,213,204,0.5)" }}>{r}</p>)}
                  </div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, lineHeight: 1.65, color: "rgba(216,213,204,0.8)" }}>{p.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section style={{ background: "#0A0A0A", padding: "80px 48px", borderTop: "1px solid rgba(216,213,204,0.06)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(24px, 3.5vw, 42px)", color: "#D8D5CC", lineHeight: 1.15, marginBottom: 24 }}>
            Every meaningful journey deserves a clearer path.
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.85, color: "rgba(216,213,204,0.55)" }}>
            We built GradPath for our family, and for yours — to reduce friction, bring clarity, and help every student move forward with confidence.
          </p>
        </div>
      </section>

    </div>
  );
}
