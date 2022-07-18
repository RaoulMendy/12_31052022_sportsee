import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  CartesianAxis,
  Line,
  Label,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

function Sessions({ data }) {
  const CustomLegend = () => {
    return <div>Durée moyennes des sessions</div>;
  };
  return (
    <ResponsiveContainer
      className="dashboard__sessions"
      width="100%"
      height="100%"
    >
      <LineChart data={data}>
        <CartesianGrid horizontal="" vertical="" />

        <XAxis
        
          axisLine={false}
          tickLine={false}
          // tickCount={7}
          // tickSize={3}
        >
          <Label position="bottom"/>
        </XAxis>

        <YAxis hide={true} tickCount={7} />
        <Tooltip
        // content={<CustomTooltip />}
        // cursor={{ stroke: "black", strokeWidth: 80, strokeOpacity: "0.3" }}
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#fff"
          dot={false}
          activeDot={{ r: 7 }}
        />
        <Legend
          content={<CustomLegend />}
          wrapperStyle={{
            bottom: 160,
            lineHeight: "10px",
            justifyContent: "space-between",
            width: "100%",
          }}
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

export default Sessions;
