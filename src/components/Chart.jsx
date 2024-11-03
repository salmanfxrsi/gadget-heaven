import {
  BarChart,
  AreaChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

import PropTypes from 'prop-types';


const Chart = ({ allProducts }) => (
  <div className="container mx-auto pb-[100px] mt-12">
    <h1 className="font-bold text-[#0B0B0B] text-2xl pb-8">Statistics</h1>
    <div className="bg-white py-[88px] px-8 rounded-2xl">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={allProducts}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product_title" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#9538E2" />
          <AreaChart>
            <Area
              type="monotone"
              dataKey="value2"
              fill="#82ca9d"
              stroke="#82ca9d"
            />
          </AreaChart>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

Chart.propTypes = {
    allProducts: PropTypes.array,
}

export default Chart;
