import { Github } from "react-bootstrap-icons";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="myName">
        <img src={logo} alt="" width="40px" style={{ borderRadius: "50%" }} />
        <span>Rocodes</span>
      </div>
      <div className="connect">
        <a
          href="https://www.github.com/rocodes01"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
      </div>
    </div>
  );
};

export default Footer;
