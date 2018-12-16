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
        <label htmlFor="comic-search">¿Qué cómic buscas?</label>
        <input
          name="comic-search"
          className="search-bar"
          id="comic-search"
          value={this.props.initialName}
          onChange={this.inputSearch.bind(this)}
          type="text"
          placeholder="Ingresa el cómic buscas"
        />
        <button id="searchbutton" className="search-button" type="submit">
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
