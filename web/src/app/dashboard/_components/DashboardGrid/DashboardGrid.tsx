'use client'
import { useTask } from '@/contexts/TaskContext';
import { TaskColumn } from '../DashboardColumn/DashboardColumn';
import { useSessionContext } from '@/contexts/SessionContext';
import Link from 'next/link';
import { useEffect } from 'react';

export function DashboardGrid() {
  const { tasks } = useTask();
  const { session } = useSessionContext();

  const pendingTasks = tasks.filter(task => task.status === 'PENDING');
  const completedTasks = tasks.filter(task => task.status === 'COMPLETED');
  const inProgressTasks = tasks.filter(task => task.status === 'IN_PROGRESS');

  return (
    <>
      {session ? (
        <div className="dashboard__grid">
          <TaskColumn title='To do' tasks={pendingTasks} />
          <TaskColumn title='In progress' tasks={inProgressTasks} />
          <TaskColumn title='Completed' tasks={completedTasks} />
        </div>
      ) : <article className="dashboard-logout">
        <h4 className='dashboard__title'>Log in to view the dashboard</h4>
        <Link href="/" className="dashboard-logout__link">
          Return to home
        </Link>
      </article>}
    </>
  )
}
