import React, { Component } from "react";
import Link from "gatsby-link";
import { Menu } from "semantic-ui-react";

import SignOutButton from "../SignOut";
import * as routes from "../../constants/routes";

export default class Navigation extends Component {
  state = {};

  render() {
    return (
      <Menu size={"large"} fixed={"top"} inverted={true}>
        <Link to={routes.LANDING} >
          <Menu.Item content="Landing" name="landing" />
        </Link>

        <Link to={routes.HOME} >
          <Menu.Item name="home" content="Home" />
        </Link>

        <Link to={routes.ACCOUNT} >
          <Menu.Item name="account" content="Account" />
        </Link>

        <Link to={routes.LOGIN} >
          <Menu.Item name="login" content="Login" />
        </Link>
      </Menu>
    );
  }
}
