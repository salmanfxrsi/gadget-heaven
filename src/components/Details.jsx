import PropTypes from "prop-types";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { addCart, addWishlist, getWishlistProducts } from "../utilities";
import { Rate } from "antd";
import { useEffect, useState } from "react";

const Details = ({ product }) => {
  const {
    product_image,
    product_title,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const wishlist = getWishlistProducts();
    const exists = wishlist.some(
      (item) => item.product_id === product.product_id
    );
    setIsInWishlist(exists);
  }, [product.product_id]);

  //   handle add to cart button click
  const handleCart = (product) => {
    addCart(product);
  };

  const handleWishlist = (product) => {
    addWishlist(product);
    setIsInWishlist(true);
  };

  return (
    <div className="p-6 bg-[#FFFFFF] w-11/12 lg:w-7/12 mx-auto relative top-[180px] rounded-3xl flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/3">
        <img className="w-full" src={product_image} alt="" />
      </div>
      <div className="lg:w-2/3">
        <h1 className="font-semibold text-[28px] text-[#09080F] mb-3">
          {product_title}
        </h1>
        <p className="font-semibold text-xl text-[#09080FCC] mb-4">
          Price:$ {price}
        </p>
        <div
          className={`border px-3 py-2 rounded-[2rem] font-medium text-sm w-32 flex justify-center ${
            availability
              ? "border-[#309C08] text-[#309C08] bg-[#309C081A]"
              : "border-red-600 bg-red-600 text-white"
          }`}
        >
          {availability ? "In Stock" : "Stock Out"}
        </div>
        <p className="text-lg text-[#09080F99] mt-4">{description}</p>
        <p className="mt-4 font-bold text-lg text-[#09080F]">Specification</p>
        <ol className="list-decimal list-inside mt-3 mb-4">
          {specification?.map((specific, index) => (
            <li key={index}>{specific.value}</li>
          ))}
        </ol>
        <p className="text-lg font-bold mb-3">Rating:</p>
        <div className="flex gap-5 items-center">
          <Rate defaultValue={0} value={rating} allowHalf />
          <div className="px-3 py-2 bg-[#09080F0D] w-[60px] rounded-[2rem] text-center font-medium">
            {rating}
          </div>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => handleCart(product)}
            className="bg-[#9538E2] rounded-[2rem] px-6 py-2 flex items-center text-[#FFFFFF] font-bold text-lg gap-2"
          >
            <p>Add To Cart</p>
            <IoCartOutline className="text-2xl" />
          </button>
          <button
            onClick={() => handleWishlist(product)}
            className={`border border-[#0B0B0B] border-opacity-10 rounded-full p-2 ${
              isInWishlist ? "bg-slate-400" : ""
            }`}
          >
            <CiHeart className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  product: PropTypes.object,
};

export default Details;
