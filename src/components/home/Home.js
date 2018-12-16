import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "../../actions";
import SearchField from "./SearchField";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchString: "",
      searchResultList: [],
      isLoaded: "waiting",
      comics: [],
      total: 0
    };
  }

  componentDidMount() {
    this.props.requestApiData();
  }

  // Get string to search
  fromSearchField(inputSearch) {
    this.setState({ searchString: inputSearch });
  }

  // Search by pokemon name
  // async fromSearchByName() {
  //   this.setState({ isLoaded: "loading", searchResultList: [] });
  //   const pokemonData = await api.getByName(this.state.searchString);
  //   this.setState({ searchResultList: pokemonData.cards });
  //   this.setState({ isLoaded: "waiting" });
  // }

  comic = comicData => (
    <div key={comicData.id} className="comic">
      <img
        className="comic-image"
        src={`${comicData.thumbnail.path}/portrait_fantastic.${
          comicData.thumbnail.extension
        }`}
        alt={comicData.title}
      />
      <div className="comic-info">
        <p>{comicData.title}</p>
      </div>
    </div>
  );

  render() {
    const comicResults = this.props.data;
    console.log(comicResults);
    if (comicResults.length > 0) {
      return (
        <main className="main-container">
          <SearchField getInputToSearch={this.fromSearchField.bind(this)} />
          <section className="results-container">
            <h1 className="title">Los cómics más recientes</h1>
            {comicResults.map(this.comic)}
          </section>
        </main>
      );
    }
    return (
      <main className="main-container">
        <p>Cargando ...</p>
      </main>
    );
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
