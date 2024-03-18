"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Sun } from "../../../public/icon/sun";
import { Moon } from "../../../public/icon/moon";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const toggleThem = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Button
      onClick={toggleThem}
      size="icon"
      variant="outline"
      className="rounded-full border-dashed border-2 transition-all bg-transparent"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-3xl  transition-all  " />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]   transition-all  " />
      )}
    </Button>
  );
}
