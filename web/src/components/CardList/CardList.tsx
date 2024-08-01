'use client';
import React from 'react'
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { Check } from 'lucide-react';
import './CardList.scss';
import { TasksServer, TaskType } from '@/app/api/_server/tasks/tasks-server';
import { ModalUpdate } from '../Modais/ModalUpdate/ModalUpdate';
import useModal from '@/hooks/useModal';
import { useTask } from '@/contexts/TaskContext';

type PropsLink = {
  btnLabel: string,
  handleClickBtnCard: () => void,
}

type PropsCardList = {
  titleCard: string,
  descriptionCard: string,
  descriptionCard_2?: string,
  tasks: TaskType[],
  variants?: "primary" | "secondary"
} & PropsLink;

export function CardList({ variants = "primary", titleCard, descriptionCard, descriptionCard_2, tasks, btnLabel, handleClickBtnCard }: PropsCardList) {
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
    <div className={`cardList ${variants === 'secondary' ? 'cardList--secondary' : ''}`}>
      <h3 className="cardList__title">{titleCard}</h3>
      <p className="cardList__description">{descriptionCard}</p>
      <p className="cardList__description cardList__description--highlight">{descriptionCard_2}</p>
      <ul className="cardList__items">
        {tasks.map((item: TaskType) => (
          <li className="cardList-item" key={item.id}>
            <div className="cardList-item__task">
              <button className="cardList-item__btnCheck" onClick={() => handleTaskComplete(item.id)}>
                <Check />
              </button>
              <p className="cardList-item__titleTask">{item.title}</p>
            </div>
            <div className="cardList-actions">
              {variants === 'primary' && <button className="cardList-actions__btn cardList-actions__btn--edit" onClick={() => openModal(`updateTaskHome${item.id}`)}>Edit</button>}
              <button className="cardList-actions__btn cardList-actions__btn--delete" onClick={() => handleDeletTask(item.id)}>Delete</button>
            </div>
            {activeModal === `updateTaskHome${item.id}` &&
              <ModalUpdate idTask={item.id}
                isShowing={isShowing}
                descriptionPlaceholder={item.description}
                titlePlaceholder={item.title}
                closeModal={closeModal} />}
          </li>
        ))}
        <ButtonPrimary
          label={btnLabel}
          onClick={handleClickBtnCard}
        />
      </ul>

    </div>
  )
}

