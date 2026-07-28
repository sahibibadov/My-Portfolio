"use client";

import { motion, type Variants } from "motion/react";
import { GlowingEffect } from "@/components/shared/glowing-effect";

export type Skill = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

type SkillCardProps = {
  skill: Skill;
  /** Reveal variants — the parent grid owns the stagger and the in-view trigger. */
  variants: Variants;
};

const SkillCard = ({ skill, variants }: SkillCardProps) => {
  return (
    <motion.div variants={variants} className="aspect-square relative">
      <div className="relative h-full rounded-xl border p-[1px]">
        <GlowingEffect spread={40} proximity={40} inactiveZone={0.1} />

        <div className="aspect-square grid place-items-center group/item relative h-full bg-background/50 rounded-[inherit] z-20 overflow-hidden border border-foreground/10">
          <span className="hidden sm:block absolute transition-all text-xs text-center text-foreground/80 font-semibold invisible opacity-0 -bottom-1 group-hover/item:visible group-hover/item:opacity-100 group-hover/item:bottom-1">
            {skill.name}
          </span>

          <span className="sm:hidden absolute transition-all text-[8px] text-center text-foreground/80 font-semibold bottom-1">
            {skill.name}
          </span>

          <div className="dark:text-white -translate-y-3 sm:translate-y-0">
            <skill.icon className="size-4 md:size-9" />
            <span className="sr-only">{skill.name}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
