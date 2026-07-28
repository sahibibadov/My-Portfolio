"use client";

import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { cn } from "@/lib/utils";

const Header = ({ children }: { children: React.ReactNode }) => {
  const isScrolled = useScrollThreshold(80);

  return (
    <header
      className={cn("sticky transition-all top-0 z-50 h-14  dark:shadow-white/10 ", {
        "shadow-md  backdrop-blur-lg": isScrolled,
      })}
    >
      {children}
    </header>
  );
};

export default Header;
