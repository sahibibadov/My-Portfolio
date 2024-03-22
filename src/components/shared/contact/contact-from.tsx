"use client";
import { useFormState, useFormStatus } from "react-dom";
import { Label } from "@/components/ui/label";
import { LabelInputContainer } from "./input-container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/actions/actions";
import { useEffect, useRef } from "react";
import { toast } from "sonner";
const ContactForm = () => {
  const ref = useRef<HTMLFormElement | null>(null);
  const [state, action] = useFormState(sendEmail, null);

  useEffect(() => {
    if (state?.success) {
      toast.success("Your message has been sent!");
      ref.current?.reset();
    }
    if (state?.error) {
      toast.error(state?.error.toString());
    }
  }, [state]);

  return (
    <form ref={ref} action={action} className="flex flex-col gap-3 w-full">
      <LabelInputContainer>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="name" type="text" required />
        <p aria-live="polite" className="text-xs text-red-500">
          {state?.errors?.name}
        </p>
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" placeholder="email" type="email" required />
        <p aria-live="polite" className="text-xs text-red-500">
          {state?.errors?.email}
        </p>
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="message"
          className="resize-y ~h-28/32"
          required
        />
        <p aria-live="polite" className="text-xs text-red-500">
          {state?.errors?.message}
        </p>
      </LabelInputContainer>
      <SubmitButton />
    </form>
  );
};

export default ContactForm;

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      variant="custom"
      className="mt-2"
    >
      {pending && (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-black dark:border-white mr-1"></div>
      )}
      {pending ? "Sending..." : "Send"}
    </Button>
  );
}
