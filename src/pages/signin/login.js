import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { mapStateToProps} from "../../store/Selectors/commonSelectors";
import { mapDispatchToProps } from "../../store/Selectors/commonDispatch";
import { connect } from "react-redux";
//
// import { refreshTokenSetup } from '../utils/refreshToken';
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";
const clientId =
  "1083090379321-ifk754dn4q1snrgalh3s4pggi3uacl00.apps.googleusercontent.com";

function Login(props) {
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId: clientId });
    });
  }, []);
  const navigate = useNavigate();
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    props.setUser({name:res.profileObj.name});

    localStorage.setItem("isAuthenticated", true);
    // navigate('/profile')
    // refreshTokenSetup(res);
  };
  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        plugin_name="hello"
        cookiePolicy={"single_host_origin"}
        //cookiePolicy='http://localhost:3000/'
        style={{ marginTop: "100px" }}
        //isSignedIn={true}
      />
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
