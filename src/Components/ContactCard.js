import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./ContactCard.css";
function ContactCard() {
  return (
    <div className="row">
      <div className="row-items">
        <FaEnvelope size={30} />
        <p>rexlim2003@gmail.com</p>
      </div>
      <div className="row-items">
        <FaPhone size={30} />
        <p>014-7593534</p>
      </div>
      <div className="row-items">
        <FaLinkedin size={30} />
        <a href="https://www.linkedin.com/in/rex-lim-026981248/" target="_blank">
          https://www.linkedin.com/in/rex-lim-026981248/
        </a>
      </div>
    </div>
  );
}

export default ContactCard;
