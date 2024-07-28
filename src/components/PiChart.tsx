import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

class PiChart extends PureComponent {
  render() {
    // type pieDataType = {
    //   data01: {
    //     name: string;
    //     value: number;
    //   };
    //   size: number;
    // };


    type typoType ={
      data01:Readonly<{ name: string, value: number}>,
      size: Readonly<number>
    }
    const { data01, size }: typoType = this.props;

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
            fill="#8884d8"
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
