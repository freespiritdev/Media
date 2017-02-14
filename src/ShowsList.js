import React from 'react';
import ShowStream from './ShowStream'

export default function ShowsList({ shows, deleteShow }) {
	const emptyMsg = (
		<p>No tv shows available yet.</p>
	);

	const showsList = (
		<div>
			{ shows.map(show => <ShowStream show={show} key={show._id} deleteShow={deleteShow} />)}
		</div>
	);

	return (
		<div>
			{ shows.length === 0 ? emptyMsg : showsList } 
		</div>
	)

}

ShowsList.propTypes = {
	shows: React.PropTypes.array.isRequired,
	deleteShow: React.PropTypes.func.isRequired
}
