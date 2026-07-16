const sections = [
  { title: "1. Acceptance of Terms", body: "By accessing or using GradPath, you agree to be bound by these Terms of Service and all applicable laws. If you do not agree, do not use GradPath. You must be at least 18 years of age to use GradPath." },
  { title: "2. Description of Service", body: "GradPath is an academic modeling and planning tool that provides students with a structured view of their degree progress, GE requirements, semester planning, and transfer articulation. GradPath is not affiliated with, endorsed by, or an official product of any educational institution unless a formal partnership agreement is in place." },
  { title: "3. Academic Accuracy Disclaimer", body: "GRADPATH IS AN ACADEMIC MODELING AND PLANNING TOOL — NOT A SUBSTITUTE FOR OFFICIAL ACADEMIC ADVISING. Degree requirements, course availability, transfer policies, and GE requirements are subject to change. AcaStructure makes reasonable efforts to maintain accurate data but does not guarantee completeness or timeliness. USERS ARE STRONGLY ADVISED TO VERIFY ALL ACADEMIC PLANNING DECISIONS WITH A QUALIFIED ACADEMIC ADVISOR.", highlight: true },
  { title: "4. Subscription and Pricing", body: "GradPath is free during the beta period through December 31, 2026. Beginning January 1, 2027, continued access requires a monthly subscription of $12.00 USD. Founding beta members receive permanent free access. Subscriptions are billed through acastructure.com via Stripe. AcaStructure is not responsible for loss of data resulting from account cancellation or non-payment." },
  { title: "5. User Conduct", body: "You agree not to reverse engineer or extract GradPath's underlying methodology, share or resell your account access, upload false academic data, attempt unauthorized access to other accounts, or use GradPath for any commercial purpose without written authorization from AcaStructure." },
  { title: "6. Intellectual Property", body: "GradPath and its academic modeling methodology are the exclusive intellectual property of AcaStructure LLC. The underlying methodology is the subject of a pending utility patent application. You are granted a limited, non-exclusive, non-transferable license to use GradPath for personal academic planning only." },
  { title: "7. Limitation of Liability", body: "TO THE FULLEST EXTENT PERMITTED BY LAW, ACASTRUCTURE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. ACASTRUCTURE'S TOTAL LIABILITY SHALL NOT EXCEED THE GREATER OF (A) THE TOTAL AMOUNT YOU PAID IN THE PRECEDING 12 MONTHS OR (B) $100.00 USD.", highlight: true },
  { title: "8. Indemnification", body: "You agree to indemnify and hold harmless AcaStructure LLC and its officers, directors, employees, and agents from any claims, liabilities, damages, or expenses arising from your use of GradPath or violation of these Terms." },
  { title: "9. Governing Law", body: "These Terms shall be governed by the laws of the State of California. Any disputes shall be resolved through binding arbitration in San Francisco County, California, in accordance with the rules of the American Arbitration Association." },
  { title: "10. Severability and Waiver", body: "If any provision of these Terms is found unenforceable, the remaining provisions will continue in full force. Failure to enforce any right or provision shall not be deemed a waiver." },
  { title: "11. Force Majeure", body: "AcaStructure shall not be liable for any failure or delay in performance due to causes beyond its reasonable control, including acts of God, government actions, natural disasters, or internet failures." },
  { title: "12. Entire Agreement", body: "These Terms, together with the Privacy Policy and Beta Program Agreement, constitute the entire agreement between you and AcaStructure regarding GradPath and supersede all prior agreements." },
  { title: "13. Contact", body: "For questions about these Terms, contact admin@acastructure.com." },
];

export default function TermsOfService() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#D8D5CC" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 48px" }}>
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#4CC40F", marginBottom: 16 }}>AcaStructure LLC</p>
        <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(32px, 4vw, 48px)", color: "#D8D5CC", marginBottom: 8 }}>Terms of Service</h1>
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
