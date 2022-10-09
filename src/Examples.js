import React from "react";
import "./Examples.css";

export default function Examples(props) {
  if (props.data) {
    return (
      <div className="Examples">
        <u>Example</u>: {props.data}
      </div>
    );
  } else return null;
}
