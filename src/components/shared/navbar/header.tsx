"use client";

import useValuePassedThreshold from "@/hook/useScrollPosition";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Header = ({ children }: { children: React.ReactNode }) => {
  const scrollPosition = useValuePassedThreshold(80);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
      viewport={{ once: true }}
      className={cn(
        "sticky transition-all top-0 z-50 h-14  dark:shadow-white/10  flex items-center",
        {
          "shadow-md  backdrop-blur-lg": scrollPosition,
        }
      )}
    >
      {children}
    </motion.header>
  );
};

export default Header;
