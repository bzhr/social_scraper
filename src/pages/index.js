import React from "react";
import { Redirect } from "react-router-dom";
import "../css/semantic.min.css";

import SignInPage from "../components/SignIn"
import { firebase, auth } from "../firebase"
import * as routes from "../constants/routes";

export default class LandingPage extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        isLoggedIn: !!window.localStorage.gatsbySocialScraperUser.uid
      };
    }

  componentWillMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      const isLoggedIn = auth.isLoggedIn()
      console.log("Setting State in Component WIll Mount")
      this.setState(() => ({ "isLoggedIn": isLoggedIn }));
      console.log("State", this.state)
    });
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn
    return (
      <div>
        {isLoggedIn ? null : <SignInPage/>}
        <h1>Landing</h1>
        <p>The Landing Page is open to everyone, even though the user isn't signed in.</p>
      </div>
    )
  }
}
