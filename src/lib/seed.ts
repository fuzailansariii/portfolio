import bcrypt from "bcrypt";
import prisma from "@/utils/prisma";

async function Seed() {
  if (!process.env.ADMIN_PASSWORD || !process.env.ADMIN_EMAIL) {
    throw new Error(
      "Admin credentials are missing. Please provide ADMIN_EMAIL and ADMIN_PASSWORD in the .env file."
    );
  }
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
  await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL },
    update: {},
    create: {
      fullName: "Mohd Fuzail Ansari",
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
      role: "ADMIN",
    },
  });
}
// console.log("Admin created successful.");

Seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
