import React from "react";
import "./Phonetics.css";
import Sound from "./Sound";

export default function Phonetics(props) {
  if (props.data !== []) {
    return (
      <div className="Phonetics">
        <Sound data={props.data.audio} />
        <span className="phonetic-text">{props.data.text}</span>
      </div>
    );
  } else return null;
}
