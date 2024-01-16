import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./modal.css";

const ReactModal = ({ modalOpen, closeModal }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

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
      borderRadius: "10px",
    },
  };

  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="sync-modal-main">
          <div>
            {" "}
            <FontAwesomeIcon icon={faXmark} className="fa" />
          </div>
          <div className="sync-modal-placeholder">Sync here!</div>
          <div className="sync-modal-buttons">
            <button className="sync-modal-btn-paste">Paste</button>
            <button className=" sync-modal-btn-import">Import</button>
            <button className="sync-modal-btn-circles" onClick={handleToggle}>
              Circles
            </button>
          </div>
          {toggle &&
            items.map((item, id) => {
              return (
                <div key={id}>
                  <div className="modal-toggle-items">{item}</div>
                </div>
              );
            })}
        </div>
      </Modal>
    </div>
  );
};

export default ReactModal;
