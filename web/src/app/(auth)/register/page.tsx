'use client'
import React from 'react'
import { FormRegister } from './_components/FormRegister';
import './page.scss';

export default function Register() {
  return (
    <main className="register">
      <div className="register__form">
        <h1 className="register__title">Register</h1>
        <FormRegister />
      </div>
    </main>
  )
}
