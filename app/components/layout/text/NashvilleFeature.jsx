"use client";

import { useId, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function NashvilleFeature({
  id,
  eyebrow = "Hometown Feel",
  headingTop = "Be Surrounded by the",
  headingBottom = "Nashville Sound",
  imageSrc = "https://images.unsplash.com/photo-1776005907600-8b327adc3366?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  imageAlt = "Neon honky-tonk signs on Broadway in downtown Nashville",
  ctaLabel = "Explore Nashville",
  ctaHref = "/local-scene",
  reverse = false,
  priority = false,
  className = "",
}) {
  const autoId = useId();
  const headingId = `${id || autoId}-heading`;
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(
    () => {
      const motion = gsap.matchMedia();

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        const copy = [
          eyebrowRef.current,
          headingRef.current,
          ctaRef.current,
        ].filter(Boolean);

        const timeline = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        });

        timeline
          .from(imageRef.current, {
            autoAlpha: 0,
            y: 28,
            duration: 1.0,
            clearProps: "all",
          })
          .from(
            copy,
            {
              autoAlpha: 0,
              y: 24,
              duration: 0.8,
              stagger: 0.12,
              clearProps: "all",
            },
            0.16,
          );
      });

      return () => motion.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id={id}
      ref={sectionRef}
      aria-labelledby={headingId}
      className={`overflow-hidden bg-[#f1f1f1] py-10 sm:py-14 lg:py-8 lg:pb-16 ${className}`}
    >
      <div className="mx-auto grid w-full max-w-[1470px] items-center gap-9 px-5 sm:gap-12 sm:px-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-14 lg:pl-14 lg:pr-6 xl:grid-cols-[minmax(0,490px)_minmax(0,1fr)] xl:gap-[clamp(5rem,8vw,7.75rem)] xl:pl-20 xl:pr-0">
        <div
          ref={imageRef}
          className={`relative aspect-[49/54] w-full max-w-[490px] overflow-hidden ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 490px, (max-width: 1279px) 42vw, 490px"
            className="object-cover"
          />
        </div>

        <div className={`min-w-0 ${reverse ? "lg:order-1" : "lg:order-2"}`}>
          {eyebrow && (
            <p
              ref={eyebrowRef}
              className="text-[clamp(1.05rem,1.7vw,1.625rem)] font-normal leading-tight tracking-[-0.025em] text-[#625a54] uppercase"
            >
              {eyebrow}
            </p>
          )}

          <h2
            ref={headingRef}
            id={headingId}
            className="mt-1 font-[Georgia,'Times_New_Roman',serif] text-[clamp(2.75rem,5.1vw,4.5rem)] font-normal leading-[1.23] tracking-[-0.055em] text-[#625a54] uppercase lg:text-[clamp(3rem,4.65vw,4.5rem)]"
          >
            <span className="block">{headingTop}</span>
            {headingBottom && <span className="block">{headingBottom}</span>}
          </h2>

          {ctaHref && ctaLabel && (
            <Link
              ref={ctaRef}
              href={ctaHref}
              className="mt-6 inline-flex min-h-16 w-full max-w-[348px] items-center justify-center border border-[#99948e] px-6 py-4 text-center text-[1rem] font-normal leading-snug text-[#101010] uppercase transition-colors duration-300 hover:bg-[#625a54] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#625a54] motion-reduce:transition-none sm:w-[348px] lg:min-h-[88px] lg:text-[1.125rem]"
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
