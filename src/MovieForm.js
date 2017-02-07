import React, { Component } from 'react';
import classnames from 'classnames';

class MovieForm extends Component {
	state = {
		title: '',
		photo: '',
		errors: {}
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
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h1>Add new movie</h1>
				<div className={classnames('formField', {error: !!this.state.errors.title})}>
					<label htmlFor="title">Movie Title</label>
					<input id="title" name="title" value={this.state.title} onChange={this.handleChange}/>
					<span>{this.state.errors.title}</span>
				</div>
				<div className={classnames('formField', {error: !!this.state.errors.photo})}>
					<label htmlFor="photo">Photo URL</label>
					<input id="photo" name="photo" value={this.state.photo} onChange={this.handleChange}/>
					<span>{this.state.errors.photo}</span>
				</div>
				<div className="formField">
					{this.state.photo !== '' && <img src={this.state.photo} alt="photo" />}
				</div>
				<div>
					<button className="btn btn-primary">Submit</button>
				</div>
			</form>
		);
	}
}

export default MovieForm;