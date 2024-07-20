import fastify from "fastify";
import { createTask } from "./routes/create-task";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { getTasksById } from "./routes/get-task-id";
import { deleteTask } from "./routes/delete-task";
import { updateTask } from "./routes/update-task";

const app = fastify();


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


app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("Server is running on port 3333");
});