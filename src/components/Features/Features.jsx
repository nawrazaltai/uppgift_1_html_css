import FeatureCard from "./FeatureCard";

const Features = () => {
  const featuresList = [
    {
      id: 0,
      title: "Easy Payments",
      description:
        "Id mollis consectetur congue egestas egestas suspendisse blandit justo.",
      icon_src: "assets/payments.svg.png",
    },
    {
      id: 1,
      title: "Data Security",
      description:
        "Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.",
      icon_src: "assets/security.svg.png",
    },
    {
      id: 2,
      title: "Cost Statistics",
      description:
        "Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.",
      icon_src: "assets/statistics.svg.png",
    },
    {
      id: 3,
      title: "Support 24/7",
      description:
        "A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.",
      icon_src: "assets/support.svg.png",
    },
    {
      id: 4,
      title: "Regular Cashback",
      description:
        "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.",
      icon_src: "assets/cashback.svg.png",
    },
    {
      id: 5,
      title: "Top Standards",
      description:
        "Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.",
      icon_src: "assets/happy.svg.png",
    },
  ];

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
          {featuresList.map((f) => {
            return (
              <FeatureCard
                key={f.id}
                title={f.title}
                description={f.description}
                icon_src={f.icon_src}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
