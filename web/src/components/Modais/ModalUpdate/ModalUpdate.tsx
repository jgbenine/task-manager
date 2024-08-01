'use client';
import { Input } from '@/components/Form/components/Input/Input';
import { TextArea } from '@/components/Form/components/TextArea/TextArea';
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary';
import { X } from 'lucide-react';
import { useTask } from '@/contexts/TaskContext';
import { SelectStatus } from '@/components/Form/components/Select/SelectStatus';
import { TasksServer } from '@/app/api/_server/tasks/tasks-server';
import '../ModalTask/ModalTask.scss';

type PropsModal = {
  isShowing: boolean;
  idTask: string;
  titlePlaceholder: string;
  descriptionPlaceholder?: string;
  statusPlaceholder?: string;
  closeModal: () => void;
};

export function ModalUpdate({ idTask, isShowing, closeModal, titlePlaceholder, descriptionPlaceholder, statusPlaceholder }: PropsModal) {
  if (!isShowing) return null;
  const { refreshTasks } = useTask();

  async function handleUpdateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const titleTask = formData.get('title') as string;
    const descriptionTask = formData.get('description') as string;
    const statusTask = formData.get('status') as string;

    if (!idTask) return;

    await TasksServer.updateTask(idTask, titleTask || undefined, descriptionTask || undefined, statusTask || undefined);
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
            <h2 className="modalTask-intro__title">
              Edit information</h2>
            <p className="modalTask-intro__desc">
              {titlePlaceholder}
            </p>
          </article>
        </div>
        <form className="modalTask-form" onSubmit={handleUpdateTask}>
          <Input name='title' label='Title' type="text" placeholder={titlePlaceholder} />
          {descriptionPlaceholder && <TextArea name='description' label='Description' placeholder={descriptionPlaceholder} />}
          {statusPlaceholder && <SelectStatus labelStatus={statusPlaceholder} />}
          <ButtonPrimary type="submit" label='Update Task' />
        </form>
      </div>
    </div>
  );
}
