'use client'
import { ModalLogin } from '@/components/Modais/ModalLogin/ModalLogin';
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary';
import { useSessionContext } from '@/contexts/SessionContext';
import LinkSecondary from '@/components/Links/LinkSecondary/LinkSecondary';
import Image from 'next/image';
import MouseIcon from '/public/images/icons/mouse.svg'
import useModal from '@/hooks/useModal';
import './Hero.scss';


export function Hero() {
  const { isShowing, openModal, closeModal } = useModal();
  const { session } = useSessionContext()

  return (
    <section className='hero'>
      <div className="hero__container">
        <article className="hero__texts">
          <h1 className="hero__title">
            Organize
            <span className="hero__sub">your daly jobs</span>
          </h1>
          <p className="hero__description">
            The only way to get things done
          </p>
          {!session?.user ? (
            <ButtonPrimary label='Login to-do list' onClick={() => openModal('login')} />
          ) : (
            <span className="hero__btns">
              {/* <LinkSecondary label='Go to Dashboard' title='Go to Dashboard' href='/dashboard' /> */}
              <LinkSecondary variants='black' label='Go to-do list' title='Go to Dashboard' href='#todo-list' />
            </span>

          )}
        </article>
        <div className="hero__wrapperImg">
          <Image src="/images/common/hero-img.jpg" alt="" width={0} height={0} sizes='100vh' className="hero__image" />
        </div>
      </div>
      <span className='hero__guide'>
        <MouseIcon className="hero__icon" />
        <p>Scrolling</p>
      </span>
      <ModalLogin isShowingModalLogin={isShowing} closeModalLogin={closeModal} />
    </section>
  )
}
