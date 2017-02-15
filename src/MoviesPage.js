import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesList from './MoviesList';
import { getMovies, deleteMovie } from './actions';

class MoviesPage extends Component {
  componentDidMount() {
    this.props.getMovies();
  }
  render() {
    return (
      <div className="container">
          <div>
            <h1 className="text-center">Movies</h1>
            <MoviesList movies={this.props.movies} deleteMovie={this.props.deleteMovie} />
          </div>
       </div>
    );
  }
}

MoviesPage.propTypes = {
  movies: React.PropTypes.array.isRequired,
  getMovies: React.PropTypes.func.isRequired,
  deleteMovie: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, { getMovies, deleteMovie })(MoviesPage);
