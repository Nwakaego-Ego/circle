"use client";
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const MeetingScheduler = () => {
//   // State to manage input values
//   const [meetingDetails, setMeetingDetails] = useState({
//     date: null,
//     time: null,
//     interactionType: "",
//   });

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setMeetingDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   // Handle date and time changes
//   const handleDateTimeChange = (date) => {
//     setMeetingDetails((prevDetails) => ({
//       ...prevDetails,
//       date,
//     }));
//   };

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // You can handle the submission logic here, e.g., send details to the server
//     console.log("Meeting details submitted:", meetingDetails);
//   };

//   return (
//     <div>
//       <h2>Schedule a Meeting</h2>
//       <form onSubmit={handleFormSubmit}>
//         <div>
//           <label>Date:</label>
//           <DatePicker
//             selected={meetingDetails.date}
//             onChange={handleDateTimeChange}
//             dateFormat="MMMM d, yyyy"
//           />
//         </div>
//         <div>
//           <label>Time:</label>
//           <input
//             type="time"
//             name="time"
//             value={meetingDetails.time}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Type of Interaction:</label>
//           <input
//             type="text"
//             name="interactionType"
//             value={meetingDetails.interactionType}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="submit">Schedule Meeting</button>
//       </form>
//     </div>
//   );
// };

// export default MeetingScheduler;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./meeting.css";

const MeetingScheduler = () => {
  // State to manage input values
  const [meetingDetails, setMeetingDetails] = useState({
    date: null,
    time: null,
    interactionType: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeetingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle date and time changes
  const handleDateTimeChange = (date) => {
    setMeetingDetails((prevDetails) => ({
      ...prevDetails,
      date,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can handle the submission logic here, e.g., send details to the server
    console.log("Meeting details submitted:", meetingDetails);
  };

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
          <label className="form-label">Type of Interaction:</label>
          <input
            className="form-input"
            type="text"
            name="interactionType"
            value={meetingDetails.interactionType}
            onChange={handleInputChange}
          />
        </div>
        <button className="form-button" type="submit">
          Schedule Meeting
        </button>
      </form>
    </div>
  );
};

export default MeetingScheduler;
