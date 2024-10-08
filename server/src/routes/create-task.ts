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
        userEmail: z.string().email(),
      }),
    },
    handler: async (request, reply) => {
      const { title, description, userEmail } = request.body;

      try {
        let user = await prisma.user.findUnique({
          where: {
            email: userEmail,
          },
        });

        if (!user) {
          return reply.status(404).send({ error: "User not found" });
        }

        // Encontrar o maior valor de order
        const maxOrderTask = await prisma.task.findFirst({
          orderBy: {
            order: 'desc',
          },
          select: {
            order: true,
          },
        });

        const newOrder = maxOrderTask ? maxOrderTask.order + 1 : 1;

        const task = await prisma.task.create({
          data: {
            title,
            description,
            userId: user.id,
            order: newOrder,
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
