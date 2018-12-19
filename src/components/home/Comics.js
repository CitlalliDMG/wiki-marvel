import React from "react";
import { connect } from "react-redux";

const comic = comicData => (
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

const Comics = ({ comicsData, loading }) => {
  return loading === false && comicsData ? (
    <section className="results-container">
      <h1 className="title">Comics found:</h1>
      {comicsData.results.length ? (
        comicsData.results.map(comic)
      ) : (
        <p>
          There are no comics with that title. <br /> Please, try again.
        </p>
      )}
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
)(Comics);
