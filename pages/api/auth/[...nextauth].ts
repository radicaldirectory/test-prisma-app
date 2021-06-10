import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import prisma from "@lib/prisma";
import { sendVerificationRequest } from "@lib/email";

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: sendVerificationRequest
    })
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
  secret: process.env.AUTH_SECRET
};
