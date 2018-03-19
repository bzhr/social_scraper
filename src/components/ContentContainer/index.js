import React from "react";
import { Segment, Container, Header } from "semantic-ui-react";

import "./index.css";

export default class ContentContainer extends React.Component {
  render() {
    const Content = this.props.content;
    return (
      <Container >
        <Segment textAlign={"center"} >
          <Header className="title" dividing as="h2">
            {this.props.title}
          </Header>
          <Content data={this.props.data} />
        </Segment>
      </Container>
    );
  }
}
