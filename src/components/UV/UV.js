import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";
import Emoji from "../Emoji/Emoji";
import classes from "./UV.module.css";

const UV = (props) => {
  let [responseObj, setResponseObj] = useState({});
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  function getUVLongLat(e) {
    e.preventDefault();

    if (props.latitude !== -1 && props.longitude !== -1) {
      setError(false);
      setResponseObj({});
      setLoading(true);

      fetch(
        `https://api.weatherbit.io/v2.0/current?lat=${props.latitude}&lon=${props.longitude}&key=${process.env.REACT_APP_API_KEY}`
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
  }

  function getUVCity(e) {
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
      <h2>
        Do I need<a href="#disclaimer">*</a> to wear sunscreen today?{" "}
        <Emoji symbol="🌞" />
      </h2>
      <span>
        <form onSubmit={getUVCity}>
          <input
            type="text"
            placeholder="Enter a city"
            maxLength="50"
            className={classes.TextInput}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <span>
            <button className={classes.Button} type="submit">
              Search
            </button>
            &nbsp; OR &nbsp;
            <button
              className={classes.Button}
              onClick={getUVLongLat}
              disabled={!props.geolocation}
            >
              Current Location
            </button>
          </span>
        </form>
      </span>
      <Conditions responseObj={responseObj} error={error} loading={loading} />
    </div>
  );
};

export default UV;
