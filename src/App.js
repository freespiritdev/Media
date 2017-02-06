import React, { Component } from 'react';
import { Link, Match } from 'react-router';
import MoviesPage  from './MoviesPage';
import './App.css';

class App extends Component {
  render() {
    return (
    	<nav className="navbar navbar-default navbar-static-top">
    		<div className="container-fluid">
          		<div className="navbar-header">
            		<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	              		<span className="sr-only">Toggle navigation</span>
	              		<span className="icon-bar"></span>
	              		<span className="icon-bar"></span>
	              		<span className="icon-bar"></span>
	            	</button>
	            	<Link className="navbar-brand" to='/'>Media</Link>
          		</div>

          		<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            		<ul className="nav navbar-nav navbar-right">
              			<li><Link to="/">Home</Link></li>
	       				<li><Link to="/movies">Movies</Link></li>
	       				<li><Link to="/movies/new">New Movie</Link></li>
	       				<Match pattern="/movies" component={ MoviesPage }/> 
            		</ul>
          		</div>
        	</div>
      	</nav>
    	
    
    );
  }
}

export default App;
