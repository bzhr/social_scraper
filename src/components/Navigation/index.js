import React, { Component } from "react";
import Link from "gatsby-link";
import { Menu } from "semantic-ui-react";

import SignOutButton from "../SignOut";
import * as routes from "../../constants/routes";

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
  state = {};

  render() {
    // const { activeItem } = this.state
    // console.log("Active Item", activeItem)

    return (
      <Menu size={"large"} fixed={"top"} inverted={true}>
        <Link>
          <Menu.Item content="Landing" name="landing" />
        </Link>

        <Link to={routes.HOME}>
          <Menu.Item name="home" content="Home" />
        </Link>

        <Link to={routes.ACCOUNT}>
          <Menu.Item name="account" content="Account" />
        </Link>

        <Link to={routes.LOGIN}>
          <Menu.Item name="login" content="Login" />
        </Link>
      </Menu>
    );
  }
}
