import { Input } from '../Form/components/Input/Input';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import MailSvg from '../../../public/images/common/mail.svg'
import GgIcon from '../../../public/images/icons/gg-icon.svg'
import './Modal.scss';
import Link from 'next/link';

type PropsModal = {
  isOpen: boolean;
  toggleOpen: () => void;
}

export function Modal({ isOpen, toggleOpen }: PropsModal) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__btnClose" onClick={toggleOpen}>close</button>
        <div className="modal-intro">
          <div className="modal-intro__wrapperImg">
            <MailSvg />
          </div>
          <article className="modal-intro__texts">
            <h2 className="modal-intro__title">Sign In</h2>
            <p className="modal-intro__description">to access your list.</p>
          </article>
        </div>
        <form className="modal-form">
          <Input label='Email' type="email" />
          <Input label='Password' type="password" />
          {/* <button className='modal__btnLoginWith'>
            Sign with
            <GgIcon />
          </button> */}
          <ButtonPrimary label="Sign in" />
          <Link className="modal__linkRegister" href="/register">Register</Link>
        </form>
      </div>
    </div>
  )
}
