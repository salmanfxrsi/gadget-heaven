import { useLoaderData } from "react-router-dom";
import PagesHeading from "../components/PagesHeading";
import Chart from "../components/Chart";

const Statistics = () => {
  const allProducts = useLoaderData();

  return <div>
    {/* Heading */}
    <PagesHeading title={"Statistics"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"} />
    {/* Chart */}
    <Chart allProducts={allProducts} />
  </div>;
};

export default Statistics;
