"use client";
import React, { useState } from "react";
import ReactModal from "../modal/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faHome,
  faUser,
  faBell,
  faUsers,
  faGear,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./explorer.css";

const Explorer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
    console.log("Open Modal");
  };

  return (
    <div className="explorer-main">
      <div className="explorer">
        <div>
          <img
            src="/talking_drum.png"
            alt="talking drum"
            className="talking-drum"
          />
        </div>
        <div className="explorer-container mt-4">
          <div className="explorer-item">
            <FontAwesomeIcon icon={faHome} className="fa" />
            <div>Home</div>
          </div>
          <div className="explorer-item">
            <FontAwesomeIcon icon={faUser} className="fa" />
            <div>Profile</div>
          </div>
          <div className="explorer-item">
            <FontAwesomeIcon icon={faBell} className="fa" />
            <div>Notification</div>
          </div>
          <div className="explorer-item">
            <FontAwesomeIcon icon={faUserGroup} className="fa" />
            <div>Circle</div>
          </div>
          <div className="explorer-item">
            <FontAwesomeIcon icon={faUsers} className="fa" />
            <div>Yard</div>
          </div>
          <div className="explorer-item">
            <FontAwesomeIcon icon={faEnvelope} className="fa" />
            <div>Request</div>
          </div>
          <div className="explorer-item">
            <FontAwesomeIcon icon={faGear} className="fa" />
            <div>Setting</div>
          </div>
          <button className="btnSync" onClick={openModal}>
            Sync
          </button>
        </div>
      </div>
      <ReactModal modalOpen={modalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Explorer;
