"use client";

import { useRef } from "react";
import { NassaContainer } from "./nassa-container.components";
import { Tagline } from "./tagline.component";
import { useScroll, useTransform } from "framer-motion";

export const Hero: React.FC = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const parallaxTop = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div
      ref={container}
      className="w-full h-screen p-2 md:p-3 lg:p-12 relative bg-nassa-main"
    >
      <section className="relative flex flex-col p-8 max-w-full h-full rounded-huge text-white ">
        <NassaContainer y={parallaxTop} />
        <Tagline />
      </section>
    </div>
  );
};
