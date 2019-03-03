import React, { Component } from 'react';
import { View, StyleSheet,Image,Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import axios from 'axios'
import Header from './Header';



class AboutMe extends Component {
    state = {data: this.props.navigation.state.params.data};

    componentWillMount(){
       console.log(this.state.data);
    }
    
    render() {
        
        return (
            <View>
                <Header HeaderText={this.state.name} />
                <Card>
                    <CardSection>
                    <Image
                       style={{width: 100, height: 200}}
                       source={{uri: 'https://scontent.fluk1-1.fna.fbcdn.net/v/t1.0-9/32453143_1208787859257914_2538505098489757696_n.jpg?_nc_cat=106&_nc_ht=scontent.fluk1-1.fna&oh=680a71abc19864319b03248f849461eb&oe=5D236440'}}
                       />
                       <Text>
                        <Text style = {styles.text_style}>Major: {this.state.data.major} 
                        </Text>
                        {'\n'}
                        <Text style = {styles.text_style}>Grade: {this.state.data.year} 
                        </Text>
                        {'\n'}
                        <Text style = {styles.text_style}>Standing: {this.state.data.standing}
                        </Text>
                        {'\n'}
                        <Text style = {styles.text_style}> Pledge Class: {this.state.data.pc}
                        </Text>
                        {'\n'}
                       </Text>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Text>
                        <Text style = {styles.text_style}>Current Points: {this.state.data.points}</Text>
                        {'\n'}
                        <Text style = {styles.text_style}>Meetings Left: {this.state.data.meetingsLeft}</Text>
                        {'\n'}
                       </Text>
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
    },
    text_style:{
         fontSize: 24,
         textAlign: 'center',
         color: '#000'
      }
});

export default AboutMe;