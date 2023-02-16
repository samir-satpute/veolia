import React from "react";
import WithAuthentication from "../../helper/components/with-authentication";
import { connect } from "react-redux";
import { mapStateToProps } from '../../store/Selectors/commonSelectors'

const Profile = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Profile page</h1>
     <p> User:{props.userName}</p>
     <p> Role:{props.role}</p>
      <p>SignedIn?:{props.isSignedIn?'yes':'no'}</p>

    </div>
  );
};

export default connect(mapStateToProps)(WithAuthentication(Profile));
