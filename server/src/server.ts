import fastify from "fastify";
import { createTask } from "./routes/create-task";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { getTasksById } from "./routes/get-task-id";
import { deleteTask } from "./routes/delete-task";
import { updateTask } from "./routes/update-task";
import { createUser } from "./routes/create-user";
import { getUserByEmail } from "./routes/get-user";
import { getTasksUser } from "./routes/get-tasks-by-user";
import { inviteEmail } from "./routes/invite-email";
import cors from "@fastify/cors"
import { env } from "process";

const app = fastify();

const PORT = Number(process.env.PORT) || 3000; 

//Registrando cors, alterar para rotas do front-end em prod.
app.register(cors, {
  origin: "*",
})

//Zod config Fastify
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

// Hellow Route
app.get("/", async (req, res) => {
  return { hello: "Welcome server task manager" };
});

app.register(createTask);
app.register(getTasksById);
app.register(deleteTask);
app.register(updateTask);
app.register(createUser);
app.register(getUserByEmail);
app.register(getTasksUser);
app.register(inviteEmail);


// Exportar função para Vercel
export default async (req, res) => {
  await app.ready();
  app.server.emit('request', req, res);
};

app.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
  console.log(`Server is running on ${address}`);
});