import toast from "react-hot-toast";

// get all products from local storage
const getAllProducts = () => {
  const all = localStorage.getItem("cart");
  if(all){
    const cart = JSON.parse(all);
    return cart
  }else{
    return[]
  }
};

// add a product to local storage
const addCart = (product) => {
  const cart = getAllProducts();
  const isExist = cart.find(item => item.product_id == product.product_id)
  if(isExist) return toast.error("Already Added In Cart")
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  toast.success("Successfully Added In Cart")
};



// get wishlist products from local storage
const getWishlistProducts = () => {
    const all = localStorage.getItem("wishlist");
    if(all){
      const wishlist = JSON.parse(all);
      return wishlist
    }else{
      return[]
    }
  };


// add a product to local storage
const addWishlist = (product) => {
    const wishlist = getWishlistProducts();
    const isExist = wishlist.find(item => item.product_id == product.product_id)
    if(isExist) return toast.error("Already Added In Wishlist")
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    toast.success("Successfully Added In Wishlist")
  };


export { addCart, getAllProducts, addWishlist,getWishlistProducts };


