const steps = [
  {
    n: "01",
    label: "Founding Beta",
    detail: "A small group tests GradPath first. Free for life, in exchange for honest feedback.",
  },
  {
    n: "02",
    label: "Open Beta — Aug 2026",
    detail: "SFSU and CCSF students get full access at no cost through the end of the year.",
  },
  {
    n: "03",
    label: "Subscription — Jan 2027",
    detail: "$12/month for continued access. Founding members remain free, permanently.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-paper-dim text-charcoal">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-blueprint-dim mb-4">
          Rollout
        </p>
        <h2 className="font-display font-medium text-3xl md:text-4xl max-w-2xl mb-16">
          From beta to everyday use.
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-charcoal/15 pt-6">
              <span className="font-mono text-sm text-brass">{s.n}</span>
              <h3 className="font-display text-xl mt-3 mb-2">{s.label}</h3>
              <p className="font-body text-charcoal/70 leading-relaxed text-sm">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
