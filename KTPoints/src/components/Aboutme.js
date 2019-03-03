import React, { Component } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import axios from 'axios'


class AboutMe extends Component {
    state = {
        UserID:'mayakhanna4',
        First_Name: 'Maya',
        Last_Name: 'Khanna',
        Brotherhood_Standing: 'Active',
        Major: 'Computer Science Engineering',
        Class_Standing: 'Sophmore',
        Pledge_Class: 'Xi',
        Current_Points: '1000000',
        Meetings_Left: '18',
        Img_url:'',

    }
    componentWillMount(){
        axios.get('https://epss.ucla.edu/media/images/profile_pictures/default.jpg')
        .then(response => this.setState({Img_url: response.data}));
    }
    
    render() {
        
        return (
            <View>
                <Card>
                    <CardSection>
                    <Image
                       style={{width: 200, height: 200}}
                       source={{uri: this.state.Img_url}}
                       />
                    </CardSection>
                </Card>
                <Card>

                </Card>
            </View>
            
        );
    }

}
const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 20,
    },
    buttonText:{
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '700'
    }, 
    loginButton:{
      backgroundColor:  '#2980b6',
       color: '#fff'
    }
});

export default AboutMe;