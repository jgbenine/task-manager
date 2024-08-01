'use client';
import React, { useEffect } from 'react'
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { TaskType } from '@/app/api/_server/tasks/tasks-server';
import { CardListTask } from './CardListTask/CardListTask';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import './CardList.scss';

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

  function reoderList(list: TaskType[], startPosition: number, endPosition: number) {
    const result = Array.from(list);
    const [removed] = result.splice(startPosition, 1)
    result.splice(endPosition, 0, removed);
    return result;
  }

  function onDragEnd(result: any) {
    if (!result.destination) return;
    const items = reoderList(tasks, result.source.index, result.destination.index)
    tasks = items;
  }

  return (
    <div className={`cardList ${variants === 'secondary' ? 'cardList--secondary' : ''}`}>
      <h3 className="cardList__title">{titleCard}</h3>
      <p className="cardList__description">{descriptionCard}</p>
      {descriptionCard_2 && <p className="cardList__description cardList__description--highlight">{descriptionCard_2}</p>}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="taksCard" type="list" direction="vertical">
          {(provided) => (
            <div className="cardList__items"
              ref={provided.innerRef}
              {...provided.droppableProps}>
              {tasks?.map((item: TaskType, index) => (
                <CardListTask
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  indexDragDrop={index}
                />
              ))}
              {provided.placeholder}
              <ButtonPrimary
                label={btnLabel}
                onClick={handleClickBtnCard}
              />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

