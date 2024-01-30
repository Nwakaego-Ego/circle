import React from "react";
import Image from "next/image";
import "./feed.css";

const Feed = () => {
  const feed = [
    {
      image: "./nwakaego.jpeg",
      name: "nwakaego",
      circle: "Feminst",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. SintLorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minus, saepe facilis id ipsam quos ut esse aperiam rem maiores.",
      img: "./feminst_feed.jpg",
    },
    {
      image: "./feed_profile_pic.png",
      name: "Micheal",
      circle: "Catch up",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. SintLorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minus, saepe facilis id ipsam quos ut esse aperiam rem maiores.",
      img: "./catchup_feed.avif",
    },
    {
      image: "./gregory_feed_profile.webp",
      name: "Gregory",
      circle: "Football Bant",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. SintLorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minus, saepe facilis id ipsam quos ut esse aperiam rem maiores.",
      img: "./football_feed.jpg",
    },
    {
      image: "./ego.jpeg",
      name: "Simi",
      circle: "Book Club",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. SintLorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minus, saepe facilis id ipsam quos ut esse aperiam rem maiores.",
      img: "./bookclub_feed.jpg",
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

                  <span className="sync-circle">{item.circle}</span>
                  <span className="sync-name">({item.name})</span>
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
