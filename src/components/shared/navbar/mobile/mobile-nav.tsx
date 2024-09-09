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
      <SheetContent className="flex flex-col gap-7  ">
        <ul className="flex flex-col gap-7 mt-10">
          {navlinks.map((link) => (
            <FramerComponent
              key={link.id}
              variant={{
                hidden: {
                  opacity: 0,
                  x: 100,
                  filter: "blur(6px)",
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                  transition: {
                    type: "spring",
                    duration: 0.4,
                    delay: 0.4 * link.id,
                    damping: 10,
                    stiffness: 100,
                    mass: 1,
                  },
                },
              }}
            >
              <SheetClose asChild>
                <Link
                  href={link.path}
                  className={cn(
                    "relative  font-semibold text-foreground/45 hover:text-foreground transition-all text-5xl ",
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

        <FramerComponent blur="6px" direction="right" distance={100} duration={0.4} delay={0.4 * (navlinks.length + 1)}>
          <SocialIcons />
        </FramerComponent>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
