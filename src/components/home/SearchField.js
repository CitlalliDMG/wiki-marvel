import React, { Component } from "react";
import propTypes from "prop-types";

class SearchField extends Component {
  inputSearch(event) {
    this.props.getInputToSearch(event.target.value);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log("Funciona botón buscar");
    // this.props.doFetch();
  }

  render() {
    return (
      <form className="center-form" onSubmit={this.onSubmit.bind(this)}>
        <input
          className="search-bar"
          value={this.props.initialName}
          onChange={this.inputSearch.bind(this)}
          type="text"
          placeholder="Ingresa el comic buscas"
        />
        <button className="search" type="submit">
          Buscar
        </button>
      </form>
    );
  }
}

SearchField.propTypes = {
  inputSearch: propTypes.func
};

export default SearchField;
