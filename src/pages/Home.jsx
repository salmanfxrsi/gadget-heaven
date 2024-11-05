import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div className="container mx-auto grid grid-cols-4 gap-6 pt-[100px]">
      {/* Categories Section */}
      <div className="col-span-1">
        <Categories categories={categories} />
      </div>
      {/* Dynamic Products Section */}
      <div className="col-span-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
