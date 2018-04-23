import React from 'react';
import Link from 'gatsby-link';

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><Link to={routes.LOGIN}>Login</Link></li>
    <li><SignOutButton /></li>
  </ul>

export default Navigation;
