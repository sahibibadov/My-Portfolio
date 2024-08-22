"use client";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navlinks } from "@/constants";
import SocialIcons from "../../social-icons";
import { MenuIcon } from "../../../../../public/icon-static/menu";
import FramerComponent from "../../motion-element/framer-component";

const MobileNavbar = () => {
  const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <MenuIcon className="size-6 rotate-180" />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-10 items-center justify-center">
        <ul className="flex flex-col gap-7 justify-center items-center">
          {navlinks.map((link) => (
            <FramerComponent
              key={link.id}
              blur="6px"
              direction="right"
              distance={50}
              duration={0.4}
              delay={0.4 * link.id}
            >
              <SheetClose asChild>
                <Link
                  href={link.path}
                  className={cn(
                    "relative  font-semibold text-foreground/45 hover:text-foreground transition-all text-4xl ",
                    {
                      "text-foreground": path === link.path,
                    },
                  )}
                >
                  {link.title}
                </Link>
              </SheetClose>
            </FramerComponent>
          ))}
        </ul>

        <FramerComponent blur="6px" direction="right" distance={50} duration={0.4} delay={0.4 * (navlinks.length + 1)}>
          <SocialIcons />
        </FramerComponent>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
