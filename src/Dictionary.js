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
      <div className="mt-5">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a keyword..."
                className="form-control"
                autoFocus="on"
                onChange={handleWord}
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search!"
                className="btn btn-secondary"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
