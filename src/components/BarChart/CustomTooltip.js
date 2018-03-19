import React from "react";

export default class CustomTooltip extends React.Component {
  render() {
    const data = this.props;
    return (
      <div>
        <div>{data.data[0].tweet}</div>
        <div>{data.tooltipIndex}</div>
      </div>
    );
  }
}
