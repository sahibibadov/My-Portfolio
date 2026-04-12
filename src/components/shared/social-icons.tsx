import Link from "next/link";
import socialsData from "../../data/socials.json";

import { MdiLinkedin } from "../../../public/icon-static/linkedin";
import { MdiInstagram } from "../../../public/icon-static/instagram";
import { EpMessage } from "../../../public/icon-static/mail";
import { IconoirGithub } from "../../../public/icon-static/github";

const iconMap: Record<string, React.ElementType> = {
  IconoirGithub,
  MdiLinkedin,
  MdiInstagram,
  EpMessage,
};

const SocialIcons = () => {
  return (
    <ul className="flex items-center gap-4 md:gap-6">
      {socialsData.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <li key={social.id}>
            <Link
              href={social.href}
              target={social.target}
              className="hover:scale-125 transition-all"
            >
              <Icon className="size-5" />
              <span className="sr-only">{social.name} Logo</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcons;
