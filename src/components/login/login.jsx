import React, { useState } from "react";
import google from "../../assets/google.svg";
import firebase, { auth } from "../../firebase";
import { useHistory } from "react-router-dom";

const Login = ({ onSuccess }) => {
  // const [error, setError] = useState();
  const history = useHistory();

  const loginWithGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // /** @type {firebase.auth.OAuthCredential} */
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        onSuccess(token);
        history.push("/home");
      })
      .catch((error) => {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // setError(errorMessage);
        // ...
      });
  };
  return (
    <div className="login-container">
      <h1>Welcome</h1>
      <p>
        By logging in you accept our{" "}
        <span className="sec-col">Privacy Policy</span> and{" "}
        <span className="sec-col">Terms of Service</span>
      </p>
      <button className="login-btn" onClick={loginWithGoogle}>
        <span style={{ textAlign: "center" }}>
          <img
            src={google}
            alt="google logo"
            width="20px"
            style={{ marginRight: "1em", marginBottom: "0.2em" }}
          />
          <strong>LOGIN WITH GOOGLE</strong>
        </span>
      </button>
    </div>
  );
};

export default Login;
