import React from 'react';
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

export default class TypesOfContent extends React.Component {
  render() {
    const data = this.props.data.data
    return(
      <ResponsiveContainer height={350} width="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
          layout="vertical"
         >
          <XAxis type="number"/>
          <YAxis type="category" dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip/>
          <Legend />
          {<Bar dataKey="count" fill="#8884d8" />}
        </BarChart>
      </ResponsiveContainer>
    )
  }
}