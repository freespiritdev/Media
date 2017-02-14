import { SET_SHOWS, ADD_SHOW, SHOW_FOUND, SHOW_UPDATED, SHOW_DELETED } from '../actions';

export default function shows(state = [], action = {}) {
  switch(action.type) {
  	case ADD_SHOW:
  	return [
  		...state,
  		action.show
  	];

  	case SET_SHOWS:
  		return action.shows;
    default: return state;

    case SHOW_FOUND:
    	const index = state.findIndex(item => item._id === action.show._id);
    	if (index > -1) {
    		return state.map(item => {
    			if (item._id === action.show._id) return action.show;
    			return item;
    		});
    	} else {
    		return [
    			...state,
    			action.show
    		]
    	}

    case SHOW_UPDATED:
    	return state.map(item => {
    		if (item._id === action.show._id) return action.show;
    		return item;
    	});

    case SHOW_DELETED:
    	return state.filter(item => item._id !== action.showId);
  }
}