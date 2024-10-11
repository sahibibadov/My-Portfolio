import { SparklesPreview } from "@/components/shared/heading";
import Typeanimationtext from "@/components/shared/type-animation-text";
import { Button } from "@/components/ui/button";
import FramerComponent from "../motion-element/framer-component";
const Hero = () => {
  return (
    <section className="~mt-14/32 text-center w-full">
      <FramerComponent blur="6px" delay={0.5} duration={0.6} direction="bottom" distance={30}>
        <SparklesPreview className="text-5xl md:text-6xl lg:text-8xl font-sans">
          Hi, I&apos;m Ibadov Sahib
        </SparklesPreview>
      </FramerComponent>

      <FramerComponent
        blur="6px"
        delay={0.7}
        duration={0.6}
        direction="bottom"
        distance={30}
        className="~text-xl/4xl text-neutral-500 dark:text-neutral-400 font-semibold ~mb-4/10"
      >
        <span className="mr-4">Fullstack Developer</span>
        <Typeanimationtext />
      </FramerComponent>

      <FramerComponent blur="6px" delay={0.9} duration={0.6} direction="bottom" distance={30}>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto ~text-base/xl ~mb-4/8">
          I have the skills and expertise to craft bespoke websites that not only meet your needs, but also unleash your
          business&apos;s full potential.
        </p>
      </FramerComponent>
      <FramerComponent blur="6px" delay={1.1} duration={0.6} direction="bottom" distance={30}>
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
