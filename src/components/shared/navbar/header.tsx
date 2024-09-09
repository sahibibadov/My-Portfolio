"use client";

import useValuePassedThreshold from "@/hook/useScrollPosition";
import { cn } from "@/lib/utils";
import FramerComponent from "../motion-element/framer-component";

const Header = ({ children }: { children: React.ReactNode }) => {
  const scrollPosition = useValuePassedThreshold(80);

  return (
    <FramerComponent
      blur="6px"
      direction="top"
      delay={0.6}
      distance={0}
      duration={0.7}
      inViewMargin={0}
      className={cn("sticky transition-all top-0 z-50 h-14  dark:shadow-white/10  flex items-center", {
        "shadow-md  backdrop-blur-lg": scrollPosition,
      })}
    >
      {children}
    </FramerComponent>
  );
};

export default Header;
