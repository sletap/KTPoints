import React from 'react'
import { View, Text } from 'react-native'
import Points from './Points'
import Header from './Header'
import { createStackNavigator,createAppContainer, DrawerNavigator } from 'react-navigation';
import * as firebase from 'firebase';

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
            img: ''
        }
    }

    componentWillMount() {
        url = 'https://firestore.googleapis.com/v1/projects/ktpoints-68071/databases/(default)/documents/users/';

        // var imagesRef = storageRef.child('profile_pictures');

        // var pathReference = storage.ref('images/stars.jpg');
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
                meetingsLeft: data['fields']['meetings_left']['stringValue'],
                points: data['fields']['points']['integerValue'],
                standing: data['fields']['standing']['stringValue'],
                name: data['fields']['name']['stringValue'],
                year: data['fields']['year']['stringValue'],
                pc: data['fields']['pledge_class']['stringValue']

            })
          });

        var storage = firebase.storage();
        console.log(storage)
        
        var storageRef = storage.ref('profile_pictures/edknight.jpg');
        var gsUrl = 'gs://ktpoints-68071.appspot.com/profile_pictures/'
        gsUrl = gsUrl.concat(this.props.navigation.state.params.uniqname)
        gsUrl = gsUrl.concat('.jpg')
        console.log(gsUrl)
        var gsReference = storage.refFromURL(gsUrl)
        gsReference.getDownloadURL().then((data) => {
            this.setState({img: data})
        })

        
       



        
        // storageRef.getDownloadURL()
        // .then(function(url) {
        // // `url` is the download URL for 'images/stars.jpg'
        // // var img = document.getElementById('myimg');
        // // img.src = url;
        // this.setState({
        //     img: url
        // })
        // console.log("Correctly handling downloadUrl")
        // }).catch(function(error) {
        //     console.log(error.statusText);
        //     // this.setState({
        //     //     img: 'space.jpg'
        //     // })
        //     // Handle any errors
        // });
          
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
        <View>
            <Header imgUrl={this.state.img} HeaderText={this.state.name} navigation={this.props.navigation}/>
            <Points/>
        </View>
    );
    }  
}

export default Main;

