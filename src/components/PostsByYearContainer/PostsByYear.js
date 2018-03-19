import React from "react";
import { Container, Grid, Statistic } from "semantic-ui-react";

const PostsByYear = data => {
  return (
    <Container>
      <Grid relaxed columns={data.data.length} style={{ padding: "3rem" }}>
        {data.data.map(el => {
          return (
            <Grid.Column key={el.el}>
              <Statistic>
                <Statistic.Value>{el.count}</Statistic.Value>
                <Statistic.Label>{el.el}</Statistic.Label>
              </Statistic>
            </Grid.Column>
          );
        })}
      </Grid>
    </Container>
  );
};

export default PostsByYear;
