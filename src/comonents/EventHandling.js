import React from "react";

function buttonClicked() {
  console.log("Button Clicked..!");
}

function mouseOverHere() {
  console.log("mouse brought on to the Image");
}

class EventHandling extends React.Component {
  render() {
      var imgURL = "http://placekitten.com/96/139";
    return (
      <div>
        <img onMouseOver={mouseOverHere} alt = "Test Img" src= {imgURL} />
        <button onClick={buttonClicked}>Click here</button>
      </div>
    );
  }
}
export default EventHandling;
