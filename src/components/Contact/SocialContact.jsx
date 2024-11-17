import React from "react";

const SocialContact = () => {
  const socials = [
    { id: "fb", icon: "/assets/bxl-facebook-square.png" },
    { id: "tw", icon: "/assets/bxl-twitter.png" },
    { id: "ig", icon: "/assets/bxl-instagram-alt.png" },
    { id: "yt", icon: "/assets/bxl-youtube.png" },
  ];

  return (
    <div className="socials_container">
      {socials.map((i) => {
        return (
          <article key={i.id} className="social_icon_article">
            <img src={i.icon} alt="" />
          </article>
        );
      })}
    </div>
  );
};

export default SocialContact;
