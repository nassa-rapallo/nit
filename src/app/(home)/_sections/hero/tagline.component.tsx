"use client";
import { motion } from "framer-motion";
import { taglineVariants } from "./variants";
import { TypingText } from "@/components/typing-text";

export const Tagline = () => {
  return (
    <motion.div
      variants={taglineVariants}
      initial="initial"
      animate="animate"
      className="flex-1 flex flex-col justify-center items-center lg:w-3/4 mx-auto"
    >
      <TypingText
        text="Lə giovanə si devono sfogare"
        className="text-5xl md:text-7xl font-bold text-[#E5F5FF] text-center drop-shadow-md"
      />

      <h2 className="mt-2 text-lg text-center leading-none">
        La <strong>Nassa</strong> mette le basi della comunità e realizza le
        idee che ne vengono fuori.
      </h2>
    </motion.div>
  );
};
