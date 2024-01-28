import React from "react";

class MyButton extends React.Component {
  handleClick = () => {
    alert("Button clicked!");
    // You can perform additional actions here
  };

  render() {
    return (
      <button className="my-button" onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

export default MyButton;
