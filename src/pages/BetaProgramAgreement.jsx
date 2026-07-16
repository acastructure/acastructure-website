const sections = [
  { title: "1. Beta Program Overview", body: "This Beta Program Agreement ('Agreement') governs your participation in the GradPath beta program operated by AcaStructure LLC. By participating, you agree to be bound by this Agreement in addition to our Terms of Service and Privacy Policy." },
  { title: "2. Beta Period", body: "The GradPath beta program runs from August 2026 through December 31, 2026 ('Beta Period'). Access during the Beta Period is provided free of charge to all eligible users at SFSU and CCSF. Founding beta members retain permanent free access beyond the Beta Period." },
  { title: "3. Founding Beta Members", body: "Users who gain access to GradPath as part of the founding beta group prior to the August 2026 launch are granted permanent free access to GradPath for life. This benefit is non-transferable and applies to the individual account only. Founding beta members will never be charged a subscription fee." },
  { title: "4. Beta Software Disclaimer", body: "GradPath is currently in beta. As a beta product, GradPath may contain errors, inaccuracies, or incomplete features. AcaStructure does not guarantee uninterrupted access or error-free operation during the Beta Period. The service may be updated, modified, or temporarily unavailable without notice.", highlight: true },
  { title: "5. Feedback", body: "By participating in the beta program, you agree to provide honest feedback about your experience with GradPath. Any feedback, suggestions, or ideas you submit to AcaStructure become the property of AcaStructure and may be used to improve GradPath without compensation or attribution." },
  { title: "6. Confidentiality", body: "Beta features and functionality that are not yet publicly released are considered confidential. You agree not to publicly disclose, share screenshots of, or discuss unreleased features without written permission from AcaStructure." },
  { title: "7. Transition to Paid Subscription", body: "At the conclusion of the Beta Period on December 31, 2026, non-founding beta users will be required to subscribe at $12.00 USD per month to continue accessing GradPath and all saved data. You will receive notice of this transition no less than 30 days in advance." },
  { title: "8. Data During Beta", body: "All academic data you enter during the Beta Period will be retained after the Beta Period ends, provided your account remains active. AcaStructure is not responsible for data loss resulting from account inactivity or cancellation." },
  { title: "9. Termination", body: "AcaStructure reserves the right to terminate your beta access at any time for violation of this Agreement, the Terms of Service, or any applicable law. You may also withdraw from the beta program at any time by contacting admin@acastructure.com." },
  { title: "10. Limitation of Liability", body: "ACASTRUCTURE'S LIABILITY DURING THE BETA PERIOD IS LIMITED TO THE FULLEST EXTENT PERMITTED BY LAW. BETA USERS WHO HAVE NOT PAID ANY SUBSCRIPTION FEE ACKNOWLEDGE THAT ACASTRUCTURE'S LIABILITY IS LIMITED TO $100.00 USD.", highlight: true },
  { title: "11. Severability", body: "If any provision of this Agreement is found to be unenforceable, the remaining provisions will continue in full force and effect." },
  { title: "12. Entire Agreement", body: "This Agreement, together with the Terms of Service and Privacy Policy, constitutes the entire agreement between you and AcaStructure regarding the beta program." },
  { title: "13. Contact", body: "For questions about the Beta Program Agreement, contact admin@acastructure.com." },
];

export default function BetaProgramAgreement() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#D8D5CC" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 48px" }}>
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#4CC40F", marginBottom: 16 }}>AcaStructure LLC</p>
        <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(32px, 4vw, 48px)", color: "#D8D5CC", marginBottom: 8 }}>Beta Program Agreement</h1>
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "rgba(216,213,204,0.4)", marginBottom: 64 }}>Effective Date: July 2026</p>
        {sections.map((s, i) => (
          <div key={i} style={{ marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid rgba(216,213,204,0.08)", borderLeft: s.highlight ? "2px solid rgba(220,38,38,0.5)" : "none", paddingLeft: s.highlight ? 20 : 0 }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 20, color: "#D8D5CC", marginBottom: 12 }}>{s.title}</h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(216,213,204,0.65)" }}>{s.body}</p>
          </div>
        ))}
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "rgba(216,213,204,0.3)", marginTop: 40 }}>AcaStructure LLC — admin@acastructure.com</p>
      </div>
    </div>
  );
}
