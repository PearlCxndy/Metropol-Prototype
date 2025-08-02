import { z } from "zod";

const registerUserSchema = z.object({
  first_name: z.string({
    required_error: "First name is required!",
  }),
  last_name: z.string({
    required_error: "Last name is required!",
  }),
  email: z.string().email({ message: "Invalid email" }),
  password_hash: z.string({
    required_error: "Password is required!",
  }),
});

const LoginUserSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string({
    required_error: "Password is required!",
  }),
});

export type RegisterUserInput = z.infer<typeof registerUserSchema>;
export type LoginUserInput = z.infer<typeof LoginUserSchema>;
