"use client";
import { navlinks } from "@/constants";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNavLink = () => {
  const path = usePathname();

  return (
    <nav>
      <ul className="gap-4 hidden md:flex items-center">
        {navlinks.map((link, i) => (
          <li key={i}>
            <Link
              prefetch={false}
              href={link.path}
              className={cn("relative group  font-semibold text-foreground/65 hover:text-foreground transition-all", {
                "text-foreground": path === link.path,
              })}
            >
              <span className="relative z-10">{link.title}</span>

              {/* active tabda altdan xet */}
              {path === link.path && (
                <motion.span
                  layoutId="mix-underline"
                  className="absolute -inset-x-2 rounded-md  -inset-y-1 border-2 border-dashed border-foreground/50"
                  transition={{ type: "spring", duration: 1, bounce: 0.3 }}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavLink;
