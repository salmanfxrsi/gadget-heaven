import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 container mx-auto py-8">
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
                    ? "text-[#9538E2] font-bold"
                    : "font-medium text-[#0B0B0B] text-opacity-70"
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
                    ? "text-[#9538E2] font-bold"
                    : "font-medium text-[#0B0B0B] text-opacity-70"
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
                    ? "text-[#9538E2] font-bold"
                    : "font-medium text-[#0B0B0B] text-opacity-70"
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
                    ? "text-[#9538E2] font-bold"
                    : "font-medium text-[#0B0B0B] text-opacity-70"
                }
              >
                Review
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to={"/"} className="text-xl font-bold text-[#0B0B0B]">
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
                  ? "text-[#9538E2] font-bold"
                  : "font-medium text-[#0B0B0B] text-opacity-70"
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
                  ? "text-[#9538E2] font-bold"
                  : "font-medium text-[#0B0B0B] text-opacity-70"
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
                  ? "text-[#9538E2] font-bold"
                  : "font-medium text-[#0B0B0B] text-opacity-70"
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
                  ? "text-[#9538E2] font-bold"
                  : "font-medium text-[#0B0B0B] text-opacity-70"
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
          className="border border-[#0B0B0B] border-opacity-10 rounded-full p-1.5"
        >
          <IoCartOutline />
        </Link>
        <Link
          to={"/dashboard/wishlist"}
          className="border border-[#0B0B0B] border-opacity-10 rounded-full p-1.5"
        >
          <CiHeart />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
