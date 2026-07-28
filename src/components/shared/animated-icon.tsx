"use client";
import Lottie from "lottie-react";
import { cn } from "@/lib/utils";

interface CustomLottieProps {
  className?: string;
  color?: string;
  animationData: any;
  loop?: boolean; // Bu şekilde JSON verisini alabilecek şekilde genelleştirdik
}

const AnimatedIcon: React.FC<CustomLottieProps> = ({ className, animationData, loop, color }) => {
  return <Lottie className={cn(className)} color={color} animationData={animationData} loop={loop} />;
};

export default AnimatedIcon;
