"use client";

import { ReactLenis } from "lenis/react";
import type { LenisOptions } from "lenis";
import type { PropsWithChildren } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

// Module-level constants: Lenis tears down and rebuilds its instance whenever
// the `options` object changes identity, so these must not be built in render.
const SMOOTH_OPTIONS: LenisOptions = {
  lerp: 0.1,
  smoothWheel: true,
  wheelMultiplier: 1,
  // Native touch scrolling is both smoother and cheaper than syncing it to Lenis.
  syncTouch: false,
  touchMultiplier: 1.5,
};

// Honour the OS "reduce motion" setting: hand the wheel straight back to the
// browser instead of interpolating every scroll frame.
const REDUCED_OPTIONS: LenisOptions = {
  lerp: 1,
  smoothWheel: false,
  syncTouch: false,
};

export default function SmoothScrollProvider({ children }: PropsWithChildren) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <ReactLenis root options={prefersReducedMotion ? REDUCED_OPTIONS : SMOOTH_OPTIONS}>
      {children}
    </ReactLenis>
  );
}
