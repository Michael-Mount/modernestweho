"use client";

import { useId, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const DEFAULT_AMENITIES = [
  {
    id: "private-living",
    title: "Private Apartment-Style Living",
    description:
      "Enjoy the comfort of a fully private residence with the polished feel of a boutique hospitality experience.",
  },
  {
    id: "designer-furnishing",
    title: "Luxuary Lounge",
    description:
      "Unwind, connect, and socialize in our inviting lounge, featuring comfortable seating, modern design, and a welcoming atmosphere for relaxation and gathering.",
  },
  {
    id: "equipped-kitchen",
    title: "Fully Equipped Kitchen",
    description:
      "Prepare meals, host casually, or settle in for an extended stay with a kitchen designed for real daily living.",
  },
  {
    id: "pool-cold-plunge",
    title: "Pool, Sauna, and Cold Plunge",
    description:
      "Unwind or recharge with an outdoor pool and refreshing cold plunge, a resort-inspired amenity designed for extended stays in Nashville.",
  },
  {
    id: "in-unit-laundry",
    title: "In-Unit Laundry",
    description:
      "A practical luxury that makes longer stays, weekend trips, and travel routines feel effortless.",
  },
  {
    id: "fitness-center",
    title: "24-Hour Fitness Center",
    description:
      "Stay on track with a fully equipped 24-hour fitness center, offering convenient workouts anytime during your extended stay in Nashville.",
  },
];

/**
 * Editorial, numbered amenities grid.
 *
 * @param {object} props
 * @param {string} [props.id] - Optional section anchor.
 * @param {string} [props.eyebrow] - Small label above the heading.
 * @param {string|string[]} [props.heading] - String to wrap naturally, or an
 *   array of lines to preserve intentional desktop-style line breaks.
 * @param {Array<{id?: string, number?: string, title: string, description: string}>} [props.amenities]
 * @param {boolean} [props.animate] - Enable/disable one-time GSAP entrance.
 * @param {string} [props.className] - Additional section classes.
 */
export default function AmenitiesSection({
  id,
  eyebrow = "Offered Amenities",
  heading = ["Thoughtfully Designed", "For Ease, Comfort, and", "Privacy"],
  amenities = DEFAULT_AMENITIES,
  animate = true,
  className = "",
}) {
  const reactId = useId();
  const headingId = id ? `${id}-heading` : reactId;
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(
    () => {
      if (!animate || !sectionRef.current) return;

      const intro = sectionRef.current.querySelectorAll(
        "[data-amenities-intro]",
      );
      const cards = gridRef.current?.querySelectorAll("[data-amenity-card]");

      const mm = gsap.matchMedia();

      mm.add(
        {
          allowMotion: "(prefers-reduced-motion: no-preference)",
          largerScreen: "(min-width: 768px)",
        },
        (context) => {
          if (!context.conditions.allowMotion) return;

          gsap.from(intro, {
            autoAlpha: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.12,
            clearProps: "all",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 84%",
              once: true,
            },
          });

          if (!cards?.length) return;

          if (context.conditions.largerScreen) {
            gsap.from(cards, {
              autoAlpha: 0,
              y: 24,
              duration: 0.65,
              stagger: 0.075,
              ease: "power2.out",
              clearProps: "all",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 86%",
                once: true,
              },
            });
          } else {
            // Individual mobile reveals avoid animating lower cards before
            // the visitor has actually scrolled down to them.
            cards.forEach((card) => {
              gsap.from(card, {
                autoAlpha: 0,
                y: 18,
                duration: 0.6,
                ease: "power2.out",
                clearProps: "all",
                scrollTrigger: {
                  trigger: card,
                  start: "top 90%",
                  once: true,
                },
              });
            });
          }
        },
      );

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [animate], revertOnUpdate: true },
  );

  const lines = Array.isArray(heading) ? heading : [heading];

  return (
    <section
      id={id}
      ref={sectionRef}
      aria-labelledby={headingId}
      className={`w-full overflow-hidden bg-[#f1f1f1] py-12 sm:py-14 lg:pt-[46px] lg:pb-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-[840px] px-5 sm:px-8 lg:px-0">
        <div data-amenities-intro>
          {eyebrow && (
            <p className="text-[14px] leading-6 tracking-[0.24em] text-[#655d56] uppercase sm:text-[16px]">
              {eyebrow}
            </p>
          )}
        </div>

        <h2
          id={headingId}
          data-amenities-intro
          className="mt-4 max-w-[830px] font-[Georgia,'Times_New_Roman',serif] text-[clamp(2.25rem,6vw,3.35rem)] font-normal leading-[1.23] tracking-[-0.025em] text-[#655d56] uppercase sm:tracking-[-0.015em] lg:text-[53px]"
        >
          {lines.map((line, index) => (
            <span key={`${index}-${line}`} className="block">
              {line}
            </span>
          ))}
        </h2>

        {amenities.length > 0 && (
          <ol
            ref={gridRef}
            className="mt-9 grid grid-cols-1 gap-px bg-[#e6e3e1] p-px shadow-[0_3px_5px_rgba(0,0,0,0.16)] sm:grid-cols-2 lg:ml-[60px] lg:w-[calc(100%-60px)] lg:max-w-[720px] lg:grid-cols-3"
          >
            {amenities.map((amenity, index) => (
              <li
                key={amenity.id ?? `${index}-${amenity.title}`}
                data-amenity-card
                className="grid min-w-0 grid-rows-[auto_auto_auto] gap-y-3 bg-white px-5 py-5 sm:min-h-[230px] lg:min-h-[240px] lg:grid-rows-[57px_minmax(88px,auto)_auto] lg:gap-y-0 lg:pt-4 lg:pb-3"
              >
                <span
                  aria-hidden="true"
                  className="font-[Georgia,'Times_New_Roman',serif] text-[37px] leading-[1.2] tracking-[-0.055em] text-[#655d56]"
                >
                  {amenity.number ?? String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="font-[Georgia,'Times_New_Roman',serif] text-[18px] font-normal leading-[1.52] tracking-[-0.035em] text-[#292522] uppercase">
                  {amenity.title}
                </h3>

                <p className="text-[14px] leading-[1.45] font-normal text-[#655d56] lg:text-[13px] lg:leading-[1.24]">
                  {amenity.description}
                </p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
