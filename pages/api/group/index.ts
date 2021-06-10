import { getSession } from "next-auth/client";
import prisma from "../../../lib/prisma";

// POST /api/group
// Required fields in body: name
// Optional fields in body:
export default async function handle(req, res) {
  const { name, content } = req.body;

  const session = await getSession({ req });

  console.log(session);

  const result = await prisma.group.create({
    data: {
      name,
      location: {},
      document: {
        create: { content }
      }
    }
  });
  console.log(result);
  res.json(result);
}
