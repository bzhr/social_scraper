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
        <Link to={routes.LANDING} >
        <Menu.Item
          onClick={this.onSignOut}
          content="Sign Out"
        />
        </Link>
      </div>
    );
  }
}

export default SignOutButton;
