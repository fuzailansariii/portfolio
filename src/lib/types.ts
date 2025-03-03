import z from "zod";

export const ContactModal = z.object({
  firstname: z.string().min(3, "First Name must be at least of 3 characters"),
  lastname: z.string().optional(),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least of 5 characters"),
  message: z.string().min(20, "Message must be at least of 5 characters"),
});
