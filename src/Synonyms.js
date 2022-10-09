import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.data);
  if (props.data.length !== 0) {
    return (
      <div className="Synonyms">
        <p>Synonyms</p>
        <div className="row box">
          {props.data.map(function (synonym, index) {
            return (
              <div className="col-3 synonym" key={index}>
                {synonym}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else return null;
}
