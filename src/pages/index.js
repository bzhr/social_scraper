import React from "react";
import { Divider } from "semantic-ui-react";
import "../css/semantic.min.css";

import LeastFavPostsContainer from "../components/LeastFavPostsContainer";
import MostFavPostsContainer from "../components/MostFavPostsContainer";
import TypesOfContentContainer from "../components/TypesOfContentContainer";
import PostsByYearContainer from '../components/PostsByYearContainer';
import {
  sort,
  favoriteToInt,
  retweetToInt,
  twitterMediaTypes,
  countWordOccurences,
  termToWordOccurences,
  getTweetYear,
  countOccurences
} from "../filters";

// const LandingPage = () =>
//   <div>
//     <h1>Landing</h1>
//     <p>The Landing Page is open to everyone, even though the user isn't signed in.</p>
//   </div>

// export default LandingPage;

export default class IndexPage extends React.Component {
  render() {
    const data = this.props.data;
    const CsvData = data.allOutCsv.edges;
    const sortedData = CsvData.sort(sort).map(tweet => {
      return tweet.node;
    });
    const correctDataTypes = sortedData.map(favoriteToInt).map(retweetToInt);

    const termOccurences = termToWordOccurences(
      twitterMediaTypes,
      correctDataTypes
    );
    const fileLength = correctDataTypes.length;
    const percOccurences = termOccurences.map(val => {
      return {
        count: (val.count / fileLength * 100).toFixed(1) + " %",
        name: val.name
      };
    });

    const postsByYear = countOccurences(getTweetYear(correctDataTypes))
    // const average = correctDataTypes
    return (
      <div>
        <h1>Landing</h1>
        <p>
          The Landing Page is open to everyone, even though the user isn't
          signed in.
        </p>
        <MostFavPostsContainer data={correctDataTypes} />
        <Divider />
        <LeastFavPostsContainer data={correctDataTypes} />
        <Divider />
        <TypesOfContentContainer
          percOccurences={percOccurences}
          data={termOccurences}
        />
        <Divider />
        <PostsByYearContainer data={postsByYear} />
      </div>
    );
  }
}

export const IndexQuery = graphql`
  query IndexQuery {
    allOutCsv {
      edges {
        node {
          retweet_count
          favorite_count
          tweet
          tweet_time
          medias_0_type
          tweet_id
        }
      }
    }
  }
`;
