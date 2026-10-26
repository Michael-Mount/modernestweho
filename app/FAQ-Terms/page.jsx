"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import HeroImage from "../components/layout/hero/HeroImage";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HERO_IMAGE =
  "https://sabal-house.b-cdn.net/Mondernest/WeHo/Amenities%20Renders/Modernest%20WeHo%20Lobby.jpg";

const faqItems = [
  {
    question: "What makes The Mondernest different from a traditional hotel?",
    answer:
      "The Mondernest is designed around apartment-style stays, pairing the privacy and space of a residence with the ease of a hospitality experience. Select accommodations may include multiple bedrooms, full kitchens, living areas, and other amenities suited for longer stays and group travel.",
  },
  {
    question: "Is there a minimum length of stay?",
    answer:
      "Minimum-stay requirements may vary by accommodation type, season, and availability. Your reservation details will show any stay-length requirements before booking is completed.",
  },
  {
    question: "Can I reserve multiple rooms or residences for a group?",
    answer:
      "Yes. Subject to availability, multiple accommodations may be reserved for couples, wedding groups, bachelorette weekends, family trips, small gatherings, and other group stays. Contact the property team for help coordinating nearby units.",
  },
  {
    question: "Are parties and small events allowed?",
    answer:
      "Small gatherings may be permitted in select accommodations, but occupancy limits, quiet hours, building rules, and event restrictions still apply. Any planned gathering should be disclosed in advance so the property team can confirm what is appropriate for the space.",
  },
  {
    question: "What time are check-in and check-out?",
    answer:
      "Standard check-in and check-out times will be included in your booking confirmation. Early arrival or late departure may be available by request and may be subject to availability or an additional fee.",
  },
  {
    question: "Is housekeeping included during longer stays?",
    answer:
      "Housekeeping frequency may vary based on the length and type of stay. Additional cleaning, linen service, or refresh service may be available by request. Exact service details will be provided with your reservation.",
  },
  {
    question: "Are the accommodations pet friendly?",
    answer:
      "Pet policies can vary by residence. Where pets are permitted, additional rules, deposits, cleaning fees, or size restrictions may apply. Please confirm the applicable pet policy before arrival.",
  },
  {
    question: "Is parking available?",
    answer:
      "Parking options depend on the property and reservation. If parking is included or available for an additional charge, those details will be shown during booking or provided by the property team.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellation terms vary by rate, stay length, season, and reservation type. The cancellation policy attached to your selected rate will apply and should be reviewed before completing a reservation.",
  },
  {
    question: "Who should I contact if I need help during my stay?",
    answer:
      "Guest support information will be included in your pre-arrival materials. For urgent property concerns, use the contact method provided in your reservation confirmation so the local team can assist as quickly as possible.",
  },
];

const termsSections = [
  {
    number: "01",
    title: "Reservations & Payment",
    body: "A reservation is considered confirmed once the required payment method, deposit, and guest information have been accepted. Rates, taxes, fees, deposits, and payment schedules may vary by reservation type. Guests are responsible for reviewing the total price and applicable policies before confirming a booking.",
  },
  {
    number: "02",
    title: "Cancellation & Changes",
    body: "Cancellation, modification, and no-show terms are determined by the rate selected at booking. Changes are subject to availability and may result in a rate adjustment. Certain promotional, advance-purchase, long-stay, or group reservations may be partially or fully non-refundable.",
  },
  {
    number: "03",
    title: "Occupancy & Registered Guests",
    body: "Only registered guests and approved visitors may occupy the accommodation. Maximum occupancy limits must be observed at all times. The primary guest is responsible for the conduct of all occupants and visitors associated with the reservation.",
  },
  {
    number: "04",
    title: "Gatherings, Events & Quiet Hours",
    body: "Unauthorized parties, commercial events, excessive noise, or activity that disrupts other guests or residents are prohibited. Approved gatherings must comply with stated occupancy limits, building policies, local laws, and any event-specific requirements communicated by the property.",
  },
  {
    number: "05",
    title: "Property Care & Damages",
    body: "Guests are expected to use the accommodation, furnishings, appliances, and common areas responsibly. The guest may be charged for damage, excessive cleaning, missing property, smoking remediation, or other costs resulting from misuse beyond ordinary wear.",
  },
  {
    number: "06",
    title: "Long-Stay Reservations",
    body: "Extended stays may be subject to additional payment schedules, housekeeping arrangements, inspections, utility terms, residency limitations, or other property-specific requirements. Long-stay terms provided with the reservation will supplement these general conditions.",
  },
  {
    number: "07",
    title: "House Rules & Safety",
    body: "Guests must comply with posted building rules, fire and life-safety requirements, access procedures, smoking policies, pet policies, and instructions from property management. Illegal activity or conduct that creates a safety risk may result in immediate termination of the stay.",
  },
  {
    number: "08",
    title: "Personal Property & Availability",
    body: "Guests are responsible for securing personal belongings during their stay. Property features, amenities, services, and availability may change due to maintenance, operational needs, weather, or circumstances outside the property's reasonable control.",
  },
];

