"use client";
import React, { useState } from "react";
import Image from "next/image";
import { imgCollection } from "../../imgCollection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faBookmark,
  faUserLock,
  faEdit,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import "./profile.css";

const Profile = () => {
  console.log(imgCollection);
  const [images, setImages] = useState([]);
  const [randomCode, setRandomCode] = useState();

  const handleImgCollection = () => {
    if (images.length > 0) {
      setImages([]);
    } else {
      setImages(imgCollection);
    }
  };

  console.log(images);

  const generateRandomCode = () => {
    // const code = generateRandomCode();
    setRandomCode(Math.floor(Math.random() * 90000) + 10000);
    // setRandomCode(code);
  };

  const hideCode = () => {
    setRandomCode("");
  };

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
              className="rounded-full w-60 h-60 mb-8"
            />
            <FontAwesomeIcon icon={faEdit} className="profile-edit-button" />
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
              <button onClick={generateRandomCode}>
                <FontAwesomeIcon
                  icon={faUserLock}
                  className="profile-request-code profile-icon"
                />
              </button>
            </div>
            {images.map((item, id) => {
              return (
                <div key={id}>
                  <img
                    src={item.image}
                    alt="profile_img"
                    width={300}
                    height={200}
                    layout="fit"
                    objectFit="cover"
                    className="rounded-full w-60 h-60 mb-8"
                  />
                </div>
              );
            })}
            <div className="flex">
              {randomCode}
              <button onClick={hideCode}>
                <FontAwesomeIcon icon={faEyeSlash} className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
