import React from "react"
import PropTypes from "prop-types"
import { Redirect, Route } from "react-router-dom"
import { auth } from "../../firebase";
import * as routes from "../../constants/routes";

// More info at https://reacttraining.com/react-router/web/example/auth-workflow
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !auth.isLoggedIn() ? (
        // If we’re not logged in, redirect to the home page.
        <Redirect to={{ pathname: routes.LANDING }} />
      ) : (
        <Component {...rest} />
      )
    }
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute