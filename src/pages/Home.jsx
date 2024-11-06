import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import HomeDisplay from "../components/HomeDisplay";
import { useEffect } from "react";

const Home = () => {
  const categories = useLoaderData();

  useEffect(() => {
    document.title = "Gadget Heaven - Home";
  }, []);

  return (
    <div>
      <HomeDisplay />
      <p className="text-[#0B0B0B] font-bold text-[2.5rem] text-center">Explore Cutting-Edge Gadgets</p>
      <div className="w-11/12 lg:container mx-auto flex flex-col lg:grid grid-cols-4 gap-6 py-[100px]">
        {/* Categories Section */}
        <div className="col-span-1">
          <Categories categories={categories} />
        </div>
        {/* Dynamic Products Section */}
        <div className="col-span-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
