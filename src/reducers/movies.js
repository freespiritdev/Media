import { SET_MOVIES, ADD_MOVIE } from '../actions';

export default function movies(state = [], action = {}) {
  switch(action.type) {
  	case ADD_MOVIE:
  	return [
  		...state,
  		action.movie
  	];
  	case SET_MOVIES:
  		return action.movies;
    default: return state;
  }
}