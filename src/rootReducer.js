import { combineReducers } from 'redux';
import movies from './reducers/movies';
import shows from './reducers/shows';

export default combineReducers({
  movies,
  shows
});