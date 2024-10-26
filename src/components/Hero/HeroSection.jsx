const HeroSection = () => {
  return (
    <section className="hero_section">
      <h1 className="hero_title_large">
        Manage All Your <br /> Money in One App
      </h1>

      <div className="hero_content">
        <div className="hero_left_content">
          <h1 className="hero_title_small">
            Manage All Your <br /> Money in One App
          </h1>
          <p className="hero_description">
            We offer you a new generation of the mobile banking. Save, spend &
            manage money in your pocket.
          </p>

          <div className="cta_container">
            <button className="ios_cta"></button>
            <button className="android_cta"></button>
          </div>

          <div className="discover_more_container">
            <div className="discover_more_circle">
              <img
                src="assets/arr_down.png"
                className="arrow_down_dark"
                alt="Arrow down"
              />
              <img
                src="assets/arr_down_light.png"
                className="arrow_down_light"
                alt="Arrow down"
              />
            </div>
            <p className="discover_more_text">Discover more</p>
          </div>
        </div>

        <div className="hero_right_content">
          <img
            src="assets/twophones.png"
            alt="Two phones displaying application content"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
