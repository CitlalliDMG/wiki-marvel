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
      <main className="main-container center-vertically margin-one">
        <h1 className="center-label">My collections:</h1>
        <CollectionList collections={collections} />
      </main>
    );
  }
}

const mapStateToProps = appState => ({
  collections: appState.collectionReducer.collections
});

export default connect(mapStateToProps)(CollectionsDashboard);
