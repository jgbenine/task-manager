import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function getTasksById(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get("/tasks/:taskId", {
    schema: {
      params: z.object({
        taskId: z.string().uuid(),
      }),
    },
    handler: async (request, reply) => {
      const { taskId } = request.params;

      try {
        const task = await prisma.task.findUnique({
          where: {
            id: taskId,
          },
          select: {
            id: true,
            title: true,
            description: true,
            status: true,
            created_at: true,
            User: true,
          },
        });

        return { tasks: task };
      } catch (error) {
        console.log(error);
      }
    },
  });
}
