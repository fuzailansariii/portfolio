import z from "zod";

const SignUpModel = z.object({
  fullName: z.string().min(3, "Full Name must be at least of 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const SignInModel = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const ContactModal = z.object({
  firstname: z.string().min(3, "First Name must be at least of 3 characters"),
  lastname: z.string().optional(),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least of 5 characters"),
  message: z.string().min(20, "Message must be at least of 20 characters"),
});

export { SignInModel, SignUpModel, ContactModal };
