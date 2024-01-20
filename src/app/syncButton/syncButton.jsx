import React, { useState } from "react";
import "./Modal.css"; // Import your modal styles

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Additional logic to clear modal content can be added here
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Modal Content</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
