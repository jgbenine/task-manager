'use client'
import { TasksServer } from '@/app/api/_server/tasks/tasks-server'
import { Pencil, Trash, ReceiptText } from 'lucide-react'
import { useTask } from '@/contexts/TaskContext'
import { ModalUpdate } from '../Modais/ModalUpdate/ModalUpdate'
import useModal from '@/hooks/useModal';
import './CardTask.scss';
import ModalDetails from '../Modais/ModalDetails/ModalDetails'

type PropsCardTask = {
  id: string,
  title: string;
  description: string;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | string;

}

export function CardTask({ id, title, description, status }: PropsCardTask) {
  const { refreshTasks } = useTask();
  const { isShowing, activeModal, openModal, closeModal } = useModal();


  async function handleDeletCardTask() {
    if (!id) return;
    await TasksServer.deleteTask(id);
    refreshTasks();
  }

  async function handleUpdateTask() {
    if (!id) return
    await TasksServer.getTaskById(id);
    openModal('update');
  }

  async function handleDetails() {
    if (!id) return
    await TasksServer.getTaskById(id);
    openModal('details');
  }


  return (
    <article className="cardTask">
      <div className="cardTask__intro">
        <h3 className="cardTask__title">{title}</h3>
        <div className="cardTask-actions">
          <button className="cardTask-actions__btn" onClick={handleDetails}>
            <ReceiptText className="cardTask-actions__icon" />
          </button>
          <button className="cardTask-actions__btn cardTask-actions__btn--edit" onClick={handleUpdateTask}>
            <Pencil className="cardTask-actions__icon" />
          </button>
          <button className="cardTask-actions__btn cardTask-actions__btn--delete" onClick={handleDeletCardTask}>
            <Trash className="cardTask-actions__icon" />
          </button>
        </div>
      </div>
      <p className="cardTask__description">{description}</p>
      <span className={
            `cardTask__status 
            ${status === 'IN_PROGRESS' ? 'cardTask__status--inProgress' : ''}
            ${status === 'COMPLETED' ? 'cardTask__status--completed' : ''}`}>
        {status}
      </span>
      {activeModal === 'update' && (
        <ModalUpdate
          idTask={id}
          isShowing={isShowing}
          closeModal={closeModal}
          titlePlaceholder={title}
          descriptionPlaceholder={description}
          statusPlaceholder={status}
        />
      )}
      {activeModal === 'details' && (
        <ModalDetails
          idTask={id}
          isShowing={isShowing}
          closeModal={closeModal}
          titleDetails={title}
          descriptionDetails={description}
          status={status}
        />
      )}
    </article>
  )
}


