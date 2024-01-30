"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaClock, FaSearch } from "react-icons/fa";
import Link from "next/link";
import "./sidebar.css";

const Sidebar = () => {
  const engagements = [
    { title: "Catch up", date: "January : 24", time: "4:30pm" },
    { title: "Feminist", date: "October : 4", time: "6:00pm" },
    { title: "Book Club", date: "December : 17", time: "7:45pm" },
    { title: "Football Bant", date: "March : 28", time: "9:15pm" },
  ];

  return (
    <>
      <div className="circle-main">
        <div className="circles-div">
          {" "}
          <FaSearch className="fa" />
        </div>

        <div className="circle-second-main-container">
          <div>
            <div className="circle">Catch up</div>
            <div className="circle">Feminist</div>
            <div className="circle">Book Club</div>
            <div className="circle">Football Bant</div>
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
                <div key={item.id} className="flex engagement-items">
                  <div className="engagement-title">{item.title}</div>
                  <div className=" engagement-timer">{item.time}</div>
                  {/* <div className=" engagement-timer">{item.date}</div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
