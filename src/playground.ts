import { db } from "~/server/db";   

await db.user.upsert({
  where: { emailAddress: 'test@gmail.com' },
  update: {},
  create: {
    emailAddress: 'test@gmail.com',
    firstName: 'james',
    lastName: 'bond',
  },
});


console.log('done');

