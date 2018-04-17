import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import AccountPage from "../components/AccountPage";
import PrivateRoute from "../components/Session/PrivateRoute";
import * as routes from '../constants/routes';


const App = ({ data }) => (
  <div>
    <PrivateRoute path={routes.HOME} component={HomePage} data={data} />
    <PrivateRoute path={routes.ACCOUNT} component={AccountPage} data={data} />
  </div>
)

export default App

export const ResourcesQuery = graphql`
  query ResourcesQuery {
    allFile {
      edges {
        node {
          relativePath
          name
        }
      }
    }
  }
`;
