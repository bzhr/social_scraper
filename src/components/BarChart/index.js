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
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: -1
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseEnter(o, index) {
    console.log("Index, ", index);
    this.setState({
      activeIndex: index
    });
  }

  render() {
    const data = this.props.data;
    const activeIndex = this.state.activeIndex;
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
            content={<CustomTooltip data={data} tooltipIndex={activeIndex} />}
          />
          <Legend />
          <Bar
            dataKey="retweet_count"
            fill="#8884d8"
            onMouseEnter={this.handleMouseEnter}
          />
          <Bar
            dataKey="favorite_count"
            fill="#82ca9d"
            onMouseEnter={this.handleMouseEnter}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
