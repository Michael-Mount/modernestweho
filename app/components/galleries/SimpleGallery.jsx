"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const defaultImages = [
  {
    src: "https://sabal-house.b-cdn.net/Mondernest/WeHo/Amenities%20Renders/Modernest%20WeHo%20Sauna%20Room.jpg",
    alt: "Modern luxury apartment living room",
  },
  {
    src: "https://sabal-house.b-cdn.net/Mondernest/WeHo/Amenities%20Renders/Modernest%20WeHo%20Co-Working.jpg",
    alt: "Elegant apartment bedroom with refined finishes",
  },
  {
    src: "https://sabal-house.b-cdn.net/Mondernest/WeHo/Amenities%20Renders/Modernest%20WeHo%20Pool.jpg",
    alt: "Luxury apartment kitchen with modern details",
  },
  {
    src: "https://sabal-house.b-cdn.net/Mondernest/WeHo/Interior%20Renders/26-1019%20-%20Mad%20Dog%20-%20Penthouse%20Unit%20500%20-%20Towards%20View.jpg",
    alt: "Nashville apartment interior with curated design",
  },
];

export default function SimpleGallery({
  eyebrow = "Gallery",
  title = "A closer look at modern luxury",
  description = "Explore the details, textures, and refined spaces that define The Modernest Collection.",
  images = defaultImages,
  buttonLabel = "View Gallery",
  buttonHref = "/gallery",
}) {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".gallery-text", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".gallery-image", {
        opacity: 0,
        y: 36,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 68%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-white px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="gallery-text mb-4 font-montserrat text-sm uppercase tracking-[0.35em] text-renew">
              {eyebrow}
            </p>

            <h5 className="gallery-text font-prata text-4xl uppercase leading-tight text-renew md:text-5xl">
              {title}
            </h5>
          </div>

          <div className="gallery-text max-w-md">
            <p className="font-montserrat text-sm leading-7 text-neutral-600 md:text-base">
              {description}
            </p>
          </div>
        </div>

        <div className="grid h-auto gap-4 md:grid-cols-4 md:grid-rows-[180px_180px] lg:grid-rows-[220px_220px]">
          <div className="gallery-image relative min-h-[320px] overflow-hidden md:col-span-2 md:row-span-2">
            <Image
              src={images[0]?.src}
              alt={images[0]?.alt || "Luxury apartment gallery image"}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="gallery-image relative min-h-[220px] overflow-hidden md:col-span-1 md:row-span-1">
            <Image
              src={images[1]?.src}
              alt={images[1]?.alt || "Luxury apartment gallery image"}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>

          <div className="gallery-image relative min-h-[220px] overflow-hidden md:col-span-1 md:row-span-2">
            <Image
              src={images[2]?.src}
              alt={images[2]?.alt || "Luxury apartment gallery image"}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>

          <div className="gallery-image relative min-h-[220px] overflow-hidden md:col-span-1 md:row-span-1">
            <Image
              src={images[3]?.src}
              alt={images[3]?.alt || "Luxury apartment gallery image"}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        </div>

        {buttonLabel && buttonHref && (
          <div className="gallery-text mt-10 flex justify-center">
            <Link
              href={buttonHref}
              className="border border-renew px-10 py-4 font-montserrat text-sm uppercase tracking-wide text-renew transition-colors duration-300 hover:bg-renew hover:text-white"
            >
              {buttonLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
