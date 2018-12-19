import React, { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import { requestComicsData } from "../../store/modules/ui/actions";

class SearchField extends Component {
  constructor() {
    super();
    this.state = {};
  }

  inputSearch = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.requestComicsData(this.state.comicSearch);
  };

  render() {
    return (
      <div>
        <form className="center-form" onSubmit={this.onSubmit}>
          <label htmlFor="comic-search" className="center-label">
            What comic are you looking for?
          </label>
          <input
            name="comicSearch"
            className="search-bar"
            id="comicSearch"
            onChange={this.inputSearch}
            type="text"
            placeholder="Enter the title of the comic you're looking for"
          />
          <button id="searchButton" className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = appState => {
  return {
    ui: appState.ui,
    comicsData: appState.ui.comicsData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(
      {
        requestComicsData
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchField);
