import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
  const { product_id, product_title, product_image, price } = product;

  return (
    <div className="bg-[#FFFFFF] rounded-2xl p-5  hover:p-8 hover:shadow-xl transition duration-500">
      <img
        className="h-[181px] mx-auto rounded-xl"
        src={product_image}
        alt=""
      />
      <h1 className="text-2xl font-semibold text-[#09080F] mt-6 mb-3">
        {product_title}
      </h1>
      <p className="font-medium text-xl text-[#09080F] text-opacity-60">
        Price: {price} $
      </p>
      <NavLink to={`/product/${product_id}`}>
        <button className="py-3 px-5 border border-[#0B0B0B] border-opacity-15 rounded-[2rem] text-[#9538E2] font-semibold text-lg mt-4">
          View Details
        </button>
      </NavLink>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
