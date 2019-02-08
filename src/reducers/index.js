import { combineReducers } from 'redux';
import recipe from './recipe';
import user from './user';

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  recipe,
  user,
});

export default rootReducer;
