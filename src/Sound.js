import React from "react";
import "./Sound.css";

export default function Sound(props) {
  if (props.data.audio !== "") {
    let audio = new Audio(props.data.audio);

    function handleSound() {
      audio.play();
    }
    return (
      <div>
        <i
          className="fa-regular fa-circle-play Audio active"
          onClick={handleSound}
        ></i>
        <span className="phonetic-text">{props.data.text}</span>
      </div>
    );
  } else
    return (
      <div>
        <i className="fa-regular fa-circle-play Audio deactivated"></i>
        <span className="phonetic-text">{props.data.text}</span>
      </div>
    );
}
