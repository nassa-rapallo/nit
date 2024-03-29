"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { LOGO_DIMENSIONS, ROUTES } from "@/data";

import { useIsIntersected } from "@/hooks";
import { cn } from "@/utils";
import { headerVariants, logoVariants } from "./variants";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { Overlay } from "../overlay";

export const Header = () => {
  const [headerVariant, setHeaderVariant] = useState<
    "animate" | "initial" | "show"
  >("animate");

  const [isHovered, setIsHovered] = useState(-1);

  const [openOverlay, setOpenOverlay] = useState(false);

  const { scrollY } = useScroll();
  const { isIntersected } = useIsIntersected({ threshold: 100 });

  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious();
    const variant =
      prev && scrollY.getPrevious() && current > prev && current > 120
        ? "initial"
        : "show";
    setHeaderVariant(variant);
  });

  const logo = useMemo(
    () => (isIntersected ? LOGO_DIMENSIONS.default : LOGO_DIMENSIONS.hero),
    [isIntersected],
  );

  const router = useRouter();
  const pathName = usePathname();
  const isNotHome = pathName !== "/";

  return (
    <>
      <motion.div
        variants={headerVariants(!isNotHome)}
        initial="initial"
        animate={headerVariant}
        className="fixed top-16 lg:top-10 w-[90%] lg:w-3/4 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.header
          className={cn(
            "py-2 px-4 lg:py-4 lg:px-6 rounded-3xl lg:rounded-full bg-nassa-gradient transition-all w-full flex item-center justify-between text-white font-medium",
            isIntersected
              ? "bg-nassa-gradient shadow-sm"
              : "bg-transparent shadow-none",
          )}
        >
          <motion.div
            variants={logoVariants}
            initial={isIntersected || isNotHome ? "animate" : "initial"}
            animate={isIntersected || isNotHome ? "animate" : "initial"}
            className="relative cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src={"/logo.png"}
              alt="Logo Nassa"
              width={logo.width}
              height={logo.height}
            />
          </motion.div>

          <motion.div
            onHoverEnd={() => setIsHovered(-1)}
            className="hidden md:flex items-center gap-8"
          >
            {ROUTES.filter((r) => !r.hidden).map((route, idx) => (
              <motion.div
                onHoverStart={() => setIsHovered(idx)}
                className="relative"
                layout
                key={`route-${route.path}`}
              >
                <Link href={route.path} className={"text-lg font-medium"}>
                  {route.label}
                </Link>
                {(isHovered === idx ||
                  (isHovered === -1 && pathName === route.path)) && (
                  <motion.span
                    layout
                    layoutId="header-underline"
                    className="absolute -top-2 -bottom-2 -left-2 -right-2 bg-black bg-opacity-20 -z-10 rounded-md cursor-pointer"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          <div className="lg:hidden flex items-center">
            <Menu onClick={() => setOpenOverlay(true)} />
          </div>
        </motion.header>
      </motion.div>
      <Overlay open={openOverlay} onClose={() => setOpenOverlay(false)}>
        <div className="flex flex-col gap-2 text-xl font-bold ">
          {ROUTES.filter((r) => !r.hidden).map((route) => (
            <Link key={`route-${route.path}`} href={route.path}>
              {route.label}
            </Link>
          ))}
        </div>
      </Overlay>
    </>
  );
};
