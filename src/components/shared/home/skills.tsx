import { skills } from "@/constants";
import { SpotLightItem } from "@/components/shared/spotlight-card";
import AnimatedIcon from "@/components/shared/animated-icon";
import MotionSection from "../motion-element";

const Skills = () => {
  return (
    <MotionSection className="~mt-10/20 w-full">
      <h3 className="heading">Skills</h3>

      <div className="grid grid-cols-5 sm:grid-cols-6  md:grid-cols-8  lg:grid-cols-10 xl:grid-cols-12  gap-3 place-items-center ">
        {skills.map((skill, i) => (
          <SpotLightItem i={i + 1} key={i}>
            <div className=" aspect-square grid place-items-center group relative">
              <span className="hidden sm:block absolute transition-all text-xs text-center text-foreground/50 font-semibold invisible opacity-0 -bottom-1 group-hover:visible group-hover:opacity-100 group-hover:bottom-1">
                {skill.name}
              </span>
              <span className=" sm:hidden absolute transition-all text-[8px] text-center text-foreground/50 font-semibold  bottom-1 ">
                {skill.name}
              </span>
              <div className="dark:text-white -translate-y-3 sm:translate-y-0">
                <AnimatedIcon
                  animationData={skill.iconDark}
                  loop={true}
                  className={`${skill.size} hidden dark:block`}
                />
                <AnimatedIcon
                  animationData={skill.icon}
                  loop={true}
                  className={`${skill.size} dark:hidden`}
                />
              </div>
            </div>
          </SpotLightItem>
        ))}
      </div>
    </MotionSection>
  );
};

export default Skills;
