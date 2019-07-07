import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    StyleSheet,
    Dimensions
} from 'react-native';

import { Provider } from 'react-redux';
import store from './store';

import Styles from './styles/MusicDashboardStyles';

import TrackProvider from './components/tracks/TrackProvider';
import PlayerContainer from './components/player/PlayerContainer';

import CardView from 'react-native-cardview';

export default class MusicDashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <StatusBar 
            backgroundColor={'transparent'}
            translucent 
            barStyle={'dark-content'} />
        <View style={Styles.container}>
          <CardView 
            style={Styles.headerContainer}
            cardElevation={5}
            cornerRadius={0}>
            <View style={Styles.appLabelView}>
              <Text style={Styles.appLabel}>
                MUSIC
              </Text>
            </View>
          </CardView>
          <TrackProvider/>
          <PlayerContainer/>
        </View>
      </Provider>
    );
  }
}