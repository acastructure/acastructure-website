const sections = [
  {
    title: "1. Our Privacy Philosophy",
    paragraphs: [
      "At AcaStructure, we believe students should control their educational journey without sacrificing their privacy.",
      "GradPath was designed with a simple principle: collect only the information necessary to provide our services, improve the platform, and support our users. We do not collect personal information simply because it may be useful in the future.",
      "Our goal is to build modern educational technology that earns trust through transparency, responsible data practices, and respect for our users.",
    ],
  },
  {
    title: "2. Who We Are",
    paragraphs: [
      "GradPath is an independent educational technology platform developed by AcaStructure LLC, a California limited liability company. We are not a college, university, school district, or educational institution. We provide tools that help users organize, understand, and plan their educational pathways.",
      "GradPath is not subject to the Family Educational Rights and Privacy Act (FERPA) as we are not an educational institution. However, AcaStructure treats all academic records uploaded to our platform with the same level of care and confidentiality that FERPA would require.",
    ],
  },
  {
    title: "3. Eligibility",
    paragraphs: [
      "GradPath is currently available only to users who are at least 18 years of age. We do not knowingly permit minors to create accounts or use the Services during the current beta program.",
      "GradPath does not knowingly collect personal information from children under 13 years of age. If we learn that we have collected information from a child under 13, we will delete it promptly. If you believe a child under 13 has provided us with personal information, please contact us at admin@acastructure.com.",
    ],
  },
  {
    title: "4. Information We Collect",
    paragraphs: [
      "4.1  Information You Provide. When creating an account or using GradPath, we may collect: first and last name; email address (through Google Sign-In); phone number; profile photo (if shared through your Google account); academic information you choose to upload or enter, including transcript PDFs, courses, grades, and academic planning information; and notes and edits you make within GradPath.",
      "4.2  Google Sign-In. GradPath uses Google Sign-In as the exclusive authentication method. We receive basic account information from Google necessary to authenticate your account, such as your name, email address, and profile image. We do not collect or store your Google password or other Google account credentials.",
      "4.3  Transcript Uploads. Users may upload PDF transcripts to utilize GradPath's transcript parsing and academic planning features. Uploaded transcripts are stored securely and used solely to extract academic course information, build degree plans, display academic progress, improve transcript parsing accuracy, and provide requested platform functionality. We do not use transcript information for advertising purposes.",
      "4.4  Usage Information. To improve GradPath, we collect limited technical and behavioral information, including device type, browser information, operating system, IP address, app version, pages visited, feature usage, session activity, error logs, and performance information.",
    ],
  },
  {
    title: "5. Analytics",
    paragraphs: [
      "GradPath uses PostHog to understand how users interact with the platform. Analytics help us improve navigation, identify bugs, measure feature usage, and enhance the overall user experience.",
      "Analytics are used to improve the platform — not to sell user information or deliver third-party advertising.",
    ],
  },
  {
    title: "6. AI-Assisted Transcript Processing",
    paragraphs: [
      "Certain transcript parsing features may utilize trusted third-party artificial intelligence service providers to extract and organize academic course information. These providers process information solely as necessary to perform transcript parsing and related functionality requested by the user.",
    ],
  },
  {
    title: "7. How We Use Your Information",
    paragraphs: [
      "We use information collected through GradPath to authenticate users and provide platform functionality; process transcript uploads and generate academic planning information; maintain account security and respond to support requests; send important product updates, security alerts, and service change notifications; and conduct analytics and product development.",
    ],
  },
  {
    title: "8. Communications",
    paragraphs: [
      "We may contact users regarding account notifications, security alerts, service updates, beta announcements, support communications, important product changes, and future subscription information.",
      "Users may opt out of non-essential communications where applicable. Certain administrative or security-related communications cannot be disabled while maintaining an active account.",
    ],
  },
  {
    title: "9. Cookies and Similar Technologies",
    paragraphs: [
      "GradPath uses authentication and session technologies necessary for operating the Services. These technologies help maintain secure logins, preserve user sessions, and improve platform functionality.",
    ],
  },
  {
    title: "10. Third-Party Links",
    paragraphs: [
      "GradPath may contain links to external websites, institutional pages, and educational resources maintained by third parties. These external sites are governed by their own privacy policies. AcaStructure is not responsible for the privacy practices or content of third-party websites. We encourage users to review the privacy policies of any external sites they visit.",
    ],
  },
  {
    title: "11. Third-Party Service Providers",
    paragraphs: [
      "To operate GradPath, we rely on trusted third-party service providers, which may include Google, Supabase, Vercel, Anthropic, Stripe, PostHog, and similar providers. These providers receive only the information reasonably necessary to perform the services they provide and are obligated to protect your information.",
    ],
  },
  {
    title: "12. Information We Do Not Sell",
    paragraphs: [
      "AcaStructure does not sell, rent, or trade your personal information. We do not use your personal information for third-party behavioral advertising. Your information is used solely to operate, improve, and support GradPath.",
    ],
  },
  {
    title: "13. Do Not Track",
    paragraphs: [
      "Some browsers offer a \"Do Not Track\" (DNT) signal. Because there is currently no universally accepted standard for responding to DNT signals, GradPath does not alter its data collection or use practices in response to DNT signals at this time. We will continue to monitor developments around DNT and update this policy as appropriate.",
    ],
  },
  {
    title: "14. Data Security",
    paragraphs: [
      "We use commercially reasonable administrative, technical, and organizational safeguards designed to protect personal information, including secure encrypted connections (HTTPS), access controls, and infrastructure security measures. While no system can guarantee absolute security, we continuously work to improve the security of GradPath.",
    ],
  },
  {
    title: "15. Data Retention",
    paragraphs: [
      "We retain personal information only as long as reasonably necessary to provide the Services, comply with legal obligations, resolve disputes, and protect our legitimate business interests.",
      "If you request deletion of your account, your information may remain recoverable for up to 30 days before permanent deletion, after which personal information will generally be removed from our active systems, except where retention is required by law or for legitimate security purposes.",
    ],
  },
  {
    title: "16. California Privacy Rights",
    paragraphs: [
      "California residents may have certain privacy rights under applicable California law. Subject to applicable legal requirements, California residents may request to: know what personal information we collect; request correction of inaccurate information; request deletion of personal information; request a portable copy of their personal information; and receive information regarding our data practices.",
      "AcaStructure does not sell personal information. To submit a privacy rights request, contact us at admin@acastructure.com.",
    ],
  },
  {
    title: "17. Beta Program",
    paragraphs: [
      "GradPath is currently offered as a beta product. During the beta period, features, functionality, and data practices may evolve. We may collect additional diagnostic and technical information to identify bugs, improve stability, and evaluate new features.",
      "Any material changes to this Privacy Policy will be communicated by updating this document and, where appropriate, notifying users through the platform or by email.",
    ],
  },
  {
    title: "18. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our Services, technology, legal requirements, or business operations. The updated version will become effective upon posting unless otherwise stated. Your continued use of GradPath after changes become effective constitutes acceptance of the revised Privacy Policy.",
    ],
  },
  {
    title: "19. Contact Us",
    paragraphs: [
      "If you have questions regarding this Privacy Policy or our privacy practices, please contact us at admin@acastructure.com or visit acastructure.com.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="font-body">
      <section className="bg-navy text-cream">
        <div className="max-w-2xl mx-auto px-6 pt-14 pb-10 text-center">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-forest-light mb-4">
            GradPath
          </p>
          <h1 className="font-display font-medium text-3xl md:text-4xl text-cream">
            Privacy Policy
          </h1>
          <p className="font-mono text-[11px] tracking-widest uppercase text-cream/50 mt-4">
            Version 1.0 Beta — AcaStructure LLC — Effective June 15, 2026
          </p>
        </div>
      </section>
      <section className="bg-cream text-charcoal">
        <div className="max-w-2xl mx-auto px-6 py-16">
          {sections.map((s) => (
            <div key={s.title} className="mb-12">
              <h2 className="font-display text-xl mb-4 text-charcoal">{s.title}</h2>
              <div className="space-y-4">
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="font-body text-slate leading-relaxed text-[15px]">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
          <p className="font-mono text-[11px] tracking-widest uppercase text-charcoal/40 mt-16 pt-8 border-t border-charcoal/10">
            AcaStructure LLC — admin@acastructure.com
          </p>
        </div>
      </section>
    </div>
  );
}
