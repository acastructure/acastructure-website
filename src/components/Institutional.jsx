export default function Institutional() {
  return (
    <section className="bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-blueprint mb-4">
              For Institutions
            </p>
            <h2 className="font-display font-medium text-3xl md:text-4xl leading-tight">
              We're not a campus app.
              <br />
              We're the infrastructure underneath it.
            </h2>
          </div>
          <div className="font-body text-paper/70 leading-relaxed space-y-5 text-base">
            <p>
              AcaStructure isn't a single app — it's a model. Degree requirements,
              transfer rules, and academic progression, mapped once as a reusable
              system and deployed as a service (MaaS) across whichever interface an
              audience needs.
            </p>
            <p>
              That same model can power a student app, an advisor dashboard, or
              department-level visibility into where students are getting stuck.
              The underlying structure doesn't change. Only the window into it does.
            </p>
            <p className="text-brass">
              Currently in beta at San Francisco State University and City College of San Francisco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
