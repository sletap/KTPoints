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
import Login from './src/components/Login'
import { createStackNavigator,} from 'react-navigation';


const Navigator = createStackNavigator({
  LoginScreen: { screen: Login },
});



export default class App extends Component {
  render() {
    return (
        <View>
          <Login />
        </View>
    );
  }
}



