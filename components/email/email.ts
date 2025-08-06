"use server";

import { EmailTemplate } from "./email-template";
import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "./schema";

const resend = new Resend(process.env.RESEND_API_KEY);

const getCurrentTimestamp = () => {
  const now = new Date();

  // Extract date components
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
  const date = now.getDate().toString().padStart(2, "0");

  // Extract time components
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // Determine AM/PM and adjust hours
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 0 to 12 for midnight

  // Format timestamp
  return `${year}-${month}-${date}T${hours}${minutes}${seconds}${ampm}`;
};

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    // TODO: Add this emailFormData to some database

    const { error } = await resend.emails.send({
      from: `Rider Station <${process.env.RESEND_FROM_EMAIL}>`,
      to: [
        emailFormData.email,
        `Rider Station Support <${process.env.RESEND_FROM_EMAIL}>`,
      ],
      subject: `Thank You for Reaching Out! ${getCurrentTimestamp()}`,
      react: EmailTemplate({
        firstName: emailFormData.firstName,
        lastName: emailFormData.lastName,
        email: emailFormData.email,
        phone: emailFormData.phone,
        company: emailFormData.company,
        city: emailFormData.city,
        service: emailFormData.service,
        message: emailFormData.message,
      }),
    });

    if (error) {
      throw error;
    }
  } catch (e) {
    throw e;
  }
};
