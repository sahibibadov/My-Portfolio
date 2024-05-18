import { CardBody, CardContainer, CardItem } from "../3d-card";
import Image from "next/image";
import Link from "next/link";
import { Github } from "../../../../public/icon/LineMdGithubLoop";
import { Button } from "@/components/ui/button";
import AnimatedIcon from "@/components/shared/animated-icon";
import LinkIcon from "../../../../public/icon/link-arrow.json";
import LinkIconDark from "../../../../public/icon/link-arrow-dark.json";
// import { projects } from "@/constants";
import MotionSection from "../motion-element";
import { createClient } from "@/utils/supabase/server";

const Project = async () => {
  const supabase = createClient();

  let { data: porject, error } = await supabase.from("porject").select("*");
  return (
    <MotionSection className="~mt-10/20 text-center w-full">
      <h3 className="heading">PROJECT</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {porject?.map((item, i) => (
          <CardContainer i={i + 1} key={i} className="inter-var w-full max-w-full ">
            <CardBody className=" relative group/card transition-all hover:shadow-2xl hover:shadow-netral-500/10 dark:hover:shadow-neutral-500/10 bg-background border-black/15 dark:border-border rounded-xl ~p-1/3 border">
              <CardItem>
                <h4 className="~text-base/xl font-semibold text-foreground/45">{item.name}</h4>
              </CardItem>
              <CardItem translateZ="100" className="w-full ~mt-2/3">
                <Image
                  src={item.image}
                  height="500"
                  width="500"
                  // placeholder="blur"
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
                  <AnimatedIcon
                    animationData={LinkIcon}
                    loop={true}
                    className="size-4 dark:hidden"
                  />
                  <AnimatedIcon
                    animationData={LinkIconDark}
                    loop={true}
                    className="size-4 hidden dark:block"
                  />
                </CardItem>
                <CardItem translateZ={20}>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full size-12 p-0 bg-transparent"
                  >
                    <Link href={item.githubLink} target="_blank">
                      <Github className="size-8 " />
                    </Link>
                  </Button>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </MotionSection>
  );
};

export default Project;
