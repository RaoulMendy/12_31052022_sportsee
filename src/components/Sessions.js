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
    pv: 5,
  },
  {
    name: "S",
    pv: 6,
  },
  {
    name: "D",
    pv: 7,
  },
];

function Sessions
() {
  return (
    <ResponsiveContainer className="graph2" width="100%" height="100%">
      <LineChart width={250} height={250} data={data}>
        <CartesianGrid horizontal="" vertical="" />
        <XAxis
          dataKey="name"
          padding={{ left: 0, right: 0 }}
          axisLine={false}
          tickLine={false}
          // interval={0}
          // tickMargin={3}
          // tickSize={3}
        />
        <YAxis hide={true} />
        <Tooltip content={<Customtooltip />} />
        {/* <Legend /> */}
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#fff"
          activeDot={{ r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
  function Customtooltip({ active, payload, label }) {
    if (active) {
      return <div className="tooltip">{label}</div>;
    }
  }
}

export default Sessions
;
