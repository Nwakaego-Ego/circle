"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import InnerCircle from "../innerCircle/innerCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faPaste,
  faFileImport,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import "./modal.css";

const ReactModal = ({ modalOpen, closeModal }) => {
  const [toggle, setToggle] = useState(false);
  const [pastedText, setPastedText] = useState("");
  const [pastedImage, setPastedImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePaste = async () => {
    try {
      const clipboardItems = await navigator.clipboard.read();
      const clipboardText = await navigator.clipboard.readText();

      for (const clipboardItem of clipboardItems) {
        for (const type of clipboardItem.types) {
          if (type === "text/plain") {
            setPastedText(clipboardText);
            setPastedImage("");
          } else if (type.startsWith("image/")) {
            const blob = await clipboardItem.getType(type);
            const imageUrl = URL.createObjectURL(blob);
            setPastedImage(imageUrl);
            setPastedText("");
          }
        }
      }
    } catch (error) {
      console.error("Error pasting from clipboard:", error);
    }
  };

  const handleImageImport = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(URL.createObjectURL(file));
    } else {
      alert("Please select a valid image file");
    }
  };

  const items = ["Gossip", "Feminist", "Book Club", "Head Line"];

  const xMark = () => {
    closeModal();
    setPastedText("");
    setPastedImage("");
    setToggle(false);
    setSelectedImage("");
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  console.log(modalOpen);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "600px",
      height: "350px",
      borderRadius: "10px",
    },
  };

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="sync-modal-main">
          <div>
            <FontAwesomeIcon icon={faXmark} className="fa " onClick={xMark} />
          </div>
          {pastedText && (
            <div
              className="editable-text modal-text-format"
              contentEditable="true"
              suppressContentEditableWarning={true}
            >
              {pastedText}
            </div>
          )}
          {pastedImage && (
            <img
              src={pastedImage}
              alt="Pasted Image"
              className="modal-image-format"
            />
          )}
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
          )}
          <div className="sync-modal-buttons">
            <FontAwesomeIcon
              icon={faPaste}
              className="sync-modal-btn-paste modal-icons"
              onClick={handlePaste}
            />

            {/* <input type="file" accept="image/*" onChange={handleImageChange} /> */}
            <div className="sync-modal-btn-container">
              <FontAwesomeIcon
                icon={faFileImport}
                className="sync-modal-btn-import modal-icons"
              />
              <input
                type="file"
                accept="image/*"
                className="file-input"
                onChange={handleImageImport}
              />
            </div>
            <FontAwesomeIcon
              icon={faUserGroup}
              className="sync-modal-btn-circles modal-icons"
              onClick={handleToggle}
            />
          </div>

          {toggle &&
            items.map((item, id) => {
              return (
                <div key={id}>
                  {/* <div className="modal-toggle-items">{item}</div> */}
                  <InnerCircle
                    item={item}
                    onClose={closeModal}
                    className="modal-toggle-items"
                  />
                </div>
              );
            })}
        </div>
      </Modal>
    </div>
  );
};

export default ReactModal;
