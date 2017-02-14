import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { saveShow, getShow, updateShow } from './actions';
import ShowForm from './ShowForm';

class ShowFormHome extends React.Component {
	state = {
		redirect: false
	}

	componentDidMount = () => {
		const { match } = this.props;
		
		if (match.params._id) {
			this.props.getShow(match.params._id);
		}
	}

	saveShow = ({ title, photo, _id }) => {
		if (_id) {
			return this.props.updateShow({ title, photo, _id}).then(
				() => { this.setState({ redirect: true })},
			);
		} else {	
			return this.props.saveShow({ title, photo }).then(
				() => { this.setState({ redirect: true })},
			);
		}
	}

	render() {
		return (
			<div>
				{this.state.redirect ? <Redirect to='/shows' /> :
				<ShowForm show={this.props.show} saveShow={this.saveShow}/>}
			</div>
		)
	}
}


function mapStateToProps(state, props) {
	const { match } = props;
	
	if (match.params._id) {
		return {
			show: state.shows.find(item => item._id === match.params._id)
		}
	}
	return { show: null};
}

export default connect(mapStateToProps, { saveShow, getShow, updateShow })(ShowFormHome);