import aboutCouple from "../assets/about_couple.webp";
import aboutFamilyStudy from "../assets/about_family_study.webp";
import aboutFamilyWalk from "../assets/about_family_walk.webp";
import rickHeadshot from "../assets/rick_headshot.webp";
import isabellaHeadshot from "../assets/isabella_headshot.webp";

export default function About() {
  return (
    <div className="font-body overflow-x-hidden">

      {/* HERO */}
      <section className="py-16 px-6" style={{ background: "#FAFAF7" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-5" style={{ color: "#B8860B", letterSpacing: "0.2em" }}>About Us</p>
            <h1 className="font-display font-bold leading-tight mb-6" style={{ fontSize: "clamp(32px, 5vw, 58px)", color: "#1A1A2E" }}>
              Our journey.<br />Your path.
            </h1>
            <p className="font-body leading-relaxed" style={{ fontSize: "clamp(14px, 1.4vw, 16px)", color: "#4A5568" }}>
              We met when we were young and have spent nearly our entire adult lives building together. Along the way came high school, military service, college, careers, marriage, and raising a family. Education was always part of that journey — but navigating it often felt more difficult than the learning itself.
            </p>
          </div>
          <div>
            <img src={aboutCouple} alt="Rick and Isabella" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16 px-6" style={{ background: "#FAFAF7" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="20" height="20" fill="none" stroke="#B8860B" strokeWidth="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <h2 className="font-display font-semibold" style={{ fontSize: "clamp(20px, 2.5vw, 30px)", color: "#1A1A2E" }}>The problem we couldn't ignore.</h2>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <p className="font-body leading-relaxed" style={{ fontSize: "clamp(14px, 1.4vw, 15px)", color: "#4A5568" }}>
                Every semester seemed to require another website, another degree map, another spreadsheet, another advisor meeting, another policy to interpret.
              </p>
              <p className="font-body font-semibold leading-relaxed" style={{ fontSize: "clamp(14px, 1.4vw, 15px)", color: "#1A1A2E" }}>
                We weren't looking for another planning tool. We were looking for clarity.
              </p>
            </div>
          </div>
          <div>
            <img src={aboutFamilyStudy} alt="Family studying" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-16 px-6" style={{ background: "#F0EDE4" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <img src={aboutFamilyWalk} alt="Family walking toward campus" className="w-full h-auto rounded-2xl" />
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-4">
              <svg width="20" height="20" fill="#DC2626" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              <h2 className="font-display font-semibold" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", color: "#1A1A2E" }}>So we built the tool we wished we had.</h2>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <p className="font-body leading-relaxed" style={{ fontSize: "clamp(14px, 1.4vw, 15px)", color: "#4A5568" }}>Not because we wanted to build software.</p>
              <p className="font-body font-semibold leading-relaxed" style={{ fontSize: "clamp(14px, 1.4vw, 15px)", color: "#1A1A2E" }}>Because we couldn't find it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 px-6" style={{ background: "#FAFAF7" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-semibold text-center mb-3" style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "#1A1A2E" }}>
            Built by people living the problem.
          </h2>
          <div style={{ width: 48, height: 2, background: "#B8860B", margin: "0 auto 48px" }} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { name: "Rick", img: rickHeadshot, roles: ["Philosophy student.", "Veteran.", "Systems thinker."], focus: "Focused on academic models, research, and product vision." },
              { name: "Isabella", img: isabellaHeadshot, roles: ["Physics student.", "Veteran.", "Architect of the platform."], focus: "Focused on building reliable systems that people can trust." },
            ].map(p => (
              <div key={p.name} className="flex gap-6 items-start">
                <img src={p.img} alt={p.name} className="rounded-xl object-cover object-top shrink-0" style={{ width: 88, height: 108 }} />
                <div>
                  <h3 className="font-display font-bold mb-2" style={{ fontSize: "clamp(20px, 2.5vw, 26px)", color: "#1A1A2E" }}>{p.name}</h3>
                  <div style={{ width: 32, height: 2, background: "#B8860B", marginBottom: 12 }} />
                  <div className="flex flex-col gap-1 mb-3">
                    {p.roles.map(r => <p key={r} className="font-body text-sm" style={{ color: "#4A5568" }}>{r}</p>)}
                  </div>
                  <p className="font-body text-sm font-semibold leading-relaxed" style={{ color: "#1A1A2E" }}>{p.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-16 px-6 text-center" style={{ background: "#F0EDE4" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-bold leading-snug mb-5" style={{ fontSize: "clamp(24px, 3.5vw, 42px)", color: "#1A1A2E" }}>
            Every meaningful journey deserves a clearer path.
          </h2>
          <div style={{ width: 48, height: 2, background: "#B8860B", margin: "0 auto 20px" }} />
          <p className="font-body leading-relaxed" style={{ fontSize: "clamp(14px, 1.4vw, 16px)", color: "#4A5568" }}>
            We built GradPath for our family, and for yours — to reduce friction, bring clarity, and help every student move forward with confidence.
          </p>
        </div>
      </section>

    </div>
  );
}
