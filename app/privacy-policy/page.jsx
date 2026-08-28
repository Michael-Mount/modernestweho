import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | The Mondernest at WeHo",
  description:
    "Read The Mondernest at WeHo privacy policy and learn how information may be collected, used, shared, and protected when you visit our website or make a reservation.",
  robots: {
    index: true,
    follow: true,
  },
};

const privacySections = [
  {
    title: "Information We May Collect",
    content: [
      "We may collect information that you provide directly to us, including your name, email address, telephone number, mailing address, reservation details, stay preferences, group-booking information, and other information you choose to submit.",
      "When you use our website, certain technical information may also be collected automatically, such as browser type, device type, IP address, referring pages, pages visited, general location information, and interaction data.",
    ],
  },
  {
    title: "How We May Use Information",
    content: [
      "Information may be used to respond to inquiries, manage reservations, provide guest services, communicate about a stay, process requests, improve our website and services, maintain security, and meet legal or operational requirements.",
      "Where permitted, we may also use contact information to send property news, offers, event information, or other marketing communications. You may opt out of marketing emails using the unsubscribe option provided in those messages.",
    ],
  },
  {
    title: "Reservations & Payment Information",
    content: [
      "Reservations and payments may be processed through third-party booking, property-management, or payment providers. Those providers may collect payment card details and other information needed to complete a transaction.",
      "We encourage you to review the privacy practices of any third-party service used during the booking or payment process.",
    ],
  },
  {
    title: "Cookies & Similar Technologies",
    content: [
      "Our website may use cookies, pixels, analytics tools, local storage, and similar technologies to support website functionality, remember preferences, understand website usage, measure performance, and improve our digital experience.",
      "Your browser may allow you to block or delete cookies. Disabling certain cookies may affect how some website features operate.",
    ],
  },
  {
    title: "Analytics & Advertising",
    content: [
      "We may use analytics services to better understand how visitors use our website. Depending on the tools enabled, certain third-party advertising or measurement providers may also receive information about website activity.",
      "Any analytics, advertising, or marketing technologies used on the live website should be reflected accurately in the final version of this policy.",
    ],
  },
  {
    title: "How Information May Be Shared",
    content: [
      "We may share information with service providers that support our operations, such as hotel management providers, booking systems, payment processors, website providers, email platforms, analytics providers, and other vendors performing services on our behalf.",
      "Information may also be disclosed when required by law, in connection with a legal request, to protect the rights or safety of guests and others, or as part of a business transaction such as a sale, financing, reorganization, or transfer of property operations.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We may retain information for as long as reasonably necessary to provide services, maintain business and reservation records, comply with legal obligations, resolve disputes, enforce agreements, and support legitimate operational needs.",
      "Retention periods may vary depending on the type of information and the reason it was collected.",
    ],
  },
  {
    title: "Your Privacy Choices",
    content: [
      "Depending on where you live and the laws that apply, you may have rights relating to your personal information, which may include requesting access, correction, deletion, or additional information about certain data practices.",
      "You may also unsubscribe from promotional emails at any time. Requests concerning personal information can be submitted through our contact page.",
    ],
  },
  {
    title: "Security",
    content: [
      "We use reasonable administrative, technical, and organizational measures intended to protect personal information. However, no website, network, storage system, or electronic transmission can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Our website and accommodations are not directed toward children for the purpose of collecting personal information online. We do not knowingly seek to collect personal information directly from children in violation of applicable law.",
    ],
  },
  {
    title: "Third-Party Websites",
    content: [
      "Our website may contain links to websites or services operated by third parties. We are not responsible for the privacy, security, or content practices of websites that we do not operate.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, services, technology, or legal requirements. When changes are made, the updated policy may be posted on this page with a revised effective date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#f3f1ee] text-[#6b6058]">
      {/* PAGE HEADER */}
      <section
        aria-labelledby="privacy-title"
        className="border-b border-[#6b6058]/25 px-5 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-16 lg:pb-20 lg:pt-32 xl:px-24"
      >
        <div className="mx-auto max-w-[1280px]">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.32em] text-[#81756d] sm:text-xs">
            The Mondernest at WeHo
          </p>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <h1
              id="privacy-title"
              className="max-w-4xl font-serif text-[clamp(3.2rem,7vw,7rem)] font-normal uppercase leading-[0.92] tracking-[-0.035em]"
            >
              Privacy Policy
            </h1>

            <p className="max-w-xl text-sm leading-7 text-[#756a62] sm:text-base sm:leading-8">
              This policy explains the types of information that may be
              collected when you visit our website, contact us, or interact with
              our reservation services.
            </p>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-28 xl:px-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">
          <aside className="lg:sticky lg:top-10 lg:self-start">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#81756d]">
              Privacy at a glance
            </p>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#786d65]">
              We believe privacy information should be understandable and easy
              to find. This page summarizes the general practices that may apply
              to this website and guest interactions.
            </p>

            <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-[#91857c]">
              Effective date: August 2026
            </p>
          </aside>

          <div>
            <section
              aria-labelledby="privacy-introduction"
              className="border-y border-[#6b6058]/25 py-9 sm:py-10"
            >
              <h2
                id="privacy-introduction"
                className="font-serif text-2xl uppercase leading-tight sm:text-3xl"
              >
                Introduction
              </h2>

              <div className="mt-5 max-w-3xl space-y-4 text-sm leading-7 text-[#786d65] sm:text-[15px] sm:leading-8">
                <p>
                  This Privacy Policy describes general practices concerning
                  information associated with The Mondernest at WeHo website,
                  guest inquiries, and related hospitality services.
                </p>
                <p>
                  This is placeholder policy language for design and development
                  purposes. Before publishing, the final policy should be
                  reviewed and updated to accurately reflect the property's
                  actual technology, vendors, booking systems, marketing tools,
                  and applicable legal requirements.
                </p>
              </div>
            </section>

            {privacySections.map((section, index) => (
              <section
                key={section.title}
                aria-labelledby={`privacy-section-${index}`}
                className="grid gap-5 border-b border-[#6b6058]/25 py-9 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-8 sm:py-10"
              >
                <p
                  aria-hidden="true"
                  className="font-serif text-xl text-[#91857c]"
                >
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div>
                  <h2
                    id={`privacy-section-${index}`}
                    className="font-serif text-2xl uppercase leading-tight sm:text-3xl"
                  >
                    {section.title}
                  </h2>

                  <div className="mt-5 max-w-3xl space-y-4 text-sm leading-7 text-[#786d65] sm:text-[15px] sm:leading-8">
                    {section.content.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </section>
            ))}

            <section
              aria-labelledby="privacy-contact"
              className="mt-14 bg-[#665b53] px-6 py-9 text-white sm:px-9 sm:py-10"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/65">
                Privacy questions
              </p>

              <h2
                id="privacy-contact"
                className="mt-4 max-w-2xl font-serif text-3xl uppercase leading-tight sm:text-4xl"
              >
                Questions about your information?
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-[15px]">
                Contact our team if you have questions about this policy or
                would like to submit a privacy-related request.
              </p>

              <Link
                href="/contact-us"
                className="mt-7 inline-flex min-h-11 items-center justify-center border border-white/60 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-[#665b53] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#665b53]"
              >
                Contact Us
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
