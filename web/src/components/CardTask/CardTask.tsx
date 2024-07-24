import './CardTask.scss';
import { Pencil, Plus, Trash } from 'lucide-react'

type PropsCardTask = {
  title: string;
  description: string;
  status?: "PENDING" | "IN_PROGRESS" | "COMPLETED";
}

export function CardTask({ title, description, status }: PropsCardTask) {
  return (
    <article className="cardTask">
      <div className="cardTask__intro">
        <h3 className="cardTask__title">{title}</h3>
        <div className="cardTask-actions">
          <button className="cardTask-actions__btn">
            <Plus className="cardTask-actions__icon" />
          </button>
          <button className="cardTask-actions__btn">
            <Pencil className="cardTask-actions__icon" />
          </button>
          <button className="cardTask-actions__btn">
            <Trash className="cardTask-actions__icon" />
          </button>
        </div>
      </div>
      <p className="cardTask__description">{description}</p>
      <span className={`cardTask__status 
        ${status === 'IN_PROGRESS' ? 'cardTask__status--inProgress' : ''}
        ${status === 'COMPLETED' ? 'cardTask__status--completed' : ''}`}>
        {status}
      </span>
    </article>
  )
}
