import React from "react";

import ContentContainer from "../ContentContainer";
import ContentWrapper from "../ContentWrapper";
import PostsByYear from "./PostsByYear";

export default class PostsByYearContainer extends React.Component {
	render() {
		const Content = ContentWrapper(PostsByYear)
		const data = this.props.data;
		return (
			<ContentContainer
				content={Content}
				data={data}
				title={"Posts By Year"}
			/>
		);
	}
}
