import React from 'react'
import './CardList.scss';
import LinkSecondary from '../Links/LinkSecondary/LinkSecondary';

type PropsLink = {
  titleLink: string,
  hrefLink: string
}

type PropsCardList = {
  title: string,
  description: string,
  description_2?: string,
  items: Array<string>,
  variants?: "primary" | "secondary"
} & PropsLink;

export function CardList({ variants = "primary", title, description, description_2, items, titleLink, hrefLink }: PropsCardList) {
  return (
    <div className={`cardList ${variants === 'secondary' ? 'cardList--secondary' : ''}`}>
      <h3 className="cardList__title">{title}</h3>
      <p className="cardList__description">{description}</p>
      <p className="cardList__description cardList__description--highlight">{description_2}</p>
      <ul className="cardList__items">
        {items.map((item: string) => (
          <li className="cardList__item" key={item}>{item}</li>
        ))}
        <LinkSecondary
          label={titleLink}
          href={hrefLink}
          variants='black'
        />
      </ul>
    </div>
  )
}

