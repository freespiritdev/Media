import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesList from './MoviesList';

class MoviesPage extends Component {
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
  movies: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MoviesPage);
