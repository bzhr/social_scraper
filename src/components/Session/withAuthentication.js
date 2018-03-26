import React from "react";
import PropTypes from "prop-types";

import { firebase, auth, db } from "../../firebase";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
      });
      firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          firebase.auth.getRedirectResult().then(result => {
            if (result.credential) {
              const isNewUser = result.additionalUserInfo.isNewUser;
              const token = result.credential.accessToken;
              const secret = result.credential.secret;
              const providerId = result.credential.providerId;
              const username = result.additionalUserInfo.username;
              const photoUrl =
                result.additionalUserInfo.profile.profile_image_url_https;
              // db.doCreateUser(token,
              //   secret,
              //   providerId,
              //   isNewUser,
              //   username,
              //   photoUrl,
              // ).catch(error => {
              //     console.log("Error creating user", error);
              //   });
            }
          });
          this.setState(() => ({ authUser }));
        } else {
          this.setState(() => ({ authUser: null }));
        }
      });
    }
    render() {
      const authUser = this.state.authUser
      return <Component {...this.props} authUser={authUser} />;
    }
  }

  WithAuthentication.propTypes = {
    authUser: PropTypes.object
  };

  return WithAuthentication;
};

export default withAuthentication;
