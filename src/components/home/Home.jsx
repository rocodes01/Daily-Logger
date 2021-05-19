import firebase from "firebase";
import { useState, useEffect } from "react";
import { CalendarDateFill, Search } from "react-bootstrap-icons";
const Home = ({ user }) => {
  // const [logTitle, setLogTitle] = useState("");
  // const [logDesc, setLogogDesc] = useState("");
  // const [tags, setTags] = useState("");
  console.log("rendered");
  // const ShowTags = () => {
  //   return tags ? (
  //     tags?.split(",").map((e) => {
  //       return e.length > 0 ? (
  //         <button className="tag-pills mr-1">{e}</button>
  //       ) : (
  //         ""
  //       );
  //     })
  //   ) : (
  //     <></>
  //   );
  // };
  return (
    <div className="main">
      <div className="main-left">Left</div>
      <div className="main-center">
        <div className="main-center-search">
          <input type="text" placeholder="SEARCH LOGS" id="" />
          <button>
            <Search />
          </button>
          <select name="" id="">
            <option disabled selected>
              Sort By
            </option>
            <option value="" disabled>
              Title
            </option>
            <option value="" disabled>
              Date Asc
            </option>
            <option value="" disabled>
              Date Desc
            </option>
          </select>
        </div>
        <div className="logCard">
          <h4>{user?.email}</h4>
          <div className="logDate">
            <CalendarDateFill fill="#e73b33" size="25" />
            {Date().toLocaleUpperCase().slice(0, 16)}
          </div>
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
