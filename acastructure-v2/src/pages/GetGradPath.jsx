const GRADPATH_LOGO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 830 719"><g transform="translate(0.000000,719.000000) scale(0.100000,-0.100000)" fill="#3DDC3D" stroke="none"><path d="M3900 6978 c-534 -236 -1886 -1052 -2615 -1585 -302 -219 -503 -423 -594 -603 -56 -111 -71 -176 -71 -315 0 -148 18 -226 79 -337 95 -172 256 -310 541 -461 l155 -83 305 176 305 175 -277 159 c-153 88 -292 173 -309 189 -45 43 -38 129 16 176 44 38 2344 1371 2365 1371 21 0 2321 -1333 2365 -1371 54 -47 61 -133 16 -176 -17 -16 -156 -101 -309 -189 l-277 -159 305 -175 305 -176 155 83 c285 151 446 289 541 461 61 111 79 189 79 337 0 139 -15 204 -71 315 -91 180 -292 384 -594 603 -729 533 -2081 1349 -2615 1585 -127 56 -200 56 -320 0z"/><g transform="translate(0,0)" fill="#E8B400" stroke="none"><path d="M1270 4490 l-415 -239 0 -133 0 -133 2740 0 2740 0 0 133 0 133 -415 239 c-228 131 -423 239 -432 239 -10 0 -205 -108 -433 -239 l-415 -239 -1080 0 -1080 0 -415 239 c-228 131 -423 239 -432 239 -10 0 -205 -108 -433 -239z"/></g><g transform="translate(0,0)" fill="#E0303C" stroke="none"><path d="M830 3440 l0 -270 3320 0 3320 0 0 270 0 270 -3320 0 -3320 0 0 -270z"/></g></g></svg>`;

export default function GetGradPath() {
  return (
    <div className="font-body">
      <section className="bg-navy text-cream">
        <div className="max-w-3xl mx-auto px-6 pt-20 pb-24 text-center">
          <span className="inline-block w-20 h-20 mx-auto mb-6" dangerouslySetInnerHTML={{ __html: GRADPATH_LOGO }} />
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-forest-light mb-5">
            Get GradPath
          </p>
          <h1 className="font-display font-semibold text-4xl md:text-5xl leading-tight text-cream">
            Your degree, mapped out.
          </h1>
          <p className="font-body text-cream/70 max-w-lg mx-auto mt-6 leading-relaxed">
            Download GradPath to see your full path to graduation — degree requirements, GE tracking, semester planning, and transfer articulation, built from your school's actual bulletin.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <span
              className="inline-flex items-center gap-3 bg-cream/10 border border-cream/20 text-cream/50 px-6 py-3 rounded-lg cursor-not-allowed select-none"
              aria-disabled="true"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" opacity="0.5"/>
              </svg>
              <span className="font-body text-sm">Download on the App Store</span>
            </span>
            <p className="font-mono text-[11px] tracking-widest uppercase text-forest-light/60">
              Link going live ahead of August 2026 launch
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold mb-4">Pricing</p>
          <h2 className="font-display font-medium text-2xl md:text-3xl text-charcoal mb-10">
            Free to start. Transparent after that.
          </h2>
          <div className="space-y-px bg-charcoal/10">
            {[
              { label: "Now through Dec 2026", detail: "Full access during the beta period at SFSU and CCSF. No payment required.", price: "Free" },
              { label: "Starting Jan 1, 2027", detail: "Continued access for accounts created during the beta. Cancel anytime.", price: "$12/mo" },
              { label: "Founding beta members", detail: "Permanent access for the original founding group. Never billed.", price: "Free for life" },
            ].map(row => (
              <div key={row.label} className="bg-cream p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className="font-display text-base text-charcoal">{row.label}</p>
                  <p className="font-body text-sm text-muted mt-1">{row.detail}</p>
                </div>
                <p className="font-mono text-sm text-gold whitespace-nowrap">{row.price}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-muted mt-8">
            Subscriptions are billed directly through AcaStructure, not the App Store.
          </p>
        </div>
      </section>
    </div>
  );
}
