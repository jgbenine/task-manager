'use client';
import { Input } from '@/components/Form/components/Input/Input';
import { TextArea } from '@/components/Form/components/TextArea/TextArea';
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary';
import { X } from 'lucide-react';
import { TasksServer, TaskType } from '@/app/api/_server/tasks/tasks-server';
import { useSessionContext } from '@/contexts/SessionContext';
import { useTask } from '@/contexts/TaskContext';
import './ModalTask.scss';

type PropsModal = {
  isShowing: boolean;
  closeModal: () => void;
};

export default function ModalTask({ isShowing, closeModal }: PropsModal) {
  if (!isShowing) return null;

  const { session } = useSessionContext();
  const { refreshTasks } = useTask();

  async function handleFormCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!session) {
      console.error('Usuário não autenticado');
      return;
    }

    const formData = new FormData(event.currentTarget);
    const titleTask = formData.get('title') as string;
    const descriptionTask = formData.get('description') as string;
    const userEmail = session.user?.email as string;
    await TasksServer.createTask(titleTask, descriptionTask, userEmail);
    closeModal();
    refreshTasks();
  }

  return (
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
        <form className="modalTask-form" onSubmit={handleFormCreateTask}>
          <Input name='title' label='Title' type="text" placeholder='Add title for task' />
          <TextArea name='description' label='Description' placeholder='Add description for task' />
          <ButtonPrimary type="submit" label='Create task' />
        </form>
      </div>
    </div>
  );
}
