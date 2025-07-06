import { SparklesPreview } from "@/components/shared/heading";
import FramerComponent from "@/components/shared/motion-element/framer-component";
import Resume from "@/components/shared/resume";
import { Metadata } from "next";
import Image from "next/image";
import Age from "@/components/shared/about/age";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Sahib Ibadov, his background, and his experience in web development.",
};
const About = () => {
  return (
    <section className="~mt-10/20  w-full">
      <FramerComponent delay={0.4} duration={0.6} direction="bottom" distance={50}>
        <SparklesPreview className="text-5xl md:text-6xl lg:text-7xl ">ABOUT</SparklesPreview>
      </FramerComponent>

      {/* about content */}
      <FramerComponent
        delay={0.6}
        duration={0.6}
        direction="bottom"
        distance={50}
        className="~space-y-2/4 ~mt-4/8   *:text-center md:text-start text-foreground/75 ~text-sm/base"
      >
        <p>
          Hello there! I&apos;m Sahib Ibadov, a passionate and result-oriented <strong>iOS Developer</strong> with
          experience in building user-centered, efficient, and visually engaging mobile applications for Apple
          platforms. I specialize in <strong>Swift</strong>, <strong>SwiftUI</strong>, and <strong>UIKit</strong>, and I
          enjoy turning ideas into smooth and interactive iOS experiences.
        </p>
        <p>
          Alongside iOS development, I also work as a <strong>Frontend Developer</strong>, creating modern and
          responsive web applications. My main stack includes <strong>React.js</strong>, <strong>Next.js</strong>, and{" "}
          <strong>Tailwind CSS</strong>, and I&apos;m proficient in both <strong>JavaScript</strong> and{" "}
          <strong>TypeScript</strong>. I&apos;m always eager to explore and learn new technologies that enhance the user
          experience.
        </p>
        <p>
          When I&apos;m not coding, I enjoy playing football, listening to music, playing video games, and watching
          YouTube. I also like listening to podcasts, reading articles, and watching documentaries on a variety of
          topics.
        </p>
      </FramerComponent>
      {/* image and content */}
      <FramerComponent
        delay={0.8}
        duration={0.6}
        direction="bottom"
        distance={50}
        className="flex  gap-4 items-center flex-col sm:flex-row"
      >
        {/* image */}

        <Image
          src="/images/user.png"
          alt="user"
          quality={100}
          width={300}
          height={300}
          priority
          className=" object-contain aspect-square w-64 h-64 rounded-md flex-1"
        />

        {/* content */}
        <div className="flex flex-2 flex-col sm:flex-row gap-5 text-foreground/55 text-start ~text-xs/base">
          <ul className="~space-y-1/2">
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
              Age: <Age birth="1998-04-10" />
            </li>
          </ul>
          <ul className="~space-y-1/2">
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
              Email: bdvshb@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-sky-500"></span>
              </span>
              Freelance: Available
            </li>
          </ul>
        </div>
      </FramerComponent>

      {/* resume */}
      <Resume />
    </section>
  );
};

export default About;
