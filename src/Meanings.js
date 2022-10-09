import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h6>
        <strong className="text-capitalize">{props.data.partOfSpeech}</strong>
      </h6>
      {props.data.definitions.map(function (definition, index) {
        return (
          <div key={index} className="mb-2">
            <div className="definition">
              <span className="number">{index + 1}.</span>{" "}
              {definition.definition}
            </div>
            <div className="example ">{definition.example}</div>
          </div>
        );
      })}
      <div className="row synonyms-box">
        {props.data.synonyms.map(function (synonym, index) {
          return (
            <div className="col-3 synonyms" key={index}>
              {synonym}
            </div>
          );
        })}
      </div>
    </div>
  );
}
