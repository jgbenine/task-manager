import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function deleteTask(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().delete("/tasks/:taskId", {
    schema: {
      params: z.object({
        taskId: z.string().uuid(),
      }),
    },
    handler: async (request) => {
      const { taskId } = request.params;

      try {
        const task = await prisma.task.delete({
          where: {
            id: taskId,
          },
        });
        return (`Task deleted successfully: ${task.id}` );
      } catch (error) {
        console.log(error);
      }
    },
  });
}
