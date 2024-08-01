import { ModalUpdate } from '@/components/Modais/ModalUpdate/ModalUpdate'
import { Check } from 'lucide-react'
import { TasksServer } from '@/app/api/_server/tasks/tasks-server';
import { useTask } from '@/contexts/TaskContext';
import { Draggable } from '@hello-pangea/dnd';
import useModal from '@/hooks/useModal';
import './CardListTask.scss';
import { useEffect } from 'react';


type CardListTaskType = {
  id: string;
  title: string;
  variants?: 'primary' | 'secondary';
  indexDragDrop: number;
}


export function CardListTask({ variants = "primary", id, title, indexDragDrop }: CardListTaskType) {
  const { isShowing, openModal, activeModal, closeModal } = useModal();
  const { refreshTasks } = useTask();

  async function handleDeletTask(taskId: string) {
    if (!taskId) return;
    await TasksServer.deleteTask(taskId);
    refreshTasks();
  }

  async function handleTaskComplete(taskId: string) {
    if (!taskId) return;
    await TasksServer.updateTaskCompleted(taskId);
    refreshTasks();
  }
  
  return (
    <Draggable draggableId={id} index={indexDragDrop} >
      {(provided) => (
        <article className="cardListTask"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="cardListTask__task">
            <button className="cardListTask__btnCheck" onClick={() => handleTaskComplete(id)}>
              <Check />
            </button>
            <p className="cardListTask__title">{title}</p>
          </div>
          <div className="cardListTask-actions">
            {variants === 'primary' &&
              <button
                className="cardListTask-actions__btn cardListTask-actions__btn--edit"
                onClick={() => openModal(`updateTaskHome${id}`)}>Edit</button>}
            <button
              className="cardListTask-actions__btn cardListTask-actions__btn--delete"
              onClick={() => handleDeletTask(id)}>Delete</button>
          </div>
          {activeModal === `updateTaskHome${id}` &&
            <ModalUpdate idTask={id}
              isShowing={isShowing}
              titlePlaceholder={title}
              closeModal={closeModal} />}
        </article>
      )}
    </Draggable>
  )
}
