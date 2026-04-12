import { SparklesPreview } from "@/components/shared/heading";
import { Button } from "@/components/ui/button";
import FramerComponent from "@/components/shared/motion-element/framer-component";
import { MorphingText } from "@/components/shared/gooey-text-morping";
import SocialIcons from "../social-icons";

const texts = ["Next.js", "SwiftUI", "UIKit", "React"];

const Hero = () => {
  return (
    <section className="mt-14 md:mt-44 text-center w-full ">
      <FramerComponent blur="10px" delay={0.2} duration={0.6} direction="bottom" distance={50} className="mb-4 md:mb-8">
        <SparklesPreview className="text-5xl md:text-6xl lg:text-8xl font-sans">
          Hi, I&apos;m Ibadov Sahib
        </SparklesPreview>
      </FramerComponent>

      <FramerComponent
        blur="10px"
        delay={0.4}
        duration={0.6}
        direction="bottom"
        distance={50}
        className="text-xl md:text-4xl relative inline-flex flex-col gap-1 md:gap-2  text-neutral-500 dark:text-neutral-400 font-semibold mb-4 md:mb-14"
      >
        <p>IOS(SwiftUI | UIKit) & Fullstack Developer</p>
        <MorphingText
          texts={texts}
          className="text-xl md:text-4xl text-[#0ea5e9] dark:text-[#0ea5e9] bg-gradient-to-t font-bold max-md:mb-4"
        />
      </FramerComponent>

      <FramerComponent  blur="10px" delay={0.8} duration={0.6} direction="bottom" distance={50}>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto text-base md:text-xl mb-4 md:mb-8">
          I have the skills and expertise to craft bespoke ios applications and websites that not only meet your needs,
          but also unleash your business&apos;s full potential.
        </p>
      </FramerComponent>
      <FramerComponent blur="10px" delay={1} duration={0.6} direction="bottom" distance={50}>
        <Button variant="custom" asChild className="mb-8">
          <a download href="/ibadov-sahib-cv-ios.docx">
            Download CV
          </a>
        </Button>
      </FramerComponent>

      <FramerComponent blur="10px" delay={1.2} duration={0.6} direction="bottom" distance={50} className="flex justify-center">
        <SocialIcons />
      </FramerComponent>
    </section>
  );
};

export default Hero;
