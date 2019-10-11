import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchJson } from "../actions";

class Backendcall extends Component {
  componentDidMount() {
    const { team, build, framework } = this.props;
    this.props.fetchJson(team, build, framework);
  }

  render() {
    return <span />;
  }
}

const mapStateToProps = state => {
  return {
    jsonData: state.json
  };
};

export default connect(
  mapStateToProps,
  { fetchJson }
)(Backendcall);
