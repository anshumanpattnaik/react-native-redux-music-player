import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { fetchTracks } from '../../actions';

import Styles from '../../styles/TrackStyles';

import Tracks from './Tracks';

class TrackContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchTracks();
    }

    render(){
        return(
            <Tracks/>
        );
    }
}

const dispatchProps = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks()),
})

export default connect(null, dispatchProps)(TrackContainer);