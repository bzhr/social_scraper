import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { firebase } from "../../firebase";
import * as routes from "../../constants/routes";

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(routes.SIGN_IN);
        }

        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
      });
    }

    render() {
      const authUser = this.state.authUser;
      return this.state.authUser ? (
        <Component authUser={authUser} {...this.props} />
      ) : null;
    }
  }

  WithAuthorization.propTypes = {
    authUser: PropTypes.object
  };

  return withRouter(WithAuthorization);
};

export default withAuthorization;
