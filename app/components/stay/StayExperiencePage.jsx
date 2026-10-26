"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function StayExperiencePage({ content }) {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            y: 28,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray("[data-stagger-group]").forEach((group) => {
        const items = group.querySelectorAll("[data-stagger-item]");

        gsap.fromTo(
          items,
          {
            autoAlpha: 0,
            y: 24,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: group,
              start: "top 84%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray("[data-parallax-image]").forEach((image) => {
        gsap.fromTo(
          image,
          {
            yPercent: -5,
            scale: 1.06,
          },
          {
            yPercent: 5,
            scale: 1.06,
            ease: "none",
            scrollTrigger: {
              trigger: image.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          },
        );
      });
    },
    { scope: pageRef },
  );

  return (
    <main ref={pageRef} className="overflow-hidden bg-[#f3f1ee] text-[#6b6058]">
      {/* HERO */}
      <section
        aria-labelledby="stay-hero-title"
        className="relative min-h-[76svh] overflow-hidden bg-[#342e2a] sm:min-h-[82svh] lg:min-h-[92svh]"
      >
        <img
          src={content.hero.image}
          alt={content.hero.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/65"
        />

        <div className="relative z-10 mx-auto flex min-h-[76svh] max-w-[1440px] items-end px-5 pb-12 pt-28 text-white sm:min-h-[82svh] sm:px-8 sm:pb-16 lg:min-h-[92svh] lg:px-16 lg:pb-20 xl:px-24">
          <div className="max-w-5xl">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.34em] text-white/80 sm:text-xs">
              {content.hero.eyebrow}
            </p>

            <h1
              id="stay-hero-title"
              className="max-w-5xl font-serif text-[clamp(3.25rem,7.5vw,8.5rem)] font-normal uppercase leading-[0.88] tracking-[-0.035em]"
            >
              {content.hero.title}
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
              {content.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-32 xl:px-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div data-reveal>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.32em] text-[#8b7e75] sm:text-xs">
              {content.intro.eyebrow}
            </p>

            <h2 className="max-w-xl font-serif text-[clamp(2.75rem,5vw,5.5rem)] uppercase leading-[0.98] tracking-[-0.025em]">
              {content.intro.title}
            </h2>
          </div>

          <div
            data-reveal
            className="max-w-2xl space-y-5 self-end text-sm leading-7 text-[#786d65] sm:text-base sm:leading-8"
          >
            {content.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="bg-[#e9e5e1] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-32 xl:px-24">
        <div className="mx-auto max-w-[1280px]">
          <div
            data-reveal
            className="grid gap-8 border-b border-[#6b6058]/30 pb-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24 lg:pb-16"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#8b7e75] sm:text-xs">
              {content.advantages.eyebrow}
            </p>

            <h2 className="max-w-4xl font-serif text-[clamp(2.5rem,4.7vw,5rem)] uppercase leading-[0.98] tracking-[-0.025em]">
              {content.advantages.title}
            </h2>
          </div>

          <div
            data-stagger-group
            className="grid border-b border-l border-[#6b6058]/25 sm:grid-cols-2"
          >
            {content.advantages.items.map((item) => (
              <article
                key={item.number}
                data-stagger-item
                className="min-h-[260px] border-r border-t border-[#6b6058]/25 p-6 sm:min-h-[300px] sm:p-8 lg:p-10"
              >
                <p
                  aria-hidden="true"
                  className="font-serif text-2xl text-[#91857c]"
                >
                  {item.number}
                </p>

                <h3 className="mt-10 max-w-sm font-serif text-2xl uppercase leading-tight sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-[#786d65]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL IMAGE + COPY */}
      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[460px] overflow-hidden bg-[#75685f] sm:min-h-[600px] lg:min-h-[760px]">
          <img
            data-parallax-image
            src={content.editorial.image}
            alt={content.editorial.imageAlt}
            loading="lazy"
            className="absolute inset-[-6%] h-[112%] w-[112%] object-cover"
          />
        </div>

        <div className="flex items-center bg-[#665b53] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-16 lg:py-24 xl:px-20">
          <div data-reveal className="max-w-xl">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.32em] text-white/60 sm:text-xs">
              {content.editorial.eyebrow}
            </p>

            <h2 className="font-serif text-[clamp(2.75rem,4.6vw,5rem)] uppercase leading-[0.98] tracking-[-0.025em]">
              {content.editorial.title}
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-7 text-white/78 sm:text-[15px] sm:leading-8">
              {content.editorial.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Explore Rooms Ghost Button */}
            <Link
              href="/rooms"
              className="
          group relative mt-10 inline-flex min-h-12
          items-center justify-center overflow-hidden
          border border-white/70 px-9 py-3
          text-xs font-medium uppercase tracking-[0.22em]
          text-white transition-colors duration-300
          hover:border-white hover:text-[#665b53]
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-white
        "
            >
              <span
                aria-hidden="true"
                className="
            absolute inset-0 origin-left scale-x-0
            bg-white transition-transform duration-300
            ease-out group-hover:scale-x-100
            group-focus-visible:scale-x-100
            motion-reduce:transition-none
          "
              />

              <span className="relative z-10">Explore Rooms</span>
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCE RHYTHM */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-32 xl:px-24">
        <div className="mx-auto max-w-[1280px]">
          <div
            data-reveal
            className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#8b7e75] sm:text-xs">
              {content.rhythm.eyebrow}
            </p>

            <h2 className="max-w-4xl font-serif text-[clamp(2.75rem,4.7vw,5rem)] uppercase leading-[0.98] tracking-[-0.025em]">
              {content.rhythm.title}
            </h2>
          </div>

          <ol
            data-stagger-group
            className="mt-14 border-t border-[#6b6058]/30 sm:mt-16"
          >
            {content.rhythm.items.map((item, index) => (
              <li
                key={item.time}
                data-stagger-item
                className="grid gap-4 border-b border-[#6b6058]/25 py-8 sm:grid-cols-[110px_0.8fr_1.2fr] sm:gap-8 sm:py-10 lg:grid-cols-[150px_0.75fr_1.25fr] lg:gap-12"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#8b7e75]">
                  {String(index + 1).padStart(2, "0")} / {item.time}
                </p>

                <h3 className="font-serif text-2xl uppercase leading-tight sm:text-3xl">
                  {item.title}
                </h3>

                <p className="max-w-xl text-sm leading-7 text-[#786d65] sm:text-[15px] sm:leading-8">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* AUDIENCE / USE CASES */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-32 xl:px-24">
        <div className="mx-auto max-w-[1280px]">
          <div data-reveal className="mx-auto max-w-4xl text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#8b7e75] sm:text-xs">
              {content.audience.eyebrow}
            </p>

            <h2 className="mt-5 font-serif text-[clamp(2.75rem,4.8vw,5rem)] uppercase leading-[0.98] tracking-[-0.025em]">
              {content.audience.title}
            </h2>
          </div>

          <div
            data-stagger-group
            className="mt-14 grid gap-px bg-[#6b6058]/25 sm:mt-16 md:grid-cols-3"
          >
            {content.audience.items.map((item) => (
              <article
                key={item.title}
                data-stagger-item
                className="bg-white p-7 sm:p-8 lg:min-h-[300px] lg:p-10"
              >
                <h3 className="font-serif text-2xl uppercase leading-tight sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-6 text-sm leading-7 text-[#786d65]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-[#8b8078]">
            {content.audience.note}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#171513] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-16 lg:py-28 xl:px-24">
        <div
          data-reveal
          className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20"
        >
          <div>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.34em] text-white/55 sm:text-xs">
              {content.cta.eyebrow}
            </p>

            <h2 className="max-w-4xl font-serif text-[clamp(2.8rem,5.2vw,5.75rem)] uppercase leading-[0.96] tracking-[-0.025em]">
              {content.cta.title}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              {content.cta.text}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href={content.cta.primary.href}
              className="inline-flex min-h-12 items-center justify-center bg-white px-7 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#171513] transition-colors hover:bg-[#e9e5e1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#171513]"
            >
              {content.cta.primary.label}
            </Link>

            <Link
              href={content.cta.secondary.href}
              className="inline-flex min-h-12 items-center justify-center border border-white/45 px-7 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[#171513] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#171513]"
            >
              {content.cta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
