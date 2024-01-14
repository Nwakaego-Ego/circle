import React from "react";
import Image from "next/image";
import "./feed.css";

const Feed = () => {
  const feed = [
    {
      image: "./nwakaego.jpeg",
      name: "nwakaego",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. SintLorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minus, saepe facilis id ipsam quos ut esse aperiam rem maiores.",
      img: "./junior_tired.webp",
    },
    {
      image: "./nwakaego.jpeg",
      name: "nwakaego",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. SintLorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minus, saepe facilis id ipsam quos ut esse aperiam rem maiores.",
      img: "./junior_tired.webp",
    },
    {
      image: "./nwakaego.jpeg",
      name: "nwakaego",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. SintLorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minus, saepe facilis id ipsam quos ut esse aperiam rem maiores.",
      img: "./junior_tired.webp",
    },
    {
      image: "./nwakaego.jpeg",
      name: "nwakaego",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. SintLorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minus, saepe facilis id ipsam quos ut esse aperiam rem maiores.",
      img: "./junior_tired.webp",
    },
  ];

  return (
    <>
      <div>
        <div className="">
          {feed.map((item) => {
            return (
              <div key={item.id} className="feed-container">
                <div className="feed-content-container">
                  <img
                    src={item.image}
                    alt="image"
                    width={50}
                    height={50}
                    className="feed-profile-img"
                  />
                  <p className="feed-name">{item.name}</p>
                  <p className="sync-text">{item.text}</p>
                  <img
                    src={item.img}
                    alt="image"
                    width={50}
                    height={50}
                    className="feed-content-img"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Feed;
