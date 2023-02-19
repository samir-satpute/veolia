import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { mapStateToProps } from '../../store/Selectors/commonSelectors'
import { mapDispatchToProps } from "../../store/Selectors/commonDispatch";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import GoogleLogin, {useGoogleLogin} from 'react-google-login'
import Login from "./login";
// import google from "google";



const SignIn = (props) => {
  // const dispatch = useDispatch();
  // const st = useSelector((state) => state.common)
  // console.log(st);
  const navigate = useNavigate()

  useEffect(() => {

    if (props.isSignedIn) {
      navigate('/profile');
      localStorage.setItem('isAuthenticated', true)
    }

  }, [props.isSignedIn])
  const handleCallBackResponse = (response) => {
    console.log(response.credentials);
  }
  // useEffect(() => {

  //   google.account.id.initialize({
  //     client_id: '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',
  //     callback: handleCallBackResponse
  //   });
  //   google.account.id.renderButton(document.getElementById('signInDiv'),
  //     { theme: 'outline', size: 'large' }

  //   );
  // }, [])
  console.log(props)
  return (
    <div>
      {/* <GoogleLogin clientId=""  />
      <Button onClick={props.setUser}>Signin</Button> */}
      <Login/>

    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
// export default SignIn