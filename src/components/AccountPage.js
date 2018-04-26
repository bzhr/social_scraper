import React from "react";
import PropTypes from "prop-types";
import { Header } from "semantic-ui-react";

import AddResource from "./Forms/AddResource";
import Resources from "./Resources";
import { auth } from "../firebase"

const AccountPage = ({ data }) => {
  const user = auth.getCurrentUser()
  // const photoURL = user.providerData[0].photoURL
  const displayName = user.displayName
  return (
    <div>
      <div>
        <Header as="h1">Hello, {displayName}</Header>
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
