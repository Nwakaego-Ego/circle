"use client";
import React, { useState } from "react";
import Modal from "react-modal";
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

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      // Check if the selected file is an image
      setSelectedImage(URL.createObjectURL(file));
    } else {
      // Handle the case when a non-image file is selected
      alert("Please select a valid image file");
    }
  };

  const handleImportClick = () => {
    if (selectedImage) {
      console.log("Selected Image:", selectedImage);

      // Perform actions with the selected image, if needed
      // For example, you can display the image in your UI or upload it to a server
    } else {
      console.log("No image selected");
    }
  };

  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  const xMark = () => {
    closeModal();
    setPastedText("");
    setPastedImage("");
    setToggle(false);
  };

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
            <FontAwesomeIcon icon={faXmark} className="fa" onClick={xMark} />
          </div>

          <div className="sync-modal-btn-container">
            <FontAwesomeIcon
              icon={faFileImport}
              className="sync-modal-btn-import"
            />
            <input
              type="file"
              accept="image/*"
              className="file-input"
              onChange={handleImageChange}
            />
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
          <div className="sync-modal-buttons">
            <FontAwesomeIcon
              icon={faPaste}
              className="sync-modal-btn-paste"
              onClick={handlePaste}
            />

            {/* <input type="file" accept="image/*" onChange={handleImageChange} /> */}
            {/* <div className="sync-modal-btn-container">
              <FontAwesomeIcon
                icon={faFileImport}
                className="sync-modal-btn-import"
              />
              <input
                type="file"
                accept="image/*"
                className="file-input"
                onChange={handleImageChange}
              />
            </div> */}

            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />
            )}
            <button onClick={handleImportClick}></button>
            {/* <FontAwesomeIcon
              icon={faFileImport}
              className=" sync-modal-btn-import"
              onClick={handlePaste}
             
            /> */}
            <FontAwesomeIcon
              icon={faUserGroup}
              className="sync-modal-btn-circles"
              onClick={handleToggle}
            />
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
