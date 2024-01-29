"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaClock, FaSearch } from "react-icons/fa";
import Link from "next/link";
import "./sidebar.css";

const Sidebar = () => {
  const engagements = [
    { title: "Our Gossip", time: "4:30pm" },
    { title: "Bible Study", time: "6:00pm" },
    { title: "Book Club", time: "7:45pm" },
    { title: "Twitter Trend", time: "9:15pm" },
  ];

  return (
    <>
      <div className="circle-main">
        <div className="circles-div">
          {" "}
          <FaSearch className="fa" />
        </div>

        <div>
          <div className="circle">Our Gossip</div>
          <div className="circle">Bible Study</div>
          <div className="circle">Book Club</div>
          <div className="circle">Twitter trend</div>
        </div>

        <div className="engagement">
          <Link href="/component/meeting">
            <div className="engagement-item ">
              <FaClock className="fa" />

              <div className="engagement-text ">Engagements</div>
            </div>
          </Link>

          {engagements.map((item) => {
            return (
              <div key={item.id} className="flex">
                <div>{item.title}</div>
                <div className=" engagement-timer">{item.time}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
