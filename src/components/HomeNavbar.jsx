import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const HomeNavBar = () => {
  return (
    <div className="bg-[#9538E2] w-11/12 mx-auto rounded-[32px] text-center">
      {/* Navbar Started */}
      <div className="navbar container mx-auto py-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-bold underline"
                      : "font-medium text-[#FFFFFF] text-opacity-70"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-bold underline"
                      : "font-medium text-[#FFFFFF] text-opacity-70"
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-bold underline"
                      : "font-medium text-[#FFFFFF] text-opacity-70"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/review"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-bold underline"
                      : "font-medium text-[#FFFFFF] text-opacity-70"
                  }
                >
                  Review
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to={"/"} className="text-xl font-bold text-white">
            Gadget Heaven
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-12">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFFFFF] font-bold underline"
                    : "font-medium text-[#FFFFFF] text-opacity-70"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/statistics"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFFFFF] font-bold underline"
                    : "font-medium text-[#FFFFFF] text-opacity-70"
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFFFFF] font-bold underline"
                    : "font-medium text-[#FFFFFF] text-opacity-70"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/review"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFFFFF] font-bold underline"
                    : "font-medium text-[#FFFFFF] text-opacity-70"
                }
              >
                Review
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end text-2xl gap-4">
          <Link
            to={"/dashboard/cart"}
            className="border border-[#0B0B0B] border-opacity-10 rounded-full p-1.5 bg-white"
          >
            <IoCartOutline />
          </Link>
          <Link
            to={"/dashboard/wishlist"}
            className="border border-[#FFFFFF] rounded-full p-1.5 bg-white"
          >
            <CiHeart />
          </Link>
        </div>
      </div>
      {/* Navbar Ended */}
      <p className="font-bold text-[56px] text-white lg:w-8/12 text-center mx-auto mt-12">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</p>
      <p className="text-[#FFFFFF] mx-auto mt-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
      <button className="bg-[#FFFFFF] rounded-[2rem] px-8 py-4 text-[#9538E2] font-bold text-xl mt-8 mb-[200px]">Shop Now</button>
    </div>
  );
};

export default HomeNavBar;
