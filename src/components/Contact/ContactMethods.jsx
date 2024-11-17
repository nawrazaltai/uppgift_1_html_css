import React from "react";

const ContactMethods = () => {
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
    <div className="contact_articles_container">
      <h1 className="contact_page_title">Contact us</h1>
      {contactMethods.map((method) => {
        return (
          <article key={method.id} className="contact_article">
            <div className="contact_article_icon_container">
              <img className="contact_article_icon" src={method.icon} alt="" />
            </div>
            <div className="contact_article_right">
              <h3 className="contact_article_title">{method.title}</h3>
              <p className="contact_article_description">
                {method.description}
              </p>
              <button className="contact_article_button">{method.cta}</button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ContactMethods;
