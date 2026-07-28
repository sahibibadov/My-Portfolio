"use client";

import { MotionConfig } from "motion/react";
import type { PropsWithChildren } from "react";

/**
 * `reducedMotion="user"` makes every Motion animation in the tree respect the
 * OS "reduce motion" setting — transforms are skipped and only opacity is
 * animated — so individual components do not each have to check for it.
 */
export default function MotionProvider({ children }: PropsWithChildren) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
