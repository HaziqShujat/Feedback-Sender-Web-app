import { z } from "zod";

export const Messageschema = z.object({
  content: z
    .string()
    .min(6, { message: "content must be atlest of 10characters" })
    .max(300, { message: "not more than 300 words" }),
});
