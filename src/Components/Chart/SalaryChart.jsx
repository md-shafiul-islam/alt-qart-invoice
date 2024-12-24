import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Label,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { isEmptyOrNull } from "../../utils/helper";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "#1188FE",
  "#FF4428",
  "#FFBB66",
  "#33C49F",
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const SalaryChart = ({ chartData = [], ...props }) => {
  console.log("Chart Size ", chartData);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!isEmptyOrNull(chartData)) {
      setData(chartData);
    }
  }, [chartData]);

  return (
    <div className="w-full h-screen py-10 my-10">
      <ResponsiveContainer width={`100%`} className="my-6">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="6 6" />
          <XAxis dataKey="name"  />
          <YAxis />
          <Bar
            dataKey="salary"
            fill="#8884d8"
            
            layout="vertical"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalaryChart;
