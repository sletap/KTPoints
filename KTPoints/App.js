/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './src/components/Login.js'
import HelloWorldApp from './src/components/Main.js'
import { createStackNavigator,createAppContainer } from 'react-navigation';


const Navigator = createStackNavigator({
  LoginScreen: { screen: Login },
  HelloWorldScreen: {screen: HelloWorldApp},
 },
 {
  initialRouteName: 'LoginScreen',
}
);

const AppContainer = createAppContainer(Navigator);


class App extends Component {
  render() {
    return <AppContainer />
  }
}
export default App;

