import { SparklesPreview } from "@/components/shared/heading";
import Typeanimationtext from "@/components/shared/type-animation-text";
import { Button } from "@/components/ui/button";
import MotionElement from "../motion-element";
const Hero = () => {
  return (
    <MotionElement className="~mt-14/32 text-center w-full">
      <SparklesPreview className="text-5xl md:text-6xl lg:text-8xl">
        Hi, I&apos;m Ibadov Sahib
      </SparklesPreview>

      <div className="~text-xl/4xl text-neutral-500 dark:text-neutral-400 font-semibold ~mb-4/10">
        <span className="mr-1">Frontend Developer</span>
        <Typeanimationtext />
      </div>

      <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto ~text-base/xl ~mb-4/8">
        I have the skills and expertise to craft bespoke websites that not only meet your needs, but
        also unleash your business&apos;s full potential.
      </p>
      <Button variant="custom" asChild>
        <a download href="/Sahib-fullstack.pdf">
          Download CV
        </a>
      </Button>
    </MotionElement>
  );
};

export default Hero;
