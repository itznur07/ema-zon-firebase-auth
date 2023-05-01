import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

function AuthProviders({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);
  /**   SignUp User Functionality Using Email and Password */
  const signUpUserWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /**   SignUp User Functionality Using Google */
  const signUpUserWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        alert("Account Created Sucessfully!");
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  /**   LogIn User Functionality Using Email and Password */
  const logInUserWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /**   LogIn User Functionality Using Google */
  const logInUserWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(() => {
        alert("Login Sucessfully!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  /**   LogOut User Functionality */
  const LogOutUser = () => [
    signOut(auth)
      .then(() => {
        alert("Logout Sucessfully!");
      })
      .catch((error) => {
        alert(error.message);
      }),
  ];

  /**   Forget Password Functionality */
  const ForgetPassword = (email) => [
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Check your email for reset password");
      })
      .catch((error) => {
        alert(error.message);
      }),
  ];

  /**   Realtime user traker */

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  /**  Context Data Auth Provider like Shared Data */
  const authData = {
    user,
    loading,
    signUpUserWithEmailPassword,
    signUpUserWithGoogle,
    logInUserWithEmailPassword,
    logInUserWithGoogle,
    LogOutUser,
    ForgetPassword,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export default AuthProviders;
