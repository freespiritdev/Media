import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux'
import { saveMovie, getMovie, updateMovie } from './actions';
import MovieForm from './MovieForm';

class MovieFormHome extends React.Component {
	state = {
		redirect: false
	}

	componentDidMount = () => {
		if (this.props.params._id) {
			this.props.getMovie(this.props.params._id);
		}
	}

	saveMovie = ({ title, photo, _id }) => {
		if (_id) {
			return this.props.updateMovie({ title, photo, _id}).then(
				() => { this.setState({ redirect: true })},
			);
		} else {	
			return this.props.saveMovie({ title, photo }).then(
				() => { this.setState({ redirect: true })},
			);
		}
	}

	render() {
		return (
			<div>
				{this.state.redirect ? <Redirect to='/movies' /> :
				<MovieForm movie={this.props.movie} saveMovie={this.saveMovie}/>}
			</div>
		)
	}
}


function mapStateToProps(state, props) {
	const { match } = props;
	
	if (props.params._id) {
		return {
			movie: state.movies.find(item => item._id === props.params._id)
		}
	}
	return { movie: null};
}

export default connect(mapStateToProps, { saveMovie, getMovie, updateMovie })(MovieFormHome);