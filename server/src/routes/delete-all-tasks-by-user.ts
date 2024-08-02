import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function deleteAllTasksByUser(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().delete("/tasks/byUser/:userEmail", {
    schema: {
      params: z.object({
        userEmail: z.string().email(),
      }),
    },
    handler: async (request, reply) => {
      const { userEmail } = request.params;
      try {
        const user = await prisma.user.findUnique({
          where: { email: userEmail },
        });

        if (!user) {
          return reply.status(404).send({ error: "User not found" });
        }

        const deletedTasks = await prisma.task.deleteMany({
          where: {
            userId: user.id,
            status: "COMPLETED",
          },
        });

        return { message: `Deleted ${deletedTasks.count} tasks successfully` };
      } catch (error) {
        console.error(error);
        return reply.status(500).send({ error: "Error deleting tasks" });
      }
    },
  });
}