"use client";

import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

import { Project } from "@/data/projects.data";

type Props = {
  i: number;
  progress: MotionValue<number>;
  range: Array<number>;
  targetScale: number;
  data: Project;
};

// TODO: solve the use client error using this component inside the project.section one, which already is a client component
export const Card = ({ i, data, progress, range, targetScale }: Props) => {
  const container = useRef<null | HTMLDivElement>(null);
  const client = useRef<null | HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  useEffect(() => {
    console.log(
      "d",
      data.title,
      client && client.current && client.current.clientHeight,
    );
  }, [client, data]);

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      // style={{ backgroundColor: data.color }}
      className="h-screen flex items-center justify-center sticky top-0 mx-4 lg:mx-0"
    >
      <motion.div
        ref={client}
        style={{
          backgroundColor: data.color,
          scale,
          top: `calc(-10vh + ${i * 20}px)`,
        }}
        className={
          "flex flex-col relative w-full h-[60vh] lg:h-[500px] lg:w-[1000px] rounded-3xl p-6 lg:p-12 origin-top"
        }
      >
        <h2 className="text-center m-0 text-3xl text-nassa-800 font-bold">
          {data.title}
        </h2>
        <div className="flex flex-col lg:flex-row h-full mt-4 lg:mt-12 gap-4 lg:gap-12">
          <div className="w-full lg:w-2/5 relative lg:top-[10%]">
            <p>{data.description}</p>
          </div>

          <div className="relative w-full lg:w-3/5 flex-1 flex items-center h-[200px] lg:h-full rounded-xl overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={data.image}
                alt="image"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
