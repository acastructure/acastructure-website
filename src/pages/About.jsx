import rickHeadshot from "../assets/rick_headshot.webp";
import isabellaHeadshot from "../assets/isabella_headshot.webp";

export default function About() {
  return (
    <div style={{ background: "#000", overflowX: "hidden" }}>

      {/* HERO */}
      <section style={{ background: "#000", paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 48px", textAlign: "center" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D8D5CC", marginBottom: 24 }}>About Us</p>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(36px, 5.5vw, 72px)", lineHeight: 1.05, color: "#D8D5CC", marginBottom: 0 }}>
            Our journey.<br /><span style={{ color: "#3A9A0A" }}>Your path.</span>
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section style={{ background: "#000", padding: "0 48px 80px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.9, color: "rgba(216,213,204,0.65)", marginBottom: 28 }}>
            Isabella grew up in Havelock, North Carolina, and Rick was raised in Monterey, California. They met during high school after Isabella relocated to Monterey with her family. Together, they later enlisted in the United States Air Force.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.9, color: "rgba(216,213,204,0.65)", marginBottom: 28 }}>
            Following medical retirement from the Air Force, they returned to college, where they quickly encountered a familiar problem. Degree requirements, transfer pathways, and academic roadmaps existed, but they were scattered across PDFs, catalogs, and static webpages that students couldn't truly interact with. After trying nearly every planning tool they could find, they realized the problem wasn't planning — it was understanding the path.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.9, color: "rgba(216,213,204,0.65)", marginBottom: 28 }}>
            So they started building something for themselves. As the project grew, they realized the challenge wasn't unique to them — it was shared by students across higher education.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.9, color: "rgba(216,213,204,0.65)", marginBottom: 64 }}>
            That realization became AcaStructure, a company built to make the extraordinary degree pathways universities have already created understandable, interactive, and accessible — finally placing them in the palm of students' hands.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ background: "#0A0A0A", padding: "80px 48px", borderTop: "1px solid rgba(216,213,204,0.06)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#D8D5CC", textAlign: "center", marginBottom: 12 }}>The Team</p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(24px, 3vw, 38px)", color: "#D8D5CC", textAlign: "center", marginBottom: 64 }}>
            Built by people living the problem.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 64 }}>
            {[
              { name: "Rick", img: rickHeadshot, roles: ["Philosophy student · Veteran, USAF"], focus: "Academic models, research, and product vision." },
              { name: "Isabella", img: isabellaHeadshot, roles: ["Physics student · Veteran, USAF"], focus: "Building reliable systems that people can trust." },
            ].map(p => (
              <div key={p.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <img src={p.img} alt={p.name} style={{ width: 140, height: 140, borderRadius: 16, objectFit: "cover", objectPosition: "top", marginBottom: 20, border: "1px solid rgba(216,213,204,0.1)" }} />
                <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 26px)", color: "#D8D5CC", marginBottom: 8 }}>{p.name}</h3>
                <div style={{ width: 32, height: 1, background: "#3A9A0A", marginBottom: 12 }} />
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(216,213,204,0.45)", marginBottom: 10 }}>{p.roles[0]}</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, lineHeight: 1.65, color: "rgba(216,213,204,0.7)", maxWidth: 240 }}>{p.focus}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

    </div>
  );
}
