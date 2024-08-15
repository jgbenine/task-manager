import { Input } from '../../Form/components/Input/Input';
import { ButtonPrimary } from '../../Buttons/ButtonPrimary';
import { X } from 'lucide-react';
import { signIn } from "next-auth/react";
import useModal from '@/hooks/useModal';
import './ModalLogin.scss';

type PropsModal = {
  isShowingModalLogin: boolean;
  closeModalLogin: () => void;
};

export function ModalLogin({ isShowingModalLogin, closeModalLogin }: PropsModal) {

  if (!isShowingModalLogin) return null;

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;

    const result = await signIn("credentials", { email, password, redirect: false });

    if (result?.error) {
      alert('Erro ao realizar login, verifique suas credenciais e tente novamente!');
    }
    closeModalLogin();
  }

  return (
    <div className="modalLogin">
      <div className="modalLogin__content">
        <button className="modalLogin__btnClose" onClick={closeModalLogin}><X /></button>
        <article className="modalLogin-intro">
          <h2 className="modalLogin-intro__title">Sign In</h2>
          <p className="modalLogin-intro__description">to access your list.</p>
        </article>
        <form className="modalLogin-form" onSubmit={handleSubmit}>
          <Input name='email' label='Email' type="email" />
          <Input name='password' label='Password' type="password" autoComplete='off' />
          <ButtonPrimary type='submit' label="Sign in" />
          <span className="modalLogin__register">
            Don't you have an account?
            <a className="btnRegister" href="/register">Register</a>
          </span>
        </form>
      </div>
    </div>
  )
}
