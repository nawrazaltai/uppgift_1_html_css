const Star = ({ filled }) => (
  <span
    style={{
      color: filled ? "gold" : "gray",
      fontSize: "20px",
    }}
  >
    {filled ? "★" : "☆"}
  </span>
);

const StarRating = ({ starRating }) => {
  const totalStars = 5;

  return (
    <div style={{ marginTop: "0.25em", marginBottom: "0.5em" }}>
      {[...Array(totalStars)].map((_, index) => (
        <Star key={index} filled={index < starRating} />
      ))}
    </div>
  );
};

export default StarRating;
