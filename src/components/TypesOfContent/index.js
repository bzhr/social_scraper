import React from 'react';
import { Container, Divider } from 'semantic-ui-react';

import Chart from './Chart';
import Stats from './Stats';

const content = (data) => {
  return(
    <Container >
      <Chart data={data.data} />
      <Divider />
      <Stats data={data.data.percOccurences} />
    </Container>
  )
}

export default content