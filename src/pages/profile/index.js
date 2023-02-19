import React, { useEffect } from "react";
import WithAuthentication from "../../helper/components/with-authentication";
import { connect } from "react-redux";
import { mapStateToProps } from '../../store/Selectors/commonSelectors'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { mapDispatchToProps } from "../../store/Selectors/commonDispatch";

const Profile = (props) => {
  console.log(props)
  const navigate=useNavigate();
  useEffect(()=>{

    if(props.isSignedIn===false)
    {
      localStorage.setItem('isAuthenticated',false)
      navigate('/')
    }

  },[props.isSignedIn])
  
  return (
    <div>
      <h1>Profile page</h1>
     <p> User:{props.userName}</p>
     <p> Role:{props.role}</p>
      <p>SignedIn?:{props.isSignedIn?'yes':'no'}</p>
      <Button onClick={()=>{props.removeCurrentUser()}}>Signout</Button>

    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(WithAuthentication(Profile));
