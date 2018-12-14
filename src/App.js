import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";

import store from "./store";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-grid">
          <Navbar />
          <Provider store={store}>
            <Home />
          </Provider>
          <Footer />
        </div>
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
