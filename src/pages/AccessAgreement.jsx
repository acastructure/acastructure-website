const sections = [
  {
    title: "1. Agreement Overview",
    body: "This GradPath Access Agreement ('Agreement') governs your access to and use of GradPath, operated by AcaStructure LLC. By using GradPath, you agree to be bound by this Agreement in addition to our Terms of Service and Privacy Policy."
  },
  {
    title: "2. Access and Pricing",
    body: "GradPath is currently free for all users during our open beta period. As the platform grows, pricing may evolve — but access will always be designed with students in mind. AcaStructure will provide reasonable notice of any changes to pricing or access terms."
  },
  {
    title: "3. Software Disclaimer",
    body: "GradPath is an actively developed platform. It may contain errors, inaccuracies, or incomplete features. AcaStructure does not guarantee uninterrupted access or error-free operation. The service may be updated, modified, or temporarily unavailable without notice.",
    highlight: true
  },
  {
    title: "4. AI and Transcript Processing",
    body: "GradPath uses Anthropic's Claude AI to assist with course extraction from academic transcripts. When you upload or submit a transcript, that document is temporarily sent to Anthropic's API for processing. Anthropic does not store transcript data after processing is complete. AcaStructure does not share your personal data or transcript information with any third parties for advertising purposes. Transcript data is used solely to populate your academic history within GradPath."
  },
  {
    title: "5. Your Academic Data",
    body: "All academic data you enter or import into GradPath is stored securely and associated with your account. This data is used to provide GradPath's core features, including degree mapping, semester planning, and transfer pathway analysis. You may request deletion of your data at any time by contacting admin@acastructure.com."
  },
  {
    title: "6. Feedback",
    body: "Any feedback, suggestions, or ideas you submit to AcaStructure may be used to improve GradPath without compensation or attribution. Submission of feedback does not create any obligation on the part of AcaStructure."
  },
  {
    title: "7. Confidentiality",
    body: "Features and functionality that are not yet publicly released are considered confidential. You agree not to publicly disclose, share screenshots of, or discuss unreleased features without written permission from AcaStructure."
  },
  {
    title: "8. Termination",
    body: "AcaStructure reserves the right to terminate your access at any time for violation of this Agreement, the Terms of Service, or any applicable law. You may also terminate your account at any time by contacting admin@acastructure.com."
  },
  {
    title: "9. Limitation of Liability",
    body: "TO THE FULLEST EXTENT PERMITTED BY LAW, ACASTRUCTURE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. ACASTRUCTURE'S TOTAL LIABILITY SHALL NOT EXCEED $100.00 USD.",
    highlight: true
  },
  {
    title: "10. Severability",
    body: "If any provision of this Agreement is found to be unenforceable, the remaining provisions will continue in full force and effect."
  },
  {
    title: "11. Entire Agreement",
    body: "This Agreement, together with the Terms of Service and Privacy Policy, constitutes the entire agreement between you and AcaStructure regarding your use of GradPath."
  },
  {
    title: "12. Contact",
    body: "For questions about this Agreement, contact admin@acastructure.com."
  },
];

export default function AccessAgreement() {
  return (
    <div style={{ background: "#F2EFE8", minHeight: "100vh", color: "#1A1A18" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 48px" }}>
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#2E8008", marginBottom: 16 }}>AcaStructure LLC</p>
        <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(32px, 4vw, 48px)", color: "#1A1A18", marginBottom: 8 }}>GradPath Access Agreement</h1>
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "rgba(26,26,24,0.45)", marginBottom: 64 }}>Effective Date: September 11, 2026</p>
        {sections.map((s, i) => (
          <div key={i} style={{ marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid rgba(26,26,24,0.08)", borderLeft: s.highlight ? "2px solid rgba(220,38,38,0.5)" : "none", paddingLeft: s.highlight ? 20 : 0 }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 20, color: "#1A1A18", marginBottom: 12 }}>{s.title}</h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(26,26,24,0.65)" }}>{s.body}</p>
          </div>
        ))}
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "rgba(26,26,24,0.35)", marginTop: 40 }}>AcaStructure LLC — admin@acastructure.com</p>
      </div>
    </div>
  );
}
