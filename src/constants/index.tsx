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
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const education = [
  {
    title: "University",
    uni: "Azerbaijan State Oil and Industry University",
    specialty: "oil and gas installations engineering",
    year: "sep 2015 - jul 2019",
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
    year: "sep 2019 - jul 2021",
    icon: Calendar,
    pulsa: (
      <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>
    ),
  },
  {
    title: "Frontend Programming",
    uni: " ATL Academy",
    specialty: "Frontend development (reactjs | nextjs)",
    year: "okt 2022 - jul 2023",
    icon: Calendar,
    pulsa: (
      <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>
    ),
  },
];
export const experience = [
  {
    title: "Meetsoft Company",

    specialty: "Frontend Developer Intern ",
    year: "aug 2023 - oct 2023",
    icon: Calendar,
    pulsa: (
      <span className="relative flex h-3 w-3 scale-125">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative  inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    ),
  },
  {
    title: "Tech-It Company",

    specialty: "Web Developer Intern",
    year: "nov 2023 - dec 2023",
    icon: Calendar,
    pulsa: (
      <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>
    ),
  },
  {
    title: "WebCoder Company",

    specialty: "Frontend developer Intern",
    year: "mar 2024 - present",
    icon: Calendar,
    pulsa: (
      <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-400 dark:bg-neutral-700"></span>
    ),
  },
];

export const skills = [
  {
    name: "NextJs",
    icon: Nextjs,
    iconDark: NextjsDark,
    size: "size-12",
  },
  {
    name: "Reactjs",
    icon: React,
    iconDark: ReactDark,
    size: "size-12",
  },
  {
    name: "TypeScript",
    icon: Typescript,
    iconDark: TypescriptDark,
    size: "size-12",
  },
  {
    name: "JavaScript",
    icon: Js,
    iconDark: JsDark,
    size: "size-12",
  },
  {
    name: "HTML5",
    icon: Html,
    iconDark: HtmlDark,
    size: "size-20",
  },
  {
    name: "CSS3",
    icon: Css,
    iconDark: CssDark,
    size: "size-12",
  },
  {
    name: "SCSS",
    icon: Scss,
    iconDark: ScssDark,
    size: "size-12",
  },
  {
    name: "Tailwindcss",
    icon: Tailwind,
    iconDark: TailwindDark,
    size: "size-12",
  },
  {
    name: "Redux/toolkit",
    icon: Redux,
    iconDark: ReduxDark,
    size: "size-12",
  },
  {
    name: "React-Router-Dom",
    icon: Rrd,
    iconDark: RrdDark,
    size: "size-12",
  },
  {
    name: "Axios",
    icon: Axios,
    iconDark: AxiosDark,
    size: "size-12",
  },
  {
    name: "Styled components",
    icon: Styled,
    iconDark: StyledDark,
    size: "size-14 -translate-y-1",
  },
  {
    name: "Zustand",
    icon: Zustand,
    iconDark: Zustand,
    size: "size-14",
  },
  {
    name: "Tanstack Tuery",
    icon: Query,
    iconDark: QueryDark,
    size: "size-12",
  },
  {
    name: "SWR",
    icon: Swr,
    iconDark: SwrDark,
    size: "size-12",
  },
  {
    name: "MongoDB",
    icon: Mongo,
    iconDark: MongoDark,
    size: "size-12",
  },

  {
    name: "Git",
    icon: Git,
    iconDark: GitDark,
    size: "size-12",
  },
  {
    name: "Github",
    icon: GitHub,
    iconDark: GitHubDark,
    size: "size-12",
  },
  {
    name: "Npm",
    icon: Npm,
    iconDark: NpmDark,
    size: "size-12",
  },
  {
    name: "Yarn",
    icon: Yarn,
    iconDark: YarnDark,
    size: "size-12",
  },
  {
    name: "Framer Motion",
    icon: FramerMotion,
    iconDark: FramerMotionDark,
    size: "size-12",
  },
];

export const projects = [
  {
    name: "next-blog-page",
    image: "/images/next-blog.png",
    demoLink: "https://nextjs14-blog-website.vercel.app",
    githubLink: "https://github.com/sahibibadov/Nextjs14-blog-website",
  },
  {
    name: "nextjs-admin-dashboard",
    image: "/images/admindashboard.png",
    demoLink: "https://nextjs14-admin-dashboard.vercel.app/dashboard",
    githubLink: "https://github.com/sahibibadov/Nextjs14-admin-dashboard",
  },
  {
    name: "Ay-yemek",
    image: "/images/ayyemek.png",
    demoLink: "https://ayyemek.vercel.app",
    githubLink: "https://github.com/sahibibadov/Ay-yemek",
  },
  {
    name: "bilim-baku",
    image: "/images/bilimbaku.png",
    demoLink: "https://bilim-baku.vercel.app",
    githubLink: "https://github.com/sahibibadov/bilim-baku",
  },
  {
    name: "nextjs-todo-app",
    image: "/images/todo-app.png",
    demoLink: "https://nextjs14-todo-app-gamma.vercel.app",
    githubLink: "https://github.com/sahibibadov/Nextjs14-Todo-app",
  },
  {
    name: "shpping",
    image: "/images/shopping.png",
    demoLink: "https://shopping-pi-three.vercel.app/",
    githubLink: "https://github.com/sahibibadov/shopping",
  },
];
