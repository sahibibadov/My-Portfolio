"use client";
import { useEffect } from "react";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;

  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);
  return <>{children}</>;
};

export default SmoothScroll;
