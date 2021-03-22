import React from "react";

import "./Spinner.css";

const Spinner = ({ run }) => {
  return (
    <div
      className="container spinner-container center"
      style={{ display: run ? "block" : "none" }}>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
