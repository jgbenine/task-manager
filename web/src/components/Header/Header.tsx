'use client'
import { useState } from 'react'
import { Modal } from '../Modal/Modal';
import {ButtonPrimary} from '../Buttons/ButtonPrimary';
import Link from 'next/link';
import Image from 'next/image';
import './Header.scss';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


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
        <ButtonPrimary
          label="Entrar"
          title="Realizar login"
          onClick={toggleModal}
          />
      </header>
      <Modal isOpen={isModalOpen} toggleOpen={toggleModal} />
    </>
  )
}

