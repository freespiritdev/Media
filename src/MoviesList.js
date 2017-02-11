import React from 'react';
import MovieStream from './MovieStream'

export default function MoviesList({ movies }) {
	const emptyMsg = (
		<p>No movies available yet.</p>
	);

	const moviesList = (
		<div>
			{ movies.map(movie => <MovieStream movie={movie} key={movie._id} />)}
		</div>
	);

	return (
		<div>
			{ movies.length === 0 ? emptyMsg : moviesList } 
		</div>
	)

}

MoviesList.propTypes = {
	movies: React.PropTypes.array.isRequired
}
