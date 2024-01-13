import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHourglass } from "@fortawesome/free-solid-svg-icons";
import { FaClock } from "react-icons/fa";
import "./sidebar.css";

const Sidebar = () => {
  const engagements = [
    {
      title: "Our Gossip",
      time: "4 : 30pm",
    },
    {
      title: "Our Gossip",
      time: "4 : 30pm",
    },
    {
      title: "Our Gossip",
      time: "4 : 30pm",
    },
    {
      title: "Our Gossip",
      time: "4 : 30pm",
    },
  ];
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
          <div className="engagement-item ">
            <FaClock className="fa" />
            <div className="engagement-text">Engagements</div>
          </div>

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
