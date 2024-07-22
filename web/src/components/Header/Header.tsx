import React from 'react'
import './Header.scss';
import Link from 'next/link';
import Image from 'next/image';
import LinkPrimary from '../Links/LinkPrimary/LinkPrimary';

export function Header() {
  return (
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
      <LinkPrimary
        label="Entrar"
        href="/"
        title="Realizar login"
        target="_blank" />
    </header>
  )
}

