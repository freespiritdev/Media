import React from 'react';


export default function MoviesList({ movies }) {
	const emptyMsg = (
		<p>No movies available yet.</p>
	);

	const moviesList = (
		<p>Blah Blah Blah</p>
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
