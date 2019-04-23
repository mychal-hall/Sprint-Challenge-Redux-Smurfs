import * as actionTypes from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_SMURFS:
      return {
        ...state,
        error: null,
        fetchingSmurfs: true
      };
    case actionTypes.GET_SMURFS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case actionTypes.ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default smurfReducer;
/*
   You'll only need one smurf reducer for this project.
   Feel free to export it as a default and import as rootReducer. 
   This will guard your namespacing issues.
   There is no need for 'combineReducers' in this project.
   Components can then read your store as, `state` and not `state.fooReducer`.
 */
