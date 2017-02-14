import React, { Component } from 'react';
import classnames from 'classnames';


class ShowForm extends Component {
	state = {
		title: this.props.show ? this.props.show.title : '',
		photo: this.props.show ? this.props.show.photo : '',
		_id: this.props.show ? this.props.show._id : null,
		errors: {},
		loading: false
	}

	componentWillReceiveProps = (nextProps) => {
		this.setState({
			title: nextProps.show.title,
			photo: nextProps.show.photo,
			_id: nextProps.show._id
		})
	}

	handleChange = (event) => {
		if(!!this.state.errors[event.target.name]){
			let errors = Object.assign({}, this.state.errors);
			delete errors[event.target.name];
			this.setState({ [event.target.name]: event.targe.value, errors });
		} else {
			this.setState({ [event.target.name]: event.target.value })
		}	
	}

	handleSubmit = (event) => {
		event.preventDefault();

		let errors = {};
		if (this.state.title === '') errors.title = "You cannot have an empty title";
		if (this.state.photo === '') errors.photo = "You cannot have an empty Photo URL";
		this.setState({ errors });
		const isVal = Object.keys(errors).length === 0

		if (isVal) {
			const { title, photo, _id} = this.state;
			this.setState({ loading: true });
			this.props.saveShow({ title, photo, _id })
				.catch((error) => error.response.json().then(({errors}) => this.setState({ errors, loading: false })));
		}
	}

	render() {
		const form = (
			<form onSubmit={this.handleSubmit} className={classnames('form', { loading: this.state.loading })}>
				<h1 className="text-center">Add new tv show</h1>

				{!!this.state.errors.global && <div className="not loading"><p>{this.state.errors.global}</p></div>}
				
				<div className={classnames('formField text-center', {error: !!this.state.errors.title})}>
					<label htmlFor="title">Show Title</label>
					<input id="title" name="title" value={this.state.title} onChange={this.handleChange}/>
					<span>{this.state.errors.title}</span>
				</div>
				<div className={classnames('formField text-center', {error: !!this.state.errors.photo})}>
					<label htmlFor="photo">Photo URL</label>
					<input id="photo" name="photo" value={this.state.photo} onChange={this.handleChange}/>
					<span>{this.state.errors.photo}</span>
				</div>
				<div className="formField text-center">
					{this.state.photo !== '' && <img src={this.state.photo} alt="photo" />}
				</div>
				<div className="text-center">
					<button className="btn btn-primary">Submit</button>
				</div>
			</form>
		);
		return (
			<div>
				{ form }
			</div>
		);
	}
}

export default ShowForm;