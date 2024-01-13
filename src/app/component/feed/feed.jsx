import React from "react";
import Image from "next/image";
import "./feed.css";

const Feed = () => {
  return (
    <>
      <div>
        <div className="feed-container">
          <div className="feed-content-container">
            <Image
              src="/nwakaego.jpeg"
              alt="image"
              width={50}
              height={50}
              className="feed-profile-img"
            />
            <p>Nwakaego</p>
            <p className="sync-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              minus, saepe facilis id ipsam quos ut esse aperiam rem maiores.
            </p>
            <Image
              src="/junior_tired.webp"
              alt="talking drum"
              className="feed-content-img"
              width={900}
              height={200}
            />
          </div>
        </div>
        <div className="feed-container">
          <div className="feed-content-container">
            <Image
              src="/nwakaego.jpeg"
              alt="image"
              width={50}
              height={50}
              className="feed-profile-img"
            />
            <p>Nwakaego</p>
            <p className="sync-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              minus, saepe facilis id ipsam quos ut esse aperiam rem maiores.
            </p>
            <Image
              src="/junior_tired.webp"
              alt="talking drum"
              className="feed-content-img"
              width={900}
              height={200}
            />
          </div>
        </div>
        <div className="feed-container">
          <div className="feed-content-container">
            <Image
              src="/nwakaego.jpeg"
              alt="image"
              width={50}
              height={50}
              className="feed-profile-img"
            />
            <p className="feed-name text-red-600">Nwakaego</p>
            <p className="sync-text text-red-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              minus, saepe facilis id ipsam quos ut esse aperiam rem maiores.
            </p>
            <Image
              src="/junior_tired.webp"
              alt="talking drum"
              className="feed-content-img"
              width={900}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
