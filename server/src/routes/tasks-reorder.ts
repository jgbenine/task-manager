import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { prisma } from "../lib/prisma";
import { z } from "zod";


export async function tasksReorder(app: FastifyInstance){
  app.withTypeProvider<ZodTypeProvider>().put("/tasks/reorder", {
    schema:{
      body: z.object({
        taskIds: z.array(z.string()),
      }),
    },
    handler: async(request, reply) =>{
      const { taskIds } = request.body;

      try {
        const updates = taskIds.map((id, index) =>
          prisma.task.update({
            where: { id },
            data: { order: index + 1 }, 
          })
        );

        // Executar todas as atualizações em paralelo
        await Promise.all(updates);

        reply.status(200).send({ message: "Tarefas reordenadas com sucesso" });
      } catch (error) {
        console.error(error);
        reply.status(500).send({ message: "Ocorreu um erro ao reordenar as tarefas" });
      }
    }
  })
}
