import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import Review from "../pages/Review";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: "/",
            loader: () => fetch('/products.json'),
            element: <Products />
          },
          {
            path: "/category/:category",
            loader: () => fetch('/products.json'),
            element: <Products />
          },
        ]
      },
      {
        path: "/statistics",
        loader: () => fetch ('/products.json'),
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <Cart />,
          },
          {
            path: "/dashboard/cart",
            element: <Cart />,
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist />,
          }
        ]
      },
      {
        path: "/review",
        loader: () => fetch("/reviews.json"),
        element: <Review />,
      },
      {
        path: "/product/:id",
        loader: () => fetch ('/products.json'),
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
