import { Outlet } from "react-router-dom";
import DashboardPageHeading from "../components/DashboardPageHeading";

const Dashboard = () => {
  return <div>
    {/* Dashboard Heading */}
    <DashboardPageHeading title={"Dashboard"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"} />
    {/* Dynamic Cart And Wishlist Section */}
    <Outlet />
  </div>;
};

export default Dashboard;
