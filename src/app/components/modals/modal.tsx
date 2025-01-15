"use client";

import useWPContext from "@/hooks/usewpcontext";

interface props {
  containerWidth?: string;
}

const Modal: React.FC<props> = ({ containerWidth }) => {
  const { isModalOpen, setIsModalOpen, modalContent } = useWPContext();

  if (!isModalOpen) return null;

  //closing modal
  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="wp-modal-overlay" onClick={onClose}>
      <div
        className={`wp-modal-body ${containerWidth ? containerWidth : "w-96"}`}
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
