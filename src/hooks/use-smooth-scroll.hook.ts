import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
};
