import { Variants } from "framer-motion";

export const headerVariants: Variants = {
  initial: {
    opacity: 0,
    top: -80,
  },
  animate: {
    opacity: 1,
    top: 40,
    transition: {
      delay: 0.5,
      duration: 1,
      type: "spring",
    },
  },
  show: {
    opacity: 1,
    top: 20,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

export const logoVariants: Variants = {
  initial: { scale: 1 },
  animate: { scale: 0.8 },
};