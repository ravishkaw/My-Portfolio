import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import logo from "../../assets/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p> &copy; {new Date().getFullYear()} Ravishka Wijerathne</p>
    </footer>
  );
};

export default Footer;
