"use client";
import { useRef } from "react";

import { useScroll } from "framer-motion";
import { PROJECTS } from "@/data";

import { Card } from "./card.component";
import { useSmoothScroll } from "@/hooks";

export const Projects: React.FC = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useSmoothScroll();

  return (
    <section ref={container} className="h-screen flex flex-col relative">
      {PROJECTS.map((project, i) => (
        <Card
          key={`p_${i}`}
          i={i}
          progress={scrollYProgress}
          range={[i * 0.25, 1]}
          targetScale={1 - (PROJECTS.length - i) * 0.05}
          data={project}
        />
      ))}
    </section>
  );
};
