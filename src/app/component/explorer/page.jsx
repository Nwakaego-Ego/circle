"use client";
import React, { useState } from "react";
import ReactModal from "../modal/modal";
import Link from "next/link";
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
            <Link href="/component/profile" className="flexg">
              <FontAwesomeIcon icon={faUser} className="fa" />
              <div>Profile</div>
            </Link>
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

// "use client";
// import React, { useState, useEffect } from "react";
// import ReactModal from "../modal/modal";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUserGroup,
//   faHome,
//   faUser,
//   faBell,
//   faUsers,
//   faGear,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";
// import "./explorer.css";

// const Explorer = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   return (
//     <div className="explorer">
//       <h1>{isClient ? "This is never prerendered" : "Prerendered"}</h1>
//       <div>
//         <img
//           src="/talking_drum.png"
//           alt="talking drum"
//           className="talking-drum"
//         />
//       </div>
//       <div className="explorer-container">
//         <div className="explorer-item">
//           <FontAwesomeIcon icon={faHome} className="fa" />
//           <div>Home</div>
//         </div>
//         <div className="explorer-item">
//           <Link href="/component/profile" className="flex">
//             <FontAwesomeIcon icon={faUser} className="fa" />
//             <div>Profile</div>
//           </Link>
//         </div>
//         <div className="explorer-item">
//           <FontAwesomeIcon icon={faBell} className="fa" />
//           <div>Notification</div>
//         </div>
//         <div className="explorer-item">
//           <FontAwesomeIcon icon={faUserGroup} className="fa" />
//           <div>Circle</div>
//         </div>
//         <div className="explorer-item">
//           <FontAwesomeIcon icon={faUsers} className="fa" />
//           <div>Yard</div>
//         </div>
//         <div className="explorer-item">
//           <FontAwesomeIcon icon={faEnvelope} className="fa" />
//           <div>Request</div>
//         </div>
//         <div className="explorer-item">
//           <FontAwesomeIcon icon={faGear} className="fa" />
//           <div>Setting</div>
//         </div>
//         <button className="btnSync" onClick={openModal}>
//           Sync
//         </button>
//       </div>
//       <ReactModal modalOpen={modalOpen} closeModal={closeModal} />
//     </div>
//   );
// };

// export default Explorer;
