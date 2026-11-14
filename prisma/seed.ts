import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seed completed.");
  await prisma.user.create({
    data: {
      firstName: "Test ",
      lastName: "User",
      email: "test@example.com",
      password: "hashed-password",
    } as any,
  });

  console.log("🌱 Seed completed (no data added).");
}

main()
  .then(() => prisma.$disconnect())
  .catch((error) => {
    console.error(error);
    prisma.$disconnect();
  });
