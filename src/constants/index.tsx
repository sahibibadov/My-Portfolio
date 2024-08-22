import Calendar from "../../public/icon/calendar.json";
import React from "../../public/icon/react.json";
import ReactDark from "../../public/icon/react-dark.json";
import Nextjs from "../../public/icon/nextjs.json";
import NextjsDark from "../../public/icon/nextjs-dark.json";
import Typescript from "../../public/icon/typescript.json";
import TypescriptDark from "../../public/icon/typescript-dark.json";
import Js from "../../public/icon/js.json";
import JsDark from "../../public/icon/js-dark.json";
import Html from "../../public/icon/html.json";
import HtmlDark from "../../public/icon/html-dark.json";
import Css from "../../public/icon/css.json";
import CssDark from "../../public/icon/css-dark.json";
import Scss from "../../public/icon/scss.json";
import ScssDark from "../../public/icon/scss-dark.json";
import Tailwind from "../../public/icon/tailwind.json";
import TailwindDark from "../../public/icon/tailwind-dark.json";
import Redux from "../../public/icon/redux.json";
import ReduxDark from "../../public/icon/redux-dark.json";
import Rrd from "../../public/icon/rrd.json";
import RrdDark from "../../public/icon/rrd-dark.json";
import Axios from "../../public/icon/axios.json";
import AxiosDark from "../../public/icon/axios-dar.json";
import Styled from "../../public/icon/styled.json";
import StyledDark from "../../public/icon/styled-dark.json";
import Zustand from "../../public/icon/zustand.json";
import Query from "../../public/icon/query.json";
import QueryDark from "../../public/icon/query-dark.json";
import Swr from "../../public/icon/swr.json";
import SwrDark from "../../public/icon/swr-dark.json";
import Mongo from "../../public/icon/mongodb.json";
import MongoDark from "../../public/icon/mongodb-dark.json";
import Git from "../../public/icon/git.json";
import GitDark from "../../public/icon/git-dark.json";
import GitHub from "../../public/icon/github.json";
import GitHubDark from "../../public/icon/github-dark.json";
import Npm from "../../public/icon/npm.json";
import NpmDark from "../../public/icon/npm-dark.json";
import Yarn from "../../public/icon/yarn.json";
import YarnDark from "../../public/icon/yarn-dark.json";
import FramerMotion from "../../public/icon/framer.json";
import FramerMotionDark from "../../public/icon/framer-dark.json";

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
    icon: Calendar,
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
    icon: Calendar,
    pulsa: <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>,
  },
  {
    title: "Frontend Programming",
    uni: " ATL Academy",
    specialty: "Frontend development (reactjs | nextjs)",
    year: "Okt 2022 - Jul 2023",
    icon: Calendar,
    pulsa: <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>,
  },
  {
    title: "Backend Programming",
    uni: " Web Coder (Adas)",
    specialty: "PHP ( LARAVEL 11 )",
    year: "March 2024 - August 2024",
    icon: Calendar,
    pulsa: <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>,
  },
];
export const experience = [
  {
    title: "Bank Respublica",
    specialty: "Web Developer",
    year: "aug 2024 - present",
    icon: Calendar,
    pulsa: (
      <span className="relative flex h-3 w-3 scale-125">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative  inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    ),
  },
  {
    title: "Atl Academy",
    specialty: "Frontend developer mentor",
    year: "may 2024 - aug 2024",
    icon: Calendar,
    pulsa: <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>,
  },
  {
    title: "Web Coder",
    specialty: "Web Developer intern",
    year: "mar 2024 - aug 2024",
    icon: Calendar,
    pulsa: <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>,
  },
  {
    title: "Tech-It Company",
    specialty: "Web Developer Intern",
    year: "nov 2023 - feb 2024",
    icon: Calendar,
    pulsa: <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>,
  },
  {
    title: "Meetsoft Company",
    specialty: "Frontend Developer Intern ",
    year: "jun 2023 - oct 2023",
    icon: Calendar,
    pulsa: <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>,
  },
];

