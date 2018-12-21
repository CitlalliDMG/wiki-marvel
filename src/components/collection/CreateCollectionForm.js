import React from "react";
import { Field, reduxForm } from "redux-form";

let CreateCollectionForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="center-form" onSubmit={handleSubmit}>
      <Field
        // value={collectionName}
        name="collectionName"
        component="input"
        className="search-bar"
        id="collectionName"
        // onChange={this.handleChange}
        type="text"
        placeholder="Collection Name"
        aria-label="collection name"
      />
      <Field
        // value={description}
        name="description"
        component="input"
        className="search-bar"
        id="description"
        // onChange={this.handleChange}
        type="text"
        placeholder="Collection description"
        aria-label="collection description"
      />
      <button
        id="createButton"
        className="search-button"
        type="submit"
        aria-label="Create Button"
      >
        Create
      </button>
    </form>
  );
};

CreateCollectionForm = reduxForm({
  form: "createCollection"
})(CreateCollectionForm);

export default CreateCollectionForm;
