import React from "react";
import Meanings from "./Meanings";
import "./Definitions.css";

export default function Definitions(props) {
  return (
    <div className="Definitions">
      <h3 className="text-capitalize mt-3">{props.data.word}</h3>
      <h5>{props.data.phonetics[0].text}</h5>
      <div>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings data={meaning} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
