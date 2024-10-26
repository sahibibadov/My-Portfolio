import { SparklesPreview } from "@/components/shared/heading";
import Typeanimationtext from "@/components/shared/type-animation-text";
import { Button } from "@/components/ui/button";
import FramerComponent from "../motion-element/framer-component";
const Hero = () => {
  return (
    <section className="~mt-14/48 text-center w-full">
      <FramerComponent delay={0.2} duration={0.6} direction="bottom" distance={50}>
        <SparklesPreview className="text-5xl md:text-6xl lg:text-8xl font-sans">
          Hi, I&apos;m Ibadov Sahib
        </SparklesPreview>
      </FramerComponent>

      <FramerComponent
        delay={0.4}
        duration={0.6}
        direction="bottom"
        distance={50}
        className="~text-xl/4xl relative inline-flex gap-3 md:gap-5  text-neutral-500 dark:text-neutral-400 font-semibold ~mb-4/10"
      >
        <p className="">Fullstack Developer</p>
        <Typeanimationtext />
      </FramerComponent>

      <FramerComponent delay={0.6} duration={0.6} direction="bottom" distance={50}>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto ~text-base/xl ~mb-4/8">
          I have the skills and expertise to craft bespoke websites that not only meet your needs, but also unleash your
          business&apos;s full potential.
        </p>
      </FramerComponent>
      <FramerComponent delay={0.8} duration={0.6} direction="bottom" distance={50}>
        <Button variant="custom" asChild>
          <a download href="/Sahib-Fullstack-CV.pdf">
            Download CV
          </a>
        </Button>
      </FramerComponent>
    </section>
  );
};

export default Hero;
