import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { firebase, auth, db } from "../../firebase";
import * as routes from "../../constants/routes";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null
      };
    }

    componentDidMount() {
      const { history } = this.props;

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
          history.push(routes.ACCOUNT);
        } else {
          this.setState(() => ({ authUser: null }));

          history.push(routes.LANDING);
        }
      });
    }
    render() {
      const authUser = this.state.authUser;
      return authUser ? (
        <Component {...this.props} authUser={authUser} />
      ) : (
        <Component {...this.props} />
      );
    }
  }

  WithAuthentication.propTypes = {
    authUser: PropTypes.object
  };

  return withRouter(WithAuthentication);
};

export default withAuthentication;
