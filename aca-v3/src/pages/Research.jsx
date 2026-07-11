import { SketchStudents, SketchCampusWide, SketchMeeting } from "../components/Sketches";

export default function Research() {
  return (
    <div className="font-body">
      {/* Hero */}
      <section className="py-20 overflow-hidden" style={{ background: "#FAFAF7" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase mb-1" style={{ color: "#B8860B" }}>Research</p>
              <div className="w-10 h-0.5 mb-6" style={{ background: "#B8860B" }} />
              <h1 className="font-display font-bold leading-[1.0]" style={{ fontSize: "clamp(38px,5vw,58px)", color: "#1A1A2E" }}>
                Rethinking how academic systems connect.
              </h1>
              <p className="font-body leading-relaxed mt-6 max-w-md" style={{ fontSize: "16px", color: "#4A5568" }}>
                Every generation inherits educational systems built for a different era. Our research explores how modern academic infrastructure can reduce fragmentation, improve visibility, and create better educational experiences — without replacing the institutions that already exist.
              </p>
            </div>
            <div className="flex justify-center">
              <SketchStudents className="w-full max-w-sm opacity-75" />
            </div>
          </div>
        </div>
      </section>

      {/* Research areas */}
      <section className="py-20" style={{ background: "#F0EDE4" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-center mb-12" style={{ color: "#B8860B" }}>Areas of Research</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <svg width="40" height="40" fill="none" stroke="#1B3A0E" strokeWidth="1.5" viewBox="0 0 48 48"><rect x="6" y="22" width="36" height="22" rx="1"/><path d="M2 22l22-16 22 16"/><line x1="18" y1="44" x2="18" y2="30"/><line x1="30" y1="44" x2="30" y2="30"/><line x1="18" y1="30" x2="30" y2="30"/></svg>,
                title: "Academic Infrastructure",
                desc: "Exploring how degree requirements, articulation, curriculum, and advising can become easier to understand and navigate.",
              },
              {
                icon: <svg width="40" height="40" fill="none" stroke="#1E5FA8" strokeWidth="1.5" viewBox="0 0 48 48"><circle cx="24" cy="18" r="8"/><path d="M12 44c0-7 5-12 12-12s12 5 12 12"/><circle cx="36" cy="28" r="3" fill="#1E5FA8" opacity="0.4"/><line x1="36" y1="31" x2="36" y2="38" strokeDasharray="2 2"/></svg>,
                title: "Student Navigation",
                desc: "Investigating how every student can see a clearer path from where they are today to where they want to be tomorrow.",
              },
              {
                icon: <svg width="40" height="40" fill="none" stroke="#B8860B" strokeWidth="1.5" viewBox="0 0 48 48"><rect x="4" y="8" width="40" height="32" rx="2"/><line x1="4" y1="18" x2="44" y2="18"/><line x1="16" y1="8" x2="16" y2="40"/><circle cx="34" cy="30" r="5"/></svg>,
                title: "Institutional Visibility",
                desc: "Researching how educators and advisors can better understand student progress while preserving existing institutional workflows.",
              },
              {
                icon: <svg width="40" height="40" fill="none" stroke="#1B3A0E" strokeWidth="1.5" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="5"/><line x1="24" y1="6" x2="24" y2="14"/><line x1="24" y1="34" x2="24" y2="42"/><line x1="6" y1="24" x2="14" y2="24"/><line x1="34" y1="24" x2="42" y2="24"/></svg>,
                title: "Longitudinal Learning Models",
                desc: "Exploring how a single academic model can evolve alongside students throughout their entire educational journey — from earliest years through higher education.",
              },
            ].map(a => (
              <div key={a.title} className="bg-white rounded-2xl p-6 border text-center" style={{ borderColor: "#E8E4D9" }}>
                <div className="flex justify-center mb-5">{a.icon}</div>
                <h3 className="font-display font-semibold text-lg mb-3 leading-snug" style={{ color: "#1A1A2E" }}>{a.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#4A5568" }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-16" style={{ background: "#0A1628" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 divide-x" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            {["One student.", "One evolving academic model.", "Multiple perspectives."].map((t, i) => (
              <div key={t} className="text-center px-8">
                <p className="font-display font-semibold" style={{ fontSize: "clamp(16px,2vw,22px)", color: "#B8860B" }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current focus */}
      <section className="py-24" style={{ background: "#FAFAF7" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-center mb-12" style={{ color: "#718096" }}>Current Research Focus</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "GradPath", desc: "Researching how students interact with academic planning tools to make smarter decisions and stay on track.", Sketch: () => <SketchStudents className="w-full h-full" /> },
              { title: "Academic Infrastructure", desc: "Researching modern models for articulation, advising, and curriculum intelligence that support educators and reduce friction.", Sketch: () => <SketchMeeting className="w-full h-full" /> },
              { title: "Longitudinal Models", desc: "Exploring how educational systems might connect across every stage of a student's academic journey.", Sketch: () => <SketchStudentsWalking className="w-full h-full" /> },
            ].map(({ title, desc, Sketch }) => (
              <div key={title} className="rounded-2xl overflow-hidden border" style={{ borderColor: "#E8E4D9" }}>
                <div className="h-40 flex items-center justify-center overflow-hidden" style={{ background: "#F0EDE4" }}>
                  <div className="w-full h-full opacity-60">
                    <Sketch />
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-display font-semibold text-lg mb-2" style={{ color: "#1A1A2E" }}>{title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#4A5568" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="py-20 overflow-hidden" style={{ background: "#F0EDE4" }}>
        <div className="max-w-6xl mx-auto px-6">
          <CampusWideSketch />
          <div className="text-center mt-12">
            <p className="font-display font-semibold leading-snug max-w-4xl mx-auto" style={{ fontSize: "clamp(20px,2.5vw,32px)", color: "#1A1A2E" }}>
              We don't believe the future of education is built by replacing institutions. We believe it's built by helping them see the same student through clearer windows.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function CampusWideSketch() {
  return <SketchCampusWide className="w-full opacity-50" />;
}

function SketchStudentsWalking({ className }) {
  return (
    <svg viewBox="0 0 500 260" className={className} fill="none">
      <g stroke="#4A5568" strokeWidth="1" opacity="0.75">
        {[90, 180, 280, 370, 440].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy={60 + i * 10} r={12 + (i % 2)}/>
            <path d={`M${x} ${72 + i * 10} L${x} ${125 + i * 10}`} strokeWidth="1.2"/>
            <path d={`M${x - 14} ${96 + i * 10} L${x + 14} ${96 + i * 10}`}/>
            <path d={`M${x} ${125 + i * 10} L${x - 13} ${158 + i * 10}`}/>
            <path d={`M${x} ${125 + i * 10} L${x + 13} ${158 + i * 10}`}/>
          </g>
        ))}
        <line x1="0" y1="240" x2="500" y2="240" strokeWidth="1.5"/>
      </g>
    </svg>
  );
}
