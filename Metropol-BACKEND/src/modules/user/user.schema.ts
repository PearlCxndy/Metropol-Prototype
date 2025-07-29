import { z } from "zod";

const createUserSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  user_bio: z.string(),
  email: z.string(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
