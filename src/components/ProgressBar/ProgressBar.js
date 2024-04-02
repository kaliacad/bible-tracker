import React from "react";
import "./ProgressBar.css";

function ProgressBar({ percentage }) {
  return (
    <div className={`progress-bar-container`}>
      <div
        className={`progress-bar segment-read-color`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
