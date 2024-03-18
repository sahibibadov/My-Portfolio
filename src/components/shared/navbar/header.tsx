"use client";

import useValuePassedThreshold from "@/hook/useScrollPosition";
import { cn } from "@/lib/utils";

const Header = ({ children }: { children: React.ReactNode }) => {
  const scrollPosition = useValuePassedThreshold(80);

  return (
    <header
      className={cn(
        "sticky transition-all top-0 z-50 h-14  dark:shadow-white/10  flex items-center",
        {
          "shadow-md  backdrop-blur-lg": scrollPosition,
        }
      )}
    >
      {children}
    </header>
  );
};

export default Header;
