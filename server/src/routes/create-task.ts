import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function createTask(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post("/tasks", {
    schema: {
      body: z.object({
        title: z.string().min(4),
        description: z.string(),
        userName: z.string(),
        userEmail: z.string().email(),
      }),
    },
    handler: async (request, reply) => {
      const { title, description, userName, userEmail } = request.body;

      try {
        const task = await prisma.task.create({
          data: {
            title,
            description,
            User: {
              create: {
                name: userName,
                email: userEmail,
              },
            },
          },
        });

        return {
          taskId: task.id,
        };
      } catch (error) {
        reply.status(500).send({ error: "Erro ao criar a tarefa" });
      }
    },
  });
}
