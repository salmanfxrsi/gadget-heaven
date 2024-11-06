import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <div>
      <Toaster />
      {/* Navbar */}
      <NavBar />
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
