"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faBookmark,
  faUserLock,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import "./profile.css";

const Profile = ({ imgCollection }) => {
  const [images, setImages] = useState([]);

  const handleImgCollection = () => {
    const imagesCollection = imgCollection();
    setImages(imagesCollection);
  };

  console.log(images);

  return (
    <>
      <div className="container-wrapper">
        <div className="profile-container">
          <div className="profile-main">
            <Image
              src="/nwakaego.jpeg"
              alt="Note Image"
              width={300}
              height={200}
              layout="fit"
              objectFit="cover"
              className=" rounded-full w-60 h-60  mb-8"
            />
            <FontAwesomeIcon icon={faEdit} className="profile-edit-button" />
            {/* <button className="profile-edit-button">Edit </button> */}
            <p className="profile-profile">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores ullam, mollitia similique quas, totam, quia ab
              excepturi repellat nihil consectetur possimus quae a corporis id
              eius cumque ducimus maiores quidem.
            </p>
            <div className="flex profile-buttons ">
              <button onClick={handleImgCollection}>
                <FontAwesomeIcon
                  icon={faImages}
                  className="profile-memory profile-icon"
                />
              </button>
              <FontAwesomeIcon
                icon={faBookmark}
                className="profile-bookmark profile-icon"
              />
              <FontAwesomeIcon
                icon={faUserLock}
                className="profile-request-code profile-icon"
              />
              {/* <button className="profile-memory">Memory</button> */}
              {/* <button className="profile-bookmark">Bookmark</button> */}
              {/* <button className="profile-request-code">Request code</button> */}
              {images}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
