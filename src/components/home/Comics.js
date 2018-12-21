import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";

import * as routes from "../../constants/routes";
import { requestComicsData } from "../../store/modules/ui/actions";

const comic = comicData => (
  <div key={comicData.id} className="comic">
    <NavLink to={routes.COMIC + comicData.id}>
      <img
        className="comic-image"
        src={`${comicData.thumbnail.path}/portrait_fantastic.${
          comicData.thumbnail.extension
        }`}
        alt={comicData.title}
      />
      <div className="comic-info">
        <p>{comicData.title}</p>
        <p>Print Price: ${comicData.prices[0].price} USD</p>
      </div>
    </NavLink>
  </div>
);

const moreComics = () => {
  alert("Functionality available soon");
};

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
      {comicsData.results.length ? (
        <div className="button-container">
          <button
            className="load-more-button"
            type="button"
            onClick={moreComics}
          >
            Load more
          </button>
        </div>
      ) : null}
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
)(Comics);
