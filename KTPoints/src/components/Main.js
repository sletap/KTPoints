import React from 'react'
import { View, Text } from 'react-native'
import Points from './Points'
import Header from './Header'
import Meetings from './Meetings'
import Upcoming from './Upcoming'
import AboutMe from './Aboutme'
import { createStackNavigator,createAppContainer, DrawerNavigator } from 'react-navigation';


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            major: '',
            meetingsLeft: '',
            points: '',
            standing: '',
            name: '',
            year: '',
            pc: '',
            url: '',
            tasks: []

        }
    }

    componentWillMount() {
        url = 'https://firestore.googleapis.com/v1/projects/ktpoints-68071/databases/(default)/documents/users/';
        apiCall = url.concat(this.props.navigation.state.params.uniqname);
        this.setState({url: apiCall});
        console.log(this.state.url);
        fetch(apiCall)
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
          })
          .then((data) => {
            this.setState({
                major: data['fields']['major']['stringValue'],
                meetingsLeft: data['fields']['meetings_left']['integerValue'],
                points: data['fields']['points']['integerValue'],
                standing: data['fields']['standing']['stringValue'],
                name: data['fields']['name']['stringValue'],
                year: data['fields']['year']['stringValue'],
                pc: data['fields']['pledge_class']['stringValue']

            })
            console.log(this.state)
          });

          tasksUrl = 'https://firestore.googleapis.com/v1/projects/ktpoints-68071/databases/(default)/documents/tasks/';
          fetch(tasksUrl)
          .then((response) => {
              if (!response.ok) throw Error(response.statusText);
              return response.json();
          })
          .then((data) => {
              this.setState({tasks: data['documents']})
              console.log(this.state)
          })
    }

    
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
        <View style={styles.containerStyle}>
            <Header totalState={this.state} HeaderText={this.state.name} navigation={this.props.navigation} />
            <Points Points={this.state.points} />
            <Meetings meetingsLeft={this.state.meetingsLeft} />
            <Upcoming tasks={this.state.tasks}/>
        </View>
    );
    }  
}

const styles = {
    containerStyle: {
        backgroundColor: '#2980b6',
    }
};

export default Main;

