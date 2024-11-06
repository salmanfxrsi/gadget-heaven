import { useEffect, useState } from "react";
import { getAllProducts } from "../utilities";
import { FaSort } from "react-icons/fa";
import CartProduct from "./CartProduct";
import Purchased from "../assets/Group.png";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [modalTotal, setModalTotal] = useState(0);

  useEffect(() => {
    const cart = getAllProducts();
    setProducts(cart);
    calculateTotalCost(cart);
    document.title = "Gadget Heaven - Cart";
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

  const handlePurchase = () => {
    setModalTotal(totalCost);
    setProducts([]);
    setTotalCost(0);
    document.getElementById("my_modal_1").showModal();
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <div className="w-11/12 lg:container mx-auto">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-center p-8">
          <img className="mx-auto" src={Purchased} alt="" />
          <h1 className="font-bold text-2xl text-[#09080F] mt-6 mb-3">
            Payment Successfully
          </h1>
          <hr />
          <p className="mt-3 text-[#09080F99] font-medium">
            Thanks for purchasing
          </p>
          <p className="mt-3 text-[#09080F99] font-medium">
            Total: {modalTotal}
          </p>
          <form method="dialog">
            <button className="modal-action flex justify-center bg-slate-400 w-full text-center rounded-[2rem] py-2">
              <div className="text-[#09080F] font-semibold">Close</div>
            </button>
          </form>
        </div>
      </dialog>
      {/* Cart Heading Started */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-14 gap-6 lg:gap-0">
        <div>
          <p className="text-[#0B0B0B] font-bold text-2xl">Cart</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <p className="text-[#0B0B0B] font-bold text-2xl">
            Total cost: {totalCost}
          </p>
          <div
            onClick={handleSort}
            className="flex items-center border border-[#9538E2] rounded-[2rem] py-3 px-6 text-[#9538E2] font-semibold text-lg gap-1"
          >
            <p>Sort by Price</p>
            <FaSort />
          </div>
          <button
            disabled={totalCost == 0}
            onClick={handlePurchase}
            className={`px-[26px] py-3 text-lg font-medium text-[#FFFFFF] rounded-[2rem] border-[#9538E2] ${
              totalCost == 0
                ? "bg-slate-600"
                : "bg-gradient-to-t from-violet-500 to-fuchsia-500 border"
            }`}
          >
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
