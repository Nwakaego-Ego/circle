import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using react-router-dom

const ItemComponent = ({ item, onClose }) => {
  const handleButtonClick = () => {
    console.log(`Clicked on ${item}`);
    onClose();
    // Add code to navigate or perform other actions for the clicked item
  };

  return (
    <div className="modal-toggle-items">
      <button onClick={handleButtonClick}>{item}</button>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
};

export default ItemComponent;
