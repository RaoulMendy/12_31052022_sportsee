import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer,
} from "recharts";



const data = [
  {
    name: "Page A",
    uv: 40,
    pv: 24,
    amt: 24,
  },
  {
    name: "Page B",
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: "Page C",
    uv: 20,
    pv: 48,
    amt: 22,
  },
  {
    name: "Page D",
    uv: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: "Page E",
    uv: 18,
    pv: 40,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 20,
    pv: 30,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 34,
    pv: 43,
    amt: 21,
  },
];

export default function Activity() {
  function CustomTooltip({ active, payload, label }) {
    if (active) {
      return <div className="tooltip">{label}</div>;
    }
  }
  return (
    <ResponsiveContainer className="dashboard__activity" width="100%" height="95%">
      <BarChart data={data} barSize={7} barGap={8}>
        <CartesianGrid strokeDasharray="1 0  " vertical={false} />
        <XAxis dataKey="name" tickCount={7} tickLine={false} axisLine={false} />
        <YAxis
          tickCount={3}
          orientation={"right"}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        {/* <Legend
          width={100}
          wrapperStyle={{
            top: 0,
            right: 0,
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "20px",
          }}
        /> */}
        <Bar dataKey="pv" fill="#282d30" />
        <Bar dataKey="uv" fill="#ff0000" />
      </BarChart>
    </ResponsiveContainer>
  );
}
