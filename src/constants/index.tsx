import { Nextjsicon } from "../../public/icon-static/nextjs";
import { ReactIcon } from "../../public/icon-static/react";
import { Typescripticons } from "../../public/icon-static/typescript";
import { Javascripticon } from "../../public/icon-static/javascript";
import { HtmlIcon } from "../../public/icon-static/html";
import { CssIcon } from "../../public/icon-static/css";
import { ScssIcon } from "../../public/icon-static/scss";
import { TailwindIcon } from "../../public/icon-static/tailwindcss";
import { ReduxIcon } from "../../public/icon-static/redux";
import { PhpIcon } from "../../public/icon-static/php";
import { LaravelIcon } from "../../public/icon-static/laravel";
import { SimpleIconsReactrouter } from "../../public/icon-static/react-router";
import { SimpleIconsStyledcomponents } from "../../public/icon-static/styled-comp";
import { ZustandIcon } from "../../public/icon-static/zustand";
import { SimpleIconsReactquery } from "../../public/icon-static/tanstack-query";
import { SimpleIconsSwr } from "../../public/icon-static/swr";
import { SimpleIconsPrisma } from "../../public/icon-static/prisma";
import { BxlMongodb } from "../../public/icon-static/mongo";
import { IconoirGit } from "../../public/icon-static/git";
import { IconoirGithub } from "../../public/icon-static/github";
import { SimpleIconsFramer } from "../../public/icon-static/framer";
import { SimpleIconsAxios } from "../../public/icon-static/axios";
import { SimpleIconsReacthookform } from "../../public/icon-static/react-hook-form";
import { SimpleIconsZod } from "../../public/icon-static/zod";
import { SwiftIcon } from "../../public/icon-static/swift";
import { SwiftuiIcon } from "../../public/icon-static/swiftui";
import { UikitIcon } from "../../public/icon-static/uikit";

export const navlinks = [
  {
    title: "Home",
    path: "/",
    id: 1,
  },
  {
    title: "About",
    path: "/about",
    id: 2,
  },
  {
    title: "Contact",
    path: "/contact",
    id: 3,
  },
];

export const education = [
  {
    title: "University",
    uni: "Azerbaijan State Oil and Industry University",
    specialty: "oil and gas installations engineering",
    year: "Sep 2015 - Jul 2019",
    pulsa: (
      <span className="relative flex h-3 w-3 scale-125">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative  inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    ),
  },
  {
    title: "Master",
    uni: "Azerbaijan State Oil and Industry University",
    specialty: "oil and gas installations engineering",
    year: "Sep 2019 - Jul 2021",
    pulsa: <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>,
  },
  {
    title: "Frontend Programming",
    uni: " ATL Academy",
    specialty: "Frontend development (reactjs | nextjs)",
    year: "Okt 2022 - Jul 2023",
    pulsa: <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>,
  },
  {
    title: "Backend Programming",
    uni: " Web Coder (Adas)",
    specialty: "PHP ( LARAVEL 11 )",
    year: "March 2024 - August 2024",
    pulsa: <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>,
  },
];

export const experience = [
  {
    title: "Bank Respublica",
    specialty: "IOS Developer",
    year: "may 2025 - present",
    pulsa: (
      <span className="relative flex h-3 w-3 scale-125">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative  inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    ),
  },
  {
    title: "Bank Respublica",
    specialty: "Web Developer",
    year: "aug 2024 - may 2025",
    pulsa: <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>,
  },
  {
    title: "Atl Academy",
    specialty: "Frontend developer mentor",
    year: "may 2024 - aug 2024",
    pulsa: <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>,
  },
  {
    title: "Web Coder",
    specialty: "Web Developer intern",
    year: "mar 2024 - aug 2024",
    pulsa: <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>,
  },
  {
    title: "Tech-It Company",
    specialty: "Web Developer Intern",
    year: "nov 2023 - feb 2024",
    pulsa: <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>,
  },
  {
    title: "Meetsoft Company",
    specialty: "Frontend Developer Intern ",
    year: "jun 2023 - oct 2023",
    pulsa: <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>,
  },
];

export const skills = [
  {
    name: "Swift",
    icon: SwiftIcon,
  },
  {
    name: "SwiftUI",
    icon: SwiftuiIcon,
  },
  {
    name: "UIKit",
    icon: UikitIcon,
  },
  {
    name: "NextJs",
    icon: Nextjsicon,
  },
  {
    name: "Reactjs",
    icon: ReactIcon,
  },
  {
    name: "TypeScript",
    icon: Typescripticons,
  },
  {
    name: "JavaScript",
    icon: Javascripticon,
  },
  {
    name: "Php",
    icon: PhpIcon,
  },
  {
    name: "Laravel",
    icon: LaravelIcon,
  },
  {
    name: "HTML5",
    icon: HtmlIcon,
  },
  {
    name: "CSS3",
    icon: CssIcon,
  },
  {
    name: "SCSS",
    icon: ScssIcon,
  },
  {
    name: "Tailwindcss",
    icon: TailwindIcon,
  },
  {
    name: "Redux/toolkit",
    icon: ReduxIcon,
  },
  {
    name: "Zustand",
    icon: ZustandIcon,
  },
  {
    name: "React-Router-Dom",
    icon: SimpleIconsReactrouter,
  },
  {
    name: "Axios",
    icon: SimpleIconsAxios,
  },
  {
    name: "React-hook-form",
    icon: SimpleIconsReacthookform,
  },
  {
    name: "Zod",
    icon: SimpleIconsZod,
  },
  {
    name: "Styled components",
    icon: SimpleIconsStyledcomponents,
  },

  {
    name: "Tanstack Query",
    icon: SimpleIconsReactquery,
  },
  {
    name: "SWR",
    icon: SimpleIconsSwr,
  },
  {
    name: "Prisma",
    icon: SimpleIconsPrisma,
  },
  {
    name: "MongoDB",
    icon: BxlMongodb,
  },

  {
    name: "Git",
    icon: IconoirGit,
  },
  {
    name: "Github",
    icon: IconoirGithub,
  },

  {
    name: "Framer Motion",
    icon: SimpleIconsFramer,
  },
];
