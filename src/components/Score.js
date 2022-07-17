import {
  RadialBarChart,
  RadialBar,
  LabelList,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  

  {
    name: "unknow",
    uv: 6.67,
    pv: 20 ,
    fill: "red",
  },
];

const style = {
  top: "40%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

function Score() {
  return (
    <ResponsiveContainer className='graph__score' width="90%" height="95%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="70%"
        outerRadius="90%"
        barSize={10}
        data={data}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "center", fill: "$red" }}
          background
          clockWise
          dataKey="uv"
      
        />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
export default Score;
