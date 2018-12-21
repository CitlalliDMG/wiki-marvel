import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import ComicDetails from "./components/home/ComicDetails";
import CreateCollectionContainer from "./components/collection/CreateCollectionContainer";
import CollectionsDashboard from "./components/collection/CollectionsDashboard";
import Page404 from "./components/page404/Page404";
import Footer from "./components/layout/Footer";

import * as routes from "./constants/routes";

const App = ({ history }) => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="main-grid">
        <Navbar />
        <Switch>
          <Route exact path={routes.HOME} component={Home} />
          <Route exact path={routes.COMIC} component={ComicDetails} />
          <Route exact path={routes.SIGN_IN} component={SignIn} />
          <Route exact path={routes.SIGN_UP} component={SignUp} />
          <Route
            exact
            path={routes.NEW_COLLECTION}
            component={CreateCollectionContainer}
          />
          <Route
            exact
            path={routes.COLLECTIONS}
            component={CollectionsDashboard}
          />
          <Route component={Page404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
