import { db } from "~/server/db";

async function main() {
  // Insert a new user
  const user = await db.user.create({
    data: {
      id: "user_98765",
      emailAddress: "alice@example.com",
      firstName: "Alice",
      lastName: "Wonderland",
      imageUrl: "https://img.clerk.com/alice.png",
    },
  });

  console.log("✅ User inserted:", user);

  // Fetch all users
  const allUsers = await db.user.findMany();
  console.log("📌 All Users:", allUsers);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
