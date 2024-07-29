'use client'
import { ModalLogin } from '../Modais/ModalLogin/ModalLogin';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { User } from 'lucide-react'
import { useSessionContext } from '@/contexts/SessionContext';
import Link from 'next/link';
import Image from 'next/image';
import useModal from '@/hooks/useModal';
import './Header.scss';


export function Header() {
  const { session, logOut } = useSessionContext();
  const { isShowing, openModal, closeModal, activeModal } = useModal();

  return (
    <>
      <header className="header">
        <Link href="/" className="header__logo">
          <Image
            className="header__imgLogo"
            src="/images/common/Logo.svg"
            alt='Logo'
            width={0}
            height={0}
            sizes='100vh'
            quality={100}
            priority
          />
        </Link>
        {!session?.user ? (
          <ButtonPrimary
            label="Entrar"
            title="Realizar login"
            onClick={()=>openModal('login')}
          />
        ) :
          <div className="header__user">
            <span className="header__icon">
              <User />
            </span>
            <button className="header__logout" onClick={logOut}>Sair</button>
          </div>}
      </header>
      {activeModal == 'login' && <ModalLogin isShowing={isShowing} closeModal={closeModal} />}
    </>
  )
}

