import React, { Component } from "react";
import { Table } from 'semantic-ui-react';
import Link from "gatsby-link"

// import withAuthorization from '../components/Session/withAuthorization';

import withAuthentication from "../components/Session/withAuthentication";
import { db } from "../firebase";

const fromObjectToList = object =>
  object
    ? Object.keys(object).map(key => ({ ...object[key], index: key }))
    : [];

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    db
      .onceGetUsers()
      .then(snapshot =>
        this.setState(() => ({ users: fromObjectToList(snapshot.val()) }))
      );
  }

  render() {
    const resources = this.props.data.allFile.edges
    const { users } = this.state;
    resources.forEach(resource => console.log(resource.node.relativePath.split("_")))

    return (
      <div>
        <h1>Home</h1>
        <p>The Home Page lists all resources created by users.</p>
        {resources ? <ResourceTable resources={resources} /> : null}
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <div>
    <h2>List of App User IDs (Saved on Sign Up in Firebase Database)</h2>
    {users.map(user => <div key={user.index}>{user.index}</div>)}
  </div>
);

const ResourceTable = ({ resources }) => (
  <Table>
    <Table.Header>
      <Table.HeaderCell>UID</Table.HeaderCell>
      <Table.HeaderCell>Resource Name</Table.HeaderCell>
    </Table.Header>
    {resources.map(resource => 
      <Table.Row key={resource.node.name}>
        <Table.Cell>
          {resource.node.relativePath.split("_")[0]}
        </Table.Cell>
        <Link
          to={resource.node.name}
        >
          <Table.Cell>
            {resource.node.relativePath.split("_")[1].replace(".csv", "")}
          </Table.Cell>
        </Link>
      </Table.Row>
    )}
  </Table>
)

const authCondition = authUser => !!authUser;

// export default withAuthorization(authCondition)(HomePage);
export default withAuthentication(HomePage);

export const ResourcesQuery = graphql`
  query ResourcesQuery {
    allFile {
      edges {
        node {
          relativePath
          name
        }
      }
    }
  }
`;