function PlusIcon({ open }) {
  return (
    <span aria-hidden="true" className="relative block h-5 w-5 shrink-0">
      <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 bg-current" />
      <span
        className={`absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 ${
          open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
        }`}
      />
    </span>
  );
}

export default function Page() {
  const pageRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const revealItems = gsap.utils.toArray("[data-reveal]");

      revealItems.forEach((item) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray("[data-parallax]").forEach((item) => {
        gsap.fromTo(
          item,
          { yPercent: -4 },
          {
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );
      });
    },
    { scope: pageRef },
  );

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    section.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <main ref={pageRef} className="overflow-hidden bg-[#f3f1ee] text-[#6b6058]">
      <HeroImage
        image={HERO_IMAGE}
        alt="Warmly lit Nashville building and city scene"
      />

      {/* PAGE INTRO */}
      <section
        aria-labelledby="faq-page-title"
        className="px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-28 xl:px-24"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 border-b border-[#6b6058]/35 pb-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.6fr)] lg:items-end lg:gap-20 lg:pb-20">
            <div data-reveal>
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.32em] text-[#81756d] sm:text-xs">
                The Mondernest at WeHo
              </p>

              <h1
                id="faq-page-title"
                className="max-w-4xl font-serif text-[clamp(3.25rem,7vw,7.75rem)] font-normal uppercase leading-[0.9] tracking-[-0.035em] text-[#6b6058]"
              >
                Good to
                <br />
                know.
              </h1>
            </div>

            <div data-reveal className="max-w-xl lg:pb-2">
              <p className="text-sm leading-7 text-[#72675f] sm:text-base">
                Everything you need to know before settling in. Find quick
                answers about stays, group travel, amenities, and property
                policies, then review the general terms that apply to your
                reservation.
              </p>

              <nav
                aria-label="FAQ and terms page sections"
                className="mt-8 flex flex-wrap gap-x-7 gap-y-3"
              >
                <button
                  type="button"
                  onClick={() => scrollToSection("frequently-asked-questions")}
                  className="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#6b6058] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6b6058] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f3f1ee]"
                >
                  FAQ
                  <span
                    aria-hidden="true"
                    className="h-px w-7 bg-current transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("terms-and-conditions")}
                  className="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#6b6058] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6b6058] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f3f1ee]"
                >
                  Terms &amp; Conditions
                  <span
                    aria-hidden="true"
                    className="h-px w-7 bg-current transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="frequently-asked-questions"
        aria-labelledby="faq-heading"
        className="scroll-mt-8 px-5 pb-24 sm:px-8 sm:pb-28 lg:px-16 lg:pb-36 xl:px-24"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div data-reveal className="lg:sticky lg:top-12 lg:self-start">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.32em] text-[#81756d] sm:text-xs">
              Questions, answered
            </p>

            <h2
              id="faq-heading"
              className="max-w-md font-serif text-4xl font-normal uppercase leading-[1.02] tracking-[-0.02em] text-[#6b6058] sm:text-5xl lg:text-6xl"
            >
              Before
              <br />
              you arrive
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#776c64]">
              Still looking for something? Our team can help with questions
              specific to a stay, group booking, or extended reservation.
            </p>

            <Link
              href="/contact-us"
              className="mt-8 inline-flex min-h-11 items-center justify-center border border-[#6b6058] px-6 py-3 text-[10px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-[#6b6058] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6b6058] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f3f1ee]"
            >
              Contact us
            </Link>
          </div>

          <div data-reveal className="border-t border-[#6b6058]/35">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <article
                  key={item.question}
                  className="border-b border-[#6b6058]/35"
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenFaq((current) =>
                          current === index ? null : index,
                        )
                      }
                      className="flex w-full items-center justify-between gap-8 py-7 text-left text-[#6b6058] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#6b6058] sm:py-8"
                    >
                      <span className="pr-2 font-serif text-xl uppercase leading-snug sm:text-2xl">
                        {item.question}
                      </span>
                      <PlusIcon open={isOpen} />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="max-w-2xl pb-8 pr-8 text-sm leading-7 text-[#786d65] sm:text-base sm:leading-8">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDITORIAL BREAK */}
      <section
        aria-label="Extended stay message"
        className="relative min-h-[430px] overflow-hidden bg-[#62574f] text-white sm:min-h-[520px]"
      >
        <div
          data-parallax
          aria-hidden="true"
          className="absolute inset-[-8%] bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2200&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-[#514740]/70" />

        <div className="relative z-10 flex min-h-[430px] items-end px-5 py-14 sm:min-h-[520px] sm:px-8 sm:py-16 lg:px-16 xl:px-24">
          <div className="mx-auto w-full max-w-[1280px]">
            <div data-reveal className="max-w-4xl">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.34em] text-white/75 sm:text-xs">
                Stay a little longer
              </p>
              <p className="font-serif text-[clamp(2.5rem,5.5vw,5.75rem)] uppercase leading-[0.97] tracking-[-0.025em]">
                More room to arrive,
                <br />
                settle in, and stay awhile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TERMS */}
      <section
        id="terms-and-conditions"
        aria-labelledby="terms-heading"
        className="scroll-mt-8 bg-[#ece9e5] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-32 xl:px-24"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 border-b border-[#6b6058]/35 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:pb-16">
            <div data-reveal>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.32em] text-[#81756d] sm:text-xs">
                The fine print
              </p>
              <h2
                id="terms-heading"
                className="font-serif text-4xl font-normal uppercase leading-[1.02] tracking-[-0.02em] text-[#6b6058] sm:text-5xl lg:text-6xl"
              >
                Terms &
                <br />
                conditions
              </h2>
            </div>

            <div data-reveal className="max-w-2xl lg:pt-6">
              <p className="text-sm leading-7 text-[#756a62] sm:text-base sm:leading-8">
                These sample terms are provided as placeholder content for
                layout and development. Replace them with property-approved
                policies before publishing the page.
              </p>
              <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-[#8a7e75]">
                Last updated: Placeholder date
              </p>
            </div>
          </div>

          <div className="divide-y divide-[#6b6058]/25">
            {termsSections.map((section) => (
              <article
                key={section.number}
                data-reveal
                className="grid gap-5 py-9 sm:grid-cols-[80px_0.7fr_1.3fr] sm:gap-8 sm:py-10 lg:grid-cols-[110px_0.8fr_1.2fr] lg:gap-12"
              >
                <p
                  aria-hidden="true"
                  className="font-serif text-2xl text-[#8b8078]"
                >
                  {section.number}
                </p>

                <h3 className="font-serif text-2xl uppercase leading-tight text-[#6b6058] sm:text-3xl">
                  {section.title}
                </h3>

                <p className="max-w-2xl text-sm leading-7 text-[#786d65] sm:text-[15px] sm:leading-8">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-black px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-16 lg:py-28 xl:px-24">
        <div
          data-reveal
          className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-10 md:flex-row md:items-end"
        >
          <div className="max-w-3xl">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.34em] text-white/60 sm:text-xs">
              Need a little more clarity?
            </p>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,5.25rem)] uppercase leading-[0.98] tracking-[-0.025em]">
              Your stay should feel
              <br />
              simple from the start.
            </h2>
          </div>

          <Link
            href="/contact-us"
            className="inline-flex min-h-12 shrink-0 items-center justify-center border border-white/55 px-7 py-3 text-[10px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}
