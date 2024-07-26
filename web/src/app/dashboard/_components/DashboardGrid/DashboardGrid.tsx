'use client'
import { useTask } from '@/contexts/TaskContext';
import { TaskColumn } from '../DashboardColumn/DashboardColumn';

export function DashboardGrid() {
  const { tasks } = useTask();
  const pendingTasks = tasks.filter(task => task.status === 'PENDING');
  const completedTasks = tasks.filter(task => task.status === 'COMPLETED');
  const inProgressTasks = tasks.filter(task => task.status === 'IN_PROGRESS');

  return (
    <>
      {tasks ? (
        <div className="dashboard__grid">
          <TaskColumn title='To do' tasks={pendingTasks} />
          <TaskColumn title='In progress' tasks={inProgressTasks} />
          <TaskColumn title='Completed' tasks={completedTasks} />
        </div>
      ) : <h4 className='dashboard__title'>Log in to view the dashboard</h4>}
    </>
  )
}
