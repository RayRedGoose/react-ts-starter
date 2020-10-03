import { combineReducers } from 'redux';
import currentUser from 'dux/currentUser';

const rootReducer = combineReducers({
  currentUser,
});

export default rootReducer;
