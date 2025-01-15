"use client";

import useWPContext from "@/hooks/usewpcontext";

const Modal = () => {
  const { isModalOpen, setIsModalOpen, modalContent } = useWPContext();

  if (!isModalOpen) return null;

  //closing modal
  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="wp-modal-overlay" onClick={onClose}>
      <div className={`wp-modal-body`}>
        <a className="modal-btn--closing" onClick={onClose}>
          &times;
        </a>
        <div>{modalContent}</div>
      </div>
    </div>
  );
};

export default Modal;
