import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faAlarmClock } from "@fortawesome/free-solid-svg-icons";
import { FaClock } from "react-icons/fa";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="circle-main">
        <div className="circles">Circles</div>
        <div>
          <div className="circle">Our Gossip</div>
          <div className="circle">Bible Study</div>
          <div className="circle">Book Club</div>
          <div className="circle">Twitter trend</div>
        </div>

        <div className="engagement">
          <div className="explorer-item">
            <FontAwesomeIcon icon={faAlarmClock} className="fa" />
            <FaClock />
            <div className="engagement-text">Engagements</div>
          </div>
          <div className="">
            <div className="">Our Gossip</div>
            <div className="">Bible Study</div>
            <div className="">Book Club</div>
            <div className="">Twitter trend</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
