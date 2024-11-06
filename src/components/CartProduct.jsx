import PropTypes from "prop-types";

const CartProduct = ({ product }) => {
    const { product_title, product_image, price, description } = product;

    return (
        <div className="bg-[#FFFFFF] rounded-2xl p-[2rem] flex gap-8">
            <div className="w-[200px] rounded-xl">
            <img className="h-[124px] mx-auto" src={product_image} alt="" />
            </div>
            <div>
                <h1 className="mb-3 font-semibold text-2xl text-[#09080F]">{product_title}</h1>
                <p className="text-lg text-[#09080F] text-opacity-60 mb-4">{description}</p>
                <h2 className="font-semibold text-xl text-[#09080FCC]">Price : $ {price}</h2>
            </div>
        </div>
    );
};

CartProduct.propTypes = {
    product: PropTypes.object,
}

export default CartProduct;