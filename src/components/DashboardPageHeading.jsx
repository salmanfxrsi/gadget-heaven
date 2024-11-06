import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const DashboardPageHeading = ({ title,subtitle }) => {
  return (
    <div className="bg-[#9538E2] py-8">
      <h1 className="text-[#FFFFFF] font-bold text-[2rem] mb-4 text-center">
        {title}
      </h1>
      <p className="text-[#FFFFFF] w-11/12 lg:w-5/12 mx-auto text-center">
        {subtitle}
      </p>
      <div className="gap-6 mt-8 flex justify-center">
        <NavLink to={"/dashboard/cart"} className={ ({ isActive }) => `${isActive?"bg-[#FFFFFF] text-[#9538E2] font-extrabold":"bg-transparent text-[#FFFFFF] font-medium"} px-16 py-3 border border-[#FFFFFF] rounded-[2rem] text-lg`}>Cart</NavLink>
        <NavLink to={"/dashboard/wishlist"} className={ ({ isActive }) => `${isActive?"bg-[#FFFFFF] text-[#9538E2] font-extrabold":"bg-transparent text-[#FFFFFF] font-medium"} px-16 py-3 border border-[#FFFFFF] rounded-[2rem] text-lg`}>Wishlist</NavLink>
      </div>
    </div>
  );
};

DashboardPageHeading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default DashboardPageHeading;