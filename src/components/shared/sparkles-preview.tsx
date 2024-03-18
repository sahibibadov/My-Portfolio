import { cn } from "@/lib/utils";
import { SparklesCore } from "./sparkles";

export function SparklesPreview({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className=" w-full bg-background  flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1
        className={cn(
          "  mb-2 tracking-tight   font-bold  text-center text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-600 relative z-20 uppercase",
          className
        )}
      >
        {children}
      </h1>
      <div className=" max-w-xl w-full ~h-20/36 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute ~inset-x-14/20 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-3/4" />
        <div className="absolute ~inset-x-32/60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute ~inset-x-32/60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1000}
          className="w-full h-full"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
