import React from "react";
import { ResponsiveContainer } from "recharts";

import SimpleBarChart from "../BarChart";

export default class MostFavPosts extends React.Component {
  render() {
    const data = this.props.data
    const mostPopularPosts = data.reverse();
    const tenMostPop = mostPopularPosts.slice(1, 11);
    return <SimpleBarChart data={tenMostPop} />;
  }
}
