import { EmojiHeartEyes, Github } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="myName">
        <EmojiHeartEyes fill="#E73B33" /> <span>Rohit Singh</span>
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
