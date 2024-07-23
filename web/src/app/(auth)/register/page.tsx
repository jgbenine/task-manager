import React from 'react'
import './page.scss';
import { Input } from '@/components/Form/components/Input/Input';
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary';
import Link from 'next/link';

export default function Register() {
  return (
    <main className="register">
      <div className="register__form">
        <h1 className="register__title">Register</h1>
        <form className="form">
          <Input label='Name' type="text" />
          <Input label='Email' type="email" />
          <Input label='Password' type="password" />
          <ButtonPrimary label="Register" />
        </form>
      </div>
    </main>
  )
}
