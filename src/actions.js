export const SET_MOVIES = 'SET_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';

function handleResponse(response){
	if (response.ok) {
		return response.json();
	} else {
		let error = new Error(response.statusMsg);
		error.response = response;
		throw error;
	}

}

export function addMovie(movie) {
	return {
		type: ADD_MOVIE,
		movie
	}
}

export function setMovies(movies) {
	return {
		type: SET_MOVIES,
		movies
	}
}

export function saveMovie(data) {
	return dispatch => {
		return fetch('/api/movies', {
			method: 'post',
			body:   JSON.stringify(data), 
			headers: {
				"Content-Type": "application/json"
			}
		}).then(handleResponse)
			.then(data => dispatch(addMovie(data.movie)));
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