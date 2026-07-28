"use client";

import { useEffect } from "react";
import { useMotionValue, type MotionValue } from "motion/react";

export type MousePosition = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  /** 1 while the pointer is over the page, 0 once it leaves the window. */
  visible: MotionValue<number>;
};

/**
 * Tracks the pointer in motion values so consumers can bind it straight to a
 * transform. Motion writes those values to the DOM itself, which means moving
 * the mouse costs zero React renders.
 */
export function useMousePosition(enabled = true): MousePosition {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const visible = useMotionValue(0);

  useEffect(() => {
    if (!enabled) return;

    const track = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      visible.set(1);
    };
    const hide = () => visible.set(0);

    window.addEventListener("pointermove", track, { passive: true });
    document.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);

    return () => {
      window.removeEventListener("pointermove", track);
      document.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, [enabled, x, y, visible]);

  return { x, y, visible };
}
