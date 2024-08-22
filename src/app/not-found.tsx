import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex-1  flex flex-col justify-center  gap-6 items-center">
      <h2 className="text-center  text-3xl md:text-7xl inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text  text-transparent">
        404 <br />
        Not Found
      </h2>

      <Button variant="custom" asChild>
        <Link href="/">Home</Link>
      </Button>
    </section>
  );
}
