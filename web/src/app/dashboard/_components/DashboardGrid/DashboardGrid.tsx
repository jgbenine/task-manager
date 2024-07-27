'use client'
import { useEffect, useState, useMemo, useCallback } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { TaskType } from "@/app/api/_server/tasks/tasks-server";
import { useTask } from "@/contexts/TaskContext";
import { useSessionContext } from "@/contexts/SessionContext";
import { TaskColumn } from "../DashboardColumn/DashboardColumn";
import Link from "next/link";

export function DashboardGrid() {
  const { tasks } = useTask();
  const { session } = useSessionContext();

  const [allTasks, setAllTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    setAllTasks(tasks);
  }, [tasks]);

  const columns = useMemo(() => ({
    'PENDING': allTasks.filter(task => task.status === 'PENDING'),
    'IN_PROGRESS': allTasks.filter(task => task.status === 'IN_PROGRESS'),
    'COMPLETED': allTasks.filter(task => task.status === 'COMPLETED')
  }), [allTasks]);

  const reorderListDrag = useCallback(<T,>(list: T[], startIndex: number, endIndex: number): T[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }, []);

  //Drag and drop na mesma coluna
  const handleSameColumnMove = useCallback((sourceColumn: TaskType[], source: any, destination: any) => {
    const reorderedTasks = reorderListDrag(sourceColumn, source.index, destination.index);
    setAllTasks(prev =>
      prev.map(task =>
        task.status === source.droppableId ? reorderedTasks.shift() || task : task
      )
    );
  }, [reorderListDrag]);

  //Drag and drop em colunas diferentes
  const handleDifferentColumnMove = useCallback((sourceColumn: TaskType[], destColumn: TaskType[], source: any, destination: any) => {
    const [movedTask] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, movedTask);

    if (movedTask) {
      setAllTasks(prev =>
        prev.map(task =>
          task.id === movedTask.id ? { ...task, status: destination.droppableId } : task
        )
      );

      setAllTasks(prev => {
        const updatedTasks = prev.map(task => {
          if (task.status === source.droppableId) {
            const reorderedSource = sourceColumn.shift();
            return reorderedSource ? reorderedSource : task;
          }
          if (task.status === destination.droppableId) {
            const reorderedDest = destColumn.shift();
            return reorderedDest ? reorderedDest : task;
          }
          return task;
        });
        return updatedTasks;
      });
    }
  }, []);

  //Função que lida com drop do elemento.
  const onDragEnd = useCallback((result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn: TaskType[] = columns[source.droppableId as keyof typeof columns];
    const destColumn: TaskType[] = columns[destination.droppableId as keyof typeof columns];

    if (source.droppableId === destination.droppableId) {
      handleSameColumnMove(sourceColumn, source, destination);
    } else {
      handleDifferentColumnMove(sourceColumn, destColumn, source, destination);
      console.log(sourceColumn, destColumn, destination)
    }
  }, [columns, handleSameColumnMove, handleDifferentColumnMove]);

  return (
    <>
      {session ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="dashboard__grid">
            <TaskColumn title='To do' tasks={columns['PENDING']} droppableId='PENDING' />
            <TaskColumn title='In progress' tasks={columns['IN_PROGRESS']} droppableId='IN_PROGRESS' />
            <TaskColumn title='Completed' tasks={columns['COMPLETED']} droppableId='COMPLETED' />
          </div>
        </DragDropContext>
      ) : (
        <article className="dashboard-logout">
          <h4 className='dashboard__title'>Log in to view the dashboard</h4>
          <Link href="/" className="dashboard-logout__link">
            Return to home
          </Link>
        </article>
      )}
    </>
  );
}
