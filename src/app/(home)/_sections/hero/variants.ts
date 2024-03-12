import { Variants } from "framer-motion";

const TIMING = 1;

export const initialVariants: Variants = {
  initial: { opacity: 0.8 },
  animate: { opacity: 0.15, transition: { duration: TIMING } },
};

export const loopingVariants: Variants = {
  intiial: { opacity: 0.15, scale: 1 },
  animate: {
    opacity: 0.5,
    scale: 0.95,
    transition: {
      delay: TIMING,
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export const taglineVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: TIMING, type: "spring" } },
};
