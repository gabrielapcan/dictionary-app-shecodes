import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(keyword);
  }

  function handleWord(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a keyword..."
          className="form-control"
          onChange={handleWord}
        ></input>
        <input
          type="submit"
          value="Search!"
          className="btn btn-primary"
        ></input>
      </form>
    </div>
  );
}
