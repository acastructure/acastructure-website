const sections = [
  {
    title: "1. Our Mission",
    paragraphs: [
      "GradPath was created to reduce friction in higher education by helping students better understand, organize, and plan their academic journeys. Our goal is to make complex educational information more accessible — not to replace the institutions, advisors, counselors, or professionals who ultimately guide and approve academic decisions.",
    ],
  },
  {
    title: "2. Eligibility",
    paragraphs: [
      "GradPath is currently available only to individuals who are at least eighteen (18) years of age. The current beta program is intended for users located within California unless otherwise authorized by AcaStructure. By using GradPath, you represent and warrant that you meet these eligibility requirements.",
    ],
  },
  {
    title: "3. Important Educational Disclaimer — Please Read Carefully",
    highlight: true,
    paragraphs: [
      "GRADPATH IS AN EDUCATIONAL PLANNING TOOL. IT IS NOT A COLLEGE, UNIVERSITY, SCHOOL, EDUCATIONAL INSTITUTION, ACADEMIC ADVISING SERVICE, OR PROFESSIONAL ADVISOR. GRADPATH DOES NOT PROVIDE ACADEMIC ADVICE, LEGAL ADVICE, CAREER ADVICE, OR PROFESSIONAL ADVICE OF ANY KIND.",
      "While we strive to provide accurate, organized, and helpful educational planning tools, academic requirements, degree requirements, graduation requirements, transfer policies, articulation agreements, course offerings, and other academic information may change at any time and are determined solely by the applicable educational institution.",
      "YOU ARE SOLELY RESPONSIBLE FOR VERIFYING ALL ACADEMIC DECISIONS WITH YOUR COLLEGE, UNIVERSITY, ACADEMIC ADVISOR, COUNSELOR, REGISTRAR, OR OTHER APPROPRIATE EDUCATIONAL OFFICIAL BEFORE TAKING ACTION.",
      "By using the Services, you acknowledge that you will not rely exclusively upon information presented within GradPath when making academic decisions. To the fullest extent permitted by applicable law, AcaStructure shall not be responsible for academic outcomes, delayed graduation, transfer decisions, financial aid consequences, or other educational outcomes resulting from a user's reliance upon GradPath without independent verification from the appropriate educational institution.",
    ],
  },
  {
    title: "4. Description of the Services",
    paragraphs: [
      "GradPath provides software tools intended to help users organize educational information and better understand potential academic pathways. Features may include transcript uploads, transcript parsing, degree planning, academic progress tracking, course organization, transfer planning, educational pathway visualization, and additional planning tools introduced over time.",
      "GradPath is continuously evolving and features may be added, modified, suspended, or removed at any time.",
    ],
  },
  {
    title: "5. User Accounts",
    paragraphs: [
      "Access to GradPath currently requires authentication through Google Sign-In. You agree to provide accurate information, maintain the security of your Google account, notify us immediately if you believe your account has been compromised, and use only your own account. You remain responsible for all activity occurring under your account.",
    ],
  },
  {
    title: "6. Transcript Uploads and User Content",
    paragraphs: [
      "You may upload transcript PDFs and other academic information to utilize GradPath's services. You represent that you have the legal right to upload such information, that the information is accurate to the best of your knowledge, and that uploading the information does not violate another person's rights.",
      "You retain ownership of the information you upload. By uploading content, you grant AcaStructure a limited, non-exclusive license to process, store, analyze, and display that information solely for the purpose of providing and improving the Services.",
    ],
  },
  {
    title: "7. Public Academic Information",
    paragraphs: [
      "GradPath contains educational information derived from publicly available sources, including degree requirements, course catalogs, transfer pathways, articulation information, and institutional policies. Because institutional information may change without notice, GradPath cannot guarantee that every academic requirement or policy is current at all times. Users remain responsible for confirming official institutional information with the appropriate institution.",
    ],
  },
  {
    title: "8. Acceptable Use",
    paragraphs: [
      "You agree not to: use GradPath for unlawful purposes; attempt unauthorized access to the Services; reverse engineer or decompile the platform; copy or scrape proprietary platform content; interfere with system security or infrastructure; upload malicious software; misrepresent your identity; attempt to disrupt other users' access; or use the Services for any commercial purpose without AcaStructure's written consent.",
      "We reserve the right to suspend or terminate accounts engaging in prohibited conduct without notice or refund.",
    ],
  },
  {
    title: "9. Intellectual Property",
    paragraphs: [
      "Except for content uploaded by users, all rights, title, and interest in the Services — including software, source code, user interface designs, databases, trademarks, logos, graphics, documentation, text, algorithms, and other proprietary materials — are owned by AcaStructure or its licensors and are protected by applicable intellectual property laws. Nothing in these Terms transfers ownership of AcaStructure's intellectual property to you.",
    ],
  },
  {
    title: "10. Third-Party Services",
    paragraphs: [
      "GradPath integrates with third-party services that are subject to their own terms and privacy policies, including Google Sign-In for authentication, Supabase for data storage, Vercel for application hosting, Anthropic for AI-assisted transcript processing, PostHog for analytics, and Stripe for payment processing where applicable.",
      "AcaStructure does not warrant the accuracy or completeness of any third-party data incorporated into the Services.",
    ],
  },
  {
    title: "11. Beta Program",
    paragraphs: [
      "GradPath is currently provided as a beta service. By participating in the beta program, you acknowledge and agree that features may change without notice, functionality may be incomplete, bugs and errors may occur, platform availability is not guaranteed, and certain features may be removed or modified.",
    ],
  },
  {
    title: "12. Future Paid Services",
    paragraphs: [
      "Certain features of GradPath may become subscription-based in the future. If paid services are introduced, pricing will be disclosed before purchase and payment processing will be handled by trusted third-party payment processors. Additional subscription terms may apply.",
    ],
  },
  {
    title: "13. Suspension and Termination",
    paragraphs: [
      "We reserve the right to suspend or terminate access to the Services if these Terms are violated, fraudulent or unlawful activity is suspected, platform security is threatened, or continued access would create legal or operational risk.",
      "Users may request deletion of their accounts in accordance with our Privacy Policy. Termination of your account does not affect any rights or obligations that accrued prior to termination.",
    ],
  },
  {
    title: "14. Disclaimer of Warranties",
    highlight: true,
    paragraphs: [
      "THE SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE.\" TO THE MAXIMUM EXTENT PERMITTED BY LAW, ACASTRUCTURE DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, AND AVAILABILITY. WE DO NOT WARRANT THAT THE SERVICES WILL BE ERROR-FREE, UNINTERRUPTED, OR COMPLETELY ACCURATE.",
    ],
  },
  {
    title: "15. Limitation of Liability",
    highlight: true,
    paragraphs: [
      "TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ACASTRUCTURE, ITS AFFILIATES, OFFICERS, EMPLOYEES, CONTRACTORS, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES, INCLUDING CLAIMS RELATING TO EDUCATIONAL DECISIONS, TRANSFER DECISIONS, COURSE SELECTIONS, DELAYED GRADUATION, LOSS OF DATA, OR OTHER ACADEMIC OR FINANCIAL CONSEQUENCES.",
      "AcaStructure's total aggregate liability to you for any claims arising from or related to these Terms or the Services shall not exceed the greater of (a) the total amount you paid to AcaStructure in the twelve months preceding the claim, or (b) $12.00 USD.",
    ],
  },
  {
    title: "16. Indemnification",
    paragraphs: [
      "You agree to defend, indemnify, and hold harmless AcaStructure LLC and its members, officers, employees, contractors, and agents from any claims, damages, liabilities, losses, and expenses (including reasonable attorneys' fees) arising from your use of the Services, your violation of these Terms, or your violation of applicable law or the rights of another person.",
    ],
  },
  {
    title: "17. Force Majeure",
    paragraphs: [
      "AcaStructure shall not be liable for any delay or failure to perform its obligations under these Terms arising from causes beyond its reasonable control, including but not limited to acts of God, natural disasters, pandemics, power outages, internet service disruptions, third-party service failures, cyberattacks, or government actions.",
    ],
  },
  {
    title: "18. Governing Law and Dispute Resolution",
    paragraphs: [
      "These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to conflict of law principles.",
      "Before initiating any legal action, you agree to first contact AcaStructure at admin@acastructure.com and provide a written description of the dispute. AcaStructure will have 30 days to attempt an informal resolution. If the dispute cannot be resolved informally, it shall be subject to the exclusive jurisdiction of the state and federal courts located in San Francisco County, California.",
    ],
  },
  {
    title: "19. Severability",
    paragraphs: [
      "If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be deemed modified to the minimum extent necessary to make it valid and enforceable.",
    ],
  },
  {
    title: "20. Waiver",
    paragraphs: [
      "AcaStructure's failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision. Any waiver must be in writing and signed by an authorized representative of AcaStructure.",
    ],
  },
  {
    title: "21. Entire Agreement",
    paragraphs: [
      "These Terms, together with the Privacy Policy and any other agreements expressly incorporated herein, constitute the entire agreement between you and AcaStructure regarding the use of the Services and supersede all prior agreements, understandings, and representations between the parties relating to the subject matter hereof.",
    ],
  },
  {
    title: "22. Modifications to the Service and Terms",
    paragraphs: [
      "We may update these Terms from time to time. If we make material changes, we will notify you via the email address associated with your account at least 30 days before the changes take effect. Your continued use of GradPath after the effective date constitutes acceptance of the revised Terms.",
    ],
  },
  {
    title: "23. Contact Us",
    paragraphs: [
      "If you have questions regarding these Terms, please contact us at admin@acastructure.com or visit acastructure.com.",
    ],
  },
];

export default function TermsOfService() {
  return (
    <div className="font-body">
      <section className="bg-navy text-cream">
        <div className="max-w-2xl mx-auto px-6 pt-14 pb-10 text-center">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-forest-light mb-4">
            GradPath
          </p>
          <h1 className="font-display font-medium text-3xl md:text-4xl text-cream">
            Terms of Service
          </h1>
          <p className="font-mono text-[11px] tracking-widest uppercase text-cream/50 mt-4">
            Version 1.0 Beta — AcaStructure LLC — Effective June 15, 2026
          </p>
        </div>
      </section>
      <section className="bg-cream text-charcoal">
        <div className="max-w-2xl mx-auto px-6 py-16">
          {sections.map((s) => (
            <div
              key={s.title}
              className={s.highlight ? "mb-12 border-l-2 border-red-500/60 pl-5" : "mb-12"}
            >
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
