import { api } from "../../api";

export type TaskContent = {
  title: string;
  description: string;
  userEmail?: string;
  status: "PENDING" | "COMPLETED" | "IN_PROGRESS";
};

export type TaskType = TaskContent & {
  id: string;
};

async function getTasksByUser(userId: string) {
  try {
    const { data } = await api.get<TaskType[]>(`/tasks/user/${userId}`);
    return data;
  } catch (err) {
    throw new Error("Error get tasks by user: " + err);
  }
}

async function getTaskById(taskId: string) {
  try {
    const { data } = await api.get<TaskType[]>(`/tasks/${taskId}`);
    return data;
  } catch (err) {
    throw new Error("Error get tasks by user: " + err);
  }
}

async function createTask(
  title: string,
  description: string,
  userEmail: string
) {
  try {
    const task: TaskContent = {
      title: title,
      description: description,
      userEmail: userEmail,
      status: "PENDING",
    };
    const { data } = await api.post<TaskType>("/tasks", task);
    return data;
  } catch (err) {
    throw new Error("Error create task: " + err);
  }
}

async function deleteTask(taskId: string) {
  try {
    await api.delete<TaskType>(`/tasks/${taskId}`);
    return taskId;
  } catch (err) {
    throw new Error("Error delete task: " + err);
  }
}

async function deleteAllTasks(userEmail: string) {
  try {
    await api.delete(`/tasks/byUser/${userEmail}`);
    return userEmail;
  } catch (err) {
    throw new Error("Error delete all tasks: " + err);
  }
}

async function updateTask(taskId: string, title?: string, description?: string, status?: string) {
  const updateData: Partial<{ title: string; description: string; status: string }> = {};
  
  // Adicione os campos ao objeto apenas se eles não forem undefined
  if (title !== undefined) updateData.title = title;
  if (description !== undefined) updateData.description = description;
  if (status !== undefined) updateData.status = status;
  try {
    const { data } = await api.patch<TaskType>(`/tasks/${taskId}`, updateData);
    return data;
  } catch (err) {
    throw new Error("Error updating task: " + err);
  }
}

async function updateTaskCompleted(taskId: string){
  if(!taskId){
    throw new Error("taskId is required");
  };
  try {
    const updateStatus = { status: "COMPLETED" };
    const { data } = await api.patch<TaskType>(`/tasks/${taskId}`, updateStatus)
    return data;
  } catch (error) {
    throw new Error("Error updating task done: " + error);
  }
}

async function saveReorderTask(tasks: TaskType[]){
  try {
    const taskIds = tasks.map(task => task.id);
    await api.put("/tasks/reorder", { taskIds }); 
    return tasks;
  } catch (error) {
    throw new Error("Error reordering tasks: " + error);
  }
}


export const TasksServer = {
  getTasksByUser,
  createTask,
  deleteTask,
  getTaskById,
  updateTask,
  updateTaskCompleted,
  deleteAllTasks,
  saveReorderTask
};
