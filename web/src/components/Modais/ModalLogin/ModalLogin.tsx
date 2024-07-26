import { Input } from '../../Form/components/Input/Input';
import { ButtonPrimary } from '../../Buttons/ButtonPrimary';
import MailSvg from '../../../../public/images/common/mail.svg'
import './ModalLogin.scss';
import Link from 'next/link';
import LoginUser from '@/app/(auth)/register/_actions/loginUser';


type PropsModal = {
  isShowing: boolean;
  closeModal: () => void;
};

export function ModalLogin({ isShowing, closeModal }: PropsModal) {
  if (!isShowing) return null;

 async function handleSubmit(FormData: FormData){
    await LoginUser(FormData);
    closeModal();
  }
 
  return (
    <div className="modalLogin">
      <div className="modalLogin__content">
        <button className="modalLogin__btnClose" onClick={closeModal}>close</button>
        <div className="modalLogin-intro">
          <div className="modalLogin-intro__wrapperImg">
            <MailSvg />
          </div>
          <article className="modalLogin-intro__texts">
            <h2 className="modalLogin-intro__title">Sign In</h2>
            <p className="modalLogin-intro__description">to access your list.</p>
          </article>
        </div>
        <form className="modalLogin-form" action={handleSubmit}>
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
