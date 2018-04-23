import React from "react";
import { Button } from "semantic-ui-react";

import { firebase, auth, db } from "../../firebase";
import * as routes from '../../constants/routes';

class SignInPage extends React.Component {
  componentWillMount() {
    const { history } = this.props;
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        history.push(routes.ACCOUNT)
      }
    })
  }
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
