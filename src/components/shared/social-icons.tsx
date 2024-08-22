import Link from "next/link";

import { MdiLinkedin } from "../../../public/icon-static/linkedin";
import { MdiInstagram } from "../../../public/icon-static/instagram";
import { EpMessage } from "../../../public/icon-static/mail";
import { IconoirGithub } from "../../../public/icon-static/github";

const SocialIcons = () => {
  return (
    <ul className="flex items-center ~gap-2/6">
      <Link href="https://github.com/sahibibadov" target="_blank" className="hover:scale-125 transition-all">
        <IconoirGithub className="size-6" />
      </Link>
      <Link href="https://www.linkedin.com/in/sahibibadov/" target="_blank" className="hover:scale-125 transition-all">
        <MdiLinkedin className="size-6" />
      </Link>
      <Link href="https://www.instagram.com/sahib_ibadoff/" target="_blank" className="hover:scale-125 transition-all">
        <MdiInstagram className="size-6" />
      </Link>
      <Link href="mailto:ibadovsahib@bk.ru" className="hover:scale-125 transition-all">
        <EpMessage className="size-6" />
      </Link>
    </ul>
  );
};

export default SocialIcons;
