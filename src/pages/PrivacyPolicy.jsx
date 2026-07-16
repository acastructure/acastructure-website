const sections = [
  { title: "1. Introduction", body: "AcaStructure LLC ('AcaStructure', 'we', 'our', or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use GradPath and visit acastructure.com. Please read this policy carefully." },
  { title: "2. Information We Collect", body: "We collect information you provide directly, including your name, email address, academic institution, major, course history, and academic progress data. We also collect usage data such as how you interact with GradPath, device information, and log data." },
  { title: "3. FERPA Notice", body: "GradPath is not an official system of record for any educational institution. All academic data you enter is self-reported. We do not pull data from or transmit data to any institutional system unless a formal integration agreement exists. Your academic data is stored securely and is not shared with your institution without your explicit consent." },
  { title: "4. COPPA Compliance", body: "GradPath is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you are under 13, please do not use GradPath. If we learn we have collected information from a child under 13, we will delete it promptly." },
  { title: "5. How We Use Your Information", body: "We use your information to provide and improve GradPath, personalize your experience, communicate with you about your account, send service-related notifications, and comply with legal obligations. We do not sell your personal information to third parties." },
  { title: "6. Do Not Track", body: "Some browsers include a Do Not Track ('DNT') feature. We currently do not respond to DNT signals. We will update this policy if our practices change." },
  { title: "7. Third-Party Links", body: "GradPath may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We encourage you to read their privacy policies before providing any information." },
  { title: "8. Data Security", body: "We employ industry-standard security measures including encryption in transit and at rest. However, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security." },
  { title: "9. Data Retention", body: "We retain your data for as long as your account is active or as needed to provide services. You may request deletion of your account and data at any time by contacting admin@acastructure.com." },
  { title: "10. Your Rights", body: "You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing. To exercise these rights, contact us at admin@acastructure.com." },
  { title: "11. Changes to This Policy", body: "We may update this Privacy Policy from time to time. We will notify you of material changes via email or in-app notification. Continued use of GradPath after changes constitutes acceptance of the updated policy." },
  { title: "12. Contact Us", body: "If you have questions about this Privacy Policy, please contact us at admin@acastructure.com." },
];

export default function PrivacyPolicy() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#D8D5CC" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 48px" }}>
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#4CC40F", marginBottom: 16 }}>AcaStructure LLC</p>
        <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(32px, 4vw, 48px)", color: "#D8D5CC", marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "rgba(216,213,204,0.4)", marginBottom: 64 }}>Effective Date: July 2026</p>
        {sections.map((s, i) => (
          <div key={i} style={{ marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid rgba(216,213,204,0.08)" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: 20, color: "#D8D5CC", marginBottom: 12 }}>{s.title}</h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.8, color: "rgba(216,213,204,0.65)" }}>{s.body}</p>
          </div>
        ))}
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "rgba(216,213,204,0.3)", marginTop: 40 }}>AcaStructure LLC — admin@acastructure.com</p>
      </div>
    </div>
  );
}
