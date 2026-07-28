"use client";

import { motion, type Variants } from "motion/react";
import { skills } from "@/constants";
import FramerComponent from "@/components/shared/motion-element/framer-component";
import SkillCard from "@/components/shared/home/skill-card";

// One in-view trigger for the whole grid instead of one IntersectionObserver per
// card, and no animated `filter: blur()` — blurring ~30 elements at once is what
// dropped frames while this section scrolled into view. Only opacity and
// translate are animated, both of which the compositor handles on its own.
const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 0.4, bounce: 0.25 },
  },
};

const Skills = () => {
  return (
    <section className="mt-10 md:mt-20 w-full">
      <FramerComponent blur="10px" delay={0.4} duration={0.6} direction="bottom" distance={50}>
        <h2 className="heading">Skills</h2>
      </FramerComponent>

      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-11 gap-3 md:gap-4 group"
      >
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} variants={cardVariants} />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
