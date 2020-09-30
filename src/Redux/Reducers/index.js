import {combineReducers} from 'redux';
import selecteData from './selectedData';
import techData from './techData';

const rootReducer = combineReducers({
  Tech: techData,
  Selected: selecteData,
});

export default rootReducer;
