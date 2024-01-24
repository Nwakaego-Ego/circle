import React from "react";
import { Link } from "react-router-dom";

const innerCircle = ({ item, onClose }) => {
  console.log(item);
  const innerCircle = () => {
    console.log(`Clicked on ${item}`);
    onClose();
  };

  return (
    <div className="modal-toggle-items">
      <Link to="/">
        <button onClick={innerCircle}>{item}</button>
      </Link>
    </div>
  );
};

export default innerCircle;
