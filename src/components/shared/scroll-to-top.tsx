"use client";

import useValuePassedThreshold from "@/hook/useScrollPosition";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ScrollArrow from "../../../public/icon/scroltop.json";
import ScrollArrowDark from "../../../public/icon/scroltop-dark.json";
import AnimatedIcon from "./animated-icon";
import { useTheme } from "next-themes";

const AnimatedButton = motion(Button);

const ScrollToTop = () => {
  const { theme } = useTheme();
  const show = useValuePassedThreshold(150);

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <AnimatedButton
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className={cn(
        "fixed ~right-5/14 z-50 rounded-full  ~size-8/12 ~bottom-5/10  transition-all shadow-sm border-black/25 dark:border-border"
      )}
      aria-label="Scroll to top"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: show ? 1 : 0,
        opacity: show ? 1 : 0,
        y: show ? 0 : 150,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <AnimatedIcon
        animationData={theme === "dark" ? ScrollArrowDark : ScrollArrow}
        loop={true}
        className="~size-6/8"
      />
    </AnimatedButton>
  );
};

export default ScrollToTop;
