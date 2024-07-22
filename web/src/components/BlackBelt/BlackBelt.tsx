import React from 'react'
import './BlackBelt.scss'
import LinkSecondary from '../Links/LinkSecondary/LinkSecondary'

type PropsBlackBelt = {
  title?: string,
  description?: string
  description2?: string
  linkLabel?: string
  linkUrl?: string
}

export default function BlackBelt({ title, description, description2, linkLabel, linkUrl }: PropsBlackBelt) {
  return (
    <div className="blackBelt">
      <article className="blackBelt__content">
        <h2 className="blackBelt__title">{title}</h2>
        <p className="blackBelt__description">{description}</p>

        {description2 && <p className="blackBelt__description2">{description2}</p>}
        {linkLabel && linkUrl && <LinkSecondary label={linkLabel} href={linkUrl} />}
      </article>
    </div>
  )
}
