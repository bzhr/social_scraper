import React from "react";

import Post from "../Post";

export default class LeastFavPosts extends React.Component {
  render() {
    const data = this.props.data;
    const reversed = data.reverse();
    const tenLeastPop = reversed.slice(1, 11);
    return (
      <div>
        {tenLeastPop.map(tweet => (
                <Post key={tweet.tweet_id} tweet={tweet}
              />
        )
        )}
      </div>
    );
  }
}
