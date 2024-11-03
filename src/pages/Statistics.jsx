import { useLoaderData } from "react-router-dom";
import PagesHeading from "../components/PagesHeading";
import Chart from "../components/Chart";

const Statistics = () => {
  const allProducts = useLoaderData();

  return <div>
    {/* Heading */}
    <PagesHeading />
    {/* Chart */}
    <Chart allProducts={allProducts} />
  </div>;
};

export default Statistics;
