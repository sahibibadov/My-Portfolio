"use client";

import { useCallback, useSyncExternalStore } from "react";

// matchMedia lists are cheap but not free, and useSyncExternalStore calls
// getSnapshot on every render — so keep one list per query for the whole app.
const lists = new Map<string, MediaQueryList>();

const getList = (query: string) => {
  let list = lists.get(query);
  if (!list) {
    list = window.matchMedia(query);
    lists.set(query, list);
  }
  return list;
};

/**
 * Subscribes to a CSS media query. Returns `false` on the server and during the
 * first client render, so the markup React hydrates always matches the HTML.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const list = getList(query);
      list.addEventListener("change", onStoreChange);
      return () => list.removeEventListener("change", onStoreChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => getList(query).matches, [query]);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

/** True when the visitor asked the OS to cut animation down. */
export const usePrefersReducedMotion = () => useMediaQuery("(prefers-reduced-motion: reduce)");

/** True only on devices that actually draw a cursor — mouse or trackpad. */
export const useHasFinePointer = () => useMediaQuery("(hover: hover) and (pointer: fine)");
