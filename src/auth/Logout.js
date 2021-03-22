import React from "react";
import { withRouter, Link } from "react-router-dom";

import "./Logout.css";

const Logout = () => {
  return (
    <div className="logout center">
      <h1 className="head">You have been logged out</h1>
      <Link to="/login">
        <p className="link">Log in again?</p>
      </Link>
    </div>
  );
};

export default withRouter(Logout);
