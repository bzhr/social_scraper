import React from 'react';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import { Redirect } from "react-router-dom";
import Link from "gatsby-link";

class SignOutButton extends React.Component {

  onSignOut = () => {
    auth.doSignOut()
  }

  render() {
    return (
      <div>
        <Link to={routes.LANDING} >
        <button
          type="button"
          onClick={this.onSignOut}
        >
          Sign Out
        </button>
        </Link>
      </div>
    );
  }
}

export default SignOutButton;
