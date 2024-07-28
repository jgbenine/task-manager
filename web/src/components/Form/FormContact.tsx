'use client'
import React, { useState } from 'react';
import { Input } from './components/Input/Input';
import { TextArea } from './components/TextArea/TextArea';
import { ButtonPrimary } from '../Buttons/ButtonPrimary';
import { Email } from '@/app/api/_server/email/email-server';
import { z } from 'zod';
import IconMail from '../../../public/images/icons/mail-icon.svg';
import './FormContact.scss';

const sendMailSchema = z.object({
  name: z.string().min(3, "Name should have at least 3 characters"),
  email: z.string().email("Invalid email format"),
  tel: z.string().min(5, "Telephone should have at least 4 characters"),
  message: z.string().min(4, "Message should have at least 4 characters"),
});

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const tel = formData.get('tel') as string;
    const message = formData.get('message') as string;

    const result = sendMailSchema.safeParse({ name, email, tel, message });

    if (!result.success) {
      const formattedErrors = result.error.errors.reduce((acc, err) => {
        if (err.path.length > 0) {
          acc[err.path[0]] = err.message;
        }
        return acc;
      }, {} as Record<string, string>);
      setErrors(formattedErrors);
      return;
    }
    setErrors({});

    try {
      await Email.sendEmail(name, email, tel, message);
      setSuccessMessage("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      setSuccessMessage("Error sending email. Please try again later.");
    }
  }

  return (
    <div className="formContact">
      <div className="formContact__image" />
      <div className="formContact-intro">
        <div className="formContact-intro__wrapperIcon">
          <IconMail />
        </div>
        <h4 className="formContact-intro__title">
          GET IN
          <span>TOUCH</span>
        </h4>
      </div>
      <form className="formContact-element" onSubmit={handleSubmit}>
        <Input name="name" label='Name*' type='text' placeholder='John Duo' error={errors.name} />
        <div className='form__wrapper'>
          <Input name="email" label='Email*' type='email' placeholder='example@email.com' error={errors.email} />
          <Input name="tel" label='Telephone*' type='tel' placeholder='( )_____-___' error={errors.tel} />
        </div>
        <TextArea name="message" label='Message' placeholder='Type what you want to say to us' error={errors.message} />
        <ButtonPrimary type='submit' label='Send now' />
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}
