import { combineReducers } from 'redux';
import error from 'reducers/error';
import { routerReducer } from 'react-router-redux'


const rootReducer = combineReducers({
  error,
  routing: routerReducer
});

export default rootReducer;
