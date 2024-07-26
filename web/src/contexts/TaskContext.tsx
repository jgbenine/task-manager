'use client'
import { TasksServer, TaskType } from "@/app/api/_server/tasks/tasks-server"
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useSessionContext } from './SessionContext';

type TaskContextType = {
  tasks: TaskType[],
  addNewTask: (task: TaskType) => void;
  updateTask?: (taskId: number, updatedTask: TaskType) => void;
  refreshTasks: () => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const { session } = useSessionContext();
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    async function fetchTasks() {
      const idUser = session?.user?.id as string;
      const tasksData = await TasksServer.getTasksByUser(idUser);
      setTasks(tasksData);
    }
    fetchTasks()
  }, [session])


  function addNewTask(newTask: TaskType) {
    setTasks(prevTasks => [...prevTasks, newTask]);
  }

  async function refreshTasks() {
    if (!session) return;
    const idUser = session?.user?.id as string;
    const tasksData = await TasksServer.getTasksByUser(idUser);
    setTasks(tasksData);
  }


  return (
    <TaskContext.Provider
      value={{
        tasks,
        addNewTask,
        refreshTasks
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