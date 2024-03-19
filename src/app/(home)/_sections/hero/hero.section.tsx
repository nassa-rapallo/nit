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
    <section
      ref={container}
      className="relative h-screen flex flex-col p-8 bg-nassa-main max-w-full text-white "
    >
      <NassaContainer y={parallaxTop} />
      <Tagline />
    </section>
  );
};
