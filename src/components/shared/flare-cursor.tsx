"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useMotionValue, useSpring } from "motion/react";
import { useHasFinePointer } from "@/hooks/use-media-query";
import { useMousePosition } from "@/hooks/use-mouse-position";

const TRAIL_SPRING = { damping: 50, stiffness: 500, mass: 0.6 };
const SCALE_TRANSITION = { duration: 0.2 };

const INTERACTIVE_SELECTOR = "a,button,input,textarea,select,label,summary,h1,h2,h3,[data-cursor],[role='button']";

const RING_SCALE = { idle: 1, hover: 2.5 };
const DOT_SCALE = { idle: 1, hover: 0.6 };

const FlareCursor = () => {
  const hasFinePointer = useHasFinePointer();
  const { x, y, visible } = useMousePosition(hasFinePointer);

  const trailX = useSpring(x, TRAIL_SPRING);
  const trailY = useSpring(y, TRAIL_SPRING);
  const ringScale = useMotionValue(RING_SCALE.idle);
  const dotScale = useMotionValue(DOT_SCALE.idle);
  const isHovering = useRef(false);

  useEffect(() => {
    if (!hasFinePointer) return;

    // Start the trailing ring wherever the pointer already is, otherwise it
    // springs in from the top-left corner on the very first move.
    const placeRing = (event: PointerEvent) => {
      trailX.jump(event.clientX);
      trailY.jump(event.clientY);
    };

    // `pointerover` only fires when the pointer crosses into a different
    // element, so hover detection costs nothing while the mouse just travels.
    // The old implementation ran `document.elementsFromPoint` every frame.
    const detectHover = (event: PointerEvent) => {
      const target = event.target;
      const hovering = target instanceof Element && target.closest(INTERACTIVE_SELECTOR) !== null;
      if (hovering === isHovering.current) return;

      isHovering.current = hovering;
      animate(ringScale, hovering ? RING_SCALE.hover : RING_SCALE.idle, SCALE_TRANSITION);
      animate(dotScale, hovering ? DOT_SCALE.hover : DOT_SCALE.idle, SCALE_TRANSITION);
    };

    window.addEventListener("pointermove", placeRing, { passive: true, once: true });
    document.addEventListener("pointerover", detectHover, { passive: true });

    return () => {
      window.removeEventListener("pointermove", placeRing);
      document.removeEventListener("pointerover", detectHover);
    };
  }, [hasFinePointer, trailX, trailY, ringScale, dotScale]);

  if (!hasFinePointer) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed -left-7 -top-7 z-[99999] size-14 rounded-full border border-foreground/30 pointer-events-none select-none"
        style={{ x: trailX, y: trailY, scale: ringScale, opacity: visible, willChange: "transform" }}
      />
      <motion.div
        aria-hidden
        className="fixed -left-2 -top-2 z-[99999] size-4 rounded-full bg-white mix-blend-difference pointer-events-none select-none"
        style={{ x, y, scale: dotScale, opacity: visible, willChange: "transform" }}
      />
    </>
  );
};

export default FlareCursor;
