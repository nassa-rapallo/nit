"use client";

import { motion } from "framer-motion";
import { initialVariants, loopingVariants } from "./variants";
import { Nassa } from "@/ui/nassa";

export const NassaContainer: React.FC = () => {
  return (
    <motion.div
      variants={initialVariants}
      initial="initial"
      animate="animate"
      className="absolute w-3/4 h-3/4 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  pointer-events-none"
    >
      <Nassa variants={loopingVariants} className="w-full h-full" />
    </motion.div>
  );
};
