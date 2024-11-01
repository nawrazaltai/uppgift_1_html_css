import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

export const Header = () => {
  //   const [theme, setTheme] = useState("light");

  //   useEffect(() => {
  //     document.documentElement.setAttribute("data-theme", theme);
  //   }, [theme]);

  //   const toggleTheme = () => {
  //     const newTheme = theme == "light" ? "dark" : "light";
  //     setTheme(newTheme);
  //   };

  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <div className="header_left_content">
        <img src="assets/Link.png" alt="Silicon Logo" />

        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="/" className="features_link">
            Features
          </a>
          <a href="/contact" className="features_link">
            Contact
          </a>
        </div>
      </div>

      <div className="header_right_content">
        <div className="theme_content_container" onClick={toggleTheme}>
          <p className="dark_mode_title">{theme} mode</p>

          <div className="switch_bg">
            <span className="switch_inner_circle"></span>
          </div>
        </div>

        <nav>
          <span className="ham_1"></span>
          <span className="ham_2"></span>
          <span className="ham_3"></span>
        </nav>

        <button className="sign_in_btn">Sign in</button>
      </div>
    </header>
  );
};
