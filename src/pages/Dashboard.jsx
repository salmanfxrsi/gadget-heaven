import { Outlet } from "react-router-dom";
import DashboardPageHeading from "../components/DashboardPageHeading";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Gadget Heaven - Dashboard";
  }, []);

  return (
    <div className="pb-[100px]">
      {/* Dashboard Heading */}
      <DashboardPageHeading
        title={"Dashboard"}
        subtitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      />
      {/* Dynamic Cart And Wishlist Section */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
