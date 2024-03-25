import { PropsWithChildren } from "react";
import { Variants, motion } from "framer-motion";
import { cn } from "@/utils";
import { X } from "lucide-react";
import { useLockScroll } from "@/hooks";

type Props = {
  open: boolean;
  onClose: () => void;
  className?: string;
  title?: string;
} & PropsWithChildren;

const variants: Variants = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: "0",
    transition: { type: "linear" },
  },
};

export const Overlay = ({
  children,
  title,
  open,
  onClose,
  className,
}: Props) => {
  useLockScroll({ locked: open });

  return (
    <motion.section
      variants={variants}
      initial={"initial"}
      animate={open ? "animate" : "initial"}
      className={cn(
        "fixed inset-0 bg-nassa-900 z-50 flex flex-col gap-4 p-4 text-white",
        className,
      )}
    >
      <div className="w-full flex justify-between ">
        <h2>{title}</h2>
        <X onClick={onClose} />
      </div>
      {children}
    </motion.section>
  );
};
