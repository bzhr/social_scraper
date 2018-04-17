import React from "react";
import PropTypes from "prop-types";
import { Header } from "semantic-ui-react";

import AddResource from "./Forms/AddResource";
import Resources from "./Resources";
import { auth } from "../firebase"

const AccountPage = ({ data }) => {
  console.log("Account props", data)
  const user = auth.getCurrentUser()
  return (
    <div>
      <div>
        <Header as="h1">Hello, {user.displayName}</Header>
        <AddResource authUser={user} />
      </div>
      <Resources data={data} />
    </div>
  )
};

AccountPage.propTypes = {
  authUser: PropTypes.object
};

export default AccountPage;
