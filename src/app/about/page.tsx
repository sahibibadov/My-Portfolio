import { SparklesPreview } from "@/components/shared/heading";
import FramerComponent from "@/components/shared/motion-element/framer-component";
import Resume from "@/components/shared/resume";
import { Metadata } from "next";
import Image from "next/image";
export const fetchCache = "force-cache";
export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Sahib Ibadov, his background, and his experience in web development.",
};
const About = () => {
  function birhDateCalc(day: string) {
    const now = new Date();
    const birthDate = new Date(day);

    let yas = now.getFullYear() - birthDate.getFullYear();
    const monthDif = now.getMonth() - birthDate.getMonth();
    const dayDif = now.getDate() - birthDate.getDate();
    if (monthDif < 0 || (monthDif === 0 && dayDif < 0)) {
      yas--;
    }
    return yas;
  }
  return (
    <section className="~mt-10/20  w-full">
      <FramerComponent blur="10px" delay={0.4} duration={0.6} direction="bottom" distance={50}>
        <SparklesPreview className="text-5xl md:text-6xl lg:text-7xl ">ABOUT</SparklesPreview>
      </FramerComponent>

      {/* about content */}
      <FramerComponent
        blur="10px"
        delay={0.6}
        duration={0.6}
        direction="bottom"
        distance={50}
        className="~space-y-2/4 ~mt-4/8   *:text-center md:text-start text-foreground/75 ~text-sm/base"
      >
        <p>
          Hello there! I&apos;m Sahib Ibadov a passionate and result-oriented Frontend Developer with a commitment to
          building user-centered, efficient and visually appealing web applications. With more than 1 year of experience
          as a frontend developer, I thrive on turning innovative ideas into seamless digital experiences.
        </p>
        <p>
          My basic stack is React.js, Next.js and Tailwind. I&apos;m also familiar with the TypeScript and Javascript
          programming language. I&apos;m always looking to learn new technologies.
        </p>
        <p>
          When I&apos;m not coding, I enjoy playing football, listening to music, play video games and watch YouTube. I
          also enjoy listening to podcasts, read articles and stuff and watch doumentaries about different things
        </p>
      </FramerComponent>
      {/* image and content */}
      <FramerComponent
        blur="10px"
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
          width={500}
          height={500}
          priority
          className=" object-contain aspect-square w-64 h-64 rounded-md flex-1"
        />

        {/* content */}
        <ul className="flex flex-2 flex-col sm:flex-row gap-5 text-foreground/55 text-start ~text-xs/base">
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
              Age: {birhDateCalc("1998-04-10")}
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
              Email: bdvshb@gmail.com
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
      </FramerComponent>

      {/* resume */}
      <Resume />
    </section>
  );
};

export default About;
