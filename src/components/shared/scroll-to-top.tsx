"use client";

import useValuePassedThreshold from "@/hook/useScrollPosition";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ScrollTopIcon } from "../../../public/icon-static/scroll-top";

const AnimatedButton = motion.create(Button);

const ScrollToTop = () => {
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
        "fixed ~right-6/14 z-50 rounded-full  ~size-10/12 ~bottom-7/10  transition-all shadow-sm border-black/25 dark:border-border",
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
      <ScrollTopIcon className="~size-6/8" />
      <span className="sr-only">Scroll to top</span>
    </AnimatedButton>
  );
};

export default ScrollToTop;
