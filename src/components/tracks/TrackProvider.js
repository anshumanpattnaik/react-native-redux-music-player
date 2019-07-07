import React, { Component } from 'react';

import TrackContainer from './TrackContainer';

class TrackProvider extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <TrackContainer navigation={this.props.navigation}/>
    );
  }
}

export default TrackProvider;