'use client'
import { FormRegister } from '@/components/Form/components/FormRegister/FormRegister';
import { UserRoundPlus } from 'lucide-react';
import Image from 'next/image';
import './page.scss';

export default function Register() {
  return (
    <main className="register">
      <div className="register__container">
        <div className="register-form">
          <span className="register-form__intro">
            <h1 className="register-form__title">Register</h1>
            <UserRoundPlus className="register-form__icon" size={36} />
          </span>
          <FormRegister />
        </div>
        {/* <div className="register__wrapperImg">
            <Image className="register__image" src="/images/common/register/register-img.webp" width={0} height={0} alt="" sizes='100vw' />
          </div> */}
      </div>
    </main>
  )
}