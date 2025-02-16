import { PrismaClient } from "@prisma/client";

declare global {
  // This ensures that `global.prisma` is properly typed
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
