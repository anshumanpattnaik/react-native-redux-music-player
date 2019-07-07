import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import MusicDashboard from './src/MusicDashboard';

const MainNavigator = createSwitchNavigator({
  MusicDashboard: { screen: MusicDashboard},
},{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
})

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return <AppContainer/>;
  }
}