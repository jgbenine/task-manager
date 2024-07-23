import fastify from "fastify";
import { createTask } from "./routes/create-task";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { getTasksById } from "./routes/get-task-id";
import { deleteTask } from "./routes/delete-task";
import { updateTask } from "./routes/update-task";
import { createUser } from "./routes/create-user";
import { getUserByEmail } from "./routes/get-user";
import cors from "@fastify/cors"

const app = fastify();

//Registrando cors, alterar para rotas do front-end em prod.
app.register(cors, {
  origin: "*",
})

//Zod config Fastify
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

// Hellow Route
app.get("/hello", async (req, res) => {
  return { hello: "world" };
});

app.register(createTask);
app.register(getTasksById);
app.register(deleteTask);
app.register(updateTask);
app.register(createUser);
app.register(getUserByEmail);


app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("Server is running on port 3333");
});