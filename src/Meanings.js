import React from "react";
import "./Meanings.css";
import Examples from "./Examples";
import Synonyms from "./Synonyms";

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
            <Examples data={definition.example} />
          </div>
        );
      })}
      <Synonyms data={props.data.synonyms} />
    </div>
  );
}
