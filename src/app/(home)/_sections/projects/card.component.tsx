"use client";

import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
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
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: data.color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={
          "flex flex-col relative h-[500px] w-[1000px] rounded-xl p-12 origin-top"
        }
      >
        <h2 className="text-center m-0 text-xl">{data.title}</h2>
        <div className="flex h-full mt-12 gap-12">
          <div className="w-2/5 relative top-[10%]">
            <p>{data.description}</p>
            <span className="flex items-center gap-2">
              <a
                href={data.link}
                target="_blank"
                className="text-sm cursor-pointer"
              >
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="relative w-3/5 h-full rounded-xl overflow-hidden">
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
