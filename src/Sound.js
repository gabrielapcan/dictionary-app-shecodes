import React from "react";
import "./Sound.css";

export default function Sound(props) {
  if (props.data !== "") {
    let audio = new Audio(props.data);
    function handleSound() {
      audio.play();
    }
    return (
      <span className="Audio">
        <i
          className="fa-regular fa-circle-play active"
          onClick={handleSound}
        ></i>
      </span>
    );
  } else
    return (
      <span className="Audio">
        <i className="fa-regular fa-circle-play deactivated"></i>
      </span>
    );
}
