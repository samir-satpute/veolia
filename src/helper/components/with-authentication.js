import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WithAuthentication = (Component) => {

  const AuthenticationHOC = (props) => {
    // const [isAccessToken, setIsAccessToken] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
      //here we can check access token/role/user details
      // as per requirement add conditional check

      if (!localStorage.getItem("accessToken")) {
        navigate("/login");
      }
    }, []);

    return <Component {...props} />;
  };
  return AuthenticationHOC;
};

export default WithAuthentication;
