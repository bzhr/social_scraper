import React from "react";
import { Segment, Button, Statistic, Grid } from "semantic-ui-react";
import "./index.css";

const Post = ({ tweet }) => (
  <Segment textAlign="left" className="postSegment">
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column width={10}>{tweet.tweet.slice(0, 100)}</Grid.Column>
        <Grid.Column floated="right" width={5}>
          <Statistic.Group size="tiny">
            <Statistic className="postSegment" color="red">
              <Statistic.Value className="postSegment" color="green">
                {tweet.retweet_count}
              </Statistic.Value>
              <Statistic.Label>Retweets</Statistic.Label>
            </Statistic>
            <Statistic className="postSegment" color="green">
              <Statistic.Value>{tweet.favorite_count}</Statistic.Value>
              <Statistic.Label>Favorites</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Post;
