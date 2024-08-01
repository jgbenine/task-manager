import { Input } from '../../Form/components/Input/Input';
import { ButtonPrimary } from '../../Buttons/ButtonPrimary';
import { ModalRegister } from '../ModalRegister/ModalRegister';
import { X } from 'lucide-react';
import MailSvg from '../../../../public/images/common/mail.svg'
import LoginUser from '@/app/(auth)/_actions/loginUser';
import useModal from '@/hooks/useModal';
import './ModalLogin.scss';


type PropsModal = {
  isShowingModalLogin: boolean;
  closeModalLogin: () => void;
};

export function ModalLogin({ isShowingModalLogin, closeModalLogin }: PropsModal) {
  const { isShowing, openModal, closeModal, activeModal } = useModal();

  if (!isShowingModalLogin) return null;

  async function handleSubmit(FormData: FormData) {
    await LoginUser(FormData);
    window.location.reload();
  }

  function handleModalRegister(event: React.FormEvent){
    event.preventDefault();
    console.log('open Modal')
    openModal('register');
    // closeModalLogin();
  }

  return (
    <div className="modalLogin">
      <div className="modalLogin__content">
        <button className="modalLogin__btnClose" onClick={closeModalLogin}><X /></button>
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
          <Input name='password' label='Password' type="password" autoComplete='off' />
          {/* <button className='modalLogin__btnLoginWith'>
            Sign with
            <GgIcon />
          </button> */}
          <ButtonPrimary type='submit' label="Sign in" />
          <span className="modalLogin__register">
            Don't you have an account?
            <button className="btnRegister" onClick={handleModalRegister}>Register</button>
          </span>
        </form>
      </div>
      <ModalRegister isShowing={isShowing} closeModal={closeModal} />
    </div> 
  )
}
