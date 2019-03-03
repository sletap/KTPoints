import React, { Component } from 'react';
import { View, StyleSheet,Image,Text, ScrollView,Dimensions } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Header from './Header';
import ProgressBarAnimated from 'react-native-progress-bar-animated';



class AboutMe extends Component {
    state = {data: this.props.navigation.state.params.data};

    componentWillMount(){
       console.log(this.state.data);
    }
    
    render() {
        const barWidth = Dimensions.get('screen').width - 30;
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
                            source={{uri: this.state.data.img}}
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
                    <Card>
                        <CardSection>
                            <Text style = {styles.text_style}> Points Progress: 
                            </Text>
                        </CardSection>

                        <CardSection> 
                            <ProgressBarAnimated
                            backgroundColor={'#fff'}
                            maxValue={100}
                            width={barWidth}
                            value={this.state.data.points}
                            backgroundColorOnComplete="#7CFC00"
                            />
                        </CardSection>
                    </Card>
                </View>
            </ScrollView>
        );
    }

}
const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: '#2c3e50',
        paddingVertical: 20,
    },
    buttonText:{
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '700'
    }, 
    loginButton:{
      backgroundColor:  '#2c3e50',
       color: '#fff'
    },
    text_style:{
         fontSize: 24,
         textAlign: 'center',
         color: '#fff'
      }
});

export default AboutMe;