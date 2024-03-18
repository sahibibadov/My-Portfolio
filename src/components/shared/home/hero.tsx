import { SparklesPreview } from "@/components/shared/sparkles-preview";
import Typeanimationtext from "@/components/shared/type-animation-text";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <section className="~mt-10/20 text-center w-full">
      <SparklesPreview className="text-5xl md:text-6xl lg:text-7xl">
        Hi, I&apos;m Ibadov Sahib
      </SparklesPreview>

      <div className="~text-xl/4xl text-neutral-500 dark:text-neutral-400 font-semibold ~mb-2/4">
        <span className="mr-1">Frontend Developer</span>
        <Typeanimationtext />
      </div>

      <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto ~text-base/xl ~mb-2/4">
        I have the skills and expertise to craft bespoke websites that not only meet your needs, but
        also unleash your business&apos;s full potential.
      </p>
      <Button variant="custom" className="">
        Download CV
      </Button>
    </section>
  );
};

export default Hero;
