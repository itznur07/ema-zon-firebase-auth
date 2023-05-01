import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

function AuthProviders({ children }) {
  const [user, setUser] = useState();

  const auth = getAuth(app);

  //   SignUp User Functionality Using Email and Password
  const signInUserWithEmailPassword = (email, password) => [
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        alert("Account Created Sucessfully!");
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      }),
  ];

  const authData = {
    user,
    signInUserWithEmailPassword,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export default AuthProviders;
