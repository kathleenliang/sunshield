import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";
import classes from "./UV.module.css";

const UV = () => {
  let [responseObj, setResponseObj] = useState({});
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  function getUV(e) {
    e.preventDefault();

    if (city.length === 0) {
      return setError(true);
    }

    setError(false);
    setResponseObj({});
    setLoading(true);

    let uriEncodedCity = encodeURIComponent(city);

    fetch(
      `https://api.weatherbit.io/v2.0/current?city=${uriEncodedCity}&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          throw new Error();
        }
        setResponseObj(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        console.log(err.message);
      });
  }

  return (
    <div>
      <h2>Find the UV index</h2>
      <form onSubmit={getUV}>
        <input
          type="text"
          placeholder="Enter city"
          maxLength="50"
          className={classes.textInput}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className={classes.Button} type="submit">
          Get UV
        </button>
      </form>
      <Conditions responseObj={responseObj} error={error} loading={loading} />
    </div>
  );
};

export default UV;
