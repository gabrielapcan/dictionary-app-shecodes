import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Definitions from "./Definitions";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.default);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleWord(event) {
    setKeyword(event.target.value);
  }
  function load() {
    search();
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

  if (results) {
    return (
      <div className="Dictionary">
        <div>{form}</div>
        <Definitions data={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
