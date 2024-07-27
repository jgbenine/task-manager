import React from 'react'
import './HeaderColumn.scss';

type PropsIntro = {
  title: string;
  quantity: number;
}

export function HeaderColumn({ title, quantity }: PropsIntro) {
  return (
    <div className="dashboard-intro">
      <h4 className="dashboard-intro__title">
        {title}
        <span className="dashboard-intro__quantity">
          {quantity}
        </span>
      </h4>
    </div>
  )
}
