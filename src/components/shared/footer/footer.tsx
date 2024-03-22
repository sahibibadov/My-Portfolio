import Container from "@/components/shared/container";

import SocialIcons from "../social-icons";

const Footer = () => {
  return (
    <footer className="border-t ~mt-8/12">
      <Container className="flex flex-col md:flex-row items-center md:justify-between gap-1 ~p-3/6 backdrop-blur">
        <p className="~text-sm/base  tracking-normal">
          Copyright © 2024. Made with by Sahib Ibadov
        </p>
        {/* social icons */}
        <SocialIcons />
      </Container>
    </footer>
  );
};

export default Footer;
