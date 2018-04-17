import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';
import { auth } from '../../firebase'

// const Navigation = (props, { authUser }) =>
//   <div>
//     { auth.isLoggedIn()
//         ? <NavigationAuth />
//         : <NavigationNonAuth />
//     }
//   </div>


// Navigation.propTypes = {
//   authUser: PropTypes.object,
// };

const Navigation = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
  </ul>

export default Navigation;
