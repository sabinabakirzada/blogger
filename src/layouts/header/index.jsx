import React from "react";
import "./index.scss";
const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <img
          src="https://preview.colorlib.com/theme/blogger/img/logo.png.webp"
          alt=""
        />

        <ul>
          <li>HOME</li>
          <li>NEWS</li>
          <li>TRAVEL</li>
          <li>FASHION</li>
          <li>TEAM</li>
          <li>PAGES</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
