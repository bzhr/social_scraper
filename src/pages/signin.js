import React from 'react';

import { firebase, auth, db } from "../firebase";
import { Button } from 'semantic-ui-react'

class SignInPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {authUser: null}
  }

  onTwitterSignIn = event => {
    auth.doSignInWithTwitter()

    firebase.auth.getRedirectResult().then(result => {
      console.log("REDIRECT RESULT IN SIGN UP", result);
    });
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
