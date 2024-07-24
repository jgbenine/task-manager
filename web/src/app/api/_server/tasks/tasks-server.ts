import { api } from "../../api";

export type TaskType = {
  id?: string;
  title: string;
  description: string;
  status: "PENDING" | "COMPLETED" | "IN_PROGRESS";
};


//Rota para API Create User
async function getTasksByUser(userId: string) {
  try {
    const { data } = await api.get<TaskType[]>(`/tasks/user/${userId}`);
    return data;
  } catch (err) {
    throw new Error("Error get tasks by user: " + err);
  }
}

export const TaksServer = { getTasksByUser };
