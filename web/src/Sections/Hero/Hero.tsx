'use client'
import { ModalLogin } from '@/components/Modais/ModalLogin/ModalLogin';
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary';
import Image from 'next/image';
import MouseIcon from '/public/images/icons/mouse.svg'
import './Hero.scss';
import LinkSecondary from '@/components/Links/LinkSecondary/LinkSecondary';
import { useSessionContext } from '@/contexts/SessionContext';
import useModal from '@/hooks/useModal';


export function Hero() {
  const { isShowing, openModal, closeModal } = useModal();
  const { session } = useSessionContext()


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
          {!session?.user ? (
            <ButtonPrimary label='Login to-do list' onClick={openModal} />
          ) : (
            <LinkSecondary label='Go to Dashboard' title='Go to Dashboard' href='/dashboard' />
          )}
        </article>
        <div className="hero__wrapperImg">
          <Image src="/images/common/hero-img.png" alt="" width={0} height={0} sizes='100vh' className="hero__image" />
        </div>
      </div>
      <span className='hero__guide'>
        <MouseIcon className="hero__icon" />
        <p>Scrolling</p>
      </span>
      <ModalLogin isShowing={isShowing} closeModal={closeModal} />
    </section>
  )
}
