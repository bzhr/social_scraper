import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import CustomTooltip from "./CustomTooltip";

export default class SimpleBarChart extends React.Component {
  // componentDidMount() {
  //   console.log(this.refs)
  // }
  render() {
    const data = this.props.data;
    return (
      <ResponsiveContainer height={350} width="100%">
        <BarChart
          ref="bar"
          data={data}
          margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            content={
              <CustomTooltip data={data} tooltipIndex={"dds"} />
            }
          />
          <Legend />
          {<Bar dataKey="retweet_count" fill="#8884d8" />}
          {<Bar dataKey="favorite_count" fill="#82ca9d" />}
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
