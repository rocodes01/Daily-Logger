// import logo from "./logo.svg";
import "./App.scss";
import firebase from "./firebase";
import { useState } from "react";
import Loader from "./components/loader";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./components/login/login";

const App = () => {
  // const [loading, setLoading] = useState(true);
  // setTimeout(() => {
  //   setLoading(false);
  // }, 1000);
  return (
    <div className="app">
      <header className="header">
        <h1>Daily Logger</h1>
        <h5 style={{ marginLeft: "70px" }}>...Better Than Yesterday</h5>
      </header>
      <Login />
      <Footer />
    </div>
  );
};

export default App;
