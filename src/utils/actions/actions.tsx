"use server";

import { getErrorMessage } from "@/lib/utils";
import { z } from "zod";
import { Resend } from "resend";

// validation schema
const formShema = z.object({
  name: z.string().min(2, { message: "name must be at least 2 characters" }),
  email: z.string().email({ message: "please enter a valid email" }),
  message: z
    .string()
    .min(2, { message: "message must be at least 2 characters" })
    .max(500, { message: "message must be at most 500 characters" }),
});
type FormData = z.infer<typeof formShema>;

// resend email
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const parseData = formShema.safeParse(formData);

  if (!parseData.success) {
    return {
      errors: parseData.error.flatten().fieldErrors,
    };
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "bdvshb@gmail.com",
      subject: `New message from ${parseData.data.name}`,
      replyTo: parseData.data.email,
      text: parseData.data.message,
    });

    if (data.error) {
      return {
        error: data.error,
      };
    }
    return {
      success: true,
    };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
