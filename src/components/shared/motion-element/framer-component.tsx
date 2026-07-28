"use client";

import { useMemo, type ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import { Slot } from "@radix-ui/react-slot";

// Hoisted: building this inside render produced a brand new component type on
// every pass, which remounted the whole `asChild` subtree each time.
const MotionSlot = motion.create(Slot);

interface FramerComponentProps {
  children: ReactNode;
  className?: string;
  direction?: "top" | "bottom" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  inViewMargin?: number;
  /** CSS length for the reveal blur. Leave at "0px" to skip the filter entirely. */
  blur?: string;
  asChild?: boolean;
}

export default function FramerComponent({
  children,
  className = "",
  direction = "bottom",
  delay = 0.4,
  duration = 0.8,
  distance = 50,
  once = true,
  inViewMargin = -50,
  blur = "0px",
  asChild = false,
  ...props
}: FramerComponentProps) {
  const variants = useMemo<Variants>(() => {
    // `filter: blur(0px)` is not free — it still promotes the element to its own
    // filter layer. Only animate the filter when there is a blur to animate.
    const shouldBlur = parseFloat(blur) > 0;

    return {
      hidden: {
        x: direction === "left" ? -distance : direction === "right" ? distance : 0,
        y: direction === "top" ? -distance : direction === "bottom" ? distance : 0,
        opacity: 0,
        ...(shouldBlur && { filter: `blur(${blur})` }),
      },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        ...(shouldBlur && { filter: "blur(0px)" }),
        transition: {
          type: "spring",
          duration,
          delay,
          damping: 10,
          stiffness: 100,
          mass: 1,
        },
      },
    };
  }, [direction, distance, blur, duration, delay]);

  const viewport = useMemo(() => ({ once, margin: `${inViewMargin}px` }), [once, inViewMargin]);

  const Component = asChild ? MotionSlot : motion.div;

  // `whileInView` drives the animation from Motion's own IntersectionObserver,
  // so entering the viewport no longer costs a React render. The previous
  // `AnimatePresence` wrapper had nothing to animate out — its child never
  // unmounted — so it only added overhead.
  return (
    <Component
      {...props}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </Component>
  );
}
