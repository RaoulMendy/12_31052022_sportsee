import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,

} from "recharts";

export default function Activity({ data }) {
  function CustomTooltip({ active, payload, label }) {
    const divStyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      width: "39px",
      height: "63px",
      fontSize: "7px",
      backgroundColor: "red",
      color: "white",
      textAlign: "center",
    };
    if (active) {
      return (
        <div className="tooltip" style={divStyle}>
          <p>{`${payload[0].value}${payload[0].unit}`}</p>
          <p>{`${payload[1].value}${payload[1].unit}`}</p>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <ResponsiveContainer
      className="dashboard__activity"
      width="100%"
      height="100%"
    >
      <BarChart
        data={data}
        margin={{ top: 0, left: 15, right: 15, bottom: 0 }}
        barCategoryGap={0}
  
        
      >
        <CartesianGrid
          vertical={false}
          offset={{ right: 0, brushBottom: 0 }}
        />
     
      

        <XAxis
          tickCount={7}
          tickLine={false}
          axisLine={false}
          tick={{dx: 0}}

          domain={["minData", "maxData"]}
          tickFormatter={(number) => number + 1}
        />

        <YAxis
          yAxisId={"kilogram"}
          tickCount={3}
          dataKey="kilogram"
          domain={["dataMin", "auto", "dataMax"]}
          orientation="right"
          tickLine={false}
          axisLine={false}
          tick={{dx: 15}}
        />
        <YAxis
          yAxisId={"calories"}
          tickCount={3}
          // domain={["dataMin", "auto", "dataMax"]}
          dataKey="calories"
          orientation="left"
          hide={true}
        
        />

        <Tooltip content={<CustomTooltip />} />

        <Legend
          iconType="circle"
          iconSize={8}
          verticalAlign="top"
          align="right"
          wrapperStyle={{ bottom: 200, right: 30 }}
          style={{color: "blue"}}       />
        <Bar
          yAxisId={"kilogram"}
          dataKey="kilogram"
          fill="#282d30"
          name="Poids (kg)"
          unit={"kg"}
          radius={[50, 50, 0, 0]}
          barSize={8}
        />
        <Bar
          barSize={8}
          yAxisId={"calories"}
          dataKey="calories"
          fill="#ff0000"
          name="Calories brûlées (kCal)"
          unit={"kCal"}
          radius={[50, 50, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
