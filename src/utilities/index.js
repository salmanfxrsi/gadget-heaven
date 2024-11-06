import toast from "react-hot-toast";

// get all products from local storage
const getAllProducts = () => {
  const all = localStorage.getItem("cart");
  if(all){
    const cart = JSON.parse(all);
    console.log(cart);
    
    return cart
  }else{
    console.log([])
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

// remove a product to local storage

export { addCart, getAllProducts };
