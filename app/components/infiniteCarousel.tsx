"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const InfiniteCarousel = ({
  logos,
}: {
  logos: { src: StaticImageData; url: string }[];
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    function addAnimation() {
      if (!scroller) return;

      const innerScroller = scroller.querySelector(".scroller__inner");

      if (!innerScroller) return;

      if (innerScroller.getAttribute("data-clonned") === "true") return;
      const innerScrollerChildren = Array.from(innerScroller.children);

      innerScrollerChildren.forEach((item) => {
        const extendedLogos = item.cloneNode(true) as HTMLElement;

        innerScroller.appendChild(extendedLogos);
      });

      innerScroller.setAttribute("data-cloned", "true");
    }

    addAnimation();
  }, []);
  return (
    <div
      ref={scrollerRef}
      className="scroller max-w-[800ox] border border-red-500"
    >
      <div className="scroll__inner flex gap-2 bg-gray-300">
        {logos.map((logo, index) => {
          return (
            <Link key={index} href={logo.url} className="w-max p-1 bg-white">
              <Image src={logo.src} alt={`logo ${index + 1}`} height={100} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
