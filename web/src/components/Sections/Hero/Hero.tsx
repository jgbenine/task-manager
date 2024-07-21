import React from 'react'
import './Hero.scss';
import LinkSecondary from '@/components/Links/LinkSecondary/LinkSecondary';
import Image from 'next/image';

export function Hero() {
  return (
    <section className='hero'>
      <div className="hero__container">
        <article>
          <h1 className="hero__title">
            Organize
            <span className="hero__sub">your daly jobs</span>
          </h1>
          <p className="hero__description">
            The only way to get things done
          </p>

          <LinkSecondary label='Go to To-do list' href='/' />
        </article>
        <div className="hero__wrapperImg">
          <Image src="/images/hero-img.png" alt="" width={0} height={0} sizes='100vh' className="hero__image" />
        </div>
      </div>
    </section>
  )
}
