import { cn } from "@/utils";
import { LegacyRef, PropsWithChildren, forwardRef } from "react";

type Props = {
  className?: string;
} & PropsWithChildren;

export const Section = forwardRef(function MyInput(
  props: Props,
  ref: undefined | LegacyRef<HTMLElement>,
) {
  return (
    <section
      ref={ref}
      className={cn(
        "relative h-screen w-screen flex flex-col",
        props.className,
      )}
    >
      {props.children}
    </section>
  );
});
