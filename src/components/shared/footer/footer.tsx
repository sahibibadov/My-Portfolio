"use client";
import Container from "@/components/shared/container";
import SocialIcons from "@/components/shared/social-icons";
import FramerComponent from "@/components/shared/motion-element/framer-component";

const Footer = () => {
  return (
    <FramerComponent blur="10px" delay={0.5} direction="bottom" duration={0.3}>
      <footer className="border-t mt-8 md:mt-12">
        <Container className="flex flex-col md:flex-row items-center text-center md:justify-between gap-1 p-3 md:p-6 backdrop-blur">
          <p className="text-sm md:text-base  tracking-normal">
            Copyright © {new Date().getFullYear()}. Made with by Sahib Ibadov
          </p>
          {/* social icons */}
          <SocialIcons />
        </Container>
      </footer>
    </FramerComponent>
  );
};

export default Footer;
