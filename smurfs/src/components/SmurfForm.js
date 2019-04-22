import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";
import "./App.css";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    // Setting component state to include the fields we need to update the server
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addSmurf = event => {
    event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(newSmurf);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.addSmurf} className="smurfForm">
        <input
          className="input"
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleInputChange}
        />

        <input
          className="input"
          value={this.state.age}
          name="age"
          type="text"
          placeholder="Age"
          onChange={this.handleInputChange}
        />

        <input
          className="input"
          value={this.state.height}
          name="height"
          type="text"
          placeholder="Height"
          onChange={this.handleInputChange}
        />

        <button className="butn" type="submit">Add Smurf</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    addingSmurf: state.addingSmurf
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);
