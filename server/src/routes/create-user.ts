import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function createUser(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post("/user", {
    schema: {
      body: z.object({
        name: z.string().min(4),
        email: z.string().email(),
        password: z.string(),
      }),
    },
    handler: async (request, reply) => {
      const { name, email, password } = request.body;

      try {
        // Verifica se o usuário já existe
        const existingUser = await prisma.user.findUnique({
          where: { email },
        });
        if (existingUser) {
          return reply.status(400).send({ error: "Usuário já existe" });
        }

        // Cria um novo usuário
        const user = await prisma.user.create({
          data: {
            name,
            email,
            password,
          },
        });
        return {
          userId: user,
        };
      } catch (error) {
        reply.status(500).send({ error: "Erro ao criar usuário" });
      }
    },
  });
}
