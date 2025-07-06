import { SparklesPreview } from "@/components/shared/heading";
import { Button } from "@/components/ui/button";
import FramerComponent from "@/components/shared/motion-element/framer-component";
import { MorphingText } from "@/components/shared/gooey-text-morping";

const texts = ["Next.js", "SwiftUI", "UIKit", "React"];

const Hero = () => {
  return (
    <section className="~mt-14/48 text-center w-full ">
      <FramerComponent delay={0.2} duration={0.6} direction="bottom" distance={50} className="~mb-4/8">
        <SparklesPreview className="text-5xl md:text-6xl lg:text-8xl font-sans">
          Hi, I&apos;m Ibadov Sahib
        </SparklesPreview>
      </FramerComponent>

      <FramerComponent
        delay={0.4}
        duration={0.6}
        direction="bottom"
        distance={50}
        className="~text-xl/4xl relative inline-flex flex-col gap-1 md:gap-2  text-neutral-500 dark:text-neutral-400 font-semibold ~mb-4/14"
      >
        <h3 className="">IOS(SwiftUI | UIKit) & Fullstack Developer</h3>
        <MorphingText
          texts={texts}
          className="~text-xl/4xl text-[#0ea5e9] dark:text-[#0ea5e9] bg-gradient-to-t font-bold"
        />
      </FramerComponent>

      <FramerComponent delay={0.8} duration={0.6} direction="bottom" distance={50}>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto ~text-base/xl ~mb-4/8">
          I have the skills and expertise to craft bespoke ios applications and websites that not only meet your needs,
          but also unleash your business&apos;s full potential.
        </p>
      </FramerComponent>
      <FramerComponent delay={1} duration={0.6} direction="bottom" distance={50}>
        <Button variant="custom" asChild>
          <a download href="/sahib-ios-cv.pdf">
            Download CV
          </a>
        </Button>
      </FramerComponent>
    </section>
  );
};

export default Hero;
