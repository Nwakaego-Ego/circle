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
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Schedule a Meeting</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Date:
          </label>
          <DatePicker
            className="mt-1 p-2 border rounded-md w-full"
            selected={meetingDetails.date}
            onChange={handleDateTimeChange}
            dateFormat="MMMM d, yyyy"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Time:
          </label>
          <input
            className="mt-1 p-2 border rounded-md w-full"
            type="time"
            name="time"
            value={meetingDetails.time}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Type of Interaction:
          </label>
          <input
            className="mt-1 p-2 border rounded-md w-full"
            type="text"
            name="interactionType"
            value={meetingDetails.interactionType}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          type="submit"
        >
          Schedule Meeting
        </button>
      </form>
    </div>
  );
};

export default MeetingScheduler;
