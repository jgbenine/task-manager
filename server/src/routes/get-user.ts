import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function getUserByEmail(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get("/user/:userEmail", {
    schema: {
      params: z.object({
        userEmail: z.string().email(),
      }),
    },
    handler: async (request) => {
      const { userEmail } = request.params;

      try {
        const user = await prisma.user.findUnique({
          where: {
            email: userEmail,
          },
          select: {
            id: true,
            name: true,
            email: true,
            password: true,
          },
        });

        return { user: user };
      } catch (error) {
        console.log(error);
      }
    },
  });
}
