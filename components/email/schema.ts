import { z } from "zod";

// export const formSchema = z.object({
//   firstName: z.string().min(2).max(50),
//   lastName: z.string().min(2).max(50),
//   email: z.string().email(),
//   message: z.string().min(2),
// });

export const formSchema = z.object({
  // fullName: z
  //   .string()
  //   .min(2, {
  //     message: "Full name must be at least 2 characters.",
  //   })
  //   .max(50),
  // email: z.string().email({
  //   message: "Please enter a valid email address.",
  // }),
  // subject: z
  //   .string()
  //   .min(2, {
  //     message: "Subject must be at least 2 characters.",
  //   })
  //   .max(50),
  // phoneNumber: z
  //   .string()
  //   .min(10, {
  //     message: "Phone number must be at least 10 digits.",
  //   })
  //   .max(15),
  // message: z
  //   .string()
  //   .min(10, {
  //     message: "Message must be at least 10 characters.",
  //   })
  //   .max(900),
  // terms: z.boolean().refine((val) => val === true, {
  //   message: "You must agree to the terms.",
  // }),

  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().min(1, "company is required"),
  city: z.string().min(1, "City is required"),
  service: z.string().min(1, "Service is required"),
  message: z.string().min(1, "Message is required"),
});
