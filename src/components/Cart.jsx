import { useEffect, useState } from "react";
import { getAllProducts } from "../utilities";
import { FaSort } from "react-icons/fa";
import CartProduct from "./CartProduct";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const cart = getAllProducts();
    setProducts(cart);
    calculateTotalCost(cart);
    document.title = 'Gadget Heaven - Cart'
  }, []);

  const calculateTotalCost = (cartProducts) => {
    const total = cartProducts.reduce((sum, product) => sum + product.price, 0);
    setTotalCost(total);
  };

  const handleSort = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
    calculateTotalCost(sortedProducts);
  };

  return (
    <div className="w-11/12 lg:container mx-auto">
      {/* Cart Heading Started */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-14 gap-6 lg:gap-0">
        <div>
          <p className="text-[#0B0B0B] font-bold text-2xl">Cart</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <p className="text-[#0B0B0B] font-bold text-2xl">
            Total cost: {totalCost}
          </p>
          <div onClick={handleSort} className="flex items-center border border-[#9538E2] rounded-[2rem] py-3 px-6 text-[#9538E2] font-semibold text-lg gap-1">
            <p>Sort by Price</p>
            <FaSort />
          </div>
          <button className="px-[26px] py-3 text-lg font-medium text-[#FFFFFF] bg-gradient-to-t from-violet-500 to-fuchsia-500 rounded-[2rem] border border-[#9538E2]">
            Purchase
          </button>
        </div>
      </div>
      {/* Cart Heading Ended */}
      <div className="flex flex-col gap-6">
        {products.map((product) => (
          <CartProduct key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
