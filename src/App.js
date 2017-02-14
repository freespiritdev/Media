import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import MoviesPage  from './MoviesPage';
import ShowsPage  from './ShowsPage';
import MovieFormHome from './MovieFormHome';
import ShowFormHome from './ShowFormHome';
import './App.css';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
	<Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
		<Link className={match ? 'active link' : 'link'} to={to}>{label}</Link>
	)} />
);

class App extends Component {
  render() {
    return (
    	<div>
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
	              			<li><ActiveLink activeOnlyWhenExact to="/" label="Home"/></li>
		       				<li><ActiveLink activeOnlyWhenExact to="/movies" label="Movies"/></li>
	            			<li><ActiveLink activeOnlyWhenExact to="/movies/new" label="New Movie"/></li>
	            			<li><ActiveLink activeOnlyWhenExact to="/shows" label="Shows"/></li>
	            			<li><ActiveLink activeOnlyWhenExact to="/shows/new" label="New Show"/></li>	
	            		</ul>
	          		</div>
	        	</div>
	      	</nav>
	        <Route exact path="/movies" component={MoviesPage} />
	        <Route exact path="/shows" component={ShowsPage} />
	        <Route path="/movies/new" component={MovieFormHome} />
	        <Route path="/movies/:_id" component={MovieFormHome} />
	        <Route path="/shows/new" component={ShowFormHome} />
	        <Route path="/shows/:_id" component={ShowFormHome} />
      	</div>
    );
  }
}

export default App;