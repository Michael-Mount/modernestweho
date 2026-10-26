"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ManagementCompanyCard() {
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 24,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <section className="w-full px-6 py-16 md:px-10 lg:px-16">
      <div
        ref={cardRef}
        className="mx-auto max-w-5xl border border-stone-200 bg-renew px-6 py-10 text-center shadow-sm backdrop-blur-sm md:px-12 md:py-14"
      >
        {/* Logo */}
        <div className="mx-auto mb-6 flex justify-center">
          <Image
            src="/VictoryLogo.png"
            alt="Victory Logo"
            width={240}
            height={120}
            className="h-auto w-40 object-contain opacity-90 md:w-80 md:-my-10"
          />
        </div>

        <p className="mb-3 text-xs uppercase tracking-[0.28em] text-white">
          Management by
        </p>

        <h2 className="font-serif text-3xl text-white md:text-4xl">
          Victory Hotels
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white md:text-base">
          The Modernest is proudly managed by Victory, a hospitality group known
          for thoughtful service, distinctive properties, and elevated guest
          experiences.
        </p>

        <Link
          href="https://victorypropertyinsights.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:text-white"
        >
          Visit Victory Hotels
          <span className="block h-px w-10 bg-white transition-all duration-300 group-hover:w-16 group-hover:bg-stone-500" />
        </Link>
      </div>
    </section>
  );
}
