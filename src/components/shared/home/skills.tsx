import { skills } from "@/constants";
import FramerComponent from "../motion-element/framer-component";
import { HighlighterItem, HighlightGroup } from "../spotlight-card-2";

const Skills = () => {
  return (
    <section className="~mt-10/20 w-full">
      <FramerComponent blur="6px" delay={0.4} duration={0.6} direction="bottom" distance={50}>
        <h3 className="heading">Skills</h3>
      </FramerComponent>

      <HighlightGroup className="grid grid-cols-5 sm:grid-cols-6  md:grid-cols-8  lg:grid-cols-10 xl:grid-cols-12  gap-3 group">
        {skills.map((skill, i) => (
          <FramerComponent
            key={i}
            blur="6px"
            delay={(i + 1) * 0.1}
            duration={0.4}
            direction="bottom"
            inViewMargin={-20}
            distance={30}
          >
            <HighlighterItem>
              <div className=" aspect-square grid place-items-center  group/item relative h-full bg-background rounded-[inherit] z-20 overflow-hidden border border-foreground/10">
                <span className="hidden sm:block absolute transition-all text-xs text-center text-foreground/80 font-semibold invisible opacity-0 -bottom-1 group-hover/item:visible group-hover/item:opacity-100 group-hover/item:bottom-1">
                  {skill.name}
                </span>
                <span className=" sm:hidden absolute transition-all text-[8px] text-center text-foreground/80 font-semibold  bottom-1 ">
                  {skill.name}
                </span>
                <div className="dark:text-white -translate-y-3 sm:translate-y-0 ">
                  <skill.icon className="size-6 md:size-10 " />
                </div>
              </div>
            </HighlighterItem>
          </FramerComponent>
        ))}
      </HighlightGroup>
      {/* {skills.map((skill, i) => (
          <SpotLightItem i={i + 1} key={i}>
            <div className=" aspect-square grid place-items-center group relative">
              <span className="hidden sm:block absolute transition-all text-xs text-center text-foreground/50 font-semibold invisible opacity-0 -bottom-1 group-hover:visible group-hover:opacity-100 group-hover:bottom-1">
                {skill.name}
              </span>
              <span className=" sm:hidden absolute transition-all text-[8px] text-center text-foreground/50 font-semibold  bottom-1 ">
                {skill.name}
              </span>
              <div className="dark:text-white -translate-y-3 sm:translate-y-0">
                <skill.icon className="size-6 md:size-10" />
              </div>
            </div>
          </SpotLightItem>
        ))} */}
    </section>
  );
};

export default Skills;
