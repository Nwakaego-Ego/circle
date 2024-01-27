"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./meeting.css";

const MeetingScheduler = () => {
  const [meetingDetails, setMeetingDetails] = useState({
    date: null,
    time: null,
    interactionType: "",
  });
  const [dropDownCircles, setDropDownCircles] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeetingDetails((prevDetails) => ({
      ...prevDetails,
      // [name]: value,
      time: value,
    }));
  };

  const handleInputCircles = (e) => {
    const { value } = e.target;
    setMeetingDetails((prevDetails) => ({
      ...prevDetails,
      interactionType: value,
    }));
    // setDropDownCircles(value);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCircleSelection = (circle) => {
    setMeetingDetails((prevDetails) => ({
      ...prevDetails,
      interactionType: circle,
    }));
    setDropDownCircles(circle);
    setIsDropdownOpen(false);
  };

  const handleDateTimeChange = (date) => {
    setMeetingDetails((prevDetails) => ({
      ...prevDetails,
      date,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Meeting details submitted:", meetingDetails);
  };

  const circles = ["Gossip", "Feminist", "Book Club", "Head Line"];

  return (
    <div className="meeting-container">
      <h2 className="meeting-heading">Schedule a Meeting</h2>
      <form className="meeting-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label className="form-label">Date:</label>
          <DatePicker
            className="form-input"
            selected={meetingDetails.date}
            onChange={handleDateTimeChange}
            dateFormat="MMMM d, yyyy"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Time:</label>
          <input
            className="form-input"
            type="time"
            name="time"
            value={meetingDetails.time}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Circle Name:</label>
          <div className="dropdown-container">
            <input
              className="form-input"
              type="text"
              name="interactionType"
              value={dropDownCircles}
              onChange={handleInputCircles}
              onClick={handleDropdownClick}
            />
            {isDropdownOpen && (
              <div className="dropdown">
                {circles.map((circle, id) => (
                  <div
                    key={id}
                    className="dropdown-item"
                    onClick={() => handleCircleSelection(circle)}
                  >
                    {circle}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <button className="form-button" type="submit">
          Schedule Meeting
        </button>
      </form>
    </div>
  );
};

export default MeetingScheduler;

// const MeetingScheduler = () => {
//   const [meetingDetails, setMeetingDetails] = useState({
//     date: null,
//     time: null,
//     interactionType: "",
//   });
//   const [dropDownCircles, setDropDownCircles] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setMeetingDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   const handleInputCircles = (e, circle) => {
//     const { name, value } = e.target;
//     setMeetingDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//     setDropDownCircles(circle);
//   };

//   const circles = ["Gossip", "Feminist", "Book Club", "Head Line"];

//   const handleDateTimeChange = (date) => {
//     setMeetingDetails((prevDetails) => ({
//       ...prevDetails,
//       date,
//     }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log("Meeting details submitted:", meetingDetails);
//   };

//   return (
//     <div className="meeting-container">
//       <h2 className="meeting-heading">Schedule a Meeting</h2>
//       <form className="meeting-form" onSubmit={handleFormSubmit}>
//         <div className="form-group">
//           <label className="form-label">Date:</label>
//           <DatePicker
//             className="form-input"
//             selected={meetingDetails.date}
//             onChange={handleDateTimeChange}
//             dateFormat="MMMM d, yyyy"
//           />
//         </div>
//         <div className="form-group">
//           <label className="form-label">Time:</label>
//           <input
//             className="form-input"
//             type="time"
//             name="time"
//             value={meetingDetails.time}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label className="form-label">Circle Name:</label>
//           <input
//             className="form-input"
//             type="text"
//             name="interactionType"
//             value={meetingDetails.interactionType}
//             onChange={handleInputCircles}
//           />
//         </div>
//         <button className="form-button" type="submit">
//           Schedule Meeting
//         </button>
//       </form>
//       {circles.map((circle, id) => {
//         return (
//           <div key={id}>
//             <div className="">{}</div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default MeetingScheduler;
