import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function getTasksUser(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get("/tasks/user/:userId", {
    schema: {
      params: z.object({
        userId: z.string().uuid(),
      }),
    },
    handler: async (request) => {
      const { userId } = request.params;

      try {
        const tasks = await prisma.task.findMany({
          where: {
            userId,
          },
          select: {
            id: true,
            title: true,
            description: true,
            status: true,
            created_at: true,
          },
        });

        return { tasks: tasks };
      } catch (error) {
        console.log(error);
      }
    },
  });
}
