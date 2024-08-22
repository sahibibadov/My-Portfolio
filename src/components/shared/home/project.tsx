import { CardBody, CardContainer, CardItem } from "../3d-card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LinkIcon } from "../../../../public/icon-static/link";
import MotionSection from "../motion-element";
import { createClient } from "@/utils/supabase/server";
import { IconoirGithub } from "../../../../public/icon-static/github";
import FramerComponent from "../motion-element/framer-component";

const Project = async () => {
  const supabase = createClient();

  let { data: porject, error } = await supabase.from("porject").select("*");

  if (error) {
    return (
      <div>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
  return (
    <section className="~mt-10/20 text-center w-full">
      <FramerComponent blur="6px" delay={0.4} duration={0.6} direction="bottom" distance={50}>
        <h3 className="heading">PROJECT</h3>
      </FramerComponent>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {porject?.map((item, i) => (
          <FramerComponent key={i} blur="6px" delay={(i + 1) * 0.1} duration={0.6} inViewMargin={0} distance={0}>
            <CardContainer className="inter-var w-full max-w-full ">
              <CardBody className=" relative group/card transition-all hover:shadow-2xl hover:shadow-netral-500/10 dark:hover:shadow-neutral-500/10 bg-background border-black/15 dark:border-border rounded-xl ~p-1/3 border">
                <CardItem>
                  <h4 className="~text-base/xl font-semibold text-foreground/45">{item.name}</h4>
                </CardItem>
                <CardItem translateZ="100" className="w-full ~mt-2/3">
                  <Image
                    src={item.image}
                    height="500"
                    width="500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="aspect-video object-cover rounded-xl group-hover/card:shadow-xl w-full"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center ~mt-2/3">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={item.demoLink}
                    target="__blank"
                    className="~px-2/4 ~py-1/2 rounded-xl ~text-sm/base font-semibold border border-transparent hover:border-border text-foreground/45 flex items-center gap-2 transition-none "
                  >
                    Live Demo
                    <LinkIcon className="size-5" />
                  </CardItem>
                  <CardItem translateZ={20}>
                    <Button asChild variant="outline" className="rounded-full size-12 p-0 bg-transparent">
                      <Link href={item.githubLink} target="_blank">
                        <IconoirGithub className="size-6" />
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
