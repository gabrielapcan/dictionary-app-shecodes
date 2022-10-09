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
        <div className="col-md-10 mt-2">
          <input
            type="search"
            placeholder="Enter a keyword..."
            className="form-control w-100 search-bar"
            autoFocus="on"
            onChange={handleWord}
          ></input>
        </div>
        <div className="col-md-2 mt-2 text-center">
          <input
            type="submit"
            value="Search!"
            className="btn w-md-100 search-button"
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
