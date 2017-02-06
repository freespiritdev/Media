export const SET_MOVIES = 'SET_MOVIES';

export function setMovies(movies) {
	return {
		type: SET_MOVIES,
		movies
	}
}

export function getMovies() {
	return dispatch => {
		fetch('/api/movies')
			.then(res => res.json())
			.then(data => dispatch(setMovies(data.movies)));
		//return a promise
	}
}