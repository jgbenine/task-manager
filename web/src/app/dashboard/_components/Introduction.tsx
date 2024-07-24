
import React from 'react'
import './Introduction.scss';

type PropsIntro = {
  title: string;
  quantity: number;
}

export function DashboardIntroduction({ title, quantity }: PropsIntro) {
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
