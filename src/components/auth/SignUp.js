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
        <h1 className="container-content">Crea una cuenta</h1>
        <form className="center-form" onSubmit={this.handleSubmit}>
          <input
            name="firstName"
            className="search-bar"
            id="firstName"
            onChange={this.handleChange}
            type="text"
            placeholder="Nombre"
            aria-label="First Name"
          />
          <input
            name="lastName"
            className="search-bar"
            id="lastName"
            onChange={this.handleChange}
            type="text"
            placeholder="Apellidos"
            aria-label="Last Name"
          />
          <input
            name="email"
            className="search-bar"
            id="email"
            onChange={this.handleChange}
            type="email"
            placeholder="Correo"
            aria-label="Email"
          />
          <input
            name="password"
            className="search-bar"
            id="password"
            onChange={this.handleChange}
            type="password"
            placeholder="Contraseña"
            aria-label="Password"
          />
          <button
            id="searchbutton"
            aria-label="Sign Up Button"
            className="search-button"
            type="submit"
          >
            Registrar
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
