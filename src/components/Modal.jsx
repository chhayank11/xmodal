import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const Modal = ({ children, isOpen, onclose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onclose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 0, // 👈 overlay goes below root
        },
        content: {
          zIndex: 1,
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "10px",
          padding: "20px",
        },
      }}
    >
      <div>{children}</div>
    </ReactModal>
  );
};

export default Modal;
