import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function updateTask(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().patch("/tasks/:taskId", {
    schema: {
      params: z.object({
        taskId: z.string().uuid(),
      }),
      body: z.object({
        title: z.string().min(4).optional(),
        description: z.string().optional(),
        status: z.string().optional(),
      }),
    },
    handler: async (request, reply) => {
      const { taskId } = request.params;
      const { title, description, status } = request.body;

      try {
        const task = await prisma.task.update({
          where: {
            id: taskId,
          },
          data: {
            title,
            description,
            status,
          },
        });
        return { task: task };
      } catch (error) {
        reply.status(500).send({ error: "Erro ao atualizar a tarefa" });
      }
    },
  });
}
