import React from 'react'
import { Input } from './components/Input/Input'
import { TextArea } from './components/TextArea/TextArea'
import './Form.scss';
import IconMail from '../../../public/images/icons/mail-icon.svg'

export function Formulario() {
  return (

    <div className="form">
      <div className="form__image" />
      <div className="form-intro">
        <div className="form-intro__wrapperIcon">
          <IconMail />
        </div>
        <h4 className="form-intro__title">
          GET IN
          <span>
            TOUCH
          </span>
        </h4>
      </div>
      <form className="form-element">
        <Input label='Name*' type='text' placeholder='John Duo' required />
        <div className='form__wrapper'>
          <Input label='Email*' type='email' placeholder='example@email.com' required />
          <Input label='Telephone*' type='tel' placeholder='( )_____-___' required />
        </div>
        <TextArea label='Menssage' placeholder='Type what you want to say to us' />
        <button className="form__btn" type='submit'>Send now</button>
      </form>
    </div>
  )
}
