import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <header>
        <div className="header_left_content">
          <img src="assets/Link.png" alt="Silicon Logo" />

          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to="/" className="features_link">
              Features
            </Link>
            <Link to="/contact" className="features_link">
              Contact
            </Link>
          </div>
        </div>

        <div className="header_right_content">
          <div className="theme_content_container" onClick={toggleTheme}>
            <p className="dark_mode_title">{theme} mode</p>

            <div className="switch_bg">
              <span className="switch_inner_circle"></span>
            </div>
          </div>

          <nav onClick={onOpen}>
            <span className="ham_1"></span>
            <span className="ham_2"></span>
            <span className="ham_3"></span>
          </nav>

          <button className="sign_in_btn">Sign in</button>
        </div>
      </header>

      {<MobileNav onOpen={onOpen} isOpen={open} />}
    </>
  );
};
