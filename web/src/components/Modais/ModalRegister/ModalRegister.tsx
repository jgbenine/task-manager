'use client';
import { X } from 'lucide-react';
import { FormRegister } from '@/components/Form/components/FormRegister/FormRegister';
import '../ModalTask/ModalTask.scss';

type PropsModal = {
  isShowing: boolean;
  closeModal: () => void;
};

export function ModalRegister({ isShowing, closeModal }: PropsModal) {
  if (!isShowing) return null;

  return (
    <div className="modalTask">
      <div className="modalTask__content">
        <button className="modalLogin__btnClose" onClick={closeModal}>
          <X />
        </button>
        <div className="modalTask-intro">
          <article className="modalTask-intro__texts">
            <h2 className="modalTask-intro__title">Register account</h2>
          </article>
        </div>
        <FormRegister />
      </div>
    </div>
  );
}
