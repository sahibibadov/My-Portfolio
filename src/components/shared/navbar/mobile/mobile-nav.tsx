"use client";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navlinks } from "@/constants";
import { motion } from "framer-motion";
import SocialIcons from "../../social-icons";
import AnimatedIcon from "../../animated-icon";
import { useTheme } from "next-themes";
import Menu from "../../../../../public/icon/menu.json";
import MenuDark from "../../../../../public/icon/menu-dark.json";

const MotionLink = motion(Link);

const MobileNavbar = () => {
  const path = usePathname();
  const { theme } = useTheme();
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <AnimatedIcon
          animationData={theme === "dark" ? MenuDark : Menu}
          loop={true}
          className="size-8"
        />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-10 items-center justify-center">
        <ul className="flex flex-col gap-7 justify-center items-center">
          {navlinks.map((link) => (
            <SheetClose asChild key={link.id}>
              <MotionLink
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.4 * link.id,
                }}
                href={link.path}
                className={cn(
                  "relative  font-semibold text-foreground/65 hover:text-foreground transition-all text-4xl ",
                  {
                    "text-foreground": path === link.path,
                  }
                )}
              >
                {link.title}
              </MotionLink>
            </SheetClose>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.4 * (navlinks.length + 1),
            type: "spring",
            bounce: 0.2,
            stiffness: 100,
          }}
        >
          <SocialIcons />
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
