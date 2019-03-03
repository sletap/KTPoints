import React from 'react'
import { View } from 'react-native'
import Points from './Points'
import Header from './Header'
import { createStackNavigator,createAppContainer, DrawerNavigator } from 'react-navigation';

class Main extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#2c3e50',
        },
        headerTintColor: '#fff',
        headerLeft: null
    };

  render(){
    return (
        <View>
            <Header/>
            <Points/>
        </View>
    );
    }  
}

export default Main;
