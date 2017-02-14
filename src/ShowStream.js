import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowStream({ show, deleteShow}) {
	return (
		<div className="stream">
			<div id="title">
				<h6>{show.title}</h6>
			</div>
			<div>
				<img src={show.photo} alt="Show Photo" />
			</div>
			<div>
				<Link to={`/shows/${show._id}`} className="btn btn-warning">Edit</Link>
				<div className="btn btn-danger" onClick={() => deleteShow(show._id)}>Remove</div>
			</div>
		</div>
	);
}

ShowStream.propTypes = {
	show: React.PropTypes.object.isRequired,
	deleteShow: React.PropTypes.func.isRequired
}