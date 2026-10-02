"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Page Entrance Animation
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: 10 }, 
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );

    // Auto-animate all sections globally
    const sections = gsap.utils.toArray("main section");
    sections.forEach((sec: any) => {
      gsap.fromTo(sec, 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    });

    // Auto-animate grids globally
    const grids = gsap.utils.toArray("main .grid");
    grids.forEach((grid: any) => {
      if (grid.children.length > 1) {
        gsap.fromTo(grid.children, 
          { y: 30, opacity: 0 },
          {
            scrollTrigger: {
              trigger: grid,
              start: "top 85%",
            },
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          }
        );
      }
    });

  }, { scope: containerRef });

  return <div ref={containerRef}>{children}</div>;
}
