import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};
const Container = ({ className, children }: ContainerProps) => {
  return <div className={cn("max-w-7xl w-full mx-auto ~px-3/5", className)}>{children}</div>;
};

export default Container;
