"use client";

import { useEffect, useState, useCallback, useMemo, useId } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useMousePosition } from "@/hook/useMousePosition";

const SPRING_CONFIG = { damping: 50, stiffness: 500 };
const TARGET_ELEMENTS = new Set(["h1", "h2", "h3", "button", "a", "input", "label"]);

const FramerCursor = () => {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const { x: mouseX, y: mouseY } = useMousePosition();
  const id = useId();

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const cursorXSpring = useSpring(cursorX, SPRING_CONFIG);
  const cursorYSpring = useSpring(cursorY, SPRING_CONFIG);

  // Mount kontrolü
  useEffect(() => {
    setMounted(true);
    cursorX.set(window.innerWidth / 2);
    cursorY.set(window.innerHeight / 2);
  }, [cursorX, cursorY]);

  const checkPointerState = useCallback((x: number, y: number) => {
    const elements = document.elementsFromPoint(x, y);
    return elements.some(
      (element) => TARGET_ELEMENTS.has(element.tagName.toLowerCase()) || element.hasAttribute("data-cursor"),
    );
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let frameId: number;

    const updateCursor = () => {
      cursorX.set(mouseX);
      cursorY.set(mouseY);
      setIsPointer(checkPointerState(mouseX, mouseY));
      frameId = requestAnimationFrame(updateCursor);
    };

    frameId = requestAnimationFrame(updateCursor);
    return () => cancelAnimationFrame(frameId);
  }, [cursorX, cursorY, mouseX, mouseY, checkPointerState, mounted]);

  const variants = useMemo(
    () => ({
      outer: {
        normal: {
          scale: 1,
          transition: { duration: 0.2 },
        },
        pointer: {
          scale: 2.5,
          transition: { duration: 0.2 },
        },
      },
      inner: {
        normal: {
          scale: 1,
          transition: { duration: 0.2 },
        },
        pointer: {
          scale: 0.6,
          transition: { duration: 0.2 },
        },
      },
    }),
    [],
  );

  const outerCursorStyle = useMemo(
    () => ({
      translateX: cursorXSpring,
      translateY: cursorYSpring,
      willChange: "transform",
    }),
    [cursorXSpring, cursorYSpring],
  );

  const innerCursorStyle = useMemo(
    () => ({
      translateX: mouseX,
      translateY: mouseY,
      willChange: "transform",
    }),
    [mouseX, mouseY],
  );

  // Client-side mounting kontrolü
  if (!mounted) return null;

  return (
    <div className="hidden sm:block">
      <AnimatePresence mode="sync">
        <motion.div
          key={`outer-${id}`}
          className="size-14 -top-7 -left-7 rounded-full border select-none pointer-events-none border-foreground/30 fixed z-[99999]"
          initial="normal"
          animate={isPointer ? "pointer" : "normal"}
          variants={variants.outer}
          style={outerCursorStyle}
        />
        <motion.div
          key={`inner-${id}`}
          className="mix-blend-difference size-4 -top-2 -left-2 select-none pointer-events-none rounded-full bg-white fixed z-[99999]"
          variants={variants.inner}
          initial="normal"
          animate={isPointer ? "pointer" : "normal"}
          style={innerCursorStyle}
        />
      </AnimatePresence>
    </div>
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
