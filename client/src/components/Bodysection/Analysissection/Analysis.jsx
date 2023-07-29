import "./analysis.css";

import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Analysis = () => {
  const data = [
    {
      name: "healthy",
      value: 450,
    },
    {
      name: "infectedByCLR",
      value: 30,
    },
    {
      name: "infectedByBES",
      value: 15,
    },
  ];

  const data_bar = [
    {
      name: "Level 1",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Level 2",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Level 3",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Level 4",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ];

  return (
    <div className="analysis">
      <div className="total">
        <h2>total summary</h2>
        <BarChart
          className="BarChart"
          width={500}
          height={300}
          data={data_bar}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
            style={{ color: "white" }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#6f373c" background={{ fill: "#dfa878" }} />
        </BarChart>
      </div>
      <div className="crop">
        <h2>crop</h2>
        <PieChart width={300} height={300} className="PieChart">
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            fill="#dfa878"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Analysis;
