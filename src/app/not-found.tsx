import { Button } from "@/components/ui/button";
import Link from "next/link";
import NotFoundLight from "../../public/icon/notfound.json";
import NotFoundDark from "../../public/icon/notfound-dark.json";
import AnimatedIcon from "@/components/shared/animated-icon";

export default function NotFound() {
  return (
    <section className="flex-1  flex flex-col justify-center  gap-1 items-center">
      <AnimatedIcon animationData={NotFoundLight} loop={true} className="~size-36/64 dark:hidden" />
      <AnimatedIcon
        animationData={NotFoundDark}
        loop={true}
        className="~size-36/64 hidden dark:block"
      />
      <h2 className=" -translate-y-6  text-3xl md:text-7xl inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text  text-transparent">
        Not Found
      </h2>

      <Button variant="custom" asChild>
        <Link href="/">Home</Link>
      </Button>
    </section>
  );
}
