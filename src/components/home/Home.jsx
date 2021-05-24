import firebase from "firebase";
import { useState, useEffect } from "react";
import { CalendarDateFill, Search } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
const Home = ({ user, onMenuShow }) => {
  const dummyLogArr = new Array(15).fill(0);
  const history = useHistory();
  console.log(dummyLogArr);
  return (
    <div className="main" onClick={onMenuShow}>
      <div className="main-left">Left</div>
      <div className="main-center">
        <div className="main-center-search">
          {/* <input type="text" placeholder="SEARCH LOGS" id="" /> */}
          <button className="searchBtn">
            <Search />
          </button>
          <button className="addnew">+ New Log</button>
        </div>
        <div className="log">
          {dummyLogArr.map((e) => {
            return (
              <div className="log-card" onClick={() => history.push("/loader")}>
                <h6>Name</h6>
                <div className="logDate">
                  <CalendarDateFill fill="#e73b33" size="25" />
                  {Date().toLocaleUpperCase().slice(0, 10)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="main-right">
        {/* <button onClick={localStorage.clear()}>Logout</button> */}
        Right
      </div>
    </div>
  );
};
export default Home;

// const submit = () => {
//   const db = firebase.firestore();
//   const payload = {
//     name: "Shadab",
//     email: "sidshaab97@gmail.com",
//   };
//   // console.log(db.collection("users"));
//   db.collection("users")
//     .add(payload)
//     .then((res) => {
//       alert("added");
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.log(errorCode, ":", errorMessage);
//     });
// };
