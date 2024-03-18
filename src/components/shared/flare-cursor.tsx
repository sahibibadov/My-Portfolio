"use client";

import React, { useState, useEffect } from "react";

const FlareCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target;

    setIsPointer(window.getComputedStyle(target).getPropertyValue("cursor") === "pointer");
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const flareSize = isPointer ? 0 : 30;

  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  return (
    <div
      className={`flare ${
        isPointer ? "pointer" : ""
      } border-2 border-black dark:border-border bg-foreground/40 dark:bg-background/40`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
      }}
    ></div>
  );
};

export default FlareCursor;

/* .flare {
  position: fixed;
  border: 2px solid #ffffff2b;
  border-radius: 50%;
  mix-blend-mode: screen;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 99999999 !important;
  backdrop-filter: blur(1px);
  background-color: #0000005e;
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
  cursor: none !important;
}

.flare.pointer {
  display: none;
  opacity: 0 !important;
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out, opacity 0.2s ease-in-out;
} */
