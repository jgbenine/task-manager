'use client'
import ModalTask from '@/components/Modais/ModalTask/ModalTask';
import useModal from '@/hooks/useModal';
import { Plus } from 'lucide-react'
import React from 'react'

export default function DashboardIntro() {
  const { isShowing, openModal, closeModal } = useModal();

  return (
    <div className="dashboard__intro">
      <h3 className="dashboard__title">Welcome to your dashboard!</h3>
      <button className="dashboard__btn" onClick={openModal}>
        Create new task
        <Plus className="dashboard__icon" />
      </button>
      {isShowing && (
        <ModalTask isShowing={isShowing} closeModal={closeModal} />
      )}
    </div>
  )
}
