'use client'
import { TasksServer, TaskType } from "@/app/api/_server/tasks/tasks-server"
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useSessionContext } from './SessionContext';

type TaskContextType = {
  tasks: TaskType[],
  refreshTasks: () => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const { session } = useSessionContext();
  const idUser = session?.user?.id as string
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    async function fetchTasks() {
      if (!idUser) return;
      const tasksData = await TasksServer.getTasksByUser(idUser);
      setTasks(tasksData);
    }
    fetchTasks()
  }, [idUser, session])


  async function refreshTasks() {
    if (!idUser) return;
    const tasksData = await TasksServer.getTasksByUser(idUser);
    setTasks(tasksData);
  }


  return (
    <TaskContext.Provider
      value={{
        tasks,
        refreshTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}


export function useTask() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
}