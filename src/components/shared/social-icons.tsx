import Link from "next/link";
import { Github } from "../../../public/icon/LineMdGithubLoop";
import Linkedn from "../../../public/icon/linkedin.json";
import LinkednDark from "../../../public/icon/linkedin-dark.json";
import Instagram from "../../../public/icon/insta.json";
import InstagramDark from "../../../public/icon/insta-dark.json";
import Mail from "../../../public/icon/mail.json";
import MailDark from "../../../public/icon/mail-dark.json";
import AnimatedIcon from "./animated-icon";

const SocialIcons = () => {
  return (
    <ul className="flex items-center ~gap-2/6">
      <Link
        href="https://github.com/sahibibadov"
        target="_blank"
        className="hover:scale-125 transition-all"
      >
        <Github className="~size-4/6" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/sahibibadov/"
        target="_blank"
        className="hover:scale-125 transition-all"
      >
        <AnimatedIcon animationData={Linkedn} loop={true} className="~size-4/6 dark:hidden" />
        <AnimatedIcon
          animationData={LinkednDark}
          loop={true}
          className="~size-4/6 hidden dark:block"
        />
      </Link>
      <Link
        href="https://www.instagram.com/sahib_ibadoff/"
        target="_blank"
        className="hover:scale-125 transition-all"
      >
        <AnimatedIcon animationData={Instagram} loop={true} className="~size-4/6 dark:hidden" />
        <AnimatedIcon
          animationData={InstagramDark}
          loop={true}
          className="~size-4/6 hidden dark:block"
        />
      </Link>
      <Link href="mailto:ibadovsahib@bk.ru" className="hover:scale-125 transition-all">
        <AnimatedIcon animationData={Mail} loop={true} className="~size-4/6 dark:hidden" />
        <AnimatedIcon animationData={MailDark} loop={true} className="size-8 hidden dark:block" />
      </Link>
    </ul>
  );
};

export default SocialIcons;
