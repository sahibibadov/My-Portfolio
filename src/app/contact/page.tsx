import ContactForm from "@/components/shared/contact/contact-from";
import { SparklesPreview } from "@/components/shared/heading";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Contact",
};
const Earth = dynamic(() => import("@/components/shared/globe/earth"), {
  ssr: false,
});
const Contact = () => {
  return (
    <section className="~mt-10/16  w-full  ">
      {/* title */}
      <SparklesPreview className="text-5xl md:text-6xl lg:text-7xl ">CONTACT ME</SparklesPreview>

      <div className="flex flex-col md:flex-row gap-4 ~mt-8/20">
        {/* eratch */}
        <div className="relative aspect-square flex-1 w-[350px]  h-[350px] mx-auto md:mx-0   md:w-full md:h-full  md:max-w-[500px] md:max-h-[500px] md:-translate-y-6 md:-translate-x-7">
          <Earth />
        </div>
        {/* form */}
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
