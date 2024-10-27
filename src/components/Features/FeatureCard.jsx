const FeatureCard = ({ icon_src, title, description }) => {
  return (
    <article className="feature_article">
      <div className="feature_icon_container">
        <img src={icon_src} className="feature_icon" alt={`${title} icon`} />
      </div>

      <div className="feature_title_descripion_container">
        <h3 className="feature_title">{title}</h3>
        <p className="feature_description">{description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
