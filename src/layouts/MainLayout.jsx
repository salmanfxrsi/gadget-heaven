import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <NavBar />
      {/* Outlet */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;