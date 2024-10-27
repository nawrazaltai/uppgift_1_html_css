import StarRating from "./StarRating";

const TestimonialCard = ({ testimonial }) => {
  const { author, avatarUrl, comment, jobRole, starRating } = testimonial;

  return (
    <article className="client_container">
      <div className="quotes">
        <span className="quote">&#8220;</span>
      </div>

      <StarRating starRating={starRating} />
      <p className="client_message">{comment}</p>

      <div className="client_info_container">
        <div className="client_pic_container">
          <img src={avatarUrl} alt="Client avatar" />
        </div>
        <div className="client_name_occupation_container">
          <p className="name">{author}</p>
          <p className="occupation">{jobRole}</p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
