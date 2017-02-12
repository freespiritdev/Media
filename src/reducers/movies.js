import { SET_MOVIES, ADD_MOVIE, MOVIE_FOUND, MOVIE_UPDATED} from '../actions';

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

    case MOVIE_FOUND:
    	const index = state.findIndex(item => item._id === action.movie._id);
    	if (index > -1) {
    		return state.map(item => {
    			if (item._id === action.movie._id) return action.movie;
    			return item;
    		});
    	} else {
    		return [
    			...state,
    			action.movie
    		]
    	}
    case MOVIE_UPDATED:
    	return state.map(item => {
    		if (item._id === action.movie._id) return action.movie;
    		return item;
    });
  }
}