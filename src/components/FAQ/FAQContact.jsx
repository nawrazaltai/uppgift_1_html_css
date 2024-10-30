import React from "react";

const ContactCard = ({ item }) => {
  const { icon, title } = item;

  return (
    <article className="faq_contact_card">
      <img src={icon} alt={`${icon} icon`} className="contact_card_icon" />
      <p className="contact_card_title">{title}</p>
      <span className="contact_card_cta">Contact us →</span>
    </article>
  );
};

const FAQContact = () => {
  const contactMethods = [
    { id: "phone", icon: "/assets/phone.png", title: "Still have questions?" },
    {
      id: "phone",
      icon: "/assets/message.png",
      title: "Don't like phone calls?",
    },
  ];

  return (
    <div className="faq_contact_container">
      {contactMethods.map((i) => {
        return <ContactCard item={i} />;
      })}
    </div>
  );
};

export default FAQContact;
