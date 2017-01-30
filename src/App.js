import React, { Component } from 'react';
import { Link, Match } from 'react-router';
import MoviesPage  from './MoviesPage';
import './App.css';

class App extends Component {
  render() {
    return (
    	<div className="App">
       		<Link to="movies">Movies</Link>
       		<Match pattern="/movies" component={ MoviesPage }/> 
     	</div>
    );
  }
}

export default App;
