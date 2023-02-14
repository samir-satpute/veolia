import React from "react";
import WithAuthentication from "../../helper/components/with-authentication";

const Profile = () => {
  return (
    <div>
      <h1>Profile page</h1>
    </div>
  );
};

export default WithAuthentication(Profile);
