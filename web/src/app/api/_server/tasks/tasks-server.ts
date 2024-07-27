import { api } from "../../api";

export type TaskType = {
  id?: string;
  title: string;
  description: string;
  userEmail?: string;
  status: "PENDING" | "COMPLETED" | "IN_PROGRESS" | string;
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
    const task: TaskType = {
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

export const TasksServer = {
  getTasksByUser,
  createTask,
  deleteTask,
  getTaskById,
  updateTask,
};
