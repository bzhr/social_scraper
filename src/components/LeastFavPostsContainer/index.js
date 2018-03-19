import React from 'react';
import ContentContainer from "../ContentContainer";

import ContentWrapper from "../ContentWrapper";
import LeastFavPosts from "../LeastFavPosts";

export default class LeastFavPostsContainer extends React.Component {
	render() {
		const LeastFavPostsContainer = ContentWrapper(LeastFavPosts);
    const data = this.props.data;
		return(
			<ContentContainer
        content={LeastFavPostsContainer}
        data={data}
        title={"Least Popular Posts"}
      />
		)
	}
}