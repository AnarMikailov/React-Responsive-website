import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-container">
        <div className="gpt3__footer__container-header">
          <h1 className="gradient__text">
            Do you want to step in to the <br /> future before others
          </h1>
          <button type="button">Request Early Access</button>
        </div>
        <div className="gpt__footer__container-links">
          <div className="gpt__footer__container__links-logo">
            <img src={logo} alt="logo" />
            <h4>
              Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
            </h4>
          </div>
          <div className="container">
            <div className="gpt__footer__container__links-groupA">
              <h3>Links</h3>
              <p>Overons</p>
              <p>Social Media</p>
              <p>Counters</p>
              <p>Contact</p>
            </div>
            <div className="gpt__footer__container__links-groupB">
              <h3>Company</h3>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact</p>
            </div>
            <div className="gpt__footer__container__links-groupC">
              <h3>Get in touch</h3>
              <p>Crechterwoord K12 182 DK Alknjkcb</p>
              <p>085-132567</p>
              <p>info@payme.net</p>
            </div>
          </div>
        </div>
      </div>
      <h5>© 2021 GPT-3. All rights reserved.</h5>
    </div>
  );
};

export default Footer;
