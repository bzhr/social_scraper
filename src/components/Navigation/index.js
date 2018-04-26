import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Menu, Button } from 'semantic-ui-react';

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

// const Navigation = () =>
//   <ul>
//     <li><Link to={routes.LANDING}>Landing</Link></li>
//     <li><Link to={routes.HOME}>Home</Link></li>
//     <li><Link to={routes.ACCOUNT}>Account</Link></li>
//     <li><Link to={routes.LOGIN}>Login</Link></li>
//     <li><SignOutButton /></li>
//   </ul>

// export default Navigation;

export default class Navigation extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu
        fixed={"top"}
        inverted={true}
      >
        <Link to={routes.LANDING}
        >
          <Menu.Item
            name='landing'
            active={activeItem === 'landing'}
            content='Landing'
            onClick={this.handleItemClick}
          />
        </Link>

        <Link to={routes.HOME}>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            content='Home'
            onClick={this.handleItemClick}
          />
        </Link>

        <Link to={routes.ACCOUNT}>
          <Menu.Item
            name='account'
            active={activeItem === 'account'}
            content='Account'
            onClick={this.handleItemClick}
          />
        </Link>

        <Link to={routes.LOGIN}>
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            content='Login'
            onClick={this.handleItemClick}
          />
        </Link>
      </Menu>
    )
  }
}
