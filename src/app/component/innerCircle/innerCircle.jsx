import React from "react";
import Link from "next/link";

const innerCircle = ({ item, onClose }) => {
  console.log(item);
  const innerCircle = () => {
    console.log(`Clicked on ${item}`);
    onClose();
  };

  return (
    <div className="modal-toggle-items">
      <Link href="/component/profile">
        <button onClick={innerCircle}>{item}</button>
      </Link>
    </div>
  );
};

export default innerCircle;
