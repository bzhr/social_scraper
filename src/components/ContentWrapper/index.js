import React from "react";
import { Grid } from "semantic-ui-react";

const ContentWrapper = WrappedComponent => props => (
	<Grid centered>
		<WrappedComponent {...props} />
	</Grid>
);

export default ContentWrapper;
