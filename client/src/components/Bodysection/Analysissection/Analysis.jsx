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
      name: "Mild",
      CLR: 400,
      BES: 200,
      amt: 100,
    },
    {
      name: "Moderate",
      CLR: 300,
      BES: 198,
      amt: 100,
    },
    {
      name: "Severe",
      CLR: 200,
      BES: 900,
      amt: 100,
    },
  ];

  return (
    <div className="analysis">
      <div className="total">
        <h2>Infections Report</h2>
        <BarChart
          width={500}
          height={300}
          data={data_bar}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="BES" fill="#dfa878" />
          <Bar dataKey="CLR" fill="#6c3428" />
        </BarChart>
      </div>
      <div className="crop">
        <h2>Farm Summary</h2>
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
