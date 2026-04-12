"use client";

import { useState, useRef, useCallback, useMemo, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { random } from "maath";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import type { Points as ThreePoints } from "three";
const Stars = ({ color }: { color: string }) => {
  const ref = useRef<ThreePoints>(null);
  const [sphere] = useState(() => {
    const s = random.inSphere(new Float32Array(3000), { radius: 1.2 }) as Float32Array;
    // Sanity check: Ensure no NaN values
    for (let i = 0; i < s.length; i++) {
      if (isNaN(s[i])) s[i] = 0;
    }
    return s;
  });
  const rotate = useCallback((delta: number) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 20;
    }
  }, []);

  useFrame((_state, delta) => rotate(delta));

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial transparent color={color} size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

const MemoizedStars = memo(Stars);

export default function StarsCanvas() {
  const { theme } = useTheme();
  const color = useMemo(() => (theme === "dark" ? "#f0f0f0" : "#000000"), [theme]);

  return (
    <div className={cn("w-full h-auto absolute inset-0 z-[-10]")}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <MemoizedStars color={color} />
        <Preload all />
      </Canvas>
    </div>
  );
}
