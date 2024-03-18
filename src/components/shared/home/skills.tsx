import { skills } from "@/constants";
import { SpotLightItem } from "@/components/shared/spotlight-card";
import AnimatedIcon from "@/components/shared/animated-icon";

const Skills = () => {
  return (
    <section className="~mt-10/20 w-full">
      <h3 className="heading">Skills</h3>

      <div className="grid grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-8 gap-4 ">
        {skills.map((skill, i) => (
          <SpotLightItem key={i}>
            <div className="~w-24/32 aspect-square grid place-items-center group relative">
              <span className="absolute transition-all text-sm text-foreground/70 font-semibold invisible opacity-0 -bottom-1 group-hover:visible group-hover:opacity-100 group-hover:bottom-2">
                {skill.name}
              </span>
              <div className="dark:text-white ">
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
    </section>
  );
};

export default Skills;
