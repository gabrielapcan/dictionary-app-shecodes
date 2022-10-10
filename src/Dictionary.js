import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Definitions from "./Definitions";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.default);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    const pexelsApiKey =
      "563492ad6f917000010000019b1b1faa0feb4f509d1b8699ebb775e7";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios
      .get(pexelsApiUrl, {
        headers: {
          Authorization: `Bearer ${pexelsApiKey}`,
        },
      })
      .then(handlePexelsResponse);
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
        <div className="col-9 form-components">
          <input
            type="search"
            placeholder="Enter a keyword..."
            className="form-control search-bar"
            autoFocus="on"
            onChange={handleWord}
          ></input>
        </div>
        <div className="col-3 form-components">
          <input
            type="submit"
            value="Search"
            className="btn search-button"
          ></input>
        </div>
      </div>
      <div className="suggested">Suggested words: yoga, sunset, wine,...</div>
    </form>
  );

  if (results) {
    return (
      <div className="Dictionary">
        <section>{form}</section>

        <Definitions data={results} photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
