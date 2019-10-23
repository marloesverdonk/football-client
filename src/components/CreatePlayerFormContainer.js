import React from "react";
import { connect } from "react-redux";
import { createPlayer } from "../actions/players";
import PlayerForm from "./PlayerForm";

class CreatePlayerFormContainer extends React.Component {
  state = {
    name: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createPlayer(this.state);
    this.setState({
      name: "",
      number: ""
    });
  };

  render() {
    return (
      <PlayerForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { createPlayer }
)(CreatePlayerFormContainer);
