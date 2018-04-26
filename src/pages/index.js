import React from "react";
import "../css/semantic.min.css";
import { Container } from 'semantic-ui-react';

const LandingPage = ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <div>
      <Container 
        className="project-documentation"
        dangerouslySetInnerHTML={{ __html: html }}
        text={true}
        textAlign={"justified"}
      />
    </div>
  )
}
export default LandingPage

export const indexQuery = graphql`
  query indexQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
