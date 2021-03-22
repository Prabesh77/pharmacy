import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const AuthenticateComponent = props => {
  useEffect(() => {
    const jwt = localStorage.getItem("jwt_auth_token");
    if (!jwt || jwt === undefined || jwt === "" || jwt === null) {
      props.history.push("/login");
    }
  }, [props.history]);
  return <>{props.children}</>;
};

export default withRouter(AuthenticateComponent);
