"use client";
import { ReactLenis } from "lenis/react";
import { PropsWithChildren } from "react";

export default function SmoothScrollProvider({ children }: PropsWithChildren) {
  return <ReactLenis root>{children}</ReactLenis>;
}
