"use client";
import { useEffect, useRef, useState } from "react";

export const useMousePosition = () => {
  const position = useRef({ x: 0, y: 0 });
  const [, setUpdate] = useState(0);

  useEffect(() => {
    let frameId: number;
    let isUpdating = false;

    const updateMousePosition = (ev: MouseEvent) => {
      position.current = { x: ev.clientX, y: ev.clientY };

      if (!isUpdating) {
        isUpdating = true;
        frameId = requestAnimationFrame(() => {
          setUpdate((prev) => prev + 1);
          isUpdating = false;
        });
      }
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return position.current;
};
