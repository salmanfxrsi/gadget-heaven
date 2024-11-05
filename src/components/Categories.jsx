import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="border border-[#09080F] border-opacity-10 rounded-2xl bg-[#FFFFFF] p-6 text-center gap-6 flex flex-col">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `rounded-[2rem] bg-[#9538E2] py-[22px] text-lg ${
            isActive
              ? "bg-[#09080F0C] text-[#09080F] text-opacity-60 font-semibold"
              : "text-[#FFFFFF] font-extrabold"
          }`
        }
      >
        All Products
      </NavLink>
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.category}`}
          key={category.id}
          className={({ isActive }) =>
            `rounded-[2rem] bg-[#9538E2] py-[22px] text-lg ${
              isActive
                ? "bg-[#09080F0C] text-[#09080F] text-opacity-60 font-semibold"
                : "text-[#FFFFFF] font-extrabold"
            }`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
};

export default Categories;
