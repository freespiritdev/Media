import React from 'react';

export default function MovieStream({ movie }) {
	return (
		<div>
			<div>
				<h2>{movie.title}</h2>
			</div>
			<div>
				<img src={movie.photo} alt="Movie Photo" />
			</div>

		</div>

	);
}

MovieStream.propTypes = {
	movie: React.PropTypes.object.isRequired
}