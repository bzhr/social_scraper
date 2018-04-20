import React from "react";
import { Divider } from "semantic-ui-react";
import "../css/semantic.min.css";

import LeastFavPostsContainer from "../components/LeastFavPostsContainer";
import MostFavPostsContainer from "../components/MostFavPostsContainer";
import TypesOfContentContainer from "../components/TypesOfContentContainer";
import PostsByYearContainer from "../components/PostsByYearContainer";
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

export default function Template({ pathContext }) {
  console.log("DATA", pathContext)
  const data = pathContext.data;
  let element = null
  if (data) {
    const key = Object.keys(data)[0];
    console.log("key", key)
    const CsvData = data[key].edges;
    console.log(CsvData)

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

    const postsByYear = countOccurences(getTweetYear(correctDataTypes));
    element = 
      (<div>
        <h1>Resource</h1>
        <p>
          The Landing Page is open to everyone, even though the user isn't signed in.
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
      </div>)
  } else {
    element = (<p>"Data is not properly formatted."</p>)
  }
  return (
    <div>{ element }</div>
  );
}
