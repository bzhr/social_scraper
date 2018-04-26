import React from "react";
import { Table } from "semantic-ui-react";
import Link from "gatsby-link";
import { db } from "../firebase";
const _ = require("lodash");

const fromObjectToList = object =>
  object
    ? Object.keys(object).map(key => ({ ...object[key], index: key }))
    : [];

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  componentWillMount() {
    db
      .onceGetUsers()
      .then(snapshot =>
        this.setState(() => ({ users: fromObjectToList(snapshot.val()) }))
      );
  }
  render() {
    const resources = this.props.data.allFile.edges;
    const users = this.state.users
    // console.log("Users", this.state.users, resources);
    return (
      <div>
        <h1>Home</h1>
        <p>The Home Page lists all resources created by users.</p>
        {(resources && users[0] ) ? (
          <ResourceTable resources={resources} users={users} />
        ) : null}
      </div>
    );
  }
}

const ResourceTable = ({ resources, users }) => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Profile Picture</Table.HeaderCell>
        <Table.HeaderCell>Username</Table.HeaderCell>
        <Table.HeaderCell>Resource Name</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {resources.map(resource => (
        <TableRow key={resource.node.name} resource={resource} users={users} />
      ))}
    </Table.Body>
  </Table>
);

const TableRow = ({ resource, users }) => {
  const idForm = resource.node.name.split("_")[1]
  const findUser = (element) => element.index.toLowerCase() === idForm
  const user = users.find(findUser)
  console.log(user)
  return (
    <Table.Row >
      <Table.Cell>
        <img src={user.photoUrl} alt="profile photo"/>
      </Table.Cell>
      <Table.Cell>{user.username}</Table.Cell>
      <Table.Cell>
        <Link to={"/" + resource.node.name}>
          {resource.node.name.split("_")[0].replace(".csv", "")}
        </Link>
      </Table.Cell>
    </Table.Row>
  );
}