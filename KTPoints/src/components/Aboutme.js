import React, { Component } from 'react';
import { View, StyleSheet,Image,Text, ScrollView } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Header from './Header';



class AboutMe extends Component {
    state = {data: this.props.navigation.state.params.data};

    componentWillMount(){
       console.log(this.state.data);
    }
    
    render() {
        
        return (
            <ScrollView>
                <View>
                    <Header HeaderText={this.state.data.name} 
                            navigation={this.props.navigation}
                            totalState={this.props.navigation.state.params.data}/>
                    <Card>
                        <CardSection>
                            <Image 
                            style={{height: 300, flex: 1, width: null}}
                            source={{uri: 'https://scontent.fluk1-1.fna.fbcdn.net/v/t1.0-9/32453143_1208787859257914_2538505098489757696_n.jpg?_nc_cat=106&_nc_ht=scontent.fluk1-1.fna&oh=680a71abc19864319b03248f849461eb&oe=5D236440'}}
                            />
                        </CardSection>
                    </Card>
                    <Card>
                        <CardSection>
                            <Text style = {styles.text_style}>Major: {this.state.data.major} 
                            </Text>
                        </CardSection>

                        <CardSection>
                            <Text style = {styles.text_style}>Grade: {this.state.data.year} 
                            </Text>
                        </CardSection>

                        <CardSection>
                            <Text style = {styles.text_style}>Standing: {this.state.data.standing}
                            </Text>
                        </CardSection>

                        <CardSection>
                            <Text style = {styles.text_style}>Pledge Class: {this.state.data.pc}
                            </Text>
                        </CardSection>
                    </Card>
                    <Card>
                        <CardSection>
                            <Text style = {styles.text_style}>Current Points: {this.state.data.points}</Text>
                        </CardSection>
                    
                        <CardSection>
                            <Text style = {styles.text_style}>Meetings Left: {this.state.data.meetingsLeft}</Text>
                        </CardSection>
                    </Card>
                </View>
            </ScrollView>
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