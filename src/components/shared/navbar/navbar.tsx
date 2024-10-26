import AnimatedIcon from "@/components/shared/animated-icon";
import { ThemeToggle } from "../toggle-theme";
import NavLink from "./nav-links";
import Container from "@/components/shared/container";
import Logo from "../../../../public/logo.json";
import Dark from "../../../../public/logo-dark.json";
import MobileNavbar from "./mobile/mobile-nav";
import Link from "next/link";
import FramerComponent from "../motion-element/framer-component";

const Navbar = () => {
  return (
    <FramerComponent
      direction="top"
      delay={0.3}
      distance={50}
      duration={0.7}
      inViewMargin={0}
      className="flex items-center w-full h-full"
    >
      <Container className="flex-1 flex items-center justify-between">
        <Link href="/">
          <AnimatedIcon
            loop={false}
            animationData={Logo}
            className="dark:hidden dark:text-white text-foreground w-[120px] aspect-video cursor-pointer"
          />
          <AnimatedIcon
            loop={false}
            animationData={Dark}
            className="hidden dark:block dark:text-white text-foreground w-[120px] aspect-video cursor-pointer"
          />
          <span className="sr-only">Sahib</span>
        </Link>

        <div className="flex items-center gap-4">
          <NavLink />
          <ThemeToggle />
          <MobileNavbar />
        </div>
      </Container>
    </FramerComponent>
  );
};

export default Navbar;
