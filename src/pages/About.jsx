import rickHeadshot from "../assets/rick_headshot.webp";
import isabellaHeadshot from "../assets/isabella_headshot.webp";

export default function About() {
  return (
    <div style={{ background: "#000", overflowX: "hidden" }}>

      {/* HERO — text only, no image */}
      <section style={{ background: "#000", paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 48px", textAlign: "center" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D8D5CC", marginBottom: 24 }}>About Us</p>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(36px, 5.5vw, 72px)", lineHeight: 1.05, color: "#D8D5CC", marginBottom: 48 }}>
            Our journey.<br /><span style={{ color: "#3A9A0A" }}>Your path.</span>
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section style={{ background: "#000", padding: "0 48px 80px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {[
            "Isabella grew up in Havelock, North Carolina, and Rick was raised in Monterey, California. They met during high school after Isabella relocated to Monterey with her family. Together, they later enlisted in the United States Air Force.",
            "Following medical retirement from the Air Force, they returned to college, where they quickly encountered a familiar problem. Degree requirements, transfer pathways, and academic roadmaps existed, but they were scattered across PDFs, catalogs, and static webpages that students couldn't truly interact with.",
            "After trying nearly every planning tool they could find, they realized the problem wasn't planning.",
          ].map((text, i) => (
            <p key={i} style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.9, color: "rgba(216,213,204,0.65)", marginBottom: 28 }}>{text}</p>
          ))}

          <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "clamp(19px, 2.2vw, 26px)", color: "#D8D5CC", lineHeight: 1.4, marginBottom: 40 }}>
            It was understanding the path.
          </p>

          {[
            "So they started building something for themselves. As the project grew, they realized the challenge wasn't unique to them — it was shared by students across higher education.",
            "That realization became AcaStructure, a company built to make the extraordinary degree pathways universities have already created understandable, interactive, and accessible — finally placing them in the palm of students' hands.",
          ].map((text, i) => (
            <p key={i} style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.9, color: "rgba(216,213,204,0.65)", marginBottom: 28 }}>{text}</p>
          ))}
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
