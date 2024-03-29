import { education, experience } from "@/constants";
import Educat from "../../../public/icon/educat.json";
import Exper from "../../../public/icon/exper.json";
import AnimatedIcon from "./animated-icon";
import MotionSection, { MotionDivFade } from "./motion-element";

const Resume = () => {
  return (
    <MotionSection className="~mt-10/32 w-full">
      <h3 className="heading">RESUME</h3>
      {/* wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 ~gap-4/10 ">
        {/* education */}
        <MotionDivFade
          delay={0.6}
          direction="right"
          duration={1}
          type="spring"
          className="~space-y-4/6"
        >
          <h4 className="~text-base/xl font-semibold uppercase flex items-center gap-1 justify-center md:justify-start">
            <AnimatedIcon animationData={Educat} loop={true} className="size-8 " />
            Education
          </h4>

          <div className="flex flex-col justify-between  relative flex-1 ">
            {education.map((item) => (
              <div
                key={item.title}
                className="relative flex gap-5 items-start pb-5 after:content-[''] after:absolute after:top-0 after:left-1.5  after:h-full after:w-px after:bg-neutral-400 dark:after:bg-neutral-700 after:-z-[1] last:after:hidden "
              >
                {item.pulsa}
                <div className="relative -translate-y-2 flex-1 space-y-2">
                  <h4 className="~text-base/xl font-semibold text-neutral-600 dark:text-neutral-300">
                    {item.title}
                  </h4>
                  <div className="flex justify-between gap-2 text-neutral-500 pb-3 border-b">
                    <div className="space-y-1">
                      <p className="~text-sm/base">{item.uni}</p>
                      <p className="~text-xs/base">{item.specialty}</p>
                    </div>
                    <div className="whitespace-nowrap ~text-xs/base flex items-center gap-2">
                      <AnimatedIcon animationData={item.icon} loop={true} className="size-4" />
                      {item.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MotionDivFade>

        {/* experience */}
        <MotionDivFade
          delay={0.6}
          direction="left"
          duration={1}
          type="spring"
          className="~space-y-4/6"
        >
          <h4 className="~text-base/xl font-semibold uppercase flex items-center gap-1 justify-center md:justify-start">
            <AnimatedIcon animationData={Exper} loop={true} className="size-8" /> Experience
          </h4>

          <div className="flex flex-col justify-between  relative flex-1 ">
            {experience.map((item) => (
              <div
                key={item.title}
                className="relative flex gap-5 items-start pb-5 after:content-[''] after:absolute after:top-0 after:left-1.5  after:h-full after:w-px after:bg-neutral-400 dark:after:bg-neutral-700 after:-z-[1] last:after:hidden"
              >
                {item.pulsa}
                <div className="relative -translate-y-2 flex-1 space-y-2">
                  <h4 className="~text-base/xl font-semibold text-neutral-600 dark:text-neutral-300">
                    {item.title}
                  </h4>
                  <div className="flex justify-between gap-2 text-neutral-500 pb-3 border-b">
                    <div>
                      <p className="~text-sm/base">{item.specialty}</p>
                    </div>
                    <div className="whitespace-nowrap ~text-xs/base flex items-center gap-2">
                      <AnimatedIcon animationData={item.icon} loop={true} className="size-4" />
                      {item.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MotionDivFade>
      </div>
    </MotionSection>
  );
};

export default Resume;
