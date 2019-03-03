import { DrawerNavigator } from 'react-navigation';
import Login from './src/components/Login.js'
import Main from './src/components/Main.js'

const App = DrawerNavigator({
  Main: {
    screen: Main,
  },
  Login: {
    screen: Login,
  },
});