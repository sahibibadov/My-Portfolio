"use client";
import { skills } from "@/constants";
import FramerComponent from "@/components/shared/motion-element/framer-component";
import { SkillItem } from "@/components/shared/glowing-effect";

const Skills = () => {
  return (
    <section className="~mt-10/20 w-full">
      <FramerComponent delay={0.4} duration={0.6} direction="bottom" distance={50}>
        <h2 className="heading">Skills</h2>
      </FramerComponent>

      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3 group">
        {skills.map((skill, i) => (
          <SkillItem key={i} skill={skill} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
