import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Prisma seed (TS) started...");

  await prisma.user.create({
    data: {
      name: "Test User",
      email: "test@example.com",
      password: "hashed-password",
    },
  });

  console.log("🌱 Seed completed (no data added).");
}

main()
  .then(() => prisma.$disconnect())
  .catch((error) => {
    console.error(error);
    prisma.$disconnect();
  });
