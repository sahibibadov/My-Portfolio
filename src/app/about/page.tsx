import { SparklesPreview } from "@/components/shared/heading";
import MotionSection from "@/components/shared/motion-element";
import Resume from "@/components/shared/resume";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};
const About = () => {
  return (
    <MotionSection
      delay={0.5}
      direction="up"
      duration={0.6}
      type="tween"
      className="~mt-10/20  w-full"
    >
      <SparklesPreview className="text-5xl md:text-6xl lg:text-7xl ">ABOUT</SparklesPreview>

      {/* about content */}
      <div className="~space-y-2/4 ~mt-4/8   *:text-center md:text-start text-foreground/75 ~text-sm/base">
        <p>
          Hello there! I&apos;m Sahib Ibadov a passionate and result-oriented Frontend Developer
          with a commitment to building user-centered, efficient and visually appealing web
          applications. With more than 1 year of experience as a frontend developer, I thrive on
          turning innovative ideas into seamless digital experiences.
        </p>
        <p>
          My basic stack is React.js, Next.js and Tailwind. I&apos;m also familiar with the
          TypeScript and Javascript programming language. I&apos;m always looking to learn new
          technologies.
        </p>
        <p>
          When I&apos;m not coding, I enjoy playing football, listening to music, play video games
          and watch YouTube. I also enjoy listening to podcasts, read articles and stuff and watch
          doumentaries about different things
        </p>
      </div>
      {/* image and content */}
      <div className="flex  gap-4 items-center flex-col sm:flex-row">
        {/* image */}

        <Image
          src="/images/user.png"
          alt="user"
          quality={100}
          width={500}
          height={500}
          priority
          className=" object-contain aspect-square w-64 h-64 rounded-md flex-1"
        />

        {/* content */}
        <ul className="flex flex-1 flex-col sm:flex-row gap-8 text-foreground/55 text-start ~text-xs/base">
          <div className="~space-y-1/2">
            <li className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-sky-500"></span>
              </span>
              Birthday: 10.04.1998
            </li>
            <li className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-sky-500"></span>
              </span>
              Country: Azerbaijan
            </li>
            <li className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-sky-500"></span>
              </span>
              City: Masalli
            </li>
            <li className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-sky-500"></span>
              </span>
              Age: 26
            </li>
          </div>
          <div className="~space-y-1/2">
            <li className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-sky-500"></span>
              </span>
              Phone : +994 77 314 25 99 | +994 50 314 25 99
            </li>
            <li className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-sky-500"></span>
              </span>
              Email: ibadovsahib@bk.ru
            </li>
            <li className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-sky-500"></span>
              </span>
              Freelance: Available
            </li>
          </div>
        </ul>
      </div>

      {/* resume */}
      <Resume key={Math.random()} />
    </MotionSection>
  );
};

export default About;
