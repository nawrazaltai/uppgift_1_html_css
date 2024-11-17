import React from "react";

const ContactLocations = () => {
  const locations = [
    {
      title: "Medical Center 1",
      address: "4517 Washington Ave. Manchester, Kentucky 39495",
      phone: "(406) 555-0120",
      available_day_hours: [
        { days: "Mon - Fri", time: "9:00 am – 22:00 am" },
        {
          days: "Sat - Sun",
          time: "9:00 am – 20:00 am",
        },
      ],
    },
    {
      title: "Medical Center 2",
      address: "2464 Royal Ln. Mesa,New Jersey 45463",
      phone: "(406) 544-0123",
      available_day_hours: [
        { days: "Mon - Fri", time: "9:00 am – 22:00 am" },
        {
          days: "Sat - Sun",
          time: "9:00 am – 20:00 am",
        },
      ],
    },
  ];

  return (
    <div className="locations_container">
      {locations.map((location) => {
        return (
          <article key={location.title} className="contact_location_article">
            <h3 className="contact_location_title">{location.title}</h3>

            <div className="contact_location_info_container">
              <img
                className="contact_location_icon"
                src="/assets/bx-map.png"
                alt=""
              />
              <p className="contact_info_content">{location.address}</p>
            </div>

            <div className="contact_location_info_container">
              <img
                className="contact_location_icon"
                src="/assets/phone-outline.png"
                alt="Phone icon"
              />
              <p className="contact_info_content">{location.phone}</p>
            </div>

            <div
              className="contact_location_info_container"
              style={{ alignItems: "start" }}
            >
              <img
                className="contact_location_icon"
                src="/assets/bx-time.png"
                alt=""
              />
              <div>
                {location.available_day_hours.map((t, i) => {
                  return (
                    <div key={i} style={{ display: "flex", gap: ".2em" }}>
                      <p
                        className="contact_info_content"
                        style={{ fontWeight: 900 }}
                      >
                        {t.days}:
                      </p>
                      <p className="contact_info_content"> {t.time}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ContactLocations;
