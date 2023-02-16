import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { mapStateToProps } from '../../store/Selectors/commonSelectors'
import { mapDispatchToProps } from "../../store/Selectors/commonDispatch";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";


const SignIn = (props) => {
  // const dispatch = useDispatch();
  // const st = useSelector((state) => state.common)
  // console.log(st);
  const navigate =useNavigate()

  useEffect(() => {
     
      if(props.isSignedIn)
      {
        navigate('/profile');
        localStorage.setItem('isAuthenticated',true)
      }
      
  }, [props.isSignedIn])
  console.log(props)
  return (
    <div>
      <h1>SignIn component</h1>
      <Button onClick={props.setUser}>Signin</Button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
// export default SignIn