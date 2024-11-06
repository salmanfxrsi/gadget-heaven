import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Toaster } from 'react-hot-toast';
import HomeNavBar from "../components/HomeNavbar";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div>
      <Toaster />
      {/* Navbar */}
      {location.pathname === "/" || location.pathname.startsWith("/category/") ?<div style={{
          backgroundColor: "rgba(9, 8, 15, 0.05)",
          padding: "40px"
        }}> <HomeNavBar /> </div>: <NavBar />}
      {/* Outlet */}
      <div
        style={{
          minHeight: "calc(100vh - 614px)",
          backgroundColor: "rgba(9, 8, 15, 0.05)",
        }}
      >
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
