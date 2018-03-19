import React from "react";

import ContentContainer from "../ContentContainer";
import ContentWrapper from "../ContentWrapper";
import TypesOfContent from '../TypesOfContent';

export default class TypesOfContentContainer extends React.Component {
  render() {
    const Content = ContentWrapper(TypesOfContent)
    const data = this.props
    return (
      <ContentContainer
        content={Content}
        data={data}
        title={"Types Of Content"}
      />
    )
  }
}
