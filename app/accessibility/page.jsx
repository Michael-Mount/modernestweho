import Link from "next/link";

export const metadata = {
  title: "Accessibility | The Mondernest at WeHo",
  description:
    "Learn about The Mondernest at WeHo's commitment to providing an accessible digital experience for guests and visitors.",
  robots: {
    index: true,
    follow: true,
  },
};

const accessibilitySections = [
  {
    title: "Our Commitment",
    body: [
      "The Mondernest at WeHo is committed to providing a welcoming and accessible experience for all guests, including people with disabilities.",
      "We are continually working to improve the usability and accessibility of our website and digital experiences. Our goal is to make information about our accommodations, amenities, policies, and services easy to access and understand.",
    ],
  },
  {
    title: "Digital Accessibility",
    body: [
      "We aim to follow generally recognized accessibility practices and the Web Content Accessibility Guidelines (WCAG) where reasonably possible.",
      "Our ongoing accessibility efforts may include maintaining clear heading structures, keyboard-friendly navigation, visible focus states, alternative text for meaningful images, sufficient color contrast, descriptive links, form labels, and support for users who prefer reduced motion.",
    ],
  },
  {
    title: "Using This Website",
    body: [
      "This website is designed to work with modern browsers and common assistive technologies. Visitors should be able to navigate core content using a keyboard, zoom text using browser controls, and access meaningful page content with screen-reading software.",
      "Because technologies and accessibility standards continue to evolve, some areas of the website may not always perform equally across every device, browser, or assistive technology combination.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "Some features on this website may be provided by third-party services, such as booking platforms, maps, payment systems, embedded media, or other external tools.",
      "While we encourage our service providers to support accessible experiences, we may not control every aspect of third-party websites, applications, or embedded content.",
    ],
  },
  {
    title: "Property Accessibility",
    body: [
      "Accessibility features may vary by accommodation, room type, building area, or service. If you have questions about a specific accessibility need, please contact our team before booking so we can help identify an accommodation or service that may be appropriate for your stay.",
      "Please provide as much detail as you are comfortable sharing so our team can better understand your request.",
    ],
  },
  {
    title: "Feedback & Assistance",
    body: [
      "If you experience difficulty accessing information on this website, encounter an accessibility barrier, or need information provided in an alternative format, please contact us.",
      "We welcome accessibility feedback and will make reasonable efforts to provide the information or assistance you need.",
    ],
  },
];

export default function Page() {
  return (
    <main className="bg-[#f3f1ee] text-[#6b6058]">
      {/* PAGE HEADER */}
      <section
        aria-labelledby="accessibility-title"
        className="border-b border-[#6b6058]/25 px-5 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-16 lg:pb-20 lg:pt-32 xl:px-24"
      >
        <div className="mx-auto max-w-[1280px]">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.32em] text-[#81756d] sm:text-xs">
            The Mondernest at WeHo
          </p>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <h1
              id="accessibility-title"
              className="max-w-4xl font-serif text-[clamp(3.2rem,7vw,7rem)] font-normal uppercase leading-[0.92] tracking-[-0.035em]"
            >
              Accessibility
            </h1>

            <p className="max-w-xl text-sm leading-7 text-[#756a62] sm:text-base sm:leading-8">
              Our goal is to create a digital experience that is clear, usable,
              and welcoming for as many people as possible.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-28 xl:px-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">
          <aside className="lg:sticky lg:top-10 lg:self-start">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#81756d]">
              Accessibility Statement
            </p>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#786d65]">
              This page describes our general approach to website and property
              accessibility.
            </p>

            <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-[#91857c]">
              Last updated: August 2026
            </p>
          </aside>

          <div className="border-t border-[#6b6058]/25">
            {accessibilitySections.map((section, index) => (
              <section
                key={section.title}
                aria-labelledby={`accessibility-section-${index}`}
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
                    id={`accessibility-section-${index}`}
                    className="font-serif text-2xl uppercase leading-tight sm:text-3xl"
                  >
                    {section.title}
                  </h2>

                  <div className="mt-5 max-w-3xl space-y-4 text-sm leading-7 text-[#786d65] sm:text-[15px] sm:leading-8">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </section>
            ))}

            <section
              aria-labelledby="accessibility-contact"
              className="mt-14 bg-[#665b53] px-6 py-9 text-white sm:px-9 sm:py-10"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/65">
                We are here to help
              </p>

              <h2
                id="accessibility-contact"
                className="mt-4 max-w-2xl font-serif text-3xl uppercase leading-tight sm:text-4xl"
              >
                Need accessibility assistance?
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-[15px]">
                Contact our team with questions about the website, an upcoming
                stay, or accessibility features available at the property.
              </p>

              <Link
                href="/contact"
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
