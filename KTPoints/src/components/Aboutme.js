import React, { Component } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import axios from 'axios'



class AboutMe extends Component {
    state = {data: this.props.navigation.state.params.data};

    componentWillMount(){
       console.log(this.state.data);
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