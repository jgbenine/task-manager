import React from 'react'
import './ModalTask.scss'
import { Input } from '@/components/Form/components/Input/Input'
import { TextArea } from '@/components/Form/components/TextArea/TextArea'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import { X } from 'lucide-react'
import { TaksServer } from '@/app/api/_server/tasks/tasks-server'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'


type PropsModal = {
  isShowing: boolean;
  closeModal: () => void;
};

export default function ModalTask({ isShowing, closeModal }: PropsModal) {
  if (!isShowing) return null;
  const { data: session } = useSession();

  function handleFormCreateTask(formData: FormData) {
    if (!session) {
      console.error('Usuário não autenticado');
      return;
    }
    const userEmail = session?.user?.email as string;
    const titleTask = formData.get('title') as string;
    const descriptionTask = formData.get('description') as string;
    TaksServer.createTask(titleTask, descriptionTask, userEmail);
    closeModal();
  }

  return (
    <>
      <div className="modalTask">
        <div className="modalTask__content">
          <button className="modalLogin__btnClose" onClick={closeModal}>
            <X />
          </button>
          <div className="modalTask-intro">
            <article className="modalTask-intro__texts">
              <h2 className="modalTask-intro__title">Create new task</h2>
            </article>
          </div>
          <form className="modalTask-form" action={handleFormCreateTask}>
            <Input name='title' label='Title' type="text" placeholder='Add title for task' />
            <TextArea name='description' label='Description' placeholder='Add description for task' />
            <ButtonPrimary type="submit" label='Create task' />
          </form>
        </div>
      </div>
    </>
  )
}
