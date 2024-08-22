"use client";
import React, { useRef } from "react";
import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";

interface AnimatedRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "right" | "bottom" | "left" | "top";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  inViewMargin?: number;
  blur?: string;
  enterAnimation?: string;
  exitAnimation?: string;
  variant?: Variants;
  layout?: boolean;
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
  enterAnimation = "visible",
  exitAnimation = "hidden",
  variant,
  layout = false,
  asChild = false,
}: AnimatedRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: `${inViewMargin}px` });

  const defaultVariants: Variants = {
    hidden: {
      translateX: direction === "left" ? -distance : direction === "right" ? distance : 0,
      translateY: direction === "top" ? -distance : direction === "bottom" ? distance : 0,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      translateX: 0,
      translateY: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "tween",
        duration,
        delay,
        ease: "easeIn",
      },
    },
  };

  const combinedVariants = variant ? variant : defaultVariants;

  const animationProps = {
    initial: exitAnimation,
    animate: inView ? enterAnimation : exitAnimation,
    exit: exitAnimation,
    layout: layout,
  };

  const Component = asChild ? motion(Slot) : motion.div;

  return (
    <AnimatePresence>
      <Component ref={ref} className={className} variants={combinedVariants} {...animationProps}>
        {children}
      </Component>
    </AnimatePresence>
  );
}
