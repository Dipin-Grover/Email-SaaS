import { db } from "~/server/db";

async function main() {
  await db.user.create({
    data: {
      emailAddress: "test@gmail.com",
      firstName: "Honey",
      lastName: "Singh",
    },
  });

  console.log("✅ User created");
}

main()
  .catch((e) => {
    console.error("❌ Error:", e);
  })
  .finally(async () => {
    await db.$disconnect();
  });
