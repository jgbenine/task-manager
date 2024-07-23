'use client'
import { Modal } from '@/components/Modal/Modal';
import { useState } from 'react';
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary';
import Image from 'next/image';
import MouseIcon from '/public/images/icons/mouse.svg'
import './Hero.scss';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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

          <ButtonPrimary label='Go to To-do list' onClick={toggleModal} />
        </article>
        <div className="hero__wrapperImg">
          <Image src="/images/common/hero-img.png" alt="" width={0} height={0} sizes='100vh' className="hero__image" />
        </div>
      </div>
        <span className='hero__guide'>
          <MouseIcon className="hero__icon"/>
          <p>Scrolling</p>
        </span>
        <Modal isOpen={isModalOpen} toggleOpen={toggleModal} />
    </section>
  )
}
