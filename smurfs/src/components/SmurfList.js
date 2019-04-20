import React from "react";
import { connect } from "react-redux";

import Smurf from "../components/Smurf";
import SmurfForm from '../components/SmurfForm';

import { getSmurfs } from "../actions";

class SmurfList extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div>
        <header>
          <h1>Behold your Village!</h1>
        </header>
        <SmurfForm />
        <ul>
          {this.props.smurfs.map(smurf => {
            return <Smurf key={smurf.name} smurf={smurf} />;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList);
