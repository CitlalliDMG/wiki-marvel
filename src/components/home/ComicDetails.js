import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import * as routes from "../../constants/routes";

class ComicsDetails extends Component {
  state = {};
  render() {
    const { collections } = this.props;
    const id = parseInt(this.props.match.params.id.slice(3));

    const comicsData = collections.comicsData;
    if (comicsData !== undefined) {
      const thisComicData = comicsData.results.filter(obj => {
        return obj.id === id;
      });
      console.log(thisComicData);
      return (
        <main className="main-container comic-details">
          <div className="comic-details-section">
            <img
              src={`${thisComicData[0].thumbnail.path}/portrait_uncanny.${
                thisComicData[0].thumbnail.extension
              }`}
              alt={thisComicData[0].title}
            />
          </div>
          <div className="comic-details-section">
            <h1>{thisComicData[0].title}</h1>
            <br />
            <p>{thisComicData[0].description}</p>
            <br />
            <p>
              <span className="bold-text">Print Price:</span> $
              {thisComicData[0].prices[0].price} USD
            </p>
            <br />
            <p>
              <span className="bold-text">Pages: </span>
              {thisComicData[0].pageCount}
            </p>
            <br />
            {thisComicData[0].creators.items.map((item, index) => (
              <p key={index}>
                <span className="bold-text uppercase">{item.role}: </span>
                {item.name}
              </p>
            ))}
          </div>
        </main>
      );
    }

    return (
      <main className="main-container center-vertically">
        <div className="container-content">
          <h1>Opps, somethig went wrong</h1>
          <p>Please, try again</p>
          <NavLink to={routes.HOME}>Take me back</NavLink>
        </div>
      </main>
    );
  }
}

const mapStateToProps = appState => ({
  collections: appState.ui
  // idSource:
});

export default connect(mapStateToProps)(ComicsDetails);
