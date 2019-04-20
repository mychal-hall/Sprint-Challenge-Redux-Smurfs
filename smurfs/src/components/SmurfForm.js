import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
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
      <form onSubmit={this.addSmurf}>
        <input
          className="input"
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleInputChange}
        />
        <br />
        <input
          className="input"
          value={this.state.age}
          name="age"
          type="text"
          placeholder="Age"
          onChange={this.handleInputChange}
        />
        <br />
        <input
          className="input"
          value={this.state.email}
          name="height"
          type="text"
          placeholder="Height"
          onChange={this.handleInputChange}
        />
        <br />
        <button type="submit">Add Smurf</button>
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
