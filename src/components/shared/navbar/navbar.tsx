import AnimatedIcon from "@/components/shared/animated-icon";
import { ThemeToggle } from "../toggle-theme";
import NavLink from "./nav-links";
import Container from "@/components/shared/container";
import Logo from "../../../../public/logo.json";
import Dark from "../../../../public/logo-dark.json";
import MobileNavbar from "./mobile/mobile-nav";

const Navbar = () => {
  return (
    <Container className="flex-1 flex items-center justify-between">
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

      <div className="flex items-center gap-4">
        <nav className="gap-4 hidden md:flex items-center">
          <NavLink />
        </nav>
        <ThemeToggle />
        <MobileNavbar />
      </div>
    </Container>
  );
};

export default Navbar;
