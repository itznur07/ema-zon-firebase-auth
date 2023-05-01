import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

function Profile() {
  const { user } = useContext(AuthContext);

  return <div>Welcome {user.email} 🎊</div>;
}

export default Profile;
