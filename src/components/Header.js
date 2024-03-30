import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" />
        <h1 className="text">Foodi.com</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-list">
          <Link to="/" className="link"> Home</Link>
          </li>
          <li className="nav-list">
          <Link to="/about" className="link"> About Us</Link>
          </li>
          <li className="nav-list">
          <Link to="/contact" className="link"> Contact US</Link>
          </li>
          <li className="nav-list" >Cart</li>
          <li
            className="nav-list btn"
            onClick={() => {
              if (btnName === "Login") {
                setBtnName("Logout");
              } else setBtnName("Login");
            }}
          >
            {btnName}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
