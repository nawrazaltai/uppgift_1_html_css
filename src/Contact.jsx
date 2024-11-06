import React from "react";
import { useTheme } from "./context/ThemeContext";

const Contact = () => {
  const contactMethods = [
    {
      id: 0,
      icon: "assets/envelope.png",
      title: "Email us",
      description:
        "Please feel free to drop us a line. We will respond as soon as possible.",
      cta: "Leave a message",
    },
    {
      id: 1,
      icon: "assets/add-group.png",
      title: "Careers",
      description:
        "Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.",
      cta: "Send an application",
    },
  ];

  return (
    <div className="contact_container">
      <section className="contact_upper_section">
        <div className="contact_upper_left">
          <h1 className="contact_page_title">Contact us</h1>

          <div className="contact_articles_container">
            {contactMethods.map((method) => {
              return (
                <article className="contact_article">
                  <div className="contact_article_icon_container">
                    <img
                      className="contact_article_icon"
                      src={method.icon}
                      alt=""
                    />
                  </div>
                  <div className="contact_article_right">
                    <h3 className="contact_article_title">{method.title}</h3>
                    <p className="contact_article_description">
                      {method.description}
                    </p>
                    <button className="contact_article_button">
                      {method.cta}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div></div>
      </section>
    </div>
  );
};

export default Contact;
