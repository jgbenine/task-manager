import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  function openModal(modalType: string) {
    setIsShowing(true);
    setActiveModal(modalType);
  }

  function closeModal() {
    setIsShowing(false);
    setActiveModal(null);
  }

  return {
    isShowing,
    activeModal,
    openModal,
    closeModal,
  };
};

export default useModal;