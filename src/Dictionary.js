import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWord(event) {
    setKeyword(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="form">
      <div className="row">
        <div className="col-10 form-components">
          <input
            type="search"
            placeholder="Enter a keyword..."
            className="form-control search-bar"
            autoFocus="on"
            onChange={handleWord}
          ></input>
        </div>
        <div className="col-2 form-components">
          <input
            type="submit"
            value="Search"
            className="btn search-button"
          ></input>
        </div>
      </div>
    </form>
  );

  return (
    <div className="Dictionary">
      <div>{form}</div>
    </div>
  );
}
