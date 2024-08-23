"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMousePosition } from "@/hook/useMousePosition"; // Hook'u içe aktar

interface CursorProps {}

const FramerCursor: React.FC<CursorProps> = () => {
  const [isPointer, setIsPointer] = useState<boolean>(false);
  const { x: mouseX, y: mouseY } = useMousePosition(); // Hook'u kullan
  const cursorX = useMotionValue<number>(-100);
  const cursorY = useMotionValue<number>(-100);

  const springConfig = { damping: 100, stiffness: 1000 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Update cursor position based on mouse position
  useEffect(() => {
    cursorX.set(mouseX - 16);
    cursorY.set(mouseY - 16);

    // Check if the cursor is over specific elements
    const elements = document.elementsFromPoint(mouseX, mouseY);
    const isOverTargetElement = elements.some(
      (element) =>
        ["h1", "h2", "h3", "button", "a", "input", "label"].includes(element.tagName.toLowerCase()) ||
        element.hasAttribute("data-cursor"),
    );

    setIsPointer(isOverTargetElement);
  }, [mouseX, mouseY, cursorX, cursorY]);

  const variants: Variants = {
    normal: {
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    pointer: {
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="pointer-events-none fixed z-[10001] hidden md:block"
        initial="normal"
        animate={isPointer ? "pointer" : "normal"}
        exit="normal"
        transition={{ duration: 0.2 }}
        variants={variants}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        <div
          className={cn(
            "mix-blend-mode-difference bg-blend-mode-difference size-9 rounded-full border border-white/30 backdrop-blur-sm",
          )}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default FramerCursor;

/*"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect, useCallback, useMemo } from "react";

const FramerCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const target = e.target as Element;
    const isTargetPointer = window.getComputedStyle(target).cursor === "pointer";
    
    setPosition({ x: e.clientX, y: e.clientY });
    setIsPointer(isTargetPointer);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const flareSize = isPointer ? 0 : 40;

  const cursorStyle = useMemo(() => ({
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: `${flareSize}px`,
    height: `${flareSize}px`,
    ...(isPointer ? { opacity: 0, pointerEvents: 'none' as const } : {}),
  }), [position.x, position.y, flareSize, isPointer]);

  const cursorClassName = cn(
    "fixed border-2 z-[100] border-black/10 dark:border-white/10 bg-transparent rounded-full mix-blend-normal pointer-events-none -translate-x-1/2 -translate-y-1/2 backdrop-filter backdrop-blur-[2px]  hidden md:block"
  );

  return (
    <div
      className={cursorClassName}
      style={cursorStyle}
    />
  );
};

export default FramerCursor;*/
