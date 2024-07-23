import React from 'react'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import { Input } from '@/components/Form/components/Input/Input';
import registerUser from '../_actions/registerUser';

export function FormRegister() {
  return (
    <form className="form" action={registerUser}>
      <Input name="name" label='Name' type="text" />
      <Input name="email" label='Email' type="email" />
      <Input name="password" label='Password' type="password" />
      <ButtonPrimary type='submit' label="Register" />
    </form>
  )
}


