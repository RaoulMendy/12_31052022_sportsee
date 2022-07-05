import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  // ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "L",
    pv: 1,
  },
  {
    name: "M",
    pv: 2,
  },
  {
    name: "M",
    pv: 3,
  },
  {
    name: "J",
    pv: 4,
  },
  {
    name: "V",
    pv: 2,
  },
  {
    name: "S",
    pv: 6,
  },
  {
    name: "D",
    pv: 1,
  },
];

function Sessions
() {
  return (
    <ResponsiveContainer className="dashboard__sessions" width="90%" height="95%">
      <LineChart data={data}>
        <CartesianGrid horizontal="" vertical="" />
        <XAxis
          dataKey="name"
          padding={{ left: 0, right: 0 }}
          axisLine={false}
          tickLine={false}
          tickMargin={5}
          tickCount={7}
          interval={0}
          tickSize={3}
        />
        <YAxis hide={true}
        tickCount={7} />
        <Tooltip 
        content={<CustomTooltip />} 
        cursor={{ stroke: 'black', strokeWidth: 80, strokeOpacity: "0.3"  }}
        />
        {/* <Legend /> */}
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#fff"
          dot={false}
          activeDot={{ r: 7 }}
        />
      </LineChart>
     </ResponsiveContainer>
  );
  function CustomTooltip({ active, payload, label }) {
    if (active) {
      return <div className="tooltip">{label}</div>;
    }
  }
}



export default Sessions
;
