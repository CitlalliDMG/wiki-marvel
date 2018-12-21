import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
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
        <h1 className="container-content">Create an Account</h1>
        <form className="center-form" onSubmit={this.handleSubmit}>
          <input
            name="firstName"
            className="search-bar"
            id="firstName"
            onChange={this.handleChange}
            type="text"
            placeholder="First Name"
            aria-label="First Name"
          />
          <input
            name="lastName"
            className="search-bar"
            id="lastName"
            onChange={this.handleChange}
            type="text"
            placeholder="Last Name"
            aria-label="Last Name"
          />
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
            aria-label="Sign Up Button"
            className="search-button"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
