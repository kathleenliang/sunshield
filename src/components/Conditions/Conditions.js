import React from "react";
import classes from "./Conditions.module.css";

const conditions = (props) => {
  function getSunscreenMsg(e) {
    if (e >= "0" && e <= "2") {
      return "No need to wear sunscreen, get some Vitamin D!";
    } else if (e >= "3" && e <= "7") {
      return "Wear a hat and sunscreen!";
    } else {
      return "Stay in the shade or inside! Wear a hat, sunglasses, and sunscreen.";
    }
  }

  return (
    <div className={classes.Wrapper}>
      {props.error && (
        <small className={classes.Small}>Please enter a valid city.</small>
      )}
      {props.loading && <div className={classes.Loader}>Loading...</div>}
      {props.responseObj.data ? (
        <div>
          <p>
            The UV index is currently {Math.round(props.responseObj.data[0].uv)}{" "}
            in {props.responseObj.data[0].city_name}.
          </p>
          <p>{getSunscreenMsg(props.responseObj.data[0].uv)}</p>
        </div>
      ) : null}
    </div>
  );
};

export default conditions;
