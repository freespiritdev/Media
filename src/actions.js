export const SET_MOVIES = 'SET_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const MOVIE_FOUND = 'MOVIE_FOUND';
export const MOVIE_UPDATED = 'MOVIE_UPDATED';
export const MOVIE_DELETED = 'MOVIE_DELETED';

export const SET_SHOWS = 'SET_SHOWS';
export const ADD_SHOW = 'ADD_SHOW';
export const SHOW_FOUND = 'SHOW_FOUND';
export const SHOW_UPDATED = 'SHOW_UPDATED';
export const SHOW_DELETED = 'SHOW_DELETED';

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

export function movieFound(movie) {
	return {
		type: MOVIE_FOUND,
		movie
	}

}

export function movieUpdated(movie) {
	return {
		type: MOVIE_UPDATED,
		movie
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

export function updateMovie(data) {
	return dispatch => {
		return fetch(`/api/movies/${data._id}`, {
			method: 'put',
			body:   JSON.stringify(data), 
			headers: {
				"Content-Type": "application/json"
			}
		}).then(handleResponse)
			.then(data => dispatch(movieUpdated(data.movie)));
	}
}

export function deleteMovie(id) {
	return dispatch => {
		return fetch(`/api/movies/${id}`, {
			method: 'delete', 
			headers: {
				"Content-Type": "application/json"
			}
		}).then(handleResponse)
			.then(data => dispatch(movieDeleted(id)));
	}
}

export function movieDeleted(movieId) {
	return {
		type: MOVIE_DELETED,
		movieId
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

export function getMovie(id) {
	return dispatch => {
		fetch(`/api/movies/${id}`)
			.then(res => res.json())
			.then(data => dispatch(movieFound(data.movie)));
	}
}

// TV Shows
export function addShow(show) {
	return {
		type: ADD_SHOW,
		show
	}
}

export function setShows(shows) {
	return {
		type: SET_SHOWS,
		shows
	}
}

export function showFound(show) {
	return {
		type: SHOW_FOUND,
		show
	}

}

export function showUpdated(show) {
	return {
		type: SHOW_UPDATED,
		show
	}
}

export function saveShow(data) {
	return dispatch => {
		return fetch('/api/shows', {
			method: 'post',
			body:   JSON.stringify(data), 
			headers: {
				"Content-Type": "application/json"
			}
		}).then(handleResponse)
			.then(data => dispatch(addShow(data.show)));
	}
}

export function updateShow(data) {
	return dispatch => {
		return fetch(`/api/shows/${data._id}`, {
			method: 'put',
			body:   JSON.stringify(data), 
			headers: {
				"Content-Type": "application/json"
			}
		}).then(handleResponse)
			.then(data => dispatch(showUpdated(data.show)));
	}
}

export function deleteShow(id) {
	return dispatch => {
		return fetch(`/api/shows/${id}`, {
			method: 'delete', 
			headers: {
				"Content-Type": "application/json"
			}
		}).then(handleResponse)
			.then(data => dispatch(showDeleted(id)));
	}
}

export function showDeleted(showId) {
	return {
		type: SHOW_DELETED,
		showId
	}
}

export function getShows() {
	return dispatch => {
		fetch('/api/shows')
			.then(res => res.json())
			.then(data => dispatch(setShows(data.shows)));
	}
}

export function getShow(id) {
	return dispatch => {
		fetch(`/api/shows/${id}`)
			.then(res => res.json())
			.then(data => dispatch(showFound(data.show)));
	}
}