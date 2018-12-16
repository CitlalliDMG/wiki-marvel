import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";

import store from "./store";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import ComicDetails from "./components/home/ComicDetails";
import Page404 from "./components/page404/Page404";
import Footer from "./components/layout/Footer";

import * as routes from "./constants/routes";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
          <div className="main-grid">
            <Navbar />
            <Switch>
              <Route exact path={routes.HOME} component={Home} />
              <Route exact path={routes.COMIC} component={ComicDetails} />
              <Route exact path={routes.SIGN_IN} component={SignIn} />
              <Route exact path={routes.SIGN_UP} component={SignUp} />
              <Route component={Page404} />
            </Switch>
            <Footer />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;

// export default () => (
// <Provider store={store}>
//   <Home />
// </Provider>
// );
