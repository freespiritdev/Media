import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesList from './MoviesList';
import { getMovies } from './actions';

class MoviesPage extends Component {
  componentDidMount() {
    this.props.getMovies();
  }
  render() {
    return (
    <div className="container">
        <div className="text-center">
          <h1>Movies List</h1>
          <MoviesList movies={this.props.movies}/>

        </div>
     </div>
    );
  }
}

MoviesPage.propTypes = {
  movies: React.PropTypes.array.isRequired,
  getMovies: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, { getMovies })(MoviesPage);
