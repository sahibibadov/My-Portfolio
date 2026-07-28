"use client";

import { memo, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { registerGlow } from "@/lib/pointer-glow";

interface GlowingEffectProps {
  /** Blur radius applied to the whole gradient, in pixels. */
  blur?: number;
  /** Fraction of the smallest side that stays unlit around the centre. */
  inactiveZone?: number;
  /** How far outside the box the pointer still lights the border, in pixels. */
  proximity?: number;
  /** Width of the lit arc, in degrees. */
  spread?: number;
  /** Thickness of the glowing border, in pixels. */
  borderWidth?: number;
  className?: string;
}

/**
 * Conic-gradient border that follows the pointer. The pointer maths lives in
 * `@/lib/pointer-glow`, which batches every mounted instance into one animation
 * frame — mount as many of these as you like.
 */
const GlowingEffect = memo(
  ({ blur = 0, inactiveZone = 0.7, proximity = 0, spread = 20, borderWidth = 1, className }: GlowingEffectProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const element = ref.current;
      if (!element) return;
      return registerGlow(element, { proximity, inactiveZone });
    }, [proximity, inactiveZone]);

    return (
      <div
        ref={ref}
        style={
          {
            "--blur": `${blur}px`,
            "--spread": spread,
            "--start": "0",
            "--active": "0",
            "--glowingeffect-border-width": `${borderWidth}px`,
            "--repeating-conic-gradient-times": "5",
            "--gradient": `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
                radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
                radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%),
                radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  #dd7bbb 0%,
                  #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
                  #5a922c calc(50% / var(--repeating-conic-gradient-times)),
                  #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
                  #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
                )`,
          } as React.CSSProperties
        }
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit]",
          blur > 0 && "blur-[var(--blur)]",
          className,
        )}
      >
        <div
          className={cn(
            "glow",
            "rounded-[inherit]",
            'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
            "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
            "after:[background:var(--gradient)] after:[background-attachment:fixed]",
            "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
            "after:[mask-clip:padding-box,border-box]",
            "after:[mask-composite:intersect]",
            "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]",
          )}
        />
      </div>
    );
  },
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };
