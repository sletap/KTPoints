import React from 'react'
import { View } from 'react-native'
import Points from './Points'
import Header from './Header'

class Main extends React.Component {
  render(){
    return (
        <View>
            <Header HeaderText='Welcome User!'/>
            <Points/>
        </View>
    );
    }  
}
const App = DrawerNavigator({
  Main: {
    screen: Main,
  },
  Login: {
    screen: Login,
  },
});

export default App;
