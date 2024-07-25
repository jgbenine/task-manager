import { Input } from '../../Form/components/Input/Input';
import { ButtonPrimary } from '../../Buttons/ButtonPrimary';
import MailSvg from '../../../../public/images/icons/mail-icon.svg'
import GgIcon from '../../../public/images/icons/gg-icon.svg'
import './ModalLogin.scss';
import Link from 'next/link';
import LoginUser from '@/app/(auth)/register/_actions/loginUser';
import { useEffect } from 'react';

type PropsModal = {
  isOpen: boolean;
  toggleOpen: () => void;
}


export function ModalLogin({ isOpen, toggleOpen }: PropsModal) {

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest('.modal__content') === null) {
        toggleOpen();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, toggleOpen]);

  if (!isOpen) return null;

  return (
    <div className="modalLogin">
      <div className="modalLogin__content">
        <button className="modalLogin__btnClose" onClick={toggleOpen}>close</button>
        <div className="modalLogin-intro">
          <div className="modalLogin-intro__wrapperImg">
            <MailSvg />
          </div>
          <article className="modalLogin-intro__texts">
            <h2 className="modalLogin-intro__title">Sign In</h2>
            <p className="modalLogin-intro__description">to access your list.</p>
          </article>
        </div>
        <form className="modalLogin-form" action={LoginUser}>
          <Input name='email' label='Email' type="email" />
          <Input name='password' label='Password' type="password" />
          {/* <button className='modalLogin__btnLoginWith'>
            Sign with
            <GgIcon />
          </button> */}
          <ButtonPrimary type='submit' label="Sign in" />
          <Link className="modalLogin__linkRegister" href="/register">Register</Link>
        </form>
      </div>
    </div>
  )
}
