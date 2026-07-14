const sections = [
  {
    title: "1. Purpose of the Beta Program",
    paragraphs: [
      "The purpose of the Beta Program is to evaluate the performance, usability, reliability, and overall user experience of GradPath. Throughout the Beta Program, we may introduce new features, improve existing functionality, resolve bugs, gather feedback, and make changes intended to strengthen the platform before its general release.",
      "Your participation plays an important role in helping us build a better product for students.",
    ],
  },
  {
    title: "2. Beta Program Phases",
    paragraphs: [
      "The GradPath Beta Program may consist of one or more testing phases, including invite-only, limited-access, or open beta periods, as determined by AcaStructure. Your participation may continue across these phases unless your access is modified, suspended, or terminated in accordance with this Agreement or the GradPath Terms of Service.",
      "Because GradPath remains under active development, features, workflows, user interfaces, functionality, and available services may change, be added, or be removed at any time without prior notice.",
    ],
  },
  {
    title: "3. Beta Software Acknowledgement",
    paragraphs: [
      "By participating in the Beta Program, you understand and acknowledge that: GradPath is pre-release software; certain features may be incomplete; bugs, errors, interruptions, or unexpected behavior may occur; performance may vary during development; information presented within the platform may evolve as features improve; and certain functionality may be temporarily unavailable during maintenance or development.",
      "While we work diligently to improve GradPath, participation in the Beta Program is voluntary and provided on an \"as is\" basis.",
    ],
  },
  {
    title: "4. Important Educational Notice — Please Read Carefully",
    highlight: true,
    paragraphs: [
      "GRADPATH IS AN EDUCATIONAL PLANNING TOOL. GRADPATH IS NOT A COLLEGE, UNIVERSITY, SCHOOL, EDUCATIONAL INSTITUTION, OR ACADEMIC ADVISING SERVICE. GRADPATH IS NOT A SUBSTITUTE FOR YOUR ACADEMIC ADVISOR, COUNSELOR, REGISTRAR, ARTICULATION OFFICER, OR OTHER EDUCATIONAL PROFESSIONAL.",
      "Although GradPath is designed to help organize and visualize educational information, educational institutions remain solely responsible for determining degree requirements, graduation eligibility, transferability, course applicability, registration eligibility, financial aid decisions, and all other official academic determinations.",
      "YOU MUST VERIFY ALL IMPORTANT ACADEMIC DECISIONS WITH YOUR EDUCATIONAL INSTITUTION BEFORE TAKING ACTION. DO NOT RELY SOLELY ON INFORMATION DISPLAYED WITHIN GRADPATH WHEN MAKING IMPORTANT EDUCATIONAL DECISIONS.",
    ],
  },
  {
    title: "5. Your Responsibilities",
    paragraphs: [
      "As a participant in the Beta Program, you agree to: provide accurate account information; upload only information you are authorized to upload; use GradPath responsibly and in compliance with these Terms; report significant bugs or security concerns when practical; avoid intentionally interfering with the operation of the platform; and comply with the GradPath Terms of Service and Privacy Policy.",
    ],
  },
  {
    title: "6. Feedback",
    paragraphs: [
      "Your feedback is valuable and appreciated. You may voluntarily provide comments, suggestions, feature requests, ideas, usability observations, or bug reports. By submitting feedback, you grant AcaStructure a perpetual, worldwide, royalty-free license to use that feedback for the purpose of improving GradPath without compensation or obligation to you.",
      "This provision applies only to feedback regarding the Services and does not affect ownership of your personal information or academic records.",
    ],
  },
  {
    title: "7. Data During the Beta Program",
    paragraphs: [
      "Your use of GradPath remains governed by our Privacy Policy. During the Beta Program, we may collect technical, diagnostic, and usage information reasonably necessary to improve platform performance, resolve software bugs, improve transcript parsing, evaluate new functionality, and enhance the overall user experience. We do not sell your personal information.",
    ],
  },
  {
    title: "8. Service Availability",
    paragraphs: [
      "Because GradPath is under active development, continuous availability cannot be guaranteed. Planned or unplanned maintenance may occur, certain features may temporarily become unavailable, and platform performance may vary. Beta data may occasionally require migration or maintenance to support continued development. Whenever reasonably possible, we will work to minimize disruption.",
    ],
  },
  {
    title: "9. Communications",
    paragraphs: [
      "During the Beta Program, we may contact you regarding platform updates, feature releases, security notices, bug fixes, service interruptions, beta announcements, requests for feedback, future subscription information, and other important account-related communications. You may opt out of non-essential communications where applicable.",
    ],
  },
  {
    title: "10. Confidentiality",
    paragraphs: [
      "Throughout the Beta Program, you may encounter features, designs, workflows, or functionality that have not yet been publicly released. Unless otherwise permitted by applicable law or authorized in writing by AcaStructure, please do not intentionally distribute or publicly disclose unreleased product materials or confidential beta functionality before they are officially announced.",
    ],
  },
  {
    title: "11. Changes During the Beta Program",
    paragraphs: [
      "As GradPath continues to evolve, AcaStructure may add new features, modify existing features, improve workflows, update user interfaces, remove functionality, expand or reduce beta participation, transition participants between beta phases, or conclude the Beta Program at any time. These changes are part of the normal software development process.",
    ],
  },
  {
    title: "12. Ending Participation",
    paragraphs: [
      "Participation in the Beta Program is voluntary. You may stop participating at any time by discontinuing your use of GradPath and requesting account deletion if desired.",
      "AcaStructure may suspend or end your participation if you violate applicable agreements, continued participation presents security, legal, or operational concerns, the Beta Program concludes, or GradPath transitions to general commercial availability. Your information will continue to be handled in accordance with our Privacy Policy.",
    ],
  },
  {
    title: "13. Limitation of Liability",
    highlight: true,
    paragraphs: [
      "TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE BETA PROGRAM IS PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS. ACASTRUCTURE DOES NOT GUARANTEE UNINTERRUPTED AVAILABILITY, COMPLETE ACCURACY, OR SUITABILITY FOR EVERY EDUCATIONAL CIRCUMSTANCE.",
      "ACASTRUCTURE SHALL NOT BE RESPONSIBLE FOR ACADEMIC DECISIONS, EDUCATIONAL OUTCOMES, DELAYED GRADUATION, TRANSFER DECISIONS, COURSE SELECTIONS, REGISTRATION DECISIONS, FINANCIAL AID CONSEQUENCES, OR OTHER EDUCATIONAL OUTCOMES RESULTING FROM RELIANCE UPON GRADPATH WITHOUT INDEPENDENT VERIFICATION FROM THE APPROPRIATE EDUCATIONAL INSTITUTION OR ADVISOR.",
    ],
  },
  {
    title: "14. Severability",
    paragraphs: [
      "If any provision of this Agreement is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.",
    ],
  },
  {
    title: "15. Entire Agreement",
    paragraphs: [
      "This Agreement, together with the GradPath Terms of Service and Privacy Policy, constitutes the entire agreement between you and AcaStructure regarding your participation in the Beta Program and supersedes all prior agreements or understandings relating to the subject matter hereof.",
    ],
  },
  {
    title: "16. Contact Us",
    paragraphs: [
      "Questions regarding the GradPath Beta Program may be directed to admin@acastructure.com or visit acastructure.com.",
    ],
  },
];

export default function BetaProgramAgreement() {
  return (
    <div className="font-body">
      <section className="bg-navy text-cream">
        <div className="max-w-2xl mx-auto px-6 pt-14 pb-10 text-center">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-forest-light mb-4">
            GradPath
          </p>
          <h1 className="font-display font-medium text-3xl md:text-4xl text-cream">
            Beta Program Agreement
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
