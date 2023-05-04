import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
  const user = useContext(AuthContext);
  console.log(user.user);
  return <div>Profile</div>;
}

export default Profile;
