import React from "react";
import "./Phonetics.css";
import Sound from "./Sound";

export default function Phonetics(props) {
  if (props.data !== []) {
    return (
      <div className="Phonetics">
        <Sound data={props.data} />
      </div>
    );
  } else return null;
}