export const skills = [
  {
    name: "NextJs",
    icon: Nextjs,
    iconDark: NextjsDark,
    size: "size-6 md:size-12",
  },
  {
    name: "Reactjs",
    icon: React,
    iconDark: ReactDark,
    size: "size-6 md:size-12",
  },
  {
    name: "TypeScript",
    icon: Typescript,
    iconDark: TypescriptDark,
    size: "size-6 md:size-12",
  },
  {
    name: "JavaScript",
    icon: Js,
    iconDark: JsDark,
    size: "size-6 md:size-12",
  },
  {
    name: "HTML5",
    icon: Html,
    iconDark: HtmlDark,
    size: "size-6 md:size-12 scale-150",
  },
  {
    name: "CSS3",
    icon: Css,
    iconDark: CssDark,
    size: "size-6 md:size-12",
  },
  {
    name: "SCSS",
    icon: Scss,
    iconDark: ScssDark,
    size: "size-6 md:size-12",
  },
  {
    name: "Tailwindcss",
    icon: Tailwind,
    iconDark: TailwindDark,
    size: "size-6 md:size-12",
  },
  {
    name: "Redux/toolkit",
    icon: Redux,
    iconDark: ReduxDark,
    size: "size-6 md:size-12",
  },
  {
    name: "React-Router-Dom",
    icon: Rrd,
    iconDark: RrdDark,
    size: "size-6 md:size-12",
  },
  {
    name: "Axios",
    icon: Axios,
    iconDark: AxiosDark,
    size: "size-6 md:size-12",
  },
  {
    name: "Styled components",
    icon: Styled,
    iconDark: StyledDark,
    size: "size-6 md:size-12 scale-120 -translate-y-1",
  },
  {
    name: "Zustand",
    icon: Zustand,
    iconDark: Zustand,
    size: "size-6 md:size-12 scale-110 ",
  },
  {
    name: "Tanstack Tuery",
    icon: Query,
    iconDark: QueryDark,
    size: "size-6 md:size-12",
  },
  {
    name: "SWR",
    icon: Swr,
    iconDark: SwrDark,
    size: "size-6 md:size-12",
  },
  {
    name: "MongoDB",
    icon: Mongo,
    iconDark: MongoDark,
    size: "size-6 md:size-12",
  },

  {
    name: "Git",
    icon: Git,
    iconDark: GitDark,
    size: "size-6 md:size-12",
  },
  {
    name: "Github",
    icon: GitHub,
    iconDark: GitHubDark,
    size: "size-6 md:size-12",
  },
  {
    name: "Npm",
    icon: Npm,
    iconDark: NpmDark,
    size: "size-6 md:size-12",
  },
  {
    name: "Yarn",
    icon: Yarn,
    iconDark: YarnDark,
    size: "size-6 md:size-12",
  },
  {
    name: "Framer Motion",
    icon: FramerMotion,
    iconDark: FramerMotionDark,
    size: "size-6 md:size-12",
  },
];

// export const projects = [
//   {
//     name: "My Portfolio",
//     image: "/images/portfolio-image.png",
//     demoLink: "https://sahibibadov.vercel.app/",
//     githubLink: "https://github.com/sahibibadov/My-Portfolio",
//   },
//   {
//     name: "Nextjs Blog Website",
//     image: "/images/next-blog.png",
//     demoLink: "https://nextjs14-blog-website.vercel.app",
//     githubLink: "https://github.com/sahibibadov/Nextjs14-blog-website",
//   },
//   {
//     name: "Nextjs Admin Dashboard",
//     image: "/images/admindashboard.png",
//     demoLink: "https://nextjs14-admin-dashboard.vercel.app/dashboard",
//     githubLink: "https://github.com/sahibibadov/Nextjs14-admin-dashboard",
//   },
//   {
//     name: "Ay Yemek",
//     image: "/images/ayyemek.png",
//     demoLink: "https://ayyemek.vercel.app",
//     githubLink: "https://github.com/sahibibadov/Ay-yemek",
//   },
//   {
//     name: "Science Baku",
//     image: "/images/bilimbaku.png",
//     demoLink: "https://bilim-baku.vercel.app",
//     githubLink: "https://github.com/sahibibadov/bilim-baku",
//   },
//   {
//     name: "Nextjs Todo App",
//     image: "/images/todo-app.png",
//     demoLink: "https://nextjs14-todo-app-gamma.vercel.app",
//     githubLink: "https://github.com/sahibibadov/Nextjs14-Todo-app",
//   },
//   {
//     name: "Shopping Vegetable Website",
//     image: "/images/shopping-vegetable.png",
//     demoLink: "https://shopping-website-livid.vercel.app/",
//     githubLink: "https://github.com/sahibibadov/shopping-website",
//   },
//   {
//     name: "Shopping App",
//     image: "/images/shopping.png",
//     demoLink: "https://shopping-pi-three.vercel.app/",
//     githubLink: "https://github.com/sahibibadov/shopping",
//   },
//   {
//     name: "Infiniti-loop-website",
//     image: "/images/infiniti-loop.png",
//     demoLink: "https://infiniti-lopp-website.vercel.app/",
//     githubLink: "https://github.com/sahibibadov/infiniti-lopp-website",
//   },
// ];
