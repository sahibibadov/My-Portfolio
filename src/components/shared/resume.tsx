import { education, experience } from "@/constants";
import { EducationIcon } from "../../../public/icon-static/education";
import { ExperienceIcon } from "../../../public/icon-static/experience";
import { Calendar } from "../../../public/icon-static/calendar";
import FramerComponent from "./motion-element/framer-component";

const Resume = () => {
  return (
    <section className="~mt-10/32 w-full">
      <FramerComponent delay={0.4} duration={0.6} direction="bottom" distance={50}>
        <h2 className="heading">RESUME</h2>
      </FramerComponent>
      {/* wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 ~gap-4/10 ">
        {/* education */}
        <FramerComponent
          delay={0.6}
          direction="left"
          distance={50}
          inViewMargin={-50}
          duration={0.7}
          className="~space-y-4/6"
        >
          <h3 className="~text-base/xl font-semibold uppercase flex items-center gap-2 justify-center md:justify-start">
            <EducationIcon className="size-6 md:size-8" />
            Education
          </h3>

          <div className="flex flex-col justify-between  relative flex-1 ">
            {education.map((item) => (
              <div
                key={item.title}
                className="relative flex gap-5 items-start pb-5 after:content-[''] after:absolute after:top-0 after:left-1.5  after:h-full after:w-px after:bg-neutral-400 dark:after:bg-neutral-700 after:-z-[1] last:after:hidden "
              >
                {item.pulsa}
                <div className="relative -translate-y-2 flex-1 space-y-2">
                  <h4 className="~text-base/xl font-semibold text-neutral-700 dark:text-neutral-300">{item.title}</h4>
                  <div className="flex justify-between gap-2 text-neutral-600 dark:text-neutral-400 pb-3 border-b">
                    <div className="space-y-1">
                      <p className="~text-sm/base">{item.uni}</p>
                      <p className="~text-xs/base">{item.specialty}</p>
                    </div>
                    <div className="whitespace-nowrap ~text-xs/base flex items-center gap-2">
                      <Calendar className="size-4" />
                      {item.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FramerComponent>

        {/* experience */}
        <FramerComponent
          delay={0.6}
          direction="right"
          distance={50}
          inViewMargin={-50}
          duration={0.7}
          className="~space-y-4/6"
        >
          <h3 className="~text-base/xl font-semibold uppercase flex items-center gap-2 justify-center md:justify-start">
            <ExperienceIcon className="size-6 md:size-8" /> Experience
          </h3>

          <div className="flex flex-col justify-between  relative flex-1 ">
            {experience.map((item) => (
              <div
                key={item.title}
                className="relative flex gap-5 items-start pb-5 after:content-[''] after:absolute after:top-0 after:left-1.5  after:h-full after:w-px after:bg-neutral-400 dark:after:bg-neutral-700 after:-z-[1] last:after:hidden"
              >
                {item.pulsa}
                <div className="relative -translate-y-2 flex-1 space-y-2">
                  <h4 className="~text-base/xl font-semibold text-neutral-700 dark:text-neutral-300">{item.title}</h4>
                  <div className="flex justify-between gap-2 text-neutral-600 dark:text-neutral-400 pb-3 border-b">
                    <div>
                      <p className="~text-sm/base">{item.specialty}</p>
                    </div>
                    <div className="whitespace-nowrap ~text-xs/base flex items-center gap-2">
                      <Calendar className="size-4" />
                      {item.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FramerComponent>
      </div>
    </section>
  );
};

export default Resume;
