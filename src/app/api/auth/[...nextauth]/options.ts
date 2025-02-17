import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/utils/prisma";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const email = credentials?.email.trim();
          const password = credentials?.password.trim();
          if (!email || !password) {
            throw new Error("Invalid inputs.");
          }

          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });

          if (user && (await bcrypt.compare(password, user.password))) {
            return {
              id: user.id,
              email: user.email,
              role: user.role,
              fullName: user.fullName,
            };
          }
          return null;
        } catch (error) {
          console.error("Error during authentication:", error);
          throw new Error("Login failed. Please try again.");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
        token.fullName = user.fullName;
      }
      return token;
    },
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.fullName = token.fullName;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
