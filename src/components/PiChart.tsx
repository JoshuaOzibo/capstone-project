import { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { piechatype } from "./TypesExport";

class PiChart extends PureComponent<piechatype> {
  render() {
    const { data01, size } = this.props;

    return (
      <ResponsiveContainer className=" md:pt-10" width="100%" height={400}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={size}
            fill="skyblue"
            label
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default PiChart;
