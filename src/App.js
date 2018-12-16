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
        <Provider store={store}>
          <div className="main-grid">
            <Navbar />
            <Home />
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
