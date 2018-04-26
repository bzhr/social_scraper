import React from "react";
import { Message } from "semantic-ui-react";

export default class CustomTooltip extends React.Component {
  render() {
    const data = this.props;
    const activeIndex = data.tooltipIndex;
    console.log("Tooltip Index", activeIndex);
    const activeTweet = () => {
      return data.data[activeIndex].tweet;
    };
    // const activeTweet = () => (activeIndex > 0 ? hoverElement : false);

    return (
      <Message floating>
        {activeIndex > -1 ? data.data[activeIndex].tweet : null}
      </Message>
    );
  }
}
