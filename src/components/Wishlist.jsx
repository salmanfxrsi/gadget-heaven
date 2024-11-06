import { useEffect, useState } from "react";
import { getWishlistProducts } from "../utilities";
import WishlistProduct from "./WishlistProduct";

const Wishlist = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const wishlist = getWishlistProducts();
        setProducts(wishlist);
        document.title = "Gadget Heaven - Wishlist";
      }, []);

    return (
        <div className="container mx-auto">
               <p className="text-[#0B0B0B] font-bold text-2xl py-14">Wishlist</p>    
               <div className="flex flex-col gap-6">
        {products.map((product) => (
          <WishlistProduct key={product.product_id} product={product} />
        ))}
      </div>
        </div>
    );
};

export default Wishlist;