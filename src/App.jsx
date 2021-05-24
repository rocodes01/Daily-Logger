import "./App.scss";
import { useState, useEffect } from "react";
import Loader from "./components/loader";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./components/login/login";
import { Person, Power } from "react-bootstrap-icons";
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  useHistory,
} from "react-router-dom";
import { auth } from "./firebase";

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
    let user = localStorage.getItem("user");
    setUser(JSON.parse(user));
  }, [token]);

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        localStorage.clear();
        setToken("");
        history.push("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  console.log(showMenu);
  return (
    <div className="app">
      <header className="header">
        <div className="appName">
          <h1>Daily Logger</h1>
          <h5 className="subHeader">...Better Everyday</h5>
        </div>
        {user && (
          <div className="user">
            <img
              src={user.photoURL}
              alt="user profile"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        )}
      </header>
      {token.length > 0 ? (
        <Switch>
          <Route exact path="/">
            <Home
              user={user}
              onMenuShow={() => {
                setShowMenu(false);
              }}
            />
          </Route>
          <Route exact path="/loader">
            <Loader />
          </Route>
          <Route path="/">
            <Home
              user={user}
              onMenuShow={() => {
                setShowMenu(false);
              }}
            />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/">
            <Login onSuccess={(token) => setToken(token)} />
          </Route>
          <Route path="/">
            <Redirect to={"/"} />
          </Route>
        </Switch>
      )}
      <div className={`menu ${showMenu && "menuShow"}`}>
        <div className="menu-exit" onClick={() => setShowMenu(false)}>
          ---
        </div>
        <div className="menu-item profile">
          <Person fill={"#e73b33"} /> Profile
        </div>
        <div
          className="menu-item logoutBtn"
          onClick={() => {
            logout();
            setShowMenu(false);
          }}
        >
          <Power fill={"#e73b33"} />
          Logout
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
