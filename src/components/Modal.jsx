import React from "react";
import "./Modal.css";

const Modal = ({ children, isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  // Close modal if backdrop clicked
  const handleBackdropClick = (e) => {
    if (e.target.className === "modal-backdrop") {
      setIsOpen(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
