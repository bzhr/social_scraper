import React from 'react';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import Link from "gatsby-link";
import { Menu } from 'semantic-ui-react';

class SignOutButton extends React.Component {

  onSignOut = () => {
    auth.doSignOut()
  }

  render() {
    return (
      <div>
        <Link to={routes.LANDING} onClick={this.onSignOut}>
        <Menu.Item
          content="Sign Out"
        />
        </Link>
      </div>
    );
  }
}

export default SignOutButton;
