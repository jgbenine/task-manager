'use client'
import { useSessionContext } from '@/contexts/SessionContext';
import { ModalTask } from '@/components/Modais/ModalTask/ModalTask';
import { Plus } from 'lucide-react'
import useModal from '@/hooks/useModal';

export function DashboardIntro() {
  const { isShowing, openModal, closeModal } = useModal();
  const { session } = useSessionContext();

  return (
    <>
      {session?.user && (
        <div className="dashboard__intro">
          <h3 className="dashboard__title">Welcome to your dashboard!</h3>
          <button className="dashboard__btn" onClick={()=>openModal('newtask')}>
            Create new task
            <Plus className="dashboard__icon" />
          </button>
          {isShowing && (
            <ModalTask isShowing={isShowing} closeModal={closeModal} />
          )}
        </div>
      )}
    </>
  )
}
