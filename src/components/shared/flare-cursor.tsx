"use client";

import { useEffect, useState, FC } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMousePosition } from "@/hook/useMousePosition"; // Hook'u içe aktar

interface CursorProps {}

const FramerCursor: FC<CursorProps> = () => {
  const [isPointer, setIsPointer] = useState<boolean>(false);
  const { x: mouseX, y: mouseY } = useMousePosition();
  const cursorX = useMotionValue<number>(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const cursorY = useMotionValue<number>(typeof window !== "undefined" ? window.innerWidth / 2 : 0);

  const springConfig = { damping: 50, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Update cursor position based on mouse position
  useEffect(() => {
    cursorX.set(mouseX);
    cursorY.set(mouseY);

    // Check if the cursor is over specific elements
    const elements = document.elementsFromPoint(mouseX, mouseY);
    const isOverTargetElement = elements.some(
      (element) =>
        ["h1", "h2", "h3", "button", "a", "input", "label"].includes(element.tagName.toLowerCase()) ||
        element.hasAttribute("data-cursor"),
    );

    setIsPointer(isOverTargetElement);
  }, [mouseX, mouseY, cursorX, cursorY]);

  const variant: Variants = {
    normal: {
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
    pointer: {
      scale: 2.5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variant2: Variants = {
    normal: {
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
    pointer: {
      scale: 0.6,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className={cn(
          "size-14 -top-7 -left-7 rounded-full border select-none pointer-events-none border-foreground/30 fixed z-[99999]",
        )}
        initial="normal"
        animate={isPointer ? "pointer" : "normal"}
        transition={{ duration: 0.2 }}
        variants={variant}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
      <motion.div
        className={cn(
          "mix-blend-difference size-4 -top-2 -left-2 select-none pointer-events-none rounded-full bg-white  fixed z-[99999]",
        )}
        variants={variant2}
        initial="normal"
        animate={isPointer ? "pointer" : "normal"}
        transition={{ duration: 0.2 }}
        style={{
          translateX: mouseX,
          translateY: mouseY,
        }}
      />
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
