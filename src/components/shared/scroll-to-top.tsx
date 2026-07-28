"use client";

import { useCallback } from "react";
import { motion } from "motion/react";
import { useLenis } from "lenis/react";
import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollTopIcon } from "../../../public/icon-static/scroll-top";

const AnimatedButton = motion.create(Button);

const ScrollToTop = () => {
  const show = useScrollThreshold(150);
  const lenis = useLenis();

  const scrollToTop = useCallback(() => {
    // Lenis owns the scroll position while smooth scrolling is on; going through
    // `window.scrollTo` instead makes the two fight over the same frames.
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }, [lenis]);

  return (
    <AnimatedButton
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className={cn(
        "fixed right-6 md:right-14 z-50 rounded-full size-10 md:size-12 bottom-7 md:bottom-10 transition-all shadow-sm border-black/25 dark:border-border",
        // Scaled to 0 it is still clickable and focusable, so it would swallow
        // clicks in the bottom-right corner of every page.
        !show && "pointer-events-none",
      )}
      aria-label="Scroll to top"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: show ? 1 : 0,
        opacity: show ? 1 : 0,
        y: show ? 0 : 150,
        filter: show ? "blur(0px)" : "blur(10px)",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <ScrollTopIcon className="size-6 md:size-8" />
      <span className="sr-only">Scroll to top</span>
    </AnimatedButton>
  );
};

export default ScrollToTop;
