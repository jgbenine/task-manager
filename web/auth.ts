import { UserServer } from "@/app/api/_server/user/user-server";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compareSync } from "bcrypt-ts";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  // pages: {
  //   // signIn: '/signIn',
  //   // signOut: '/signOut',
  //   // newUser: "/register",
  // },
  providers: [
    Credentials({
      credentials: {
        email: {
          label: 'Email',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        const email = credentials.email as string;
        const password = credentials.password as string;

        if (!credentials.email || !credentials.password) return null;
        const user = await UserServer.getUserByEmail(email);

        if (!user) return null;

        const matches = compareSync(password, user.password);

        if (matches) {
          return { id: user.id, email: user.email, password: user.password };
        }
        return null;
      },
    }),
  ],
});
