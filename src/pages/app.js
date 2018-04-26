import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import AccountPage from "../components/AccountPage";
import PrivateRoute from "../components/Session/PrivateRoute";
import SignInPage from "../components/SignIn"
import * as routes from '../constants/routes';


const App = ({ data }) => (
  <div>
    <PrivateRoute path={routes.HOME} component={HomePage} data={data} />
    <PrivateRoute path={routes.ACCOUNT} component={AccountPage} data={data} />
    <Route path={routes.LOGIN} component={SignInPage} />
  </div>
)

export default App

export const ResourcesQuery = graphql`
  query ResourcesQuery {
    allFile(filter: {extension: {eq: "csv"}}) {
      edges {
        node {
          relativePath
          name
        }
      }
    }
  }
`;
