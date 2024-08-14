'use client'
import { ModalLogin } from '../Modais/ModalLogin/ModalLogin';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { User } from 'lucide-react'
import { useSessionContext } from '@/contexts/SessionContext';
import { PackageCheck } from 'lucide-react'
import Link from 'next/link';
import useModal from '@/hooks/useModal';
import './Header.scss';


export function Header() {
  const { session, logOut } = useSessionContext();
  const { isShowing, openModal, closeModal, activeModal } = useModal();

  return (
    <>
      <header className="header">
        <Link href="/" className="header__intro">
          <span>
            <PackageCheck
              className="header__imgLogo"
              size={40}
            />
          </span>
          <p className="header__text">To-do list</p>
        </Link>
        {!session?.user ? (
          <ButtonPrimary
            label="Entrar"
            title="Realizar login"
            onClick={() => openModal('login')}
          />
        ) :
          <div className="header__user">
            <span className="header__user-avatar">
              <User />
            </span>
            <div className="header__user-info">
              <p className="header__user-name">{session.user.name}</p>
              <button className="header__logout" onClick={logOut}>Logout</button>
            </div>
          </div>}
      </header>
      {activeModal == 'login' && <ModalLogin isShowingModalLogin={isShowing} closeModalLogin={closeModal} />}
    </>
  )
}

