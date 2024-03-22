"use client";

import { fadeIn, slideIn } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function MotionSection({
  children,
  className,
  direction = "up",
  type = "tween",
  delay = 0,
  duration = 0.5,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down";
  type?: "tween" | "spring";
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.section
      className={cn(className)}
      variants={fadeIn(direction, type, delay, duration)}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.section>
  );
}

export function MotionDivSlide({
  children,
  className,
  direction = "up",
  type = "tween",
  delay = 0,
  duration = 0.5,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  type?: "tween" | "spring";
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={slideIn(direction, type, delay, duration)}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionDivFade({
  children,
  className,
  direction = "up",
  type = "tween",
  delay = 0,
  duration = 0.5,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  type?: "tween" | "spring";
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={fadeIn(direction, type, delay, duration)}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
}
