import React, { Component } from "react";
import Link from "gatsby-link";
import { Menu } from "semantic-ui-react";

import SignOutButton from "../SignOut";
import * as routes from "../../constants/routes";
import { auth } from "../../firebase";

export default class Navigation extends Component {
  state = {};

  render() {
    let loginLogout;
    if (typeof window !== "undefined") {
      const isLoggedIn = auth.isLoggedIn()
      if (isLoggedIn) {
        loginLogout = <SignOutButton />
      }
      else {
        loginLogout = (<Link to={routes.LOGIN} >
        <Menu.Item name="login" content="Login" />
      </Link>)
      }
    }
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
        {loginLogout}
        
      </Menu>
    );
  }
}
