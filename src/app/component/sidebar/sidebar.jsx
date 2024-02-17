import React from "react";
import { FaClock, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useSelector } from "react-redux";
import "./sidebar.css";

const Sidebar = () => {
  const { time, scheduleCircle } = useSelector((state) => state.meeting.value);

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

            <div className="flex engagement-items">
              <div className="engagement-timer">{time}</div>
              <div className="engagement-title">{scheduleCircle}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
