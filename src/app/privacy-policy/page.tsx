import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Pro Araiza Remodeling & Painting",
  description:
    "How Pro Araiza Remodeling & Painting collects, uses, and protects the information you share with us. Plain language, no surprises.",
};

const sections = [
  {
    heading: "Information We Collect",
    paragraphs: [
      "When you contact us through this website, request an estimate, or call us, you may share information like your name, email address, phone number, property address, and details about the project you want done. We only ask for what we need to give you an accurate estimate and do the work right.",
      "When you browse this website, our systems and any analytics tools we use may automatically collect standard technical information such as your IP address, browser type, the pages you visit, and how you arrived at our site. This helps us understand what is useful to visitors and improve the site over time.",
    ],
  },
  {
    heading: "How We Use Your Information",
    list: [
      "To respond to your estimate requests and questions.",
      "To follow up with you about a project you asked us about.",
      "To schedule, perform, and warranty the work you hire us to do.",
      "To improve our website and the service we provide.",
      "To send you occasional updates or offers, but only if you have given us permission. You can opt out at any time.",
    ],
  },
  {
    heading: "Cookies & Analytics",
    paragraphs: [
      "This website may use cookies and similar technologies, including analytics tools like Google Analytics, to understand how visitors use the site. Cookies are small files stored on your device. You can control or disable cookies through your browser settings at any time, though some parts of the site may not work as well if you do.",
      "If we use an analytics tool that sets non-essential cookies, you will be given a choice about those cookies when you first visit.",
    ],
  },
  {
    heading: "How We Share Your Information",
    paragraphs: [
      "We do not sell your personal information to anyone. Ever.",
      "We only share information with trusted service providers who help us run our business, such as the company that hosts this website or the email service we use to reply to you. These providers are only allowed to use your information to perform services for us. We may also disclose information if we are required to by law.",
    ],
  },
  {
    heading: "How Long We Keep Your Information",
    paragraphs: [
      "We keep the information you share for as long as we need it to provide our services, maintain your project records and warranty, and meet our legal and tax obligations. When we no longer need it, we securely delete it.",
    ],
  },
  {
    heading: "Your Rights & Choices",
    list: [
      "You can ask us what personal information we have about you.",
      "You can ask us to correct or update your information.",
      "You can ask us to delete your information, subject to any records we are legally required to keep.",
      "You can opt out of marketing messages at any time.",
    ],
  },
  {
    heading: "Children's Privacy",
    paragraphs: [
      "This website is intended for adults seeking painting and remodeling services. We do not knowingly collect personal information from children under 13. If you believe a child has provided us information, please contact us and we will delete it.",
    ],
  },
  {
    heading: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time as our business or the law changes. When we do, we will update the date at the top of this page. We encourage you to review it periodically.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold backdrop-blur-sm">
              Privacy Policy
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Your Privacy Matters to Us
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              We keep this simple and honest, the same way we run our jobs. Here
              is exactly what information we collect, why we collect it, and the
              control you have over it.
            </p>
            <p className="mt-4 text-sm text-gray-500">Last updated: May 30, 2026</p>
          </div>
        </div>
      </section>

      {/* Policy body */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-bold tracking-tight text-brand-black">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((p, i) => (
                  <p
                    key={i}
                    className="mt-4 leading-relaxed text-brand-text-light"
                  >
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-brand-text-light marker:text-brand-gold">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Contact block */}
          <div className="mt-16 rounded-xl border border-gray-200 bg-brand-gray p-8">
            <h2 className="text-2xl font-bold tracking-tight text-brand-black">
              Questions or Requests?
            </h2>
            <p className="mt-4 leading-relaxed text-brand-text-light">
              If you have any questions about this policy, or you&apos;d like to
              access, update, or delete the information we have about you, reach
              out anytime. We&apos;ll take care of it.
            </p>
            <ul className="mt-6 space-y-2 text-brand-text">
              <li>
                <span className="font-semibold text-brand-black">Email:</span>{" "}
                <a
                  href="mailto:Proaraiza93@outlook.com"
                  className="text-brand-gold hover:underline"
                >
                  Proaraiza93@outlook.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-brand-black">Phone:</span>{" "}
                <a
                  href="tel:8434152437"
                  className="text-brand-gold hover:underline"
                >
                  (843) 415-2437
                </a>
              </li>
              <li>
                <span className="font-semibold text-brand-black">Mail:</span>{" "}
                Pro Araiza Remodeling &amp; Painting, 302A Bald Ridge Rd, Cumming,
                GA 30040
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block rounded-md bg-brand-gold px-8 py-3.5 text-sm font-semibold text-brand-black transition hover:bg-brand-copper"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
