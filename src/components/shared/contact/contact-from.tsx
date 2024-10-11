"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { LabelInputContainer } from "./input-container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/actions/actions";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "name must be at least 2 characters" }),
  email: z.string().email({ message: "please enter a valid email" }),
  message: z
    .string()
    .min(2, { message: "message must be at least 2 characters" })
    .max(500, { message: "message must be at most 500 characters" }),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const result = await sendEmail(data);
      if (result.success) {
        toast.success("Your message has been sent!");
        reset();
      } else {
        toast.error(result.error?.toString() || "An error occurred");
      }
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full">
      <LabelInputContainer>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name")} placeholder="name" type="text" />
        {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
      </LabelInputContainer>

      <LabelInputContainer>
        <Label htmlFor="email">Email</Label>
        <Input id="email" {...register("email")} placeholder="email" type="email" />
        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
      </LabelInputContainer>

      <LabelInputContainer>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" {...register("message")} placeholder="message" className="resize-y ~h-28/32" />
        {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
      </LabelInputContainer>

      <Button type="submit" disabled={isSubmitting} variant="custom" className="mt-2">
        {isSubmitting && (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-black dark:border-white mr-1" />
        )}
        {isSubmitting ? "Sending..." : "Send"}
      </Button>
    </form>
  );
};

export default ContactForm;
