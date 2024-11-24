"use client";

import { useState, useEffect, useCallback } from "react";

const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scrollPosition;
};

const useValuePassedThreshold = (threshold: number): boolean => {
  const scrollPosition = useScrollPosition();
  const [passedThreshold, setPassedThreshold] = useState(false);

  useEffect(() => {
    setPassedThreshold(scrollPosition >= threshold);
  }, [scrollPosition, threshold]);

  return passedThreshold;
};

export default useValuePassedThreshold;
