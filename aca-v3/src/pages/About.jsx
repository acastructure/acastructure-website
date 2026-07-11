import { SketchFamily, SketchMeeting, SketchStudents, SketchCampusWide } from "../components/Sketches";

function Portrait({ name }) {
  return (
    <div style={{ width: 90, height: 90, borderRadius: "50%", background: "#F0EDE4", border: "1px solid #E8E4D9", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width="44" height="44" fill="none" stroke="#B8860B" strokeWidth="1.5" viewBox="0 0 48 48">
        <circle cx="24" cy="18" r="11"/>
        <path d="M6 44c0-10 8-18 18-18s18 8 18 18"/>
      </svg>
    </div>
  );
}

export default function About() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section className="py-20" style={{ background: "#FAFAF7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase mb-5" style={{ color: "#B8860B" }}>About Us</p>
              <h1 className="font-display font-bold leading-[1.0]" style={{ fontSize: "clamp(42px,5.5vw,64px)", color: "#1A1A2E" }}>
                Our journey.<br />Your path.
              </h1>
              <p className="font-body leading-relaxed mt-6" style={{ fontSize: "16px", color: "#4A5568", maxWidth: 440 }}>
                We met when we were young and have spent nearly our entire adult lives building together. Along the way came high school, military service, college, careers, marriage, and raising a family. Education was always part of that journey — but navigating it often felt more difficult than the learning itself.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-80 h-72">
                <div style={{ position: "absolute", inset: 0, background: "#F0EDE4", borderRadius: 16, overflow: "hidden" }}>
                  <SketchFamily className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20" style={{ background: "#FAFAF7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg width="22" height="22" fill="none" stroke="#B8860B" strokeWidth="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <h2 className="font-display font-semibold text-2xl" style={{ color: "#1A1A2E" }}>The problem we couldn't ignore.</h2>
              </div>
              <div className="w-10 h-0.5 mb-6" style={{ background: "#B8860B" }} />
              <div className="space-y-4">
                <p className="font-body leading-relaxed" style={{ fontSize: "15px", color: "#4A5568" }}>
                  Every semester seemed to require another website, another degree map, another spreadsheet, another advisor meeting, another policy to interpret.
                </p>
                <p className="font-body font-semibold" style={{ fontSize: "15px", color: "#1A1A2E" }}>
                  We weren't looking for another planning tool.<br />We were looking for clarity.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden border" style={{ borderColor: "#E8E4D9" }}>
              <div className="p-8">
                <SketchMeeting className="w-full opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20" style={{ background: "#F0EDE4" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-2xl overflow-hidden border" style={{ borderColor: "#E8E4D9" }}>
              <div className="p-8">
                <SketchStudents className="w-full opacity-70" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg width="22" height="22" fill="#DC2626" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <h2 className="font-display font-semibold text-2xl" style={{ color: "#1A1A2E" }}>So we built the tool we wished we'd had.</h2>
              </div>
              <div className="w-10 h-0.5 mb-6" style={{ background: "#B8860B" }} />
              <p className="font-body leading-relaxed mb-3" style={{ fontSize: "15px", color: "#4A5568" }}>Not because we wanted to build software.</p>
              <p className="font-body font-semibold" style={{ fontSize: "15px", color: "#1A1A2E" }}>Because we couldn't find it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24" style={{ background: "#FAFAF7" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-semibold text-center mb-3" style={{ fontSize: "clamp(26px,3.5vw,40px)", color: "#1A1A2E" }}>
            Built by people living the problem.
          </h2>
          <div className="w-12 h-0.5 mx-auto mb-12" style={{ background: "#B8860B" }} />
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                name: "Rick",
                roles: ["Philosophy student.", "Veteran.", "Systems thinker."],
                focus: "Focused on academic models, research, and product vision.",
              },
              {
                name: "Isabella",
                roles: ["Physics student.", "Previously computer engineering.", "Veteran architect of the platform."],
                focus: "Focused on building reliable systems that people can trust.",
              },
            ].map(p => (
              <div key={p.name} className="flex items-start gap-6">
                <Portrait name={p.name} />
                <div>
                  <h3 className="font-display font-bold text-2xl" style={{ color: "#1A1A2E" }}>{p.name}</h3>
                  <div className="w-8 h-0.5 my-3" style={{ background: "#B8860B" }} />
                  <div className="space-y-1 mb-4">
                    {p.roles.map(r => (
                      <p key={r} className="font-body text-sm" style={{ color: "#4A5568" }}>{r}</p>
                    ))}
                  </div>
                  <p className="font-body text-sm font-semibold" style={{ color: "#1A1A2E" }}>{p.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 overflow-hidden" style={{ background: "#F0EDE4" }}>
        <div className="max-w-6xl mx-auto px-6">
          <SketchCampusWide className="w-full opacity-45 mb-12" />
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold leading-snug" style={{ fontSize: "clamp(28px,3.5vw,44px)", color: "#1A1A2E" }}>
              Every meaningful journey deserves a clearer path.
            </h2>
            <div className="w-12 h-0.5 mx-auto my-6" style={{ background: "#B8860B" }} />
            <p className="font-body leading-relaxed" style={{ fontSize: "16px", color: "#4A5568" }}>
              We built GradPath for our family, and for yours — to reduce friction, bring clarity, and help every student move forward with confidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
