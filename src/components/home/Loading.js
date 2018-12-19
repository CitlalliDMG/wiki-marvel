import React from "react";
import { connect } from "react-redux";

const Loading = ({ loading }) => {
  return loading ? (
    <section className="results-container">
      <div className="lds-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </section>
  ) : null;
};

const mapStateToProps = appState => {
  return {
    ui: appState.ui,
    comicsData: appState.ui.comicsData,
    loading: appState.ui.loading
  };
};

export default connect(
  mapStateToProps,
  null
)(Loading);
