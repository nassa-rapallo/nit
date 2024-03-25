import { useLayoutEffect } from "react";

type Props = {
  locked: boolean;
};

export const useLockScroll = ({ locked }: Props) => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = locked ? "hidden" : originalStyle;
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [locked]);
};
