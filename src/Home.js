import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestHelloWorld } from "./actions";
import config from "./config";

class Home extends Component {
  componentDidMount() {
    this.props.requestHelloWorld();
  }

  render() {
    return (
      <h1>
        {this.props.helloWorld} and {config.KEYS.KEY_ONE}
      </h1>
    );
  }
}

const mapStateToProps = state => ({ helloWorld: state.helloWorld });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestHelloWorld }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
