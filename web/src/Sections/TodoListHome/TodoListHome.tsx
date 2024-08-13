'use client'
import { CardList } from '@/components/CardList/CardList'
import { useTask } from '@/contexts/TaskContext';
import { useSessionContext } from '@/contexts/SessionContext';
import { ModalTask } from '@/components/Modais/ModalTask/ModalTask';
import { useMemo } from 'react';
import { TasksServer } from '@/app/api/_server/tasks/tasks-server';
import Link from 'next/link';
import BlackBelt from '@/components/BlackBelt/BlackBelt'
import useModal from '@/hooks/useModal';
import './TodoListHome.scss'


export function TodoListHome() {
  const { tasks, refreshTasks } = useTask();
  const { session } = useSessionContext();
  const { isShowing, openModal, closeModal } = useModal();

  const tasksFilter = useMemo(() => ({
    'PENDING': tasks.filter(task => task.status === 'PENDING'),
    'COMPLETED': tasks.filter(task => task.status === 'COMPLETED')
  }), [tasks]);


  async function handleDeletAllTasks() {
    if (!session?.user.email) {
      throw new Error('User not logged in');
    }
    console.log(session?.user.email);
    await TasksServer.deleteAllTasks(session.user.email);
    window.alert(`${tasksFilter.COMPLETED.length} completed tasks were deleted`);
    refreshTasks();
  }

  return (
    <section className="todo-list">
      <BlackBelt
        title="To-do List"
        description="Drag and drop to set your main priorities, check when done and create what´s new."
      />
      {session && (
        <>
          <div className="todo-list__container" id="todo-list">
            <CardList
              titleCard='To-do'
              descriptionCard='Take a breath. Start doing.'
              btnLabel='Create task'
              tasks={tasksFilter['PENDING']}
              handleClickBtnCard={() => { openModal('newtask') }}
            />
            <CardList
              titleCard='Done'
              descriptionCard='Congratulions!'
              descriptionCard_2={`You have done ${tasksFilter['COMPLETED'].length} tasks`}
              tasks={tasksFilter['COMPLETED']}
              variants='secondary'
              btnLabel='Erase all'
              handleClickBtnCard={handleDeletAllTasks}
            />
          </div>
          <Link href="/dashboard" className="todo-list__dashboard">
            <span>Go to </span>
            your dashboard
          </Link>
        </>
      )}
      {isShowing && (
        <ModalTask isShowing={isShowing} closeModal={closeModal} />
      )}
    </section>
  )
}
