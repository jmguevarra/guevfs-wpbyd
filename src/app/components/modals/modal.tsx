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
      <div
        className={`wp-modal-body ${
          isModalOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-10"
        }`}
      >
        <a className="modal-btn--closing" onClick={onClose}>
          &times;
        </a>
        <div>{modalContent}</div>
      </div>
    </div>
  );
};

export default Modal;
