import React, { Component } from "react";
import { connect } from "react-redux";

import CreateCollectionForm from "./CreateCollectionForm";
import { createNewCollection } from "../../store/modules/actions/collectionActions";

class CreateCollectionContainer extends Component {
  submit = values => {
    // console.log(values);
    this.props.createNewCollection(values);
  };

  render() {
    return (
      <div className="main-container center-vertically">
        <h1 className="container-content">Create a new collection</h1>
        <CreateCollectionForm onSubmit={this.submit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNewCollection: () => dispatch(createNewCollection())
});

export default connect(
  null,
  mapDispatchToProps
)(CreateCollectionContainer);
