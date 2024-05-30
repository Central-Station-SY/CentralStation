import React, { useState } from "react";
import $ from "jquery";
import Navbar from "./Navbar";
import "bootstrap";
import logo from "../assets/images/logo.jpg";

const Header = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleNavbarToggle = () => {
    $(".navbar-collapse").toggleClass("show");
    setButtonClicked(!buttonClicked);
  };

  return (
    <div
      className="header_section"
      style={{
        backgroundColor: "#221F1F",
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      <div style={{ position: "absolute" }}>
        <img
          style={{
            width: "153px",
            height: "106px",
            marginTop: "7px",
            marginLeft: "15px",
          }}
          src={logo}
          alt="logo"
        />
      </div>
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <div className="d-flex justify-content-end w-100">
            {/* Using Flexbox to position the button to the right */}
            <button
              className="navbar-toggler"
              style={{ border: 0 }}
              type="button"
              onClick={handleNavbarToggle}
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={buttonClicked ? true : false}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler" style={{ border: 0 }}></span>
            </button>
          </div>
          <Navbar buttonClicked={buttonClicked} />
        </nav>
      </div>
    </div>
  );
};

export default Header;
