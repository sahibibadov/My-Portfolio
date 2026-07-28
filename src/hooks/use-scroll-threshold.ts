"use client";

import { useEffect, useState } from "react";

/**
 * True once the page is scrolled past `threshold` pixels.
 *
 * Reads are coalesced into one animation frame and the state only holds the
 * boolean, so scrolling re-renders the consumer exactly twice — when it crosses
 * the threshold in either direction — instead of on every scroll event.
 */
export function useScrollThreshold(threshold: number): boolean {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const read = () => {
      frameId = 0;
      setPassed(window.scrollY >= threshold);
    };

    const onScroll = () => {
      if (frameId) return;
      frameId = requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frameId);
    };
  }, [threshold]);

  return passed;
}
