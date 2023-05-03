import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
  const [user, setUser] = useContext(AuthContext);
  return <div>Profile</div>;
}

export default Profile;
