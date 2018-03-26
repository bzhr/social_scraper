import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import withAuthorization from '../components/Session/withAuthorization';
import AddResource from '../components/Forms/AddResource';
import Resources from '../components/Resources';


const AccountPage = (props, { authUser }) =>
  <div>
    {/*<Header as='h1' >Hello, {props.authUser.displayName}</Header>*/}
    <AddResource authUser={props.authUser} />
    <Resources />
  </div>

AccountPage.propTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

// export default withAuthorization(authCondition)(AccountPage);
export default AccountPage
