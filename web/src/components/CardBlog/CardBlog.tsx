import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './CardBlog.scss'

type PropsCardBlog = {
  title: string
  imageUrl: string
  link: string
  category: string
}

export function CardBlog({title, imageUrl, link, category}: PropsCardBlog) {
  return (
    <div className="cardBlog">
      <div className="cardBlog__wrapperImg">
        <Image src={imageUrl} className="cardBlog__image" alt="image post blog" width={0} height={0} sizes='100vh'  />
      </div>
      <article className="cardBlog__texts">
        <p className="cardBlog__category">{category}</p>
        <h2 className="cardBlog__title">{title}</h2>
        <Link href={link} className="cardBlog__link">read more</Link>
      </article>
    </div>
  )
}

