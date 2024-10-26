const Features = () => {
  return (
    <section className="features_container">
      <div className="features_left_content">
        <img
          src="assets/phone_card_left.png"
          alt="Phone with card"
          className="test_img"
        />
      </div>

      <div className="features_right_content">
        <h2 className="features_title">App Features</h2>
        <p className="features_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque
          volutpat ligula est. Mattis fermentum, at nec lacus.
        </p>

        <div className="features_list_container">
          <article className="feature_article">
            <div className="feature_icon_container">
              <img
                src="assets/payments.svg.png"
                className="feature_icon"
                alt="Payments logo"
              />
            </div>

            <div className="feature_title_descripion_container">
              <h3 className="feature_title">Easy Payments</h3>
              <p className="feature_description">
                Id mollis consectetur congue egestas egestas suspendisse blandit
                justo.
              </p>
            </div>
          </article>
          <article className="feature_article">
            <div className="feature_icon_container">
              <img
                src="assets/security.svg.png"
                className="feature_icon"
                alt="Security logo"
              />
            </div>

            <div className="feature_title_descripion_container">
              <h3 className="feature_title">Data Security</h3>
              <p className="feature_description">
                Augue pulvinar justo, fermentum fames aliquam accumsan
                vestibulum non.
              </p>
            </div>
          </article>
          <article className="feature_article">
            <div className="feature_icon_container">
              <img
                src="assets/statistics.svg.png"
                className="feature_icon"
                alt="Statistics logo"
              />
            </div>

            <div className="feature_title_descripion_container">
              <h3 className="feature_title">Cost Statistics</h3>
              <p className="feature_description">
                Mattis urna ultricies non amet, purus in auctor non. Odio
                vulputate ac nibh.
              </p>
            </div>
          </article>
          <article className="feature_article">
            <div className="feature_icon_container">
              <img
                src="assets/support.svg.png"
                className="feature_icon"
                alt="Support logo"
              />
            </div>

            <div className="feature_title_descripion_container">
              <h3 className="feature_title">Support 24/7</h3>
              <p className="feature_description">
                A elementum, imperdiet enim, pretium etiam facilisi in aenean
                quam mauris.
              </p>
            </div>
          </article>
          <article className="feature_article">
            <div className="feature_icon_container">
              <img
                src="assets/cashback.svg.png"
                className="feature_icon"
                alt="Cashback logo"
              />
            </div>

            <div className="feature_title_descripion_container">
              <h3 className="feature_title">Regular Cashback</h3>
              <p className="feature_description">
                Sit facilisis dolor arcu, fermentum vestibulum arcu elementum
                imperdiet eleifend.
              </p>
            </div>
          </article>
          <article className="feature_article">
            <div className="feature_icon_container">
              <img
                src="assets/happy.svg.png"
                className="feature_icon"
                alt="Happy smiley logo"
              />
            </div>

            <div className="feature_title_descripion_container">
              <h3 className="feature_title">Top Standards</h3>
              <p className="feature_description">
                Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id.
                Sit facilisis dolor arcu.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Features;
