import gradpathMark from "../assets/gradpath_mark.svg";

export default function GetGradPath() {
  return (
    <div className="font-body">
      <section className="bg-ink text-paper">
        <div className="max-w-3xl mx-auto px-6 pt-16 pb-20 text-center">
          <img src={gradpathMark} alt="" className="h-20 w-auto mx-auto mb-6" />
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-blueprint mb-5">
            Get GradPath
          </p>
          <h1 className="font-display font-medium text-4xl md:text-5xl leading-tight">
            Your degree, mapped out.
          </h1>
          <p className="font-body text-paper/70 max-w-lg mx-auto mt-6 leading-relaxed">
            Download GradPath to see your full path to graduation — degree
            requirements, GE tracking, semester planning, and transfer articulation,
            built from your school's actual bulletin.
          </p>

          {/* App Store badge — placeholder structure only.
              Replace the <span> block below with Apple's official
              "Download on the App Store" badge artwork once available,
              and set the href on the wrapping element to the live App Store URL. */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <span
              className="inline-flex items-center gap-3 bg-paper/10 border border-paper/20 text-paper/50 px-6 py-3 rounded-md cursor-not-allowed select-none"
              aria-disabled="true"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" opacity="0.4" />
              </svg>
              <span className="font-body text-sm">Download on the App Store</span>
            </span>
            <p className="font-mono text-[11px] tracking-widest uppercase text-blueprint/60">
              Link going live ahead of August 2026 launch
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper text-charcoal">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-blueprint-dim mb-4">
            Pricing
          </p>
          <h2 className="font-display font-medium text-2xl md:text-3xl mb-10">
            Free to start. Transparent after that.
          </h2>

          <div className="space-y-px bg-charcoal/10">
            <PriceRow
              label="Now through Dec 2026"
              detail="Full access during the beta period at SFSU and CCSF. No payment required."
              price="Free"
            />
            <PriceRow
              label="Starting Jan 1, 2027"
              detail="Continued access for accounts created during the beta. Cancel anytime."
              price="$12/mo"
            />
            <PriceRow
              label="Founding beta members"
              detail="Permanent access for the original founding group. Never billed."
              price="Free for life"
            />
          </div>

          <p className="font-body text-sm text-charcoal/50 mt-8">
            Subscriptions are billed directly through AcaStructure, not the App Store.
          </p>
        </div>
      </section>
    </div>
  );
}

function PriceRow({ label, detail, price }) {
  return (
    <div className="bg-paper p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <div>
        <p className="font-display text-base">{label}</p>
        <p className="font-body text-sm text-charcoal/60 mt-1">{detail}</p>
      </div>
      <p className="font-mono text-sm text-brass whitespace-nowrap">{price}</p>
    </div>
  );
}
