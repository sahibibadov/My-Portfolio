"use client";
import { CardBody, CardContainer, CardItem } from "../3d-card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LinkIcon } from "../../../../public/icon-static/link";
import { IconoirGithub } from "../../../../public/icon-static/github";
import FramerComponent from "../motion-element/framer-component";
import projects from "@/data/projects.json";

const Project = () => {
  const porject = projects;
  return (
    <section className="mt-10 md:mt-20 text-center w-full">
      <FramerComponent blur="10px" delay={0.4} duration={0.6} direction="bottom" distance={50}>
        <h2 className="heading">PROJECT</h2>
      </FramerComponent>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {porject?.map((item, i) => (
          <FramerComponent
            blur="10px"
            key={i}
            delay={(i + 1) * 0.1}
            direction="bottom"
            duration={0.6}
            inViewMargin={-20}
            distance={30}
          >
            <CardContainer className="inter-var w-full max-w-full ">
              <CardBody className=" relative group/card transition-all hover:shadow-2xl hover:shadow-netral-500/10 dark:hover:shadow-neutral-500/10 bg-background border-black/15 dark:border-border rounded-xl p-3 border">
                <CardItem>
                  <h3 className="text-base md:text-xl font-semibold text-foreground/45">{item.name}</h3>
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-2 md:mt-3">
                  <Image
                    src={item.image}
                    height="200"
                    width="200"
                    sizes="(max-width: 540px) 100vw, 33vw"
                    priority={i === 0}
                    loading={i === 0 ? undefined : "lazy"}
                    className="aspect-video object-cover rounded-xl group-hover/card:shadow-xl w-full"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-2 md:mt-3">
                  <CardItem translateZ={20}>
                    <Link
                      href={item.demoLink}
                      target="__blank"
                      className="px-1 md:px-4 py-0 md:py-2 rounded-xl text-sm md:text-base font-semibold border border-transparent hover:border-border text-foreground/45 flex items-center gap-2 transition-none"
                    >
                      Live Demo
                      <LinkIcon className="size-3 md:size-4" />
                    </Link>
                  </CardItem>
                  <CardItem translateZ={20}>
                    <Button asChild variant="outline" className="rounded-full size-8 md:size-10 p-0 bg-transparent">
                      <Link href={item.githubLink} target="_blank">
                        <IconoirGithub className="size-3 md:size-4" />
                        <span className="sr-only">Github Logo</span>
                      </Link>
                    </Button>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </FramerComponent>
        ))}
      </div>
    </section>
  );
};

export default Project;
