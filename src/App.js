import React, { Component } from 'react';
import { Link, Match } from 'react-router';
import MoviesPage  from './MoviesPage';
import './App.css';

class App extends Component {
  render() {
    return (
    	<div className="nav">
    		<ul>
    			<li><Link to="/">Home</Link></li>
	       		<li><Link to="/movies">Movies</Link></li>
	       		<li><Link to="/movies/new">New Movie</Link></li>
	       		<Match pattern="/movies" component={ MoviesPage }/> 
	       	</ul>
     	</div>
    );
  }
}

export default App;
