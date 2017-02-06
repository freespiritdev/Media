import { SET_MOVIES } from '../actions';

export default function movies(state = [], action = {}) {
  switch(action.type) {
  	case SET_MOVIES:
  		return action.movies;
    default: return state;
  }
}