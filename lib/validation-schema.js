import { z } from "zod";

export const signUpSchema = z.object({
    name: z.string().min(3, "Invalid name"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Invalid phone number"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});