import { X, MoveRight, Workflow, NotebookPen } from 'lucide-react'
import './ModalDetails.scss';
import React from 'react'


type PropsModal = {
  isShowing: boolean;
  closeModal: () => void;
  idTask: string;
  titleDetails: string;
  descriptionDetails: string;
  status: string;
};

export default function ModalDetails({ isShowing, closeModal, idTask, titleDetails, descriptionDetails, status }: PropsModal) {
  if (!isShowing) return null;

  return (
    <div className="modalTask">
      <div className="modalTask__content">
        <button className="modalLogin__btnClose" onClick={closeModal}>
          <X />
        </button>
        <div className="modalTask-intro">
          <h2 className="modalTask-intro__title">Task details</h2>
        </div>
        <article className="modalTask-details__content">
          <h4 className="modalTask-details__title">
            <MoveRight className="modalTask-details__icon" />
            {titleDetails}
          </h4>
          <p className="modalTask-details__description">
            <NotebookPen className="modalTask-details__icon" />
            {descriptionDetails}
          </p>
          <p className="modalTask-details__status">
            <Workflow className="modalTask-details__icon" />
            {status == 'IN_PROGRESS' && 'In progress'}
            {status == 'PENDING' && 'Pending'}
            {status == 'COMPLETED' && 'Completed'}
          </p>
        </article>
      </div>
    </div>
  )
}
