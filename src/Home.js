import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "./actions";
import config from "./config";

class Home extends Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  person = personData => (
    <div key={personData.id.value}>
      <h1>
        {personData.name.first} {personData.name.last}
      </h1>
      <p>{personData.gender}</p>
      <img
        src={personData.picture.medium}
        alt={`photography of ${personData.name.first}`}
      />
      <p>{config.KEYS.KEY_ONE}</p>
    </div>
  );

  render() {
    const { results = [] } = this.props.data;
    return <h1>{results.map(this.person)}</h1>;
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
