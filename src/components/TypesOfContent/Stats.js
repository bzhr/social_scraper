import React from "react";
import { Grid, Container, Icon, Statistic } from "semantic-ui-react";

const Stats = data => {
  return (
    <Container style={{ padding: "3rem" }}>
      <Grid relaxed columns={3}>
      {data.data.map(el => {
        let icon = el.name
        let label = icon
        if (icon == "") {icon = "file text outline"; label = "text"}
        return (
          <Grid.Column key={el.name} style={{ padding: "3rem" }}>
            <Grid.Row style={{ padding: "1rem" }}>
              <Icon name={icon} size="huge" />
            </Grid.Row>
            <Grid.Row style={{ padding: "1rem" }}>
              <Statistic>
                <Statistic.Value>{el.count}</Statistic.Value>
                <Statistic.Label>{label}</Statistic.Label>
              </Statistic>
            </Grid.Row>
          </Grid.Column>
        )
      })}
        
      </Grid>
    </Container>
  );
};

export default Stats;
