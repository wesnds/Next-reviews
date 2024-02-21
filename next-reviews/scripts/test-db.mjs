import { PrismaClient } from "@prisma/client";

const db = new PrismaClient({
  log: [{ emit: "stdout", level: "query" }],
});
// const comment = await db.comment.create({
//   data: {
//     slug: "fall-guys",
//     user: "Weslley",
//     message: "This is another test comment to test the db",
//   },
// });

const comments = await db.comment.findMany({
  // where: {
  //   slug: "fall-guys",
  // },
});
console.log("comments :", comments);
