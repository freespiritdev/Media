import React from 'react';

export default function MovieStream({ movie }) {
	return (
		<div className="stream">
			<div>
				<h6 className="text-center">{movie.title}</h6>
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