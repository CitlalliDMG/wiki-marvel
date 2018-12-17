import React, { Component } from "react";
import { connect } from "react-redux";

import CollectionList from "./CollectionList";

class CollectionsDashboard extends Component {
  state = {};
  render() {
    // console.log(this.props.collections);
    const { collections } = this.props;
    console.log(collections);

    return (
      <main className="main-container center-vertically">
        <h1>Mis colecciones:</h1>
        <CollectionList collections={collections} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  collections: state.collectionReducer.collections
});

export default connect(mapStateToProps)(CollectionsDashboard);
