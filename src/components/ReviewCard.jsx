import PropTypes from "prop-types";

const ReviewCard = ({ review_info }) => {
    const {product_image,product_name,reviewer_name,review,review_date,rating} = review_info;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={product_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {reviewer_name}
          <div className="badge badge-secondary">{rating}</div>
        </h2>
        <p>{review}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{product_name}</div>
          <div className="badge badge-outline">{review_date}</div>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
    review_info: PropTypes.object,
}

export default ReviewCard;
