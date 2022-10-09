import React from "react";
import Meanings from "./Meanings";
import "./Definitions.css";
import Phonetics from "./Phonetics";

export default function Definitions(props) {
  return (
    <div className="Definitions">
      <h3 className="text-capitalize mt-3">{props.data.word}</h3>
      {props.data.phonetics.map(function (phonetic, index) {
        return (
          <div key={index}>
            <Phonetics data={phonetic} />
          </div>
        );
      })}

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
