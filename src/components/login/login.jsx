import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";
import google from "../../assets/google.svg";
import { Google } from "react-bootstrap-icons";
import firebase from "../../firebase";
const Login = () => {
  const [user, setUser] = useState("");
  const loginWithGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        setUser(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    // firebase
    //   .auth()
    //   .signInWithRedirect(provider)
    //   .then(
    //     firebase
    //       .auth()
    //       .getRedirectResult()
    //       .then((result) => {
    //         if (result.credential) {
    //           /** @type {firebase.auth.OAuthCredential} */
    //           var credential = result.credential;

    //           // This gives you a Google Access Token. You can use it to access the Google API.
    //           var token = credential.accessToken;
    //           // ...
    //         }
    //         // The signed-in user info.
    //         var user = result.user;
    //         console.log(user);
    //       })
    //       .catch((error) => {
    //         // Handle Errors here.
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         // The email of the user's account used.
    //         var email = error.email;
    //         // The firebase.auth.AuthCredential type that was used.
    //         var credential = error.credential;
    //         // ...
    //       })
    //   );
  };
  return (
    <div className="login-container">
      <h1>Welcome {user.displayName}</h1>
      <p>
        By logging in you accept our{" "}
        <span className="sec-col">Privacy Policy</span> and{" "}
        <span className="sec-col">Terms of Service</span>
      </p>
      <button className="login-btn" onClick={loginWithGoogle}>
        <span style={{ textAlign: "center" }}>
          {/* <Google fill="linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335)" /> */}
          <img
            src={user.photoURL || google}
            alt=""
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
