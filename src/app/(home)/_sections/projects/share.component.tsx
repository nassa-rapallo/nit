import { ProjectShare } from "@/data/projects.data";
import { Instagram, Globe, Album } from "lucide-react";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const size = 22;

type ShareButtonProps = {
  href: string;
} & PropsWithChildren;

const ShareButton = ({ href, children }: ShareButtonProps) => (
  <motion.a whileHover={{ scale: 1.2 }} href={href} className="cursor-pointer">
    {children}
  </motion.a>
);

export const Share = ({ share }: { share: Partial<ProjectShare> }) => {
  return (
    <div className="flex gap-2 text-nassa-800 ">
      {share.external && (
        <ShareButton href={share.external}>
          <Globe size={size} />
        </ShareButton>
      )}
      {share.album && (
        <ShareButton href={share.album}>
          <Album size={size} />
        </ShareButton>
      )}
      {share.instagram && (
        <ShareButton href={share.instagram}>
          <Instagram size={size} />
        </ShareButton>
      )}
    </div>
  );
};
