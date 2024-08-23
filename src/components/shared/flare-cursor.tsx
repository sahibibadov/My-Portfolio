"use client";

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

export default FramerCursor;
