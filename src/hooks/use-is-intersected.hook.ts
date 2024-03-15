import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export type IsPast = {
  windowHeight: number;
  scrollY: number;
  threshold?: number;
};

export type Props = {
  threshold?: number;
};

const isPast = (args: IsPast) =>
  args.windowHeight < args.scrollY + (args.threshold || 100);

export const useIsIntersected = ({ threshold }: Props) => {
  const [isIntersected, setIsIntersected] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsIntersected(
      isPast({
        windowHeight: window.innerHeight,
        scrollY: latest,
        threshold,
      }),
    );
  });

  useEffect(() => {
    if (window) {
      setIsIntersected(
        isPast({
          windowHeight: window.innerHeight,
          scrollY: window.scrollY,
          threshold,
        }),
      );
    } else {
      setIsIntersected(false);
    }
  }, [threshold]);

  return { isIntersected };
};
