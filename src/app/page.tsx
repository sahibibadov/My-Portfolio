import Resume from "@/components/shared/resume";
import Project from "@/components/shared/home/project";
import Hero from "@/components/shared/home/hero";
import Skills from "@/components/shared/home/skills";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <Resume/>
      <Skills />
      <Project />
    </div>
  );
}
