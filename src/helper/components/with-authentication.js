import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const WithAuthentication = (Component) => {
  const AuthenticationHOC = (props) => {
    const user=useSelector((state)=>state.common);
    console.log(user)
    // const [isAccessToken, setIsAccessToken] = useState(false);
    const navigate = useNavigate();
    // console.log(uisSignedIn)
    useEffect(() => {
      //here we can check access token/role/user details
      // as per requirement add conditional check

      // if (!localStorage.getItem("accessToken")) {
      if (!localStorage.getItem('isAuthenticated')) {
        
        navigate("/");
      }
    }, []);

    return <Component {...props} />;
  };
  return AuthenticationHOC;
};

export default WithAuthentication;
