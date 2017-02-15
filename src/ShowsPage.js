import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowsList from './ShowsList';
import { getShows, deleteShow } from './actions';

class ShowsPage extends Component {
  componentDidMount() {
    this.props.getShows();
  }
  render() {
    return (
      <div className="container">
          <div>
            <h1 className="text-center">TV Shows</h1>
            <ShowsList shows={this.props.shows} deleteShow={this.props.deleteShow} />
          </div>
       </div>
    );
  }
}

ShowsPage.propTypes = {
  shows: React.PropTypes.array.isRequired,
  getShows: React.PropTypes.func.isRequired,
  deleteShow: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    shows: state.shows
  }
}

export default connect(mapStateToProps, { getShows, deleteShow })(ShowsPage);
