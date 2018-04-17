import React from "react";
import { Redirect } from "react-router-dom"
import { Button } from "semantic-ui-react";

import { firebase, auth, db } from "../../firebase";
import * as routes from '../../constants/routes';

class SignInPage extends React.Component {
  onTwitterSignIn = event => {
    auth.doSignInWithTwitter()
  };
  render() {
    return (
      <div>
        <h1>SignIn</h1>
        <Button onClick={this.onTwitterSignIn}>
          <div>Twitter Sign in</div>
        </Button>
      </div>
    );
  }
}

export default SignInPage;
