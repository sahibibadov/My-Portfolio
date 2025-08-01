"use client";

import ContactForm from "@/components/shared/contact/contact-from";
import { SparklesPreview } from "@/components/shared/heading";
import FramerComponent from "@/components/shared/motion-element/framer-component";
import dynamicNext from "next/dynamic";
import { LoadingIcon } from "../../../public/icon-static/loading-icon";
const Earth = dynamicNext(() => import("@/components/shared/globe/earth"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full  grid place-items-center">
      <LoadingIcon className="animate-spin size-8" />
    </div>
  ),
});
const Contact = () => {
  return (
    <section className="~mt-10/16  w-full  ">
      {/* title */}
      <FramerComponent delay={1} duration={0.6} direction="bottom" distance={50}>
        <SparklesPreview className="text-5xl md:text-6xl lg:text-7xl ">CONTACT ME</SparklesPreview>
      </FramerComponent>

      <div className="flex flex-col md:flex-row gap-4 ~mt-8/20">
        {/* eratch */}
        <FramerComponent
          delay={1.5}
          duration={0.6}
          direction="left"
          distance={200}
          className="relative aspect-square flex-1 w-[350px]  h-[350px] mx-auto md:mx-0   md:w-full md:h-full  md:max-w-[500px] md:max-h-[500px] md:-translate-y-6 md:-translate-x-7"
        >
          <Earth />
        </FramerComponent>
        {/* form */}
        <FramerComponent delay={1.5} duration={0.6} direction="right" distance={200} className="flex-1">
          <ContactForm />
        </FramerComponent>
      </div>
    </section>
  );
};

export default Contact;
