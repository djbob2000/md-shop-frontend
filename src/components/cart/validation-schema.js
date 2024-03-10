import { z } from "zod";

export const schema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  phone: z
    .string()
    .regex(/^\+\d{1,12}$/, {
      message: "Phone must be in format +381238887766",
    }),
  address: z
    .string()
    .max(160)
    .min(10, { message: "Address must be at least 10 characters" }),
});
