import React, { Component } from "react";
import { StackNavigator } from 'react-navigation';
import Login from "./src/components/Login";
export default MyNewProject = StackNavigator({
  Home: {
   screen: Login
  },
});