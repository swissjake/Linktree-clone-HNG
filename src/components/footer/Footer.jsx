import React from "react";
import zuri from "../../assets/images/zuri.png";
import ingressive from "../../assets/images/ingressive.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer__container">
      <hr />
      <div className="footer__content">
        <img src={zuri} alt="zuri" />
        <div>HNG Internship 9 Frontend Task</div>
        <img src={ingressive} alt="ingressive" />
      </div>
    </footer>
  );
};

export default Footer;
