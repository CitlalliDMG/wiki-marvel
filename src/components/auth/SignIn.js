import React, { Component } from "react";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="main-container center-vertically">
        <h1 className="container-content">Sign in to Wiki Comics</h1>
        <form className="center-form" onSubmit={this.handleSubmit}>
          <input
            name="email"
            className="search-bar"
            id="email"
            onChange={this.handleChange}
            type="email"
            placeholder="Email"
            aria-label="Email"
          />
          <input
            name="password"
            className="search-bar"
            id="password"
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            aria-label="Password"
          />
          <button
            id="searchbutton"
            className="search-button"
            type="submit"
            aria-label="Sign In Button"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
