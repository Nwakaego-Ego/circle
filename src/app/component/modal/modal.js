import React from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ReactModal = ({ modalOpen, closeModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
      height: "300px",
    },
  };

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div>
          <div>
            {" "}
            <FontAwesomeIcon icon={faXmark} className="fa" />
          </div>
          <div className="modal-btn">
            <button>Paste</button>
            <button>Import</button>
            <button>Circles</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ReactModal;
