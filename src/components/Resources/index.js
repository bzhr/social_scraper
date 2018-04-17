import React from "react";
import { Header, Table } from "semantic-ui-react";
import Link from "gatsby-link"
import { auth } from "../../firebase";

// const Resources = (props) =>
//  <div>
//  <Header as='h1'>Resources</Header>
//  <Header as='h2'>Processing</Header>
//  <Header as='h2'>Completed</Header>
//  </div>

class Resources extends React.Component {
  render() {
    const data = this.props.data.allFile.edges;
    const user = auth.getCurrentUser();
    const filterData = data =>
      data.filter(resource => resource.node.name.includes(user.uid));
    const userData = filterData(data);
    return (
      <div>
        <Header as="h1">Resources</Header>
        {/*<Header as="h2">Processing</Header>*/}
        <Header as="h2">Completed</Header>
        <ResourceTable resources={userData} />
      </div>
    );
  }
}

// Defined also in home component
const ResourceTable = ({ resources }) => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>UID</Table.HeaderCell>
        <Table.HeaderCell>Resource Name</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {resources.map(resource =>
      <Table.Row key={resource.node.name}>
        <Table.Cell>
          {resource.node.relativePath.split("_")[0]}
        </Table.Cell>
        <Link
          to={"/" + resource.node.name}
        >
          <Table.Cell>
            {resource.node.name.split("_")[1]}
          </Table.Cell>
        </Link>
      </Table.Row>
    )}
    </Table.Body>
  </Table>
)
export default Resources;
