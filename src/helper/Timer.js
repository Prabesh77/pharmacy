import React from "react";
import useInterval from "../hooks/useInterval";

import "../styles/Timer.css";

const Timer = ({ disableBtn, time, setTime }) => {
  useInterval(() => {
    if (time >= 0) {
      setTime(time - 1);
    }
  }, 1000);

  if (time <= 0) {
    disableBtn();
  }

  function timeFormat(time) {
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }

  // ~~ is a shorthand for Math.floor

  return (
    <div className="timer">
      <h1>{time > 0 ? timeFormat(time) : "Time Up!"}</h1>
      <p>{time > 0 ? "Seconds Left" : ""}</p>
    </div>
  );
};

export default Timer;
