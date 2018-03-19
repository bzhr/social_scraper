import React from "react";

import ContentContainer from "../ContentContainer";
import ContentWrapper from "../ContentWrapper";
import MostFavPosts from "../MostFavPosts";

export default class MostFavPostsContainer extends React.Component {
  render() {
    const FavPostsContainer = ContentWrapper(MostFavPosts);
    const favPostsData = this.props.data;
    return (
      <ContentContainer
        content={FavPostsContainer}
        data={favPostsData}
        title={"Most Popular Posts"}
      />
    );
  }
}
