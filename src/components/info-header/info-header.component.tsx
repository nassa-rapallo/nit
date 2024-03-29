"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BookMarked, Phone, Users } from "lucide-react";
import { motion } from "framer-motion";

import { ROUTES } from "@/data";
import { RouteIcon } from "@/data/routes.data";
import { Bells } from "./bells.component";

const HeaderIcon = ({ icon }: { icon: RouteIcon }) => (
  <>
    {icon === "users" && <Users size={40} />}
    {icon === "book-marked" && <BookMarked size={40} />}
    {icon === "phone" && <Phone size={40} />}
  </>
);

export const InfoHeader = () => {
  const pathName = usePathname();

  const route = useMemo(
    () => ROUTES.find((route) => route.path === pathName),
    [pathName],
  );

  return (
    <section className="bg-nassa-600 pt-32 px-6 text-white text-4xl lg:text-6xl font-bold">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-[160px] flex items-center w-4/5 lg:w-3/4 mx-auto gap-4"
      >
        {route?.icon && <HeaderIcon icon={route.icon} />}
        <span>{route?.label || "Default"}</span>

        <Bells />
      </motion.div>
    </section>
  );
};
