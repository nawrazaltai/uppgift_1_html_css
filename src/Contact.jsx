import React from "react";
import { useTheme } from "./context/ThemeContext";
import ContactForm from "./components/Contact/ContactForm";
import ContactMethods from "./components/Contact/ContactMethods";
import ContactLocations from "./components/Contact/ContactLocations";
import SocialContact from "./components/Contact/SocialContact";

const Contact = () => {
  return (
    <div className="contact_container">
      <section className="contact_upper_section">
        <div className="contact_upper_left">
          <ContactMethods />
          <ContactForm />
        </div>
      </section>

      <section className="contact_lower_section">
        <div className="contact_map_img_container">
          <img className="contact_map_img" src="/assets/map.png" alt="" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // flex: 1,
          }}
        >
          <ContactLocations />
          <SocialContact />
        </div>
      </section>
    </div>
  );
};

export default Contact;
