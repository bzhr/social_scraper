import React from "react";
import { Button, h1, Segment, Dimmer, Loader } from "semantic-ui-react";

import { firebase, auth } from "../../firebase";
import * as routes from "../../constants/routes";

class SignInPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
  }

  componentWillMount() {
    const { history } = this.props;
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        history.push(routes.ACCOUNT);
        this.setState({ isLoading: false });
      }
    });
  }
  onTwitterSignIn = event => {
    auth.doSignInWithTwitter();
    this.setState({ isLoading: true });
  };
  render() {
    if (auth.isLoggedIn()) {
      return <h1>You're logged in</h1>;
    }

    if (this.state.isLoading) {
      return (
        <Segment>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        </Segment>
      );
    }
    return (
      <div>
        <h1>Sign in with your social media account.</h1>
        <Button onClick={this.onTwitterSignIn}>
          <div>Twitter Sign in</div>
        </Button>
      </div>
    );
  }
}

export default SignInPage;
